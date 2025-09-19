import React, { useState } from 'react';
import '../styles/Page.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
    rating: 5
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Feedback submitted:', formData);
  };

  return (
    <div className="page-container" style={{ background: 'white', minHeight: '100vh' }}>
      <div className="page-header">
        <h1>Góp ý & Phản hồi</h1>
        <p>Chia sẻ ý kiến của bạn để chúng tôi cải thiện dịch vụ</p>
      </div>
      
      <div className="page-content">
        <section className="feedback-form-section">
          <h2>Gửi phản hồi</h2>
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Họ và tên *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="subject">Chủ đề *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Danh mục *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Chọn danh mục</option>
                  <option value="technical">Vấn đề kỹ thuật</option>
                  <option value="content">Nội dung khóa học</option>
                  <option value="ui">Giao diện người dùng</option>
                  <option value="feature">Tính năng mới</option>
                  <option value="other">Khác</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="rating">Đánh giá (1-5 sao)</label>
              <div className="rating-input">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`star ${star <= formData.rating ? 'active' : ''}`}
                    onClick={() => setFormData({...formData, rating: star})}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Nội dung phản hồi *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Mô tả chi tiết ý kiến của bạn..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Gửi phản hồi</button>
          </form>
        </section>

        <section className="feedback-info">
          <h2>Thông tin liên hệ</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> nguyenductuan11012003@gmail.com</p>
            <p><strong>Thời gian phản hồi:</strong> 24-48 giờ</p>
            <p><strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=61578024878281" target="_blank" rel="noopener noreferrer">Cộng đồng Hangul Online</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Feedback;
