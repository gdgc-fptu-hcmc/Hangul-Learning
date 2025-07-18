import { useEffect } from 'react';

// Thư mục: src/components/SEO.js

// Component SEO: quản lý và đảm bảo các thẻ meta cho SEO và mạng xã hội
// Đảm bảo title, description, keywords, canonical, author và ngôn ngữ được cập nhật đúng

function ensureMetaTag(selector, attrName, attrValue) {
  // Hàm ensureMetaTag: kiểm tra và thêm hoặc cập nhật thẻ meta trong <head>
  // selector: chuỗi selector để tìm thẻ meta, ví dụ 'meta[name="description"]'
  // attrName: tên thuộc tính để thiết lập, ví dụ 'content'
  // attrValue: giá trị thuộc tính, ví dụ mô tả hoặc URL canonical
  let element = document.querySelector(selector);
  if (!element) {
    const isLink = selector.startsWith('link[');
    element = document.createElement(isLink ? 'link' : 'meta');
    if (!isLink && selector.startsWith('meta[')) {
      // extract name or property value from selector
      const match = selector.match(/\[(name|property)='([^']+)'/);
      if (match) {
        element.setAttribute(match[1], match[2]);
      }
    } else if (isLink) {
      const match = selector.match(/\[rel='([^']+)'/);
      if (match) {
        element.setAttribute('rel', match[1]);
      }
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attrName, attrValue);
}

/**
 * Simple SEO component to update page meta information dynamically.
 * This avoids adding heavy dependencies like react-helmet for a small SPA.
 */
function SEO({ 
  title, 
  description, 
  keywords = '', 
  image = '/logo512.png', 
  url = window.location.href,
  canonical,
  type = 'website',
  author = 'Hangul Online',
  language = 'vi-VN'
}) {
  // props:
  // title: tiêu đề trang hiển thị trên tab và thẻ meta title
  // description: mô tả trang cho thẻ meta description
  // keywords: danh sách từ khóa phân tách bởi dấu phẩy
  // image: đường dẫn ảnh cho mạng xã hội (og:image)
  // url: URL hiện tại hoặc URL canonical
  // canonical: đường dẫn chuẩn nếu muốn chỉ định khác URL hiện tại
  // type: loại nội dung (ví dụ 'website', 'article')
  // author: tên tác giả hoặc tên trang
  // language: ngôn ngữ trang, ví dụ 'vi-VN'

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      ensureMetaTag("meta[name='description']", 'content', description);
      ensureMetaTag("meta[property='og:description']", 'content', description);
      ensureMetaTag("meta[name='twitter:description']", 'content', description);
    }

    if (keywords) {
      ensureMetaTag("meta[name='keywords']", 'content', keywords);
    }

    if (title) {
      ensureMetaTag("meta[property='og:title']", 'content', title);
      ensureMetaTag("meta[name='twitter:title']", 'content', title);
    }

    // Use canonical if provided, otherwise use url parameter, fallback to current location
    const canonicalUrl = canonical || url || window.location.href;
    if (canonicalUrl) {
      ensureMetaTag("meta[property='og:url']", 'content', canonicalUrl);
      ensureMetaTag("link[rel='canonical']", 'href', canonicalUrl);
    }

    if (image) {
      const fullImageUrl = image.startsWith('http') ? image : `https://hangul.online${image}`;
      ensureMetaTag("meta[property='og:image']", 'content', fullImageUrl);
      ensureMetaTag("meta[name='twitter:image']", 'content', fullImageUrl);
      ensureMetaTag("meta[property='og:image:alt']", 'content', title || 'Hangul Online - Korean Learning');
    }

    // Additional important meta tags
    ensureMetaTag("meta[property='og:type']", 'content', type);
    ensureMetaTag("meta[property='og:site_name']", 'content', 'Hangul Online');
    ensureMetaTag("meta[property='og:locale']", 'content', language);
    
    // Twitter Card meta tags
    ensureMetaTag("meta[name='twitter:card']", 'content', 'summary_large_image');
    ensureMetaTag("meta[name='twitter:site']", 'content', '@hangul_online');
    ensureMetaTag("meta[name='twitter:creator']", 'content', '@hangul_online');
    
    // Additional SEO meta tags
    ensureMetaTag("meta[name='author']", 'content', author);
    ensureMetaTag("meta[name='robots']", 'content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    ensureMetaTag("meta[name='googlebot']", 'content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    ensureMetaTag("meta[http-equiv='content-language']", 'content', language);
    ensureMetaTag("meta[name='revisit-after']", 'content', '7 days');
    
    // Language and alternate links
    ensureMetaTag("link[rel='alternate']", 'hreflang', 'vi');
    ensureMetaTag("link[rel='alternate'][hreflang='vi']", 'href', canonicalUrl);
    
    // Structured data for organization
    const structuredDataScript = document.getElementById('organization-structured-data');
    if (!structuredDataScript) {
      const script = document.createElement('script');
      script.id = 'organization-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "한국어학습",
        "alternateName": "Hangul Learning",
        "url": "https://hangul.online",
        "logo": "https://hangul.online/web-logo.svg",
        "description": "Nền tảng học tiếng Hàn miễn phí với bài học cơ bản, từ vựng, ngữ pháp và bài tập tương tác",
        "email": "nguyenductuan11012003@gmail.com",
        "foundingDate": "2025",
        "sameAs": [
          "https://hangul.online"
        ],
        "areaServed": "Vietnam",
        "serviceType": "Educational Technology"
      });
      document.head.appendChild(script);
    }

  }, [title, description, keywords, image, url, canonical, type, author, language]);

  return null;
}

export default SEO; 