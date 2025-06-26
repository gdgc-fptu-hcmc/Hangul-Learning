import React from 'react';
import SEO from '../components/SEO';

function About() {
  return (
    <div className="page-container fade-in">
      <SEO
        title="Giới thiệu dự án | Hangul Learning"
        description="Hangul Learning - nền tảng học tiếng Hàn miễn phí với ngữ pháp, từ vựng, bài tập chuẩn TOPIK cho người Việt."
        keywords="giới thiệu dự án, Hangul Learning, học tiếng Hàn"
      />
      <div className="page-header">
        <h1 className="page-title">Về dự án</h1>
        <p className="page-subtitle">
          Hangul Learning là <strong>nền tảng học tiếng Hàn trực tuyến miễn phí</strong> dành cho người Việt. Website tổng hợp ngữ pháp, từ vựng và hệ thống bài luyện tập chuẩn&nbsp;TOPIK, sắp xếp theo lộ trình từ Sơ cấp đến Cao cấp.
        </p>
        <p className="page-subtitle">
          Mỗi chủ điểm đều có ví dụ thực tế, phiên âm, phân tích chi tiết và mẹo ghi nhớ giúp bạn tự học hiệu quả hơn.
        </p>
        <p className="page-subtitle">
          Liên hệ đóng góp hoặc hợp tác: <a href="mailto:nguyenductuan11012003@gmail.com">nguyenductuan11012003@gmail.com</a>
        </p>
      </div>

      <div className="page-content">
        {/* Mission */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#5D4E75' }}>
            Mục tiêu dự án
          </h2>
          <div className="card" style={{ 
            padding: '3rem 2rem', 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea20, #764ba210)'
          }}>
            
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#5D4E75' }}>
              Tổng hợp kiến thức tiếng Hàn
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.7', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              Tạo ra một nguồn tài liệu tham khảo đầy đủ và dễ tiếp cận, giúp người Việt Nam 
              học tiếng Hàn một cách hiệu quả và có hệ thống. Dự án hoàn toàn miễn phí và 
              phục vụ mục đích giáo dục.
            </p>
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#5D4E75' }}>
            ✨ Tính năng chính
          </h2>
          <div className="grid-2">
            <div className="card">
              <div className="card-title">
                Ngữ pháp có hệ thống
              </div>
              <div className="card-content">
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>• Phân cấp từ sơ cấp đến nâng cao</li>
                  <li>• Ví dụ cụ thể và giải thích chi tiết</li>
                  <li>• Bảng tổng hợp tra cứu nhanh</li>
                  <li>• Ghi chú về cách sử dụng thực tế</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                Từ vựng phân loại
              </div>
              <div className="card-content">
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>• Phân loại theo chủ đề thực tế</li>
                  <li>• Phát âm và cách sử dụng</li>
                  <li>• Flashcards tương tác</li>
                  <li>• Phân cấp độ khó</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                Bài tập luyện tập
              </div>
              <div className="card-content">
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>• Bài tập đa dạng: từ vựng, ngữ pháp, đọc hiểu</li>
                  <li>• Chấm điểm tự động</li>
                  <li>• Giải thích chi tiết đáp án</li>
                  <li>• Theo dõi tiến độ học tập</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                Tra cứu nhanh
              </div>
              <div className="card-content">
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>• Tìm kiếm ngữ pháp theo từ khóa</li>
                  <li>• Tra từ vựng nhanh chóng</li>
                  <li>• Giao diện thân thiện</li>
                  <li>• Hoạt động offline</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#5D4E75' }}>
            📖 Phương pháp tổng hợp
          </h2>
          <div className="grid-3">
            <div className="card">
              
              <div className="card-title">Tập trung vào thực tế</div>
              <div className="card-content">
                Ưu tiên những kiến thức thực sự cần thiết trong giao tiếp và học tập tiếng Hàn.
              </div>
            </div>

            <div className="card">
              
              <div className="card-title">Học theo cấp độ</div>
              <div className="card-content">
                Sắp xếp nội dung từ dễ đến khó, phù hợp với quá trình học tập tự nhiên.
              </div>
            </div>

            <div className="card">
              
              <div className="card-title">Giải thích dễ hiểu</div>
              <div className="card-content">
                Sử dụng tiếng Việt để giải thích, kèm ví dụ cụ thể và ghi chú hữu ích.
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#5D4E75' }}>
            Hướng dẫn sử dụng
          </h2>
          <div className="grid-2">
            <div className="card">
              <div className="card-title">
                Cho người mới bắt đầu
              </div>
              <div className="card-content">
                <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <li>Bắt đầu với phần Hangeul (bảng chữ cái)</li>
                  <li>Học ngữ pháp cơ bản (trợ từ, thì hiện tại)</li>
                  <li>Tích lũy từ vựng cơ bản hàng ngày</li>
                  <li>Luyện tập với bài tập đơn giản</li>
                </ol>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                Cho người đã có nền tảng
              </div>
              <div className="card-content">
                <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <li>Sử dụng tính năng tra cứu nhanh</li>
                  <li>Tập trung vào ngữ pháp trung-cao cấp</li>
                  <li>Mở rộng từ vựng chuyên sâu</li>
                  <li>Thử thách với các bài tập khó</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Outsource Web Development Service */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#5D4E75' }}>
            💼 Dịch vụ thiết kế website theo yêu&nbsp;cầu (Outsource)
          </h2>

          <p style={{ maxWidth: '800px', margin: '0 auto 2.5rem', textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.7', color: '#555' }}>
            Bên cạnh việc chia sẻ kiến thức, chúng tôi <strong>nhận thiết kế và phát triển website</strong> cho
            cá nhân, doanh nghiệp với ngân sách linh hoạt. Toàn bộ sản phẩm được code tay chuẩn SEO,
            tối ưu tốc độ và bảo mật, dễ dàng mở rộng về sau.
          </p>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {/* Starter */}
            <div className="card">
              <div className="card-title">Starter</div>
              <div className="card-content">
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6' }}>
                  <li>• Landing page 1-3 section</li>
                  <li>• Thiết kế responsive, màu sắc theo brand</li>
                  <li>• Triển khai miễn phí lên Netlify/Vercel</li>
                  <li>• Thời gian: 3-5 ngày</li>
                </ul>
              </div>
            </div>

            {/* Business */}
            <div className="card">
              <div className="card-title">Business</div>
              <div className="card-content">
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6' }}>
                  <li>• Website giới thiệu công ty/portfolio</li>
                  <li>• 5-10 trang + blog CMS (Headless / WordPress)</li>
                  <li>• Tùy chỉnh tính năng, tích hợp chatbot, analytics</li>
                  <li>• Thời gian: 1-2&nbsp;tuần</li>
                </ul>
              </div>
            </div>

            {/* E-commerce */}
            <div className="card">
              <div className="card-title">E-commerce</div>
              <div className="card-content">
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6' }}>
                  <li>• Cửa hàng online, giỏ hàng & thanh toán</li>
                  <li>• Quản trị sản phẩm, đơn hàng, voucher</li>
                  <li>• Tích hợp cổng thanh toán VNPay/Stripe</li>
                  <li>• Thời gian: 3-4&nbsp;tuần</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '1.1rem' }}>
            Liên hệ <strong>nguyenductuan11012003@gmail.com</strong> hoặc Zalo&nbsp;<strong>0387050243</strong>
            &nbsp;để nhận tư vấn và báo giá chi tiết.
          </div>
        </div>

        {/* Contact & Feedback */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          borderRadius: '20px',
          padding: '3rem 2rem',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>
            💬 Phản hồi và đóng góp
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9, lineHeight: '1.6' }}>
            Dự án này được phát triển với mong muốn phục vụ cộng đồng. 
            Mọi ý kiến đóng góp và phản hồi đều được chào đón.
          </p>
          <div className="grid-3" style={{ textAlign: 'left' }}>
            <div>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>🐛 Báo lỗi</h3>
              <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '1.6' }}>
                <li>• Lỗi hiển thị giao diện</li>
                <li>• Nội dung không chính xác</li>
                <li>• Chức năng không hoạt động</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>Đề xuất</h3>
              <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '1.6' }}>
                <li>• Tính năng mới</li>
                <li>• Cải thiện giao diện</li>
                <li>• Bổ sung nội dung</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>🤝 Đóng góp</h3>
              <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '1.6' }}>
                <li>• Cung cấp nội dung mới</li>
                <li>• Dịch thuật và kiểm tra</li>
                <li>• Chia sẻ với bạn bè</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <div className="card" style={{ padding: '2rem', background: '#f8f9fa' }}>
            <h3 style={{ marginBottom: '1rem', color: '#5D4E75' }}>Thông tin dự án</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
              <div>
                <strong>Miễn phí:</strong> Hoàn toàn không thu phí
              </div>
              <div>
                <strong>Mở:</strong> Mã nguồn có thể tham khảo
              </div>
              <div>
                <strong>Web-based:</strong> Truy cập qua trình duyệt
              </div>
              <div>
                <strong>Responsive:</strong> Tương thích mọi thiết bị
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 