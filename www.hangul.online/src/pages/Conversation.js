import React from 'react';
import '../styles/Page.css';

const Conversation = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Giao tiếp Tiếng Hàn</h1>
        <p>Phát triển kỹ năng giao tiếp thực tế trong cuộc sống hàng ngày</p>
      </div>
      
      <div className="page-content">
        <section className="course-overview">
          <h2>Tổng quan khóa học</h2>
          <p>
            Khóa học Giao tiếp Tiếng Hàn tập trung vào việc phát triển kỹ năng nói và nghe 
            thông qua các tình huống giao tiếp thực tế. Bạn sẽ học cách sử dụng tiếng Hàn 
            trong các tình huống hàng ngày như mua sắm, ăn uống, du lịch, và công việc.
          </p>
        </section>

        <section className="course-content">
          <h2>Nội dung khóa học</h2>
          <div className="lesson-grid">
            <div className="lesson-card">
              <h3>Chào hỏi và Giới thiệu</h3>
              <p>Học cách chào hỏi, tự giới thiệu và hỏi thăm sức khỏe</p>
              <span className="lesson-duration">25 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Mua sắm</h3>
              <p>Giao tiếp khi mua sắm, hỏi giá, trả giá và thanh toán</p>
              <span className="lesson-duration">30 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Ăn uống</h3>
              <p>Đặt món, gọi đồ uống và thanh toán tại nhà hàng</p>
              <span className="lesson-duration">35 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Phương tiện giao thông</h3>
              <p>Hỏi đường, mua vé và sử dụng các phương tiện công cộng</p>
              <span className="lesson-duration">40 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Du lịch</h3>
              <p>Đặt phòng khách sạn, hỏi thông tin du lịch</p>
              <span className="lesson-duration">45 phút</span>
            </div>
            
            <div className="lesson-card">
              <h3>Công việc</h3>
              <p>Giao tiếp trong môi trường làm việc, họp hành</p>
              <span className="lesson-duration">50 phút</span>
            </div>
          </div>
        </section>

        <section className="course-features">
          <h2>Phương pháp học</h2>
          <ul>
            <li>Hội thoại thực tế với người bản xứ</li>
            <li>Luyện phát âm với AI</li>
            <li>Role-play tình huống</li>
            <li>Ghi âm và đánh giá</li>
            <li>Thực hành với cộng đồng</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Conversation;
