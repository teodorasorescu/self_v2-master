# #!/bin/bash

# # Check if the correct number of arguments is provided
# if [ "$#" -ne 2 ]; then
#     echo "Usage: $0 <directory> <quality>"
#     echo "Example: $0 ./images 80"
#     exit 1
# fi

# # Directory containing the WebP images
# DIRECTORY=$1
# # Desired quality level (0-100)
# QUALITY=$2

# # Verify the directory exists
# if [ ! -d "$DIRECTORY" ]; then
#     echo "Error: Directory $DIRECTORY does not exist."
#     exit 1
# fi

# # Verify the quality is a number between 0 and 100
# if ! [[ "$QUALITY" =~ ^[0-9]+$ ]] || [ "$QUALITY" -lt 0 ] || [ "$QUALITY" -gt 100 ]; then
#     echo "Error: Quality must be a number between 0 and 100."
#     exit 1
# fi

# # Find all WebP files in the directory and subdirectories
# find "$DIRECTORY" -type f -name "*.webp" | while read -r FILE; do
#     echo "Compressing $FILE with quality $QUALITY..."
#     OUTPUT_FILE="${FILE%.webp}_compressed.webp"
#     cwebp -q "$QUALITY" "$FILE" -o "$OUTPUT_FILE"

#     # Check if the output file was created successfully
#     if [ -f "$OUTPUT_FILE" ]; then
#         echo "Successfully compressed $FILE to $OUTPUT_FILE"
#     else
#         echo "Failed to compress $FILE"
#     fi
# done

# echo "Compression process completed."

#DELETE IMGS WITHOUT COMPRESSED
# #!/bin/bash

# # Check if the correct number of arguments is provided
# if [ "$#" -ne 1 ]; then
#     echo "Usage: $0 <directory>"
#     echo "Example: $0 ./images"
#     exit 1
# fi

# # Directory containing the WebP images
# DIRECTORY=$1

# # Verify the directory exists
# if [ ! -d "$DIRECTORY" ]; then
#     echo "Error: Directory $DIRECTORY does not exist."
#     exit 1
# fi

# # Find and delete all WebP files that do not contain '_compressed' in their filename
# find "$DIRECTORY" -type f -name "*.webp" ! -name "*_compressed.webp" -exec rm -v {} +

# echo "Deletion process completed."

#RENAME IMGS WITH COMPRESSED
#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <directory>"
    echo "Example: $0 ./images"
    exit 1
fi

# Directory containing the WebP images
DIRECTORY=$1

# Verify the directory exists
if [ ! -d "$DIRECTORY" ]; then
    echo "Error: Directory $DIRECTORY does not exist."
    exit 1
fi

# Find and rename all WebP files that contain '_compressed' in their filename
find "$DIRECTORY" -type f -name "*_compressed.webp" | while read -r FILE; do
    NEW_FILE="${FILE/_compressed/}"
    mv -v "$FILE" "$NEW_FILE"
done

echo "Renaming process completed."
