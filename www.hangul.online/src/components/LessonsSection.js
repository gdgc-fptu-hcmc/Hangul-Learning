import React, { useState, useEffect } from 'react';
import LessonCard from './LessonCard';
import '../styles/LessonsSection.css';

const LessonsSection = ({ activeCategory = 'Đề xuất' }) => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  // Categories for filtering lessons
  const categories = [
    'Đề xuất',
    'Hangul cơ bản',
    'Phát âm',
    'Từ vựng',
    'Ngữ pháp',
    'Luyện thi TOPIK'
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLessons([
        {
          id: 1,
          title: "Học bảng chữ cái Hangul cơ bản",
          description: "Khóa học giới thiệu về bảng chữ cái Hangul, giúp bạn nắm vững nền tảng cơ bản nhất của tiếng Hàn. Học cách đọc, viết và phát âm chính xác các ký tự Hàn Quốc.",
          koreanText: "한글",
          difficulty: "introductory",
          duration: "3 giờ",
          type: "course",
          credentialType: "skill_badge"
        },
        {
          id: 2,
          title: "Giao tiếp tiếng Hàn cơ bản",
          description: "Phát triển kỹ năng giao tiếp tiếng Hàn hàng ngày với các tình huống thực tế. Học cách chào hỏi, giới thiệu bản thân và trò chuyện cơ bản.",
          koreanText: "안녕하세요",
          difficulty: "introductory",
          duration: "5 giờ",
          type: "course",
          credentialType: "skill_badge"
        },
        {
          id: 3,
          title: "Từ vựng tiếng Hàn thông dụng",
          description: "Xây dựng vốn từ vựng tiếng Hàn thiết yếu cho cuộc sống hàng ngày. Học từ vựng theo chủ đề và cách sử dụng trong ngữ cảnh thực tế.",
          koreanText: "단어",
          difficulty: "introductory",
          duration: "4 giờ",
          type: "course",
          credentialType: "skill_badge"
        },
        {
          id: 4,
          title: "Phát âm tiếng Hàn chuẩn",
          description: "Luyện tập phát âm tiếng Hàn chính xác với hướng dẫn chi tiết và audio chuẩn từ giáo viên bản ngữ.",
          koreanText: "발음",
          difficulty: "introductory",
          duration: "6 giờ",
          type: "course",
          credentialType: "skill_badge"
        },
        {
          id: 5,
          title: "Ngữ pháp tiếng Hàn cơ bản",
          description: "Nắm vững các cấu trúc ngữ pháp cơ bản của tiếng Hàn để giao tiếp hiệu quả trong cuộc sống hàng ngày.",
          koreanText: "문법",
          difficulty: "intermediate",
          duration: "8 giờ",
          type: "course",
          credentialType: "skill_badge"
        },
        {
          id: 6,
          title: "Luyện thi TOPIK I & II",
          description: "Khóa học chuyên sâu chuẩn bị cho kỳ thi TOPIK với đề thi mẫu, chiến lược làm bài và tips từ chuyên gia.",
          koreanText: "토픽",
          difficulty: "advanced",
          duration: "12 giờ",
          type: "course",
          credentialType: "certification"
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="ql-spinner"></div>
      </div>
    );
  }

  // Filter lessons based on active category
  const filteredLessons = lessons.filter(lesson => {
    if (activeCategory === 'Đề xuất') return true;
    if (activeCategory === 'Hangul cơ bản') return lesson.title.includes('Hangul');
    if (activeCategory === 'Phát âm') return lesson.title.includes('phát âm');
    if (activeCategory === 'Từ vựng') return lesson.title.includes('từ vựng');
    if (activeCategory === 'Ngữ pháp') return lesson.title.includes('ngữ pháp');
    if (activeCategory === 'Luyện thi TOPIK') return lesson.title.includes('TOPIK');
    return true;
  });

  return (
    <section className='guest-front-door-block trending-body' id='learn-korean' label='Học tiếng Hàn' tabIndex='0'>
      <div className='section-header'>
        <h2 className='ql-display-medium'>
          Khóa học <strong>{activeCategory}</strong>
        </h2>
        <p className='ql-body-large section-description'>
          {activeCategory === 'Đề xuất' && 'Các khóa học được đề xuất dành cho bạn'}
          {activeCategory === 'Hangul cơ bản' && 'Học bảng chữ cái Hangul từ cơ bản'}
          {activeCategory === 'Phát âm' && 'Luyện phát âm tiếng Hàn chuẩn'}
          {activeCategory === 'Từ vựng' && 'Xây dựng vốn từ vựng phong phú'}
          {activeCategory === 'Ngữ pháp' && 'Nắm vững ngữ pháp tiếng Hàn'}
          {activeCategory === 'Luyện thi TOPIK' && 'Chuẩn bị thi TOPIK hiệu quả'}
        </p>
      </div>
      
      <div className='featured'>
        <div className='cards'>
          {filteredLessons.length > 0 ? (
            filteredLessons.map(lesson => (
              <LessonCard 
                key={lesson.id}
                lesson={lesson}
              />
            ))
          ) : (
            <div className='no-lessons'>
              <div className='no-lessons-content'>
                <span className='no-lessons-icon'>📚</span>
                <h3 className='ql-title-large'>Chưa có khóa học cho danh mục này</h3>
                <p className='ql-body-medium'>Chúng tôi đang cập nhật thêm khóa học. Vui lòng quay lại sau!</p>
                <button className='ql-button' onClick={() => window.location.reload()}>
                  Xem khóa học đề xuất
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <ql-button href='catalog0d31.html?locale=vi&sort_by=marketing_featured' onClick={() => console.log('frontdoor_explore_catalog')}>
        Xem tất cả khóa học
      </ql-button>
    </section>
  );
};

export default LessonsSection;
