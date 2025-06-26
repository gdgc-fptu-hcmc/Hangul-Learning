import { useEffect } from 'react';

function ensureMetaTag(selector, attrName, attrValue) {
  let element = document.head.querySelector(selector);
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
function SEO({ title, description, keywords = '', image = '/logo512.png', url = window.location.href }) {
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

    if (url) {
      ensureMetaTag("meta[property='og:url']", 'content', url);
      ensureMetaTag("link[rel='canonical']", 'href', url);
    }

    if (image) {
      ensureMetaTag("meta[property='og:image']", 'content', image);
      ensureMetaTag("meta[name='twitter:image']", 'content', image);
    }
  }, [title, description, keywords, image, url]);

  return null;
}

export default SEO; 