import React from 'react';

// Component OptimizedImage: tối ưu hiển thị ảnh với WebP và fallback sang PNG/JPG, hỗ trợ lazy load và eager load khi cần thiết
const OptimizedImage = ({
  // src: đường dẫn file ảnh gốc (PNG/JPG)
  // alt: thuộc tính thay thế cho ảnh
  // width, height: kích thước hiển thị ảnh
  // className, style: tuỳ chỉnh lớp CSS và style inline
  // loading: ['lazy'|'eager'] điều khiển lazy load ảnh
  // priority: nếu true sẽ dùng eager load và decoding sync để ưu tiên hiển thị
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  loading = 'lazy',
  priority = false,
  ...props
}) => {
  // Tạo đường dẫn WebP tương ứng từ src gốc để cung cấp định dạng hiện đại
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  
  return (
    <picture>
      {/* Nguồn WebP cho trình duyệt hỗ trợ WebP */}
      <source srcSet={webpSrc} type="image/webp" />
      {/* Thẻ img fallback cho trình duyệt không hỗ trợ WebP */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
        loading={priority ? 'eager' : loading}
        decoding={priority ? 'sync' : 'async'}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage; 