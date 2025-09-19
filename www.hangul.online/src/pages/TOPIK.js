import React from 'react';
import '../styles/Page.css';

const TOPIK = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Luyện thi TOPIK</h1>
        <p>Chuẩn bị toàn diện cho kỳ thi năng lực tiếng Hàn TOPIK</p>
      </div>
      
      <div className="page-content">
        <section className="course-overview">
          <h2>Giới thiệu về TOPIK</h2>
          <p>
            TOPIK (Test of Proficiency in Korean) là kỳ thi đánh giá năng lực tiếng Hàn 
            được tổ chức bởi Viện Giáo dục Quốc tế Hàn Quốc. Khóa học này sẽ giúp bạn 
            chuẩn bị toàn diện cho cả TOPIK I (cấp 1-2) và TOPIK II (cấp 3-6).
          </p>
        </section>

        <section className="topik-levels">
          <h2>Các cấp độ TOPIK</h2>
          <div className="level-grid">
            <div className="level-card">
              <h3>TOPIK I - Cấp 1-2</h3>
              <p>Dành cho người mới bắt đầu</p>
              <ul>
                <li>Hiểu và sử dụng các câu đơn giản</li>
                <li>Giao tiếp cơ bản trong cuộc sống hàng ngày</li>
                <li>Hiểu được 1,500-2,000 từ vựng</li>
              </ul>
            </div>
            
            <div className="level-card">
              <h3>TOPIK II - Cấp 3-4</h3>
              <p>Trung cấp</p>
              <ul>
                <li>Giao tiếp trong các tình huống phức tạp</li>
                <li>Hiểu được nội dung báo chí, tin tức</li>
                <li>Hiểu được 3,000-4,000 từ vựng</li>
              </ul>
            </div>
            
            <div className="level-card">
              <h3>TOPIK II - Cấp 5-6</h3>
              <p>Cao cấp</p>
              <ul>
                <li>Sử dụng tiếng Hàn thành thạo</li>
                <li>Hiểu được các văn bản chuyên môn</li>
                <li>Hiểu được 5,000-6,000 từ vựng</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="course-content">
          <h2>Nội dung luyện thi</h2>
          <div className="lesson-grid">
            <div className="lesson-card">
              <h3>Ngữ pháp TOPIK</h3>
              <p>Học các cấu trúc ngữ pháp theo từng cấp độ</p>
              <span className="lesson-duration">60 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Từ vựng TOPIK</h3>
              <p>Học từ vựng theo chủ đề và cấp độ</p>
              <span className="lesson-duration">45 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Đọc hiểu</h3>
              <p>Luyện kỹ năng đọc và hiểu văn bản</p>
              <span className="lesson-duration">50 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Nghe hiểu</h3>
              <p>Luyện kỹ năng nghe và hiểu nội dung</p>
              <span className="lesson-duration">40 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Viết</h3>
              <p>Luyện kỹ năng viết theo yêu cầu TOPIK</p>
              <span className="lesson-duration">55 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Đề thi thử</h3>
              <p>Làm đề thi thử theo format thực tế</p>
              <span className="lesson-duration">90 phút</span>
            </div>
          </div>
        </section>

        <section className="course-features">
          <h2>Tính năng đặc biệt</h2>
          <ul>
            <li>Đề thi thử theo format chính thức</li>
            <li>Phân tích điểm mạnh/yếu</li>
            <li>Lộ trình học cá nhân hóa</li>
            <li>Giảng viên có kinh nghiệm luyện thi</li>
            <li>Hỗ trợ đăng ký thi</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TOPIK;
