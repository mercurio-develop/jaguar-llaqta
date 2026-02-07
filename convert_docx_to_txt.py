#!/usr/bin/env python3
"""Convert all .docx files in the current directory to .txt files."""

import glob
import sys

try:
    from docx import Document
except ImportError:
    print("Missing dependency. Install it with: pip install python-docx")
    sys.exit(1)


def convert(docx_path):
    doc = Document(docx_path)
    txt_path = docx_path.rsplit(".", 1)[0] + ".txt"
    with open(txt_path, "w", encoding="utf-8") as f:
        for para in doc.paragraphs:
            f.write(para.text + "\n")
    print(f"  {docx_path} -> {txt_path}")


if __name__ == "__main__":
    files = glob.glob("*.docx")
    if not files:
        print("No .docx files found in the current directory.")
        sys.exit(0)

    print(f"Converting {len(files)} file(s)...")
    for path in sorted(files):
        convert(path)
    print("Done.")
