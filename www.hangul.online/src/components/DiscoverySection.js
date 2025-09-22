import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Catalog.css';

const topics = [
  {
    id: 'hangul',
    title: 'Bảng chữ cái Hangul',
    description: 'Học nguyên âm, phụ âm và cách ghép chữ cơ bản.',
    icon: 'translate',
    path: '/hangul',
    duration: '~2 giờ',
  },
  {
    id: 'pronunciation',
    title: 'Phát âm chuẩn',
    description: 'Quy tắc phát âm, nối âm và các mẹo nói tự nhiên.',
    icon: 'record_voice_over',
    path: '/hangul',
    duration: '~3 giờ',
  },
  {
    id: 'grammar',
    title: 'Ngữ pháp cơ bản',
    description: 'Cấu trúc câu, trợ từ và thì phổ biến trong tiếng Hàn.',
    icon: 'menu_book',
    path: '/paths',
    duration: '~4 giờ',
  },
  {
    id: 'vocabulary',
    title: 'Từ vựng thông dụng',
    description: 'Từ vựng theo chủ đề: gia đình, mua sắm, trường học... ',
    icon: 'inventory_2',
    path: '/catalog',
    duration: 'Hàng tuần',
  },
  {
    id: 'phrases',
    title: 'Câu giao tiếp hằng ngày',
    description: 'Chào hỏi, giới thiệu bản thân, hỏi đường, đặt món...',
    icon: 'chat_bubble',
    path: '/conversation',
    duration: 'Liên tục',
  },
  {
    id: 'numbers-time',
    title: 'Số đếm & Thời gian',
    description: 'Hệ số Hán – Hàn và thuần Hàn, cách nói giờ – ngày – tháng.',
    icon: 'schedule',
    path: '/catalog',
    duration: '1.5 giờ',
  },
  {
    id: 'honorifics',
    title: 'Kính ngữ & tôn kính',
    description: 'Cách xưng hô lịch sự, hậu tố kính ngữ và mức độ trang trọng.',
    icon: 'military_tech',
    path: '/catalog',
    duration: '~2 giờ',
  },
  {
    id: 'topik',
    title: 'Luyện thi TOPIK',
    description: 'Chiến lược làm bài, đề luyện và mẹo đạt điểm cao.',
    icon: 'school',
    path: '/topik',
    duration: 'Theo lộ trình',
  },
];

const DiscoverySection = () => {
  return (
    <section className="discovery-section">
      <div className="discovery-header">
        <h2 className="ql-display-medium">Khám phá bài học</h2>
        <p className="ql-body-large discovery-subtitle">
          Các chủ đề độc lập, dễ bắt đầu – thiết kế đồng nhất, thân thiện.
        </p>
      </div>

      <div className="discovery-grid">
        {topics.map((t) => (
          <div key={t.id} className="ql-activity-card discovery-card">
            <div className="discovery-card-header">
              <span className="material-icons discovery-icon" aria-hidden>
                {t.icon}
              </span>
              <span className="discovery-chip">Chủ đề</span>
            </div>

            <div className="discovery-card-content">
              <h3 className="discovery-title">{t.title}</h3>
              <p className="discovery-description">{t.description}</p>
              <div className="discovery-meta">
                <span className="material-icons">schedule</span>
                <span className="discovery-duration">{t.duration}</span>
              </div>
            </div>

            <div className="discovery-card-actions">
              {t.path ? (
                <Link to={t.path} className="ql-button">
                  Bắt đầu
                </Link>
              ) : (
                <button className="ql-button">Bắt đầu</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverySection;
