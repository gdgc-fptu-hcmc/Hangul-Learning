import React, { useMemo, useState } from 'react';
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
    category: 'Bảng chữ cái',
  },
  {
    id: 'pronunciation',
    title: 'Phát âm chuẩn',
    description: 'Quy tắc phát âm, nối âm và các mẹo nói tự nhiên.',
    icon: 'record_voice_over',
    path: '/hangul',
    duration: '~3 giờ',
    category: 'Phát âm',
  },
  {
    id: 'grammar',
    title: 'Ngữ pháp cơ bản',
    description: 'Cấu trúc câu, trợ từ và thì phổ biến trong tiếng Hàn.',
    icon: 'menu_book',
    path: '/paths',
    duration: '~4 giờ',
    category: 'Ngữ pháp',
  },
  {
    id: 'vocabulary',
    title: 'Từ vựng thông dụng',
    description: 'Từ vựng theo chủ đề: gia đình, mua sắm, trường học... ',
    icon: 'inventory_2',
    path: '/catalog',
    duration: 'Hàng tuần',
    category: 'Từ vựng',
  },
  {
    id: 'phrases',
    title: 'Câu giao tiếp hằng ngày',
    description: 'Chào hỏi, giới thiệu bản thân, hỏi đường, đặt món...',
    icon: 'chat_bubble',
    path: '/conversation',
    duration: 'Liên tục',
    category: 'Giao tiếp',
  },
  {
    id: 'numbers-time',
    title: 'Số đếm & Thời gian',
    description: 'Hệ số Hán – Hàn và thuần Hàn, cách nói giờ – ngày – tháng.',
    icon: 'schedule',
    path: '/catalog',
    duration: '1.5 giờ',
    category: 'Cơ bản khác',
  },
  {
    id: 'honorifics',
    title: 'Kính ngữ & tôn kính',
    description: 'Cách xưng hô lịch sự, hậu tố kính ngữ và mức độ trang trọng.',
    icon: 'military_tech',
    path: '/catalog',
    duration: '~2 giờ',
    category: 'Giao tiếp',
  },
  {
    id: 'topik',
    title: 'Luyện thi TOPIK',
    description: 'Chiến lược làm bài, đề luyện và mẹo đạt điểm cao.',
    icon: 'school',
    path: '/topik',
    duration: 'Theo lộ trình',
    category: 'TOPIK',
  },
];

const categories = ['Tất cả', 'Bảng chữ cái', 'Phát âm', 'Ngữ pháp', 'Từ vựng', 'Giao tiếp', 'Cơ bản khác', 'TOPIK'];

const DiscoverySection = () => {
  const [active, setActive] = useState('Tất cả');

  const filtered = useMemo(() => {
    if (active === 'Tất cả') return topics;
    return topics.filter(t => t.category === active);
  }, [active]);

  return (
    <section className="discovery-section">
      <div className="discovery-header">
        <div className="discovery-toolbar">
          <div className="discovery-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`ql-chip ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="discovery-count ql-body-medium">{filtered.length} chủ đề</div>
        </div>
      </div>

      <div className="discovery-grid">
        {filtered.map((t) => (
          <div key={t.id} className="ql-activity-card discovery-card">
            <div className="discovery-card-header">
              <span className="material-icons discovery-icon" aria-hidden>
                {t.icon}
              </span>
              <span className="discovery-chip">{t.category}</span>
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
