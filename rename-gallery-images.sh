#!/bin/bash

# Script to rename gallery images with consistent naming
# Usage: ./rename-gallery-images.sh

GALLERY_DIR="public/images/gallery"

# Check if gallery directory exists
if [ ! -d "$GALLERY_DIR" ]; then
    echo "Creating gallery directory..."
    mkdir -p "$GALLERY_DIR"
fi

# Counter for numbering
counter=1

# Rename all image files in gallery directory
find "$GALLERY_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | sort | while read file; do
    # Get file extension (lowercase)
    ext="${file##*.}"
    ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
    
    # Generate new filename
    new_name="${GALLERY_DIR}/gallery-${counter}.${ext}"
    
    # Rename the file
    if [ "$file" != "$new_name" ]; then
        mv "$file" "$new_name"
        echo "Renamed: $(basename "$file") -> $(basename "$new_name")"
    fi
    
    counter=$((counter + 1))
done

if [ $counter -eq 1 ]; then
    echo "No images found in gallery directory."
    echo "Please add your images to: $GALLERY_DIR"
    echo "Then run this script again to rename them."
else
    echo "Gallery images renamed successfully!"
fi
