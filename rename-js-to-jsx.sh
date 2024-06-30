#!/bin/bash

# Function to check if a file contains JSX syntax
contains_jsx() {
  grep -qE '<[^>]+>' "$1"
}

# Find all .js files in the src directory and its subdirectories
find src -name '*.js' | while read -r file; do
  # Check if the file contains JSX syntax
  if contains_jsx "$file"; then
    # Rename the file to .jsx
    mv "$file" "${file%.js}.jsx"
    echo "Renamed $file to ${file%.js}.jsx"
  fi
done

echo "All applicable .js files have been renamed to .jsx."
