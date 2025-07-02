// SEO Optimizer Component
// Handles automatic sitemap submission and IndexNow updates

class SEOOptimizer {
  constructor() {
    this.isProduction = window.location.hostname === 'hangul.online';
    this.indexNowKey = '65432198765432189876543210987654';
    this.sitemapUrl = 'https://hangul.online/sitemap.xml';
  }

  // Submit current page to IndexNow for instant indexing
  submitToIndexNow(url = window.location.href) {
    if (!this.isProduction) {
      console.debug('IndexNow: Skipping submission in development');
      return;
    }

    try {
      // IndexNow data structure (Option 1 - key file at root, no keyLocation needed)
      const indexNowData = {
        host: 'hangul.online',
        key: this.indexNowKey,
        urlList: [url]
      };

      // List of search engines supporting IndexNow
      const searchEngines = [
        'https://www.bing.com/indexnow',
        'https://api.indexnow.org/indexnow', // Fallback endpoint
        'https://yandex.com/indexnow'
      ];

      // Submit to each search engine
      searchEngines.forEach(endpoint => {
        fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(indexNowData)
        }).then(response => {
          // Handle response codes according to IndexNow specification
          switch (response.status) {
            case 200:
              console.debug('IndexNow: URL submitted successfully to', endpoint);
              break;
            case 202:
              console.debug('IndexNow: URL received, key validation pending for', endpoint);
              break;
            case 400:
              console.debug('IndexNow: Bad request format for', endpoint);
              break;
            case 403:
              console.debug('IndexNow: Key not valid for', endpoint);
              break;
            case 422:
              console.debug('IndexNow: URLs don\'t belong to host for', endpoint);
              break;
            case 429:
              console.debug('IndexNow: Too many requests for', endpoint);
              break;
            default:
              console.debug('IndexNow: Response', response.status, 'from', endpoint);
          }
        }).catch(error => {
          // Silent fail - IndexNow is optional optimization
          console.debug('IndexNow: Submission completed for', endpoint);
        });
      });
    } catch (error) {
      console.debug('IndexNow: Service not available');
    }
  }

  // Alternative: Submit single URL using GET method (for testing)
  submitSingleUrlToIndexNow(url = window.location.href) {
    if (!this.isProduction) {
      console.debug('IndexNow: Skipping single URL submission in development');
      return;
    }

    try {
      // Encode URL according to RFC-3986 standard
      const encodedUrl = encodeURIComponent(url);
      
      // Submit to Bing using GET method
      const bingUrl = `https://www.bing.com/indexnow?url=${encodedUrl}&key=${this.indexNowKey}`;
      
      // Use image request for GET submission (avoids CORS issues)
      const img = new Image();
      img.onload = img.onerror = () => {
        console.debug('IndexNow: Single URL submitted to Bing via GET');
      };
      img.src = bingUrl;
    } catch (error) {
      console.debug('IndexNow: Single URL submission not available');
    }
  }

  // Submit sitemap to search engines
  submitSitemap() {
    if (!this.isProduction) {
      console.debug('SEO: Skipping sitemap submission in development');
      return;
    }

    const searchEngines = [
      `https://www.google.com/ping?sitemap=${encodeURIComponent(this.sitemapUrl)}`,
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(this.sitemapUrl)}`
    ];

    searchEngines.forEach(url => {
      try {
        // Use image request for cross-origin sitemap submission
        const img = new Image();
        img.onload = img.onerror = () => {
          console.debug('SEO: Sitemap ping completed');
        };
        img.src = url;
      } catch (error) {
        console.debug('SEO: Search engine ping not available');
      }
    });
  }

  // Initialize SEO optimizations on page load
  init() {
    if (typeof window !== 'undefined') {
      // Submit current page after delay
      setTimeout(() => {
        this.submitToIndexNow();
      }, 5000);

      // Submit sitemap weekly (only on homepage)
      if (window.location.pathname === '/') {
        const lastSitemapSubmit = localStorage.getItem('lastSitemapSubmit');
        const now = Date.now();
        const oneWeek = 7 * 24 * 60 * 60 * 1000;

        if (!lastSitemapSubmit || now - parseInt(lastSitemapSubmit) > oneWeek) {
          setTimeout(() => {
            this.submitSitemap();
            localStorage.setItem('lastSitemapSubmit', now.toString());
          }, 10000);
        }
      }
    }
  }
}

// Export for use in other components
export default SEOOptimizer;

// Auto-initialize if in browser
if (typeof window !== 'undefined') {
  const seoOptimizer = new SEOOptimizer();
  
  // Initialize after page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      seoOptimizer.init();
    });
  } else {
    seoOptimizer.init();
  }
} 