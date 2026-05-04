import os
import glob
from PIL import Image

def apply_watermark(image_path, watermark_path, output_path=None, position='bottom-right', scale=0.15, padding=20, opacity=0.85):
    try:
        # Open the main image
        base_image = Image.open(image_path).convert("RGBA")
        
        # Open the watermark
        watermark = Image.open(watermark_path).convert("RGBA")
        
        # Adjust watermark opacity
        alpha = watermark.split()[3]
        alpha = alpha.point(lambda p: p * opacity)
        watermark.putalpha(alpha)
        
        # Calculate new watermark size based on base image width
        w_width, w_height = watermark.size
        # Make the watermark 'scale' (e.g., 15%) of the base image's width
        new_w_width = int(base_image.width * scale)
        # Maintain aspect ratio
        new_w_height = int(w_height * (new_w_width / w_width))
        
        # Resize watermark using LANCZOS for high quality
        watermark = watermark.resize((new_w_width, new_w_height), Image.Resampling.LANCZOS)
        
        # Calculate positioning
        if position == 'bottom-right':
            x = base_image.width - new_w_width - padding
            y = base_image.height - new_w_height - padding
        elif position == 'center':
            x = (base_image.width - new_w_width) // 2
            y = (base_image.height - new_w_height) // 2
        elif position == 'bottom-left':
            x = padding
            y = base_image.height - new_w_height - padding
        else:
            x, y = padding, padding
            
        # Create a transparent layer the size of the base image
        transparent = Image.new('RGBA', base_image.size, (0,0,0,0))
        transparent.paste(base_image, (0,0))
        # Paste the watermark using its own alpha channel as the mask
        transparent.paste(watermark, (x, y), mask=watermark)
        
        # Convert back to RGB to save as JPG if necessary
        if image_path.lower().endswith(('.jpg', '.jpeg')):
            final_image = transparent.convert("RGB")
        else:
            final_image = transparent
            
        if not output_path:
            output_path = image_path # Overwrite original
            
        # Save the result
        final_image.save(output_path, quality=90)
        print(f"Watermarked: {image_path}")
        
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

def main():
    public_images_dir = 'public/images'
    watermark_path = 'public/logo/logo-2.png'
    
    if not os.path.exists(watermark_path):
        print(f"Error: Watermark not found at {watermark_path}")
        return

    # Find all images in public/images
    extensions = ['*.jpg', '*.jpeg', '*.png']
    image_files = []
    for ext in extensions:
        image_files.extend(glob.glob(f"{public_images_dir}/**/{ext}", recursive=True))
        image_files.extend(glob.glob(f"{public_images_dir}/**/{ext.upper()}", recursive=True))
        
    print(f"Found {len(image_files)} images to watermark.")
    print(f"Using logo: {watermark_path}")
    print("Starting watermark process. This may take a few minutes...")
    
    # Process each image
    for img_path in image_files:
        apply_watermark(img_path, watermark_path, position='bottom-right')
        
    print("\nFinished applying watermarks!")

if __name__ == '__main__':
    main()