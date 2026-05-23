import os
import glob
import re
import json
import argparse
from typing import List, Optional
from docx import Document
from google import genai
from pydantic import BaseModel, Field
from dotenv import load_dotenv

# Load environment variables (e.g. GEMINI_API_KEY)
load_dotenv()

# Initialize Gemini Client
# Assumes GEMINI_API_KEY is in the environment
client = genai.Client()

# Define Pydantic models for Structured Output
class DayItinerary(BaseModel):
    day: int = Field(description="The day number in the itinerary")
    title: str = Field(description="Title of the day in Spanish")
    titleEn: str = Field(description="Title of the day translated to English")
    description: str = Field(description="Detailed description of the day in Spanish")
    descriptionEn: str = Field(description="Detailed description of the day translated to English")
    highlights: Optional[List[str]] = Field(description="List of highlights for the day in Spanish", default=None)
    highlightsEn: Optional[List[str]] = Field(description="List of highlights for the day translated to English", default=None)
    meals: Optional[str] = Field(description="Included meals (e.g., 'Almuerzo') in Spanish", default=None)
    mealsEn: Optional[str] = Field(description="Included meals translated to English", default=None)
    accommodation: Optional[str] = Field(description="Accommodation info in Spanish", default=None)
    accommodationEn: Optional[str] = Field(description="Accommodation info translated to English", default=None)

class UpdatedPackageData(BaseModel):
    tagline: Optional[str] = None
    taglineEn: Optional[str] = None
    duration: Optional[str] = None
    durationEn: Optional[str] = None
    difficulty: Optional[str] = None
    difficultyEn: Optional[str] = None
    elevation: Optional[str] = None
    elevationEn: Optional[str] = None
    price: Optional[int] = None
    description: Optional[str] = None
    descriptionEn: Optional[str] = None
    highlights: Optional[List[str]] = None
    highlightsEn: Optional[List[str]] = None
    includes: Optional[List[str]] = None
    includesEn: Optional[List[str]] = None
    notIncludes: Optional[List[str]] = None
    notIncludesEn: Optional[List[str]] = None
    requirements: Optional[List[str]] = None
    requirementsEn: Optional[List[str]] = None
    itinerary: Optional[List[DayItinerary]] = None


KNOWN_HEADERS = ["descripcion", "descripción", "puntos destacados", "incluye", "no incluye", "requerimientos", "itinerario"]

def parse_docx(filepath):
    doc = Document(filepath)
    raw_updates = {}
    current_section = None
    
    for para in doc.paragraphs:
        text = para.text.strip()
        if not text:
            continue
            
        lower_text = text.lower()
        
        if "- updated" in lower_text:
            clean_text = re.sub(r'(?i)\s*-\s*updated$', '', text).strip()
            
            # Inline fields
            if lower_text.startswith("tagline:"):
                raw_updates['tagline'] = clean_text.split(":", 1)[1].strip() if ":" in clean_text else clean_text
                current_section = None
                continue
            elif lower_text.startswith("duración:") or lower_text.startswith("duracion:"):
                raw_updates['duration'] = clean_text.split(":", 1)[1].strip() if ":" in clean_text else clean_text
                current_section = None
                continue
            elif lower_text.startswith("dificultad:"):
                raw_updates['difficulty'] = clean_text.split(":", 1)[1].strip() if ":" in clean_text else clean_text
                current_section = None
                continue
            elif lower_text.startswith("elevación:") or lower_text.startswith("elevacion:"):
                raw_updates['elevation'] = clean_text.split(":", 1)[1].strip() if ":" in clean_text else clean_text
                current_section = None
                continue
            elif lower_text.startswith("precio:"):
                val = clean_text.split(":", 1)[1].strip() if ":" in clean_text else clean_text
                try:
                    # try to keep only numbers
                    val = int(re.sub(r'[^\d]', '', val))
                except ValueError:
                    pass
                raw_updates['price'] = val
                current_section = None
                continue
                
            # Section headers
            is_header = False
            for header in KNOWN_HEADERS:
                if lower_text.startswith(header):
                    current_section = header
                    if header == "descripción": current_section = "descripcion"
                    raw_updates[current_section] = []
                    is_header = True
                    break
            if is_header:
                continue
                
        # If we are inside a section, accumulate text
        if current_section:
            raw_updates[current_section].append(text)

    # Clean up formatting before sending to Gemini
    formatted_raw = {}
    for k, v in raw_updates.items():
        if isinstance(v, list):
            formatted_raw[k] = "\n".join(v)
        else:
            formatted_raw[k] = v
            
    return formatted_raw

def process_with_gemini(raw_data: dict, package_id: str) -> UpdatedPackageData:
    print(f"  [AI] Sending {len(raw_data)} updated fields for package '{package_id}' to Gemini for parsing and English translation...")
    
    prompt = f"""
You are an expert content manager for a tour agency in Peru.
The following is raw text extracted from a Word document representing updates for a tour package.
Your task is to parse this raw Spanish text into a structured format, and automatically generate high-quality English translations for all the text fields to populate the *En fields (e.g., taglineEn, descriptionEn, etc.).

When parsing arrays like highlights, includes, notIncludes, requirements, ensure they are clean lists of strings without bullet points (- or •).
For the 'itinerary', carefully parse the day-by-day breakdown into the DayItinerary structure. Also translate all fields to English.

Here are the raw extracted updates:
{json.dumps(raw_data, indent=2, ensure_ascii=False)}
"""

    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=prompt,
        config={
            'response_mime_type': 'application/json',
            'response_schema': UpdatedPackageData,
            'temperature': 0.1,
        },
    )
    
    # Parse the response back into our model
    return UpdatedPackageData.model_validate_json(response.text)

def apply_to_typescript(package_id: str, updated_data: UpdatedPackageData, ts_file_path: str):
    print(f"  [TS] Modifying {ts_file_path} for package '{package_id}'...")
    with open(ts_file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Locate the start index of the package
    search_str = f'id: "{package_id}"'
    start_idx = content.find(search_str)
    if start_idx == -1:
        print(f"  [ERROR] Package ID '{package_id}' not found in {ts_file_path}.")
        return content

    next_id_idx = content.find('id: "', start_idx + len(search_str))
    end_idx = next_id_idx if next_id_idx != -1 else len(content)
    
    package_block = content[start_idx:end_idx]
    original_block = package_block
    
    # Helper to replace string fields
    def replace_string_field(field_name, new_val):
        nonlocal package_block
        if new_val is None: return
        pattern = re.compile(rf'({field_name}\s*:\s*)(["`\'])(.*?)\2', re.DOTALL)
        if pattern.search(package_block):
            safe_val = new_val.replace('"', '\\"').replace('\n', '\\n')
            package_block = pattern.sub(rf'\g<1>"{safe_val}"', package_block)

    # Helper to replace numeric fields
    def replace_number_field(field_name, new_val):
        nonlocal package_block
        if new_val is None: return
        pattern = re.compile(rf'({field_name}\s*:\s*)(\d+)')
        if pattern.search(package_block):
            package_block = pattern.sub(rf'\g<1>{new_val}', package_block)

    # Helper to replace array fields
    def replace_array_field(field_name, new_val_list):
        nonlocal package_block
        if new_val_list is None: return
        pattern = re.compile(rf'({field_name}\s*:\s*\[).*?(\],?)', re.DOTALL)
        if pattern.search(package_block):
            def escape_str(s):
                return s.replace('"', '\\"')
            items = [f'\n      "{escape_str(item)}"' for item in new_val_list]
            new_arr = ",".join(items) + "\n    "
            package_block = pattern.sub(rf'\g<1>{new_arr}\g<2>', package_block)

    # Replace primitive fields
    replace_string_field("tagline", updated_data.tagline)
    replace_string_field("taglineEn", updated_data.taglineEn)
    replace_string_field("duration", updated_data.duration)
    replace_string_field("durationEn", updated_data.durationEn)
    replace_string_field("difficulty", updated_data.difficulty)
    replace_string_field("difficultyEn", updated_data.difficultyEn)
    replace_string_field("elevation", updated_data.elevation)
    replace_string_field("elevationEn", updated_data.elevationEn)
    replace_number_field("price", updated_data.price)
    replace_string_field("description", updated_data.description)
    replace_string_field("descriptionEn", updated_data.descriptionEn)
    
    # Replace arrays
    replace_array_field("highlights", updated_data.highlights)
    replace_array_field("highlightsEn", updated_data.highlightsEn)
    replace_array_field("includes", updated_data.includes)
    replace_array_field("includesEn", updated_data.includesEn)
    replace_array_field("notIncludes", updated_data.notIncludes)
    replace_array_field("notIncludesEn", updated_data.notIncludesEn)
    replace_array_field("requirements", updated_data.requirements)
    replace_array_field("requirementsEn", updated_data.requirementsEn)

    # Replace itinerary (complex object array)
    if updated_data.itinerary is not None:
        pattern = re.compile(r'(itinerary\s*:\s*\[).*?(\n    \],\s*\n\s*gallery\s*:)', re.DOTALL)
        if pattern.search(package_block):
            def escape_field(s):
                if not s: return ""
                return s.replace('"', '\\"').replace('\n', ' ')

            days_strs = []
            for day in updated_data.itinerary:
                day_str = f"""
      {{
        day: {day.day},
        title: "{escape_field(day.title)}",
        titleEn: "{escape_field(day.titleEn)}",
        description: "{escape_field(day.description)}",
        descriptionEn: "{escape_field(day.descriptionEn)}",
        highlights: {json.dumps(day.highlights, ensure_ascii=False) if day.highlights else '[]'},
        highlightsEn: {json.dumps(day.highlightsEn, ensure_ascii=False) if day.highlightsEn else '[]'},
        meals: "{escape_field(day.meals)}",
        mealsEn: "{escape_field(day.mealsEn)}",
        accommodation: "{escape_field(day.accommodation)}",
        accommodationEn: "{escape_field(day.accommodationEn)}",
      }}"""
                days_strs.append(day_str)
            
            new_itinerary = ",".join(days_strs) + "\n    "
            package_block = pattern.sub(rf'\g<1>{new_itinerary}\g<2>', package_block)
            
    new_content = content.replace(original_block, package_block)
    
    with open(ts_file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
        
    return new_content

def main():
    parser = argparse.ArgumentParser(description="Extract package updates from DOCX and apply via Gemini API.")
    parser.add_argument("--apply", action="store_true", help="Apply changes directly to config/packages.ts")
    args = parser.parse_args()

    target_file = "config/packages.ts"
    search_pattern = "JAGUAR LLAQTA/Jaguar Llaqta - WEB - UPDATED/packages/*/*.docx"
    
    docx_files = glob.glob(search_pattern)
    if not docx_files:
        print(f"No .docx files found matching {search_pattern}")
        return

    print(f"Found {len(docx_files)} DOCX files. Processing...")
    
    for docx_path in docx_files:
        folder_name = os.path.basename(os.path.dirname(docx_path))
        print(f"\n=========================================")
        print(f"Processing Package: {folder_name}")
        print(f"File: {docx_path}")
        
        raw_data = parse_docx(docx_path)
        if not raw_data:
            print("  [INFO] No fields marked with '- UPDATED' found. Skipping.")
            continue
            
        print("  [EXTRACTED RAW DATA]")
        for k, v in raw_data.items():
            preview = str(v)[:100] + "..." if len(str(v)) > 100 else str(v)
            print(f"    - {k}: {preview}")
            
        try:
            updated_data = process_with_gemini(raw_data, folder_name)
        except Exception as e:
            print(f"  [ERROR] Gemini API call failed: {e}")
            continue
            
        print("  [GEMINI PROCESSED DATA SUMMARY]")
        data_dict = updated_data.model_dump(exclude_none=True)
        for k, v in data_dict.items():
            if k == "itinerary":
                print(f"    - itinerary: {len(v)} days updated.")
            elif isinstance(v, list):
                print(f"    - {k}: {len(v)} items updated.")
            else:
                preview = str(v)[:100] + "..." if len(str(v)) > 100 else str(v)
                print(f"    - {k}: {preview}")
                
        if args.apply:
            apply_to_typescript(folder_name, updated_data, target_file)
        else:
            print(f"\n  [INFO] Dry run complete for '{folder_name}'. Run with --apply to save changes to {target_file}")

if __name__ == "__main__":
    main()
