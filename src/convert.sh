#!/bin/sh

for file in images/*; do cwebp -q 100 "$file" -o "${file%.*}.webp"; done