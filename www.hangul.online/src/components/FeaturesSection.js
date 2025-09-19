import React from 'react';
import '../styles/FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: "fas fa-graduation-cap",
      title: "Học từ cơ bản",
      description: "Bắt đầu từ bảng chữ cái Hangeul và phát triển dần lên"
    },
    {
      icon: "fas fa-headphones",
      title: "Phát âm chuẩn",
      description: "Luyện tập phát âm với audio chất lượng cao"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Học mọi lúc mọi nơi",
      description: "Truy cập bài học trên mọi thiết bị, mọi lúc"
    },
    {
      icon: "fas fa-users",
      title: "Cộng đồng học tập",
      description: "Kết nối với những người học tiếng Hàn khác"
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Tại sao chọn Hangul Online?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
