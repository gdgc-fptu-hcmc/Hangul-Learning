import React from 'react';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

const Donate = () => {
  // List of QR images (local public image paths)
  const qrImages = [
    {
      src: '/IMG_Sacombank_20250625_081940.jpg',
      label: 'QR Momo'
    },
    // Thêm ảnh khác nếu cần
    // { src: '/momo_qr.png', label: 'Momo' },
  ];

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ủng hộ 한국어학습 - Trang quyên góp",
    "description": "Ủng hộ dự án học tiếng Hàn miễn phí 한국어학습. Mua cho chúng tôi một cốc cà phê để có thêm động lực phát triển tính năng mới.",
    "url": "https://hangul.online/donate",
    "mainEntity": {
      "@type": "Organization",
      "name": "한국어학습",
      "url": "https://hangul.online",
      "description": "Nền tảng học tiếng Hàn miễn phí"
    }
  };

  return (
    <>
      <SEO 
        title="Ủng hộ 한국어학습 - Quyên góp cho dự án học tiếng Hàn miễn phí" 
        description="Ủng hộ dự án học tiếng Hàn miễn phí 한국어학습. Mua cho chúng tôi một cốc cà phê để có thêm động lực phát triển tính năng mới. Tài trợ cho giáo dục tiếng Hàn tại Việt Nam." 
        keywords="ủng hộ, quyên góp, học tiếng hàn, 한국어학습, tài trợ giáo dục"
        canonical="https://hangul.online/donate"
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      <div className="page-container fade-in" style={{ textAlign: 'center', padding: '2rem' }}>
        <header className="mb-8">
          <h1 className="page-title text-4xl font-bold mb-4">Ủng hộ tác giả ☕</h1>
          <p className="page-subtitle text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nếu bạn thấy dự án <strong>한국어학습</strong> này hữu ích trong việc học tiếng Hàn, hãy mời mình một ly cà phê để có thêm động lực phát triển nhiều tính năng mới nhé!
          </p>
        </header>

        <main>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tại sao cần sự ủng hộ của bạn?</h2>
            <div className="max-w-4xl mx-auto text-left">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Phát triển tính năng mới</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Thêm bài tập tương tác với AI</li>
                    <li>• Hệ thống kiểm tra phát âm</li>
                    <li>• Bài học video chất lượng cao</li>
                    <li>• Trò chơi học tiếng Hàn</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Chi phí vận hành</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Server hosting và domain</li>
                    <li>• API dịch thuật và phát âm</li>
                    <li>• Cơ sở dữ liệu từ vựng</li>
                    <li>• Bảo trì và cập nhật</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Các cách ủng hộ</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
              {qrImages.map(({ src, label }) => (
                <div key={src} style={{ maxWidth: '260px', textAlign: 'center' }}>
                  <OptimizedImage
                    src={src}
                    alt={`QR Code ${label} để ủng hộ dự án 한국어학습`}
                    style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <p style={{ marginTop: '0.5rem', fontWeight: 500 }}>{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Đóng góp khác</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-600 mb-4">
                Ngoài việc ủng hộ tài chính, bạn cũng có thể đóng góp cho dự án bằng cách:
              </p>
              <ul className="text-left space-y-2 text-gray-700 text-center">
                <li>Góp ý cải thiện nội dung và giao diện</li>
                <li>Báo cáo lỗi kỹ thuật hoặc nội dung sai</li>
                <li>Đề xuất tính năng mới hữu ích</li>
                <li>Chia sẻ website cho bạn bè cùng học</li>
                <li>Đánh giá và phản hồi trên mạng xã hội</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Liên hệ</h2>
            <p className="text-gray-600">
              Nếu có bất kỳ đóng góp, góp ý hoặc câu hỏi nào, hãy liên hệ qua:
            </p>
            <p className="font-medium text-blue-600 mt-2">
              Email: nguyenductuan11012003@gmail.com
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default Donate; 