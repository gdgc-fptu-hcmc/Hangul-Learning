import React, { useState } from 'react';
import '../styles/CategoryNav.css';

const CategoryNav = ({ onCategoryChange, activeCategory: parentActiveCategory }) => {
  const [localActiveCategory, setLocalActiveCategory] = useState(parentActiveCategory || 'Đề xuất');

  const categories = [
    { 
      id: 'de-xuat', 
      label: 'Đề xuất', 
      description: 'Khóa học được đề xuất cho bạn'
    },
    { 
      id: 'hangul-co-ban', 
      label: 'Hangul cơ bản', 
      description: 'Học bảng chữ cái Hangul từ đầu'
    },
    { 
      id: 'phat-am', 
      label: 'Phát âm', 
      description: 'Luyện phát âm chuẩn'
    },
    { 
      id: 'tu-vung', 
      label: 'Từ vựng', 
      description: 'Xây dựng vốn từ vựng'
    },
    { 
      id: 'ngu-phap', 
      label: 'Ngữ pháp', 
      description: 'Nắm vững ngữ pháp tiếng Hàn'
    },
    { 
      id: 'luyen-thi-topik', 
      label: 'Luyện thi TOPIK', 
      description: 'Chuẩn bị thi TOPIK'
    }
  ];

  const handleCategoryClick = (category) => {
    setLocalActiveCategory(category.label);
    if (onCategoryChange) {
      onCategoryChange(category.label);
    }
  };

  const activeCategory = parentActiveCategory || localActiveCategory;

  return (
    <div className="category-nav-container">
      <div className="category-nav-wrapper">
        <h3 className="category-nav-title">Chọn lộ trình học của bạn</h3>
        <div className="category-nav">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`category-chip ${activeCategory === category.label ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
              title={category.description}
              aria-label={`${category.label} - ${category.description}`}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-label">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
