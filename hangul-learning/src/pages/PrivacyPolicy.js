import React from 'react';
import SEO from '../components/SEO';

function PrivacyPolicy() {
  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Chính sách bảo mật - 한국어학습",
    "description": "Chính sách bảo mật của nền tảng học tiếng Hàn miễn phí 한국어학습. Thông tin về cách thu thập, sử dụng và bảo vệ dữ liệu người dùng.",
    "url": "https://hangul.online/privacy-policy",
    "dateModified": "2025-06-28",
    "inLanguage": "vi-VN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "한국어학습",
      "url": "https://hangul.online"
    },
    "mainEntity": {
      "@type": "PrivacyPolicy",
      "name": "Chính sách bảo mật 한국어학습",
      "datePublished": "2025-06-28",
      "publisher": {
        "@type": "Organization",
        "name": "한국어학습",
        "url": "https://hangul.online"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Chính sách bảo mật | 한국어학습 - Nền tảng học tiếng Hàn miễn phí" 
        description="Chính sách bảo mật của nền tảng học tiếng Hàn miễn phí 한국어학습. Thông tin chi tiết về cách thu thập, sử dụng và bảo vệ dữ liệu người dùng. Tuân thủ GDPR và quy định bảo mật Việt Nam." 
        keywords="chính sách bảo mật, 한국어학습, bảo vệ dữ liệu, quyền riêng tư, GDPR, học tiếng hàn"
        canonical="https://hangul.online/privacy-policy"
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Chính sách bảo mật</h1>
            <p className="text-lg text-gray-600">Cập nhật lần cuối: 06/2025</p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>한국어학습</strong> cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của người dùng. 
                Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn.
              </p>
            </div>
          </header>

          <main className="bg-white p-6 sm:p-8 rounded-lg shadow-md" style={{ lineHeight: '1.8', color: '#555' }}>
            <nav className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Mục lục</h2>
              <ul className="space-y-2 text-blue-600">
                <li><a href="#thong-tin-thu-thap" className="hover:underline">1. Thông tin chúng tôi thu thập</a></li>
                <li><a href="#cach-su-dung" className="hover:underline">2. Cách chúng tôi sử dụng thông tin</a></li>
                <li><a href="#luu-tru-bao-mat" className="hover:underline">3. Lưu trữ & bảo mật</a></li>
                <li><a href="#quyen-nguoi-dung" className="hover:underline">4. Quyền của người dùng</a></li>
                <li><a href="#thay-doi-chinh-sach" className="hover:underline">5. Thay đổi chính sách</a></li>
              </ul>
            </nav>

            <section id="thong-tin-thu-thap">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Thông tin chúng tôi thu thập</h2>
              <p className="mb-4">
                <strong>한국어학습</strong> chỉ thu thập thông tin tối thiểu cần thiết để cung cấp dịch vụ học tiếng Hàn miễn phí. 
                Chúng tôi <strong>không</strong> yêu cầu đăng ký tài khoản hoặc cung cấp thông tin cá nhân để sử dụng website.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Thông tin tự động thu thập</h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Địa chỉ IP (được ẩn danh hóa)</li>
                  <li>Thống kê lượt xem trang (Google Analytics)</li>
                  <li>Loại trình duyệt và thiết bị</li>
                  <li>Thời gian truy cập và tương tác</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Thông tin về Google AdSense</h3>
                <p className="mb-4">
                  Website sử dụng Google AdSense để hiển thị quảng cáo phù hợp và hỗ trợ chi phí vận hành. 
                  <strong> Các bên thứ ba, bao gồm Google, sử dụng cookies để phục vụ quảng cáo dựa trên các lượt truy cập trước đó của người dùng vào trang web này hoặc các trang web khác.</strong>
                </p>
                <p className="mb-4">
                  Google có thể sử dụng cookies và web beacons để thu thập thông tin về lượt truy cập của bạn vào trang web này và các trang web khác 
                  nhằm cung cấp quảng cáo phù hợp với sở thích của bạn. 
                  Bạn có thể tìm hiểu thêm về cách Google sử dụng dữ liệu tại: 
                  <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                    https://policies.google.com/technologies/partner-sites
                  </a>
                </p>
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 mb-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Lưu ý quan trọng về quảng cáo cá nhân hóa</h4>
                  <p className="text-yellow-700 text-sm">
                    Chúng tôi <strong>KHÔNG</strong> sử dụng quảng cáo cá nhân hóa dựa trên thông tin nhạy cảm bao gồm: 
                    sức khỏe, tình trạng tài chính, tôn giáo, chủng tộc, khuynh hướng tình dục, hoặc thông tin của trẻ em dưới 13 tuổi.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🧒 Bảo vệ trẻ em (COPPA Compliance)</h3>
                <div className="p-4 bg-green-50 border-l-4 border-green-400 mb-4">
                  <p className="text-green-700 text-sm mb-2">
                    <strong>한국어학습</strong> tuân thủ nghiêm ngặt Đạo luật Bảo vệ Quyền riêng tư Trực tuyến của Trẻ em (COPPA) của Mỹ.
                  </p>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• <strong>KHÔNG</strong> thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi</li>
                    <li>• <strong>KHÔNG</strong> sử dụng quảng cáo định hướng cho trẻ em dưới 13 tuổi</li>
                    <li>• <strong>KHÔNG</strong> sử dụng remarketing cho đối tượng dưới 13 tuổi</li>
                    <li>• Nội dung phù hợp cho mọi lứa tuổi, không có yếu tố người lớn</li>
                  </ul>
                </div>
                <p className="text-gray-600 text-sm">
                  Nếu chúng tôi phát hiện đã vô tình thu thập thông tin từ trẻ em dưới 13 tuổi, 
                  chúng tôi sẽ xóa thông tin đó ngay lập tức. Phụ huynh có thể liên hệ với chúng tôi để yêu cầu xóa thông tin.
                </p>
              </div>
            </section>

            <section id="cach-su-dung">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Cách chúng tôi sử dụng thông tin</h2>
              <p className="mb-4">Thông tin được thu thập chỉ để:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Gửi phản hồi, giải đáp thắc mắc người dùng (chỉ khi bạn chủ động liên hệ)</li>
                <li>Nâng cao chất lượng nội dung dựa trên thống kê lượt xem ẩn danh</li>
                <li>Cải thiện hiệu suất và trải nghiệm website</li>
                <li>Phân tích xu hướng sử dụng để phát triển tính năng mới</li>
                <li>Hiển thị quảng cáo phù hợp (thông qua Google AdSense)</li>
              </ul>
            </section>

            <section id="luu-tru-bao-mat">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Lưu trữ & bảo mật</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Bảo mật dữ liệu</h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Tất cả dữ liệu được lưu trữ trên máy chủ của Vercel (nền tảng hosting uy tín)</li>
                  <li>Áp dụng mã hoá HTTPS cho toàn bộ trang web</li>
                  <li>Thống kê được ẩn danh hóa, không liên kết với cá nhân cụ thể</li>
                  <li>Không lưu trữ thông tin đăng nhập hoặc dữ liệu nhạy cảm</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Thời gian lưu trữ</h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Dữ liệu thống kê: tối đa 26 tháng (theo chính sách Google Analytics)</li>
                  <li>Email liên hệ: chỉ đến khi vấn đề được giải quyết</li>
                  <li>Cookies quảng cáo: tối đa 90 ngày</li>
                </ul>
              </div>
            </section>

            <section id="quyen-nguoi-dung">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Quyền của người dùng</h2>
              <p className="mb-4">Bạn có các quyền sau đây:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Quyền truy cập:</strong> Yêu cầu thông tin về dữ liệu chúng tôi có về bạn</li>
                <li><strong>Quyền xóa:</strong> Yêu cầu xóa thông tin cá nhân bất kỳ lúc nào</li>
                <li><strong>Quyền chỉnh sửa:</strong> Yêu cầu sửa đổi thông tin không chính xác</li>
                <li><strong>Quyền phản đối:</strong> Từ chối việc xử lý dữ liệu cho mục đích cụ thể</li>
              </ul>
              <p className="mb-4">
                Để thực hiện các quyền này, hãy liên hệ qua email: 
                <span className="font-medium text-blue-600"> nguyenductuan11012003@gmail.com</span>
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quản lý quảng cáo cá nhân hóa</h3>
                <p className="mb-4">
                  Bạn có thể quản lý tùy chọn quảng cáo của Google và tùy chỉnh quảng cáo cá nhân hóa tại: 
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                    https://adssettings.google.com
                  </a>. 
                  Bạn cũng có thể chọn không tham gia quảng cáo cá nhân hóa từ các nhà cung cấp bên thứ ba bằng cách truy cập: 
                  <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                    https://optout.aboutads.info
                  </a>
                </p>
              </div>
            </section>

            <section id="thay-doi-chinh-sach">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Thay đổi chính sách</h2>
              <p className="mb-6">
                Chính sách có thể được cập nhật để phù hợp với quy định pháp luật hoặc khi có thay đổi về dịch vụ. 
                Mọi thay đổi quan trọng sẽ được thông báo trên trang này với ngày cập nhật mới.
                Việc tiếp tục sử dụng website sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận chính sách mới.
              </p>
            </section>

            <footer className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Liên hệ về vấn đề bảo mật</h3>
              <p className="text-sm text-gray-600">
                Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này hoặc cách chúng tôi xử lý dữ liệu của bạn, 
                vui lòng liên hệ: <span className="font-medium text-blue-600">nguyenductuan11012003@gmail.com</span>
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy; 