import React from 'react';
import SEO from '../components/SEO';

function About() {
  return (
    <div className="page-container fade-in">
      <SEO
        title="Giới thiệu dự án | Hangul Learning"
        description="Hangul Learning - nền tảng học tiếng Hàn miễn phí với ngữ pháp, từ vựng, bài tập chuẩn TOPIK cho người Việt. Hướng dẫn chi tiết về phương pháp học hiệu quả."
        keywords="giới thiệu dự án, Hangul Learning, học tiếng Hàn, TOPIK, ngữ pháp tiếng Hàn"
      />
      <div className="page-header">
        <h1 className="page-title">Về dự án Hangul Learning</h1>
        <p className="page-subtitle">
          Hangul Learning là <strong>nền tảng học tiếng Hàn trực tuyến miễn phí</strong> dành cho người Việt. Website tổng hợp ngữ pháp, từ vựng và hệ thống bài luyện tập chuẩn&nbsp;TOPIK, sắp xếp theo lộ trình từ Sơ cấp đến Cao cấp.
        </p>
        <p className="page-subtitle">
          Mỗi chủ điểm đều có ví dụ thực tế, phiên âm, phân tích chi tiết và mẹo ghi nhớ giúp bạn tự học hiệu quả hơn. Dự án được xây dựng dựa trên kinh nghiệm thực tế và nghiên cứu chuyên sâu về ngôn ngữ học.
        </p>
        <p className="page-subtitle">
          Liên hệ đóng góp hoặc hợp tác: <a href="mailto:nguyenductuan11012003@gmail.com">nguyenductuan11012003@gmail.com</a>
        </p>
      </div>

      <div className="page-content">
        {/* Korean Language Overview */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#5D4E75' }}>
            📚 Tổng quan về tiếng Hàn
          </h2>
          <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#5D4E75' }}>
              Lịch sử và đặc điểm của tiếng Hàn
            </h3>
            <div className="grid-2" style={{ gap: '2rem' }}>
              <div>
                <h4 style={{ color: '#666', marginBottom: '1rem' }}>Nguồn gốc và phát triển</h4>
                <p style={{ lineHeight: '1.7', color: '#555' }}>
                  Tiếng Hàn (한국어) thuộc họ ngôn ngữ Hàn, được sử dụng bởi khoảng 77 triệu người trên thế giới. 
                  Bảng chữ cái Hangul (한글) được phát minh vào thế kỷ 15 dưới thời vua Sejong Đại Đế, 
                  được UNESCO công nhận là một trong những hệ thống chữ viết hoàn hảo nhất.
                </p>
              </div>
              <div>
                <h4 style={{ color: '#666', marginBottom: '1rem' }}>Đặc điểm ngôn ngữ học</h4>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.7', color: '#555' }}>
                  <li>• Cấu trúc câu SOV (Chủ ngữ - Tân ngữ - Vị ngữ)</li>
                  <li>• Hệ thống ngữ pháp phong phú với nhiều mức độ lịch sự</li>
                  <li>• Âm vị học phức tạp với 19 phụ âm và 21 nguyên âm</li>
                  <li>• Không có giới tính ngữ pháp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Levels */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#5D4E75' }}>
            🎯 Các cấp độ học tập
          </h2>
          <div className="grid-2" style={{ gap: '2rem' }}>
            <div className="card">
              <div className="card-title">TOPIK I (Sơ cấp)</div>
              <div className="card-content">
                <h4 style={{ color: '#666', marginBottom: '1rem' }}>Cấp độ 1-2</h4>
                <p style={{ marginBottom: '1rem' }}>Dành cho người mới bắt đầu học tiếng Hàn:</p>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6' }}>
                  <li>• Nắm vững 800-1,500 từ vựng cơ bản</li>
                  <li>• Hiểu các câu và cụm từ thường dùng</li>
                  <li>• Giao tiếp đơn giản về bản thân và gia đình</li>
                  <li>• Đọc hiểu các văn bản ngắn, quen thuộc</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-title">TOPIK II (Trung-Cao cấp)</div>
              <div className="card-content">
                <h4 style={{ color: '#666', marginBottom: '1rem' }}>Cấp độ 3-6</h4>
                <p style={{ marginBottom: '1rem' }}>Dành cho người có nền tảng:</p>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6' }}>
                  <li>• Nắm vững 2,000-6,000+ từ vựng</li>
                  <li>• Hiểu các chủ đề phức tạp, trừu tượng</li>
                  <li>• Giao tiếp tự nhiên với người bản xứ</li>
                  <li>• Đọc hiểu báo chí, văn học cơ bản</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#5D4E75' }}>
            🎯 Mục tiêu dự án
          </h2>
          <div className="card" style={{ 
            padding: '3rem 2rem', 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea20, #764ba210)'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#5D4E75' }}>
              Tổng hợp kiến thức tiếng Hàn toàn diện
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.7', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              Tạo ra một nguồn tài liệu tham khảo đầy đủ và dễ tiếp cận, giúp người Việt Nam 
              học tiếng Hàn một cách hiệu quả và có hệ thống. Dự án hoàn toàn miễn phí, 
              phục vụ mục đích giáo dục và được cập nhật liên tục theo các xu hướng học tập mới.
            </p>
          </div>
        </div>

        {/* Learning Methods */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#5D4E75' }}>
            🧠 Phương pháp học tiếng Hàn hiệu quả
          </h2>
          <div className="grid-2" style={{ gap: '2rem' }}>
            <div className="card">
              <div className="card-title">Spaced Repetition System (SRS)</div>
              <div className="card-content">
                <p style={{ marginBottom: '1rem' }}>Phương pháp lặp lại cách quãng được khoa học chứng minh:</p>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6' }}>
                  <li>• Ôn tập theo khoảng thời gian tăng dần</li>
                  <li>• Tối ưu hóa việc ghi nhớ dài hạn</li>
                  <li>• Giảm thời gian học mà vẫn hiệu quả</li>
                  <li>• Áp dụng cho cả từ vựng và ngữ pháp</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Contextual Learning</div>
              <div className="card-content">
                <p style={{ marginBottom: '1rem' }}>Học trong ngữ cảnh thực tế:</p>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6' }}>
                  <li>• Học từ vựng qua tình huống cụ thể</li>
                  <li>• Kết hợp văn hóa Hàn Quốc</li>
                  <li>• Ví dụ từ phim, nhạc, tin tức</li>
                  <li>• Thực hành giao tiếp thực tế</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Multi-modal Learning</div>
              <div className="card-content">
                <p style={{ marginBottom: '1rem' }}>Kết hợp nhiều kênh học tập:</p>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6' }}>
                  <li>• Nghe (audio, nhạc, phim)</li>
                  <li>• Nhìn (flashcard, sơ đồ tư duy)</li>
                  <li>• Viết (luyện tập chữ Hangul)</li>
                  <li>• Nói (shadowing, ghi âm)</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Progressive Disclosure</div>
              <div className="card-content">
                <p style={{ marginBottom: '1rem' }}>Tiết lộ thông tin từng bước:</p>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6' }}>
                  <li>• Bắt đầu với cấu trúc đơn giản</li>
                  <li>• Tăng độ phức tạp dần dần</li>
                  <li>• Xây dựng trên kiến thức đã học</li>
                  <li>• Tránh quá tải thông tin</li>
                </ul>
              </div>
            </div>
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
                  <li>• Phân cấp từ sơ cấp đến nâng cao theo chuẩn TOPIK</li>
                  <li>• Ví dụ cụ thể với phân tích chi tiết</li>
                  <li>• Bảng tổng hợp tra cứu nhanh</li>
                  <li>• Ghi chú về cách sử dụng trong ngôn ngữ thực tế</li>
                  <li>• So sánh với tiếng Việt để dễ hiểu</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                Từ vựng phân loại thông minh
              </div>
              <div className="card-content">
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>• Phân loại theo chủ đề thực tế (gia đình, công việc, học tập)</li>
                  <li>• Phát âm chuẩn và cách sử dụng</li>
                  <li>• Flashcards tương tác với thuật toán SRS</li>
                  <li>• Phân cấp độ khó theo frequency list</li>
                  <li>• Từ đồng nghĩa và trái nghĩa</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                Bài tập đa dạng và thực tế
              </div>
              <div className="card-content">
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>• Bài tập đa dạng: từ vựng, ngữ pháp, đọc hiểu, nghe</li>
                  <li>• Chấm điểm tự động với feedback chi tiết</li>
                  <li>• Giải thích đáp án với ví dụ bổ sung</li>
                  <li>• Theo dõi tiến độ học tập cá nhân</li>
                  <li>• Thống kê điểm mạnh và điều cần cải thiện</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                Công cụ hỗ trợ học tập
              </div>
              <div className="card-content">
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>• Tìm kiếm ngữ pháp theo từ khóa tiếng Việt/Hàn</li>
                  <li>• Tra từ vựng nhanh chóng với gợi ý</li>
                  <li>• Giao diện thân thiện, responsive</li>
                  <li>• Chế độ offline với PWA</li>
                  <li>• Bookmark để lưu nội dung quan trọng</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Context */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#5D4E75' }}>
            🇰🇷 Văn hóa và bối cảnh xã hội
          </h2>
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="grid-2" style={{ gap: '2rem' }}>
              <div>
                <h4 style={{ color: '#666', marginBottom: '1rem' }}>Tầm quan trọng của mức độ lịch sự</h4>
                <p style={{ lineHeight: '1.7', color: '#555', marginBottom: '1.5rem' }}>
                  Tiếng Hàn có hệ thống mức độ lịch sự (honorific system) phức tạp, phản ánh cấu trúc xã hội và tuổi tác. 
                  Việc sử dụng đúng mức độ lịch sự không chỉ là vấn đề ngữ pháp mà còn thể hiện sự tôn trọng trong văn hóa.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6', color: '#555' }}>
                  <li>• <strong>반말 (Banmal):</strong> Dùng với bạn bè thân, người nhỏ tuổi</li>
                  <li>• <strong>존댓말 (Jondaetmal):</strong> Dùng với người lớn tuổi, cấp trên</li>
                  <li>• <strong>높임말 (Nopimmal):</strong> Tôn kính cao nhất</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#666', marginBottom: '1rem' }}>Ảnh hưởng của Hallyu (Làn sóng Hàn)</h4>
                <p style={{ lineHeight: '1.7', color: '#555', marginBottom: '1.5rem' }}>
                  K-pop, K-drama và văn hóa Hàn Quốc đã thúc đẩy việc học tiếng Hàn trên toàn thế giới. 
                  Điều này tạo ra cơ hội lớn để học ngôn ngữ thông qua nội dung giải trí.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6', color: '#555' }}>
                  <li>• Từ vựng thời trang từ K-pop và drama</li>
                  <li>• Biểu hiện cảm xúc đặc trưng</li>
                  <li>• Slang và ngôn ngữ internet</li>
                  <li>• Văn hóa ẩm thực qua ngôn ngữ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#5D4E75' }}>
            📖 Phương pháp tổng hợp nội dung
          </h2>
          <div className="grid-3">
            <div className="card">
              <div className="card-title">Tập trung vào thực tế</div>
              <div className="card-content">
                Ưu tiên những kiến thức thực sự cần thiết trong giao tiếp và học tập tiếng Hàn, 
                dựa trên nghiên cứu corpus linguistics và feedback từ cộng đồng học viên.
              </div>
            </div>

            <div className="card">
              <div className="card-title">Học theo cấp độ khoa học</div>
              <div className="card-content">
                Sắp xếp nội dung từ dễ đến khó theo nguyên tắc pedagogical grammar, 
                phù hợp với quá trình tiếp thu ngôn ngữ thứ hai của người học.
              </div>
            </div>

            <div className="card">
              <div className="card-title">Giải thích đa chiều</div>
              <div className="card-content">
                Sử dụng tiếng Việt để giải thích, kèm ví dụ cụ thể, phân tích contrastive 
                và ghi chú văn hóa để người học hiểu sâu và nhớ lâu.
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#5D4E75' }}>
            📋 Hướng dẫn sử dụng hiệu quả
          </h2>
          <div className="grid-2">
            <div className="card">
              <div className="card-title">
                Cho người mới bắt đầu (Beginner)
              </div>
              <div className="card-content">
                <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <li><strong>Tuần 1-2:</strong> Học bảng chữ cái Hangul và phát âm cơ bản</li>
                  <li><strong>Tuần 3-4:</strong> Nắm vững ngữ pháp cơ bản (trợ từ, thì hiện tại)</li>
                  <li><strong>Tháng 2-3:</strong> Tích lũy 300-500 từ vựng cơ bản hàng ngày</li>
                  <li><strong>Tháng 4-6:</strong> Luyện tập với bài tập đơn giản, xây dựng thói quen</li>
                </ol>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#666' }}>
                  <strong>Mục tiêu:</strong> Đạt cấp độ TOPIK I Level 1 sau 6 tháng
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                Cho người đã có nền tảng (Intermediate+)
              </div>
              <div className="card-content">
                <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <li><strong>Assessment:</strong> Sử dụng bài test để xác định trình độ hiện tại</li>
                  <li><strong>Gap analysis:</strong> Tìm điểm yếu qua tính năng thống kê</li>
                  <li><strong>Focused study:</strong> Tập trung vào ngữ pháp trung-cao cấp</li>
                  <li><strong>Advanced practice:</strong> Thử thách với bài tập khó và reading comprehension</li>
                </ol>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#666' }}>
                  <strong>Mục tiêu:</strong> Nâng cao 1 cấp độ TOPIK II mỗi 6-8 tháng
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research and Sources */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#5D4E75' }}>
            📖 Nguồn tham khảo và nghiên cứu
          </h2>
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="grid-2" style={{ gap: '2rem' }}>
              <div>
                <h4 style={{ color: '#666', marginBottom: '1rem' }}>Giáo trình chính thức</h4>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6', color: '#555' }}>
                  <li>• <strong>세종 한국어 (Sejong Korean):</strong> Giáo trình quốc gia của Hàn Quốc</li>
                  <li>• <strong>서강 한국어 (Sogang Korean):</strong> Đại học Sogang</li>
                  <li>• <strong>연세 한국어 (Yonsei Korean):</strong> Đại học Yonsei</li>
                  <li>• <strong>이화 한국어 (Ewha Korean):</strong> Đại học Ewha</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#666', marginBottom: '1rem' }}>Nghiên cứu ngôn ngữ học</h4>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6', color: '#555' }}>
                  <li>• Corpus of Contemporary Korean</li>
                  <li>• Korean Language Education Research</li>
                  <li>• Second Language Acquisition studies</li>
                  <li>• Applied Linguistics for Korean L2</li>
                </ul>
              </div>
            </div>
            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#666', marginBottom: '1rem' }}>Cam kết chất lượng</h4>
              <p style={{ lineHeight: '1.7', color: '#555', margin: 0 }}>
                Tất cả nội dung được kiểm tra bởi giáo viên tiếng Hàn có chứng chỉ và cập nhật thường xuyên 
                theo tiêu chuẩn TOPIK mới nhất. Chúng tôi luôn lắng nghe phản hồi từ cộng đồng để cải thiện chất lượng.
              </p>
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