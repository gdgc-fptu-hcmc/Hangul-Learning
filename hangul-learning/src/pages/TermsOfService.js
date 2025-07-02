import React from 'react';
import SEO from '../components/SEO';

function TermsOfService() {
  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Điều khoản sử dụng - 한국어학습",
    "description": "Điều khoản và điều kiện sử dụng nền tảng học tiếng Hàn miễn phí 한국어학습. Quyền và trách nhiệm của người dùng khi sử dụng dịch vụ.",
    "url": "https://hangul.online/terms-of-service",
    "dateModified": "2025-06-28",
    "inLanguage": "vi-VN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "한국어학습",
      "url": "https://hangul.online"
    },
    "mainEntity": {
      "@type": "TermsOfService",
      "name": "Điều khoản sử dụng 한국어학습",
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
        title="Điều khoản sử dụng | 한국어학습 - Nền tảng học tiếng Hàn miễn phí" 
        description="Điều khoản và điều kiện sử dụng nền tảng học tiếng Hàn miễn phí 한국어학습. Quyền và trách nhiệm của người dùng, quy định về bản quyền và sử dụng nội dung học tiếng Hàn." 
        keywords="điều khoản sử dụng, 한국어학습, quy định sử dụng, bản quyền, học tiếng hàn, terms of service"
        canonical="https://hangul.online/terms-of-service"
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Điều khoản sử dụng</h1>
          <p className="text-lg text-gray-600">Vui lòng đọc kỹ trước khi sử dụng 한국어학습</p>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Quan trọng:</strong> Bằng việc truy cập và sử dụng website <strong>한국어학습</strong>, 
                bạn đồng ý tuân thủ tất cả các điều khoản và điều kiện được nêu dưới đây.
              </p>
            </div>
        </header>

          <main className="bg-white p-6 sm:p-8 rounded-lg shadow-md" style={{ lineHeight: '1.8', color: '#555' }}>
            <nav className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Mục lục</h2>
              <ul className="space-y-2 text-blue-600">
                <li><a href="#chap-nhan-dieu-khoan" className="hover:underline">1. Chấp nhận điều khoản</a></li>
                <li><a href="#dich-vu-cung-cap" className="hover:underline">2. Dịch vụ chúng tôi cung cấp</a></li>
                <li><a href="#quyen-so-huu-tri-tue" className="hover:underline">3. Quyền sở hữu trí tuệ</a></li>
                <li><a href="#trach-nhiem-nguoi-dung" className="hover:underline">4. Trách nhiệm người dùng</a></li>
                <li><a href="#mien-tru-trach-nhiem" className="hover:underline">5. Miễn trừ trách nhiệm</a></li>
                <li><a href="#thay-doi-dieu-khoan" className="hover:underline">6. Thay đổi điều khoản</a></li>
              </ul>
            </nav>

            <section id="chap-nhan-dieu-khoan">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Chấp nhận điều khoản</h2>
              <p className="mb-4">
                Bằng việc truy cập website <strong>한국어학습</strong> (hangul.online), bạn đồng ý tuân thủ 
                các điều khoản và điều kiện sử dụng dưới đây. Nếu bạn không đồng ý với bất kỳ điều khoản nào, 
                vui lòng ngưng sử dụng website.
              </p>
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Phạm vi áp dụng</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Tất cả người dùng truy cập website</li>
                  <li>• Mọi hình thức sử dụng nội dung trên website</li>
                  <li>• Các tương tác qua email hoặc phản hồi</li>
                </ul>
              </div>
            </section>

            <section id="dich-vu-cung-cap">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Dịch vụ chúng tôi cung cấp</h2>
              <p className="mb-4">
                <strong>한국어학습</strong> là nền tảng học tiếng Hàn miễn phí cung cấp:
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nội dung học tập</h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Bài học cơ bản về chữ Hangul (한글)</li>
                  <li>Từ vựng tiếng Hàn với phát âm</li>
                  <li>Ngữ pháp tiếng Hàn cơ bản</li>
                  <li>Bài tập thực hành tương tác</li>
                  <li>Công cụ phát âm và nghe</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Cam kết dịch vụ</h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Hoàn toàn miễn phí cho người học</li>
                  <li>Nội dung được cập nhật thường xuyên</li>
                  <li>Hỗ trợ kỹ thuật qua email</li>
                  <li>Không yêu cầu đăng ký tài khoản</li>
                </ul>
              </div>
            </section>

            <section id="quyen-so-huu-tri-tue">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Quyền sở hữu trí tuệ</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nội dung của chúng tôi</h3>
                <p className="mb-4">
                  Tất cả nội dung trên website bao gồm văn bản, hình ảnh, âm thanh, video, thiết kế giao diện, 
                  mã nguồn và cấu trúc website thuộc quyền sở hữu của <strong>한국어학습</strong> hoặc được cấp phép sử dụng hợp pháp.
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li><strong>Được phép:</strong> Sử dụng cho mục đích học tập cá nhân, phi thương mại</li>
                  <li><strong>Được phép:</strong> Chia sẻ link website cho bạn bè</li>
                  <li><strong>Không được phép:</strong> Sao chép, tải về, hoặc tái sử dụng nội dung khi chưa có sự đồng ý</li>
                  <li><strong>Không được phép:</strong> Sử dụng cho mục đích thương mại hoặc kinh doanh</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nội dung từ bên thứ ba</h3>
                <p className="mb-4">
                  Website có thể chứa nội dung, liên kết đến các trang web khác hoặc sử dụng dịch vụ từ bên thứ ba 
                  (Google AdSense, Google Analytics, v.v.). Chúng tôi không chịu trách nhiệm về nội dung của các bên này.
                </p>
              </div>
            </section>

            <section id="trach-nhiem-nguoi-dung">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Trách nhiệm người dùng</h2>
              <p className="mb-4">Khi sử dụng website, bạn cam kết:</p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Hành vi được khuyến khích</h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Sử dụng website cho mục đích học tập tích cực</li>
                  <li>Gửi phản hồi xây dựng để cải thiện nội dung</li>
                  <li>Chia sẻ website cho những người cần học tiếng Hàn</li>
                  <li>Báo cáo lỗi kỹ thuật hoặc nội dung sai lệch</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Hành vi bị cấm</h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Gửi nội dung vi phạm pháp luật, thuần phong mỹ tục Việt Nam</li>
                  <li>Khai thác website cho mục đích thương mại khi chưa có thỏa thuận</li>
                  <li>Cố gắng hack, phá hoại hoặc làm gián đoạn hoạt động của website</li>
                  <li>Sử dụng bot, script tự động để truy cập hàng loạt</li>
                  <li>Đăng tải virus, malware hoặc mã độc hại</li>
                  <li>Mạo danh 한국어학습 hoặc nhân viên của chúng tôi</li>
                </ul>
              </div>
            </section>

            <section id="mien-tru-trach-nhiem">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Miễn trừ trách nhiệm</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Về nội dung</h3>
                <p className="mb-4">
                  Chúng tôi nỗ lực cung cấp nội dung chính xác và hữu ích nhưng không đảm bảo tuyệt đối về:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Độ chính xác 100% của nội dung ngữ pháp và từ vựng</li>
                  <li>Tính đầy đủ của chương trình học</li>
                  <li>Kết quả học tập cụ thể của từng người</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Về dịch vụ</h3>
                <p className="mb-4">
                  <strong>한국어학습</strong> không chịu trách nhiệm về:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Thiệt hại phát sinh từ việc sử dụng thông tin trên website</li>
                  <li>Gián đoạn dịch vụ do lỗi kỹ thuật, bảo trì hoặc lý do bất khả kháng</li>
                  <li>Nội dung từ các trang web bên thứ ba được liên kết</li>
                  <li>Hành vi của người dùng khác trên website</li>
          </ul>
              </div>
              <div className="mb-6 p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Lưu ý quan trọng</h3>
                <p className="text-sm text-red-700">
                  Website được cung cấp trên cơ sở "như hiện tại" (as-is). 
                  Người dùng tự chịu trách nhiệm về việc sử dụng thông tin và dịch vụ.
                </p>
              </div>
            </section>

            <section id="thay-doi-dieu-khoan">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Thay đổi điều khoản</h2>
              <p className="mb-4">
                <strong>한국어학습</strong> có quyền cập nhật, sửa đổi các điều khoản này bất kỳ lúc nào để:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Phù hợp với quy định pháp luật mới</li>
                <li>Cải thiện chất lượng dịch vụ</li>
                <li>Thêm tính năng hoặc nội dung mới</li>
                <li>Bảo vệ quyền lợi người dùng tốt hơn</li>
              </ul>
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Thông báo thay đổi</h3>
                <p className="text-sm text-gray-700">
                  Mọi thay đổi quan trọng sẽ được cập nhật trên trang này với ngày sửa đổi mới. 
                  Bạn nên kiểm tra định kỳ. Việc tiếp tục sử dụng website sau khi có thay đổi 
                  đồng nghĩa với việc chấp thuận điều khoản mới.
                </p>
              </div>
            </section>

            <footer className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Liên hệ về điều khoản sử dụng</h3>
              <p className="text-sm text-gray-600">
                Nếu bạn có câu hỏi về điều khoản sử dụng hoặc cần làm rõ bất kỳ điều khoản nào, 
                vui lòng liên hệ: <span className="font-medium text-blue-600">nguyenductuan11012003@gmail.com</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Điều khoản này có hiệu lực từ tháng 06/2025 và áp dụng cho tất cả người dùng 한국어학습.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}

export default TermsOfService; 