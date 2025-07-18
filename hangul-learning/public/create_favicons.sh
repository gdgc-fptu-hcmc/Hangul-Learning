#!/bin/bash
# Tạo các phiên bản favicon từ web-logo.svg

# Kiểm tra nếu ImageMagick đã được cài đặt
if ! command -v convert &> /dev/null
then
    echo "ImageMagick không được cài đặt. Vui lòng cài đặt với lệnh: brew install imagemagick"
    exit 1
fi

# Tạo favicon.ico với các kích thước khác nhau từ SVG
convert -background transparent -density 384 web-logo.svg -define icon:auto-resize=64,48,32,16 favicon.ico

# Tạo PNG với kích thước cụ thể
convert -background transparent -density 384 web-logo.svg -resize 192x192 favicon-192x192.png
convert -background transparent -density 384 web-logo.svg -resize 512x512 favicon-512x512.png
convert -background transparent -density 384 web-logo.svg -resize 32x32 favicon-32x32.png
convert -background transparent -density 384 web-logo.svg -resize 16x16 favicon-16x16.png

echo "Đã tạo xong các phiên bản favicon!"
