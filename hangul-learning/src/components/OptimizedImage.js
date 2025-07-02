import React from 'react';

const OptimizedImage = ({
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
  // Generate WebP version path (assuming we have WebP versions)
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  
  return (
    <picture>
      {/* WebP version for modern browsers */}
      <source srcSet={webpSrc} type="image/webp" />
      {/* Fallback for older browsers */}
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