import React from 'react';
import '../styles/Page.css';

const HangulBasic = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Hangul Cơ Bản</h1>
        <p>Học bảng chữ cái tiếng Hàn từ những bước đầu tiên</p>
      </div>
      
      <div className="page-content">
        <section className="course-overview">
          <h2>Tổng quan khóa học</h2>
          <p>
            Khóa học Hangul Cơ bản được thiết kế dành cho người mới bắt đầu học tiếng Hàn. 
            Bạn sẽ được học từng bước một cách có hệ thống, từ việc nhận biết các nguyên âm và phụ âm 
            đến việc ghép chữ và đọc được những từ đơn giản.
          </p>
        </section>

        <section className="course-content">
          <h2>Nội dung khóa học</h2>
          <div className="lesson-grid">
            <div className="lesson-card">
              <h3>Bài 1: Giới thiệu về Hangul</h3>
              <p>Lịch sử và đặc điểm của bảng chữ cái tiếng Hàn</p>
              <span className="lesson-duration">15 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Bài 2: Nguyên âm cơ bản</h3>
              <p>Học 10 nguyên âm cơ bản: ㅏ, ㅓ, ㅗ, ㅜ, ㅡ, ㅣ, ㅑ, ㅕ, ㅛ, ㅠ</p>
              <span className="lesson-duration">30 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Bài 3: Phụ âm cơ bản</h3>
              <p>Học 14 phụ âm cơ bản: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ</p>
              <span className="lesson-duration">45 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Bài 4: Ghép chữ cái</h3>
              <p>Học cách ghép nguyên âm và phụ âm để tạo thành từ</p>
              <span className="lesson-duration">40 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Bài 5: Luyện đọc</h3>
              <p>Thực hành đọc các từ và câu đơn giản</p>
              <span className="lesson-duration">35 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Bài 6: Kiểm tra cuối khóa</h3>
              <p>Đánh giá kiến thức đã học</p>
              <span className="lesson-duration">20 phút</span>
            </div>
          </div>
        </section>

        <section className="course-features">
          <h2>Tính năng khóa học</h2>
          <ul>
            <li>Video bài giảng chất lượng cao</li>
            <li>Bài tập tương tác</li>
            <li>Phát âm chuẩn với AI</li>
            <li>Chứng chỉ hoàn thành</li>
            <li>Hỗ trợ 24/7</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HangulBasic;
