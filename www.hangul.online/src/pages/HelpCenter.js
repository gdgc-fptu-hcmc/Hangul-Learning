import React, { useState } from 'react';
import '../styles/Page.css';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'account',
      title: 'Tài khoản & Đăng nhập',
      articles: [
        'Cách đăng ký tài khoản mới',
        'Quên mật khẩu - Khôi phục như thế nào?',
        'Thay đổi thông tin cá nhân',
        'Xóa tài khoản vĩnh viễn',
        'Liên kết tài khoản Google/Facebook'
      ]
    },
    {
      id: 'courses',
      title: 'Khóa học & Học tập',
      articles: [
        'Cách bắt đầu khóa học',
        'Theo dõi tiến độ học tập',
        'Tải tài liệu và bài tập',
        'Làm bài kiểm tra và thi',
        'Nhận chứng chỉ hoàn thành'
      ]
    },
    {
      id: 'payment',
      title: 'Thanh toán & Gói học',
      articles: [
        'Các phương thức thanh toán',
        'Mua gói học Premium/VIP',
        'Chính sách hoàn tiền',
        'Gia hạn gói học',
        'Lịch sử giao dịch'
      ]
    },
    {
      id: 'technical',
      title: 'Hỗ trợ Kỹ thuật',
      articles: [
        'Video không phát được',
        'Lỗi đăng nhập',
        'Vấn đề âm thanh',
        'Tối ưu hóa trình duyệt',
        'Sử dụng trên thiết bị di động'
      ]
    },
    {
      id: 'mobile',
      title: 'Ứng dụng Di động',
      articles: [
        'Tải ứng dụng Hangul Online',
        'Đăng nhập trên điện thoại',
        'Học offline',
        'Đồng bộ tiến độ',
        'Thông báo và cài đặt'
      ]
    },
    {
      id: 'community',
      title: 'Cộng đồng & Hỗ trợ',
      articles: [
        'Tham gia nhóm học tập',
        'Đặt câu hỏi với giảng viên',
        'Chia sẻ kinh nghiệm học',
        'Báo cáo vấn đề',
        'Đề xuất cải tiến'
      ]
    }
  ];

  const popularArticles = [
    'Làm thế nào để bắt đầu học tiếng Hàn?',
    'Cách đăng ký tài khoản miễn phí',
    'Video không phát được - Khắc phục',
    'Quên mật khẩu - Hướng dẫn khôi phục',
    'Mua gói học Premium như thế nào?',
    'Sử dụng ứng dụng trên điện thoại',
    'Làm bài kiểm tra và nhận chứng chỉ',
    'Liên hệ hỗ trợ kỹ thuật'
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? helpCategories 
    : helpCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="page-container" style={{ background: 'white', minHeight: '100vh' }}>
      <div className="page-header">
        <h1>Trung tâm Trợ giúp</h1>
        <p>Tìm câu trả lời nhanh chóng cho mọi thắc mắc của bạn</p>
      </div>
      
      <div className="page-content">
        {/* Search Section */}
        <section className="search-section">
          <div className="search-container">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Tìm kiếm câu trả lời..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn">Tìm kiếm</button>
            </div>
            <div className="search-suggestions">
              <span>Gợi ý: </span>
              {popularArticles.slice(0, 3).map((article, index) => (
                <button key={index} className="suggestion-tag">
                  {article}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="category-filter">
          <h2>Chọn chủ đề</h2>
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              Tất cả
            </button>
            {helpCategories.map(category => (
              <button 
                key={category.id}
                className={`filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </section>

        {/* Help Categories */}
        <section className="help-categories">
          <h2>Danh mục hỗ trợ</h2>
          <div className="category-grid">
            {filteredCategories.map(category => (
              <div key={category.id} className="category-card">
                <div className="category-header">
                  <h3>{category.title}</h3>
                </div>
                <div className="category-articles">
                  {category.articles.map((article, index) => (
                    <a key={index} href="#" className="article-link">
                      {article}
                    </a>
                  ))}
                </div>
                <a href="#" className="view-all-btn">Xem tất cả →</a>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default HelpCenter;
