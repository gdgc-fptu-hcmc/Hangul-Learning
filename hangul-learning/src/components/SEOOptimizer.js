// Thư mục: src/components/SEOOptimizer.js
// Lớp SEOOptimizer: tự động gửi URL và sitemap đến công cụ tìm kiếm (IndexNow, Bing, Google) để cải thiện SEO

// SEO Optimizer Component
// Handles automatic sitemap submission and IndexNow updates

class SEOOptimizer {
  constructor() {
    // Môi trường production: chỉ gửi khi host là hangul.online
    this.isProduction = window.location.hostname === 'hangul.online';
    // Khóa IndexNow để xác thực yêu cầu gửi URL lên dịch vụ IndexNow
    this.indexNowKey = '65432198765432189876543210987654';
    // URL sitemap.xml để ping cho các công cụ tìm kiếm hỗ trợ sitemap ping
    this.sitemapUrl = 'https://hangul.online/sitemap.xml';
  }

  // Gửi URL hiện tại đến IndexNow để cập nhật chỉ mục ngay lập tức (chỉ môi trường production)
  submitToIndexNow(url = window.location.href) {
    if (!this.isProduction) {
      // Bỏ qua nếu không phải môi trường production
      console.debug('IndexNow: Skipping submission in development');
      return;
    }

    try {
      // Tạo payload dữ liệu theo chuẩn IndexNow cho việc submit nhiều URL
      const indexNowData = {
        host: 'hangul.online',
        key: this.indexNowKey,
        urlList: [url]
      };

      // Danh sách các endpoint hỗ trợ IndexNow
      const searchEngines = [
        'https://www.bing.com/indexnow',
        'https://api.indexnow.org/indexnow', // Fallback endpoint
        'https://yandex.com/indexnow'
      ];

      // Gửi POST request đến endpoint IndexNow với body JSON
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
          // Im lặng bắt lỗi (IndexNow là tối ưu tùy chọn)
          console.debug('IndexNow: Submission completed for', endpoint);
        });
      });
    } catch (error) {
      console.debug('IndexNow: Service not available');
    }
  }

  // Phương pháp GET: gửi single URL đến IndexNow (thích hợp cho testing hoặc tránh CORS)
  submitSingleUrlToIndexNow(url = window.location.href) {
    if (!this.isProduction) {
      // Bỏ qua khi không phải môi trường production
      console.debug('IndexNow: Skipping single URL submission in development');
      return;
    }

    try {
      // Mã hóa URL theo chuẩn RFC-3986 để embed vào query string
      const encodedUrl = encodeURIComponent(url);
      
      // Tạo URL GET cho Bing IndexNow
      const bingUrl = `https://www.bing.com/indexnow?url=${encodedUrl}&key=${this.indexNowKey}`;
      
      // Dùng Image request để ping Bing, tránh lỗi CORS
      const img = new Image();
      img.onload = img.onerror = () => {
        console.debug('IndexNow: Single URL submitted to Bing via GET');
      };
      img.src = bingUrl;
    } catch (error) {
      console.debug('IndexNow: Single URL submission not available');
    }
  }

  // Gửi sitemap.xml đến Google và Bing để cập nhật sitemap trên công cụ tìm kiếm
  submitSitemap() {
    if (!this.isProduction) {
      // Bỏ qua khi không phải môi trường production
      console.debug('SEO: Skipping sitemap submission in development');
      return;
    }

    const searchEngines = [
      `https://www.google.com/ping?sitemap=${encodeURIComponent(this.sitemapUrl)}`,
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(this.sitemapUrl)}`
    ];

    searchEngines.forEach(url => {
      try {
        // Dùng Image request để gửi ping sitemap, tránh lỗi CORS
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

  // Khởi tạo tự động các tác vụ SEO khi trang load xong
  init() {
    if (typeof window !== 'undefined') {
      // Gửi URL hiện tại đến IndexNow sau 5 giây
      setTimeout(() => {
        this.submitToIndexNow();
      }, 5000);

      // Nếu là trang chủ, kiểm tra và gửi sitemap mỗi tuần một lần
      if (window.location.pathname === '/') {
        const lastSitemapSubmit = localStorage.getItem('lastSitemapSubmit');
        const now = Date.now();
        const oneWeek = 7 * 24 * 60 * 60 * 1000;

        if (!lastSitemapSubmit || now - parseInt(lastSitemapSubmit) > oneWeek) {
          // Gửi sitemap nếu đã quá 1 tuần kể từ lần cuối lưu trong localStorage
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

// Tự động khởi tạo SEOOptimizer khi trang đã sẵn sàng
// Kiểm tra trạng thái document để gọi init() đúng thời điểm
if (typeof window !== 'undefined') {
  const seoOptimizer = new SEOOptimizer();
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      seoOptimizer.init();
    });
  } else {
    seoOptimizer.init();
  }
} 