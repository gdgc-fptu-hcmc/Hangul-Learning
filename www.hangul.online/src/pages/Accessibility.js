import React, { useState, useEffect } from 'react';
import '../styles/Legal.css'; // Giả sử bạn có file CSS này

// --- Configuration Objects: Giúp quản lý các tùy chọn dễ dàng hơn ---
const fontOptions = [
  { key: 'small', label: 'A', value: '14px' },
  { key: 'medium', label: 'A', value: '16px' }, // Giá trị mặc định
  { key: 'large', label: 'A', value: '18px' },
];

const contrastOptions = [
  { key: 'normal', label: 'Bình thường' },
  { key: 'high', label: 'Cao' },
];

const Accessibility = () => {
  // --- State Management ---
  // Khởi tạo state từ localStorage hoặc dùng giá trị mặc định
  const [fontSize, setFontSize] = useState(() => localStorage.getItem('fontSize') || 'medium');
  const [contrast, setContrast] = useState(() => localStorage.getItem('contrast') || 'normal');

  // --- Side Effects Management using useEffect ---

  // Effect để áp dụng và lưu trữ KÍCH THƯỚC CHỮ
  useEffect(() => {
    // 1. Áp dụng style vào DOM
    const selectedFont = fontOptions.find(opt => opt.key === fontSize);
    if (selectedFont) {
      document.documentElement.style.fontSize = selectedFont.value;
    }
    
    // 2. Lưu lựa chọn vào localStorage
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]); // Chỉ chạy lại khi `fontSize` thay đổi

  // Effect để áp dụng và lưu trữ ĐỘ TƯƠNG PHẢN
  useEffect(() => {
    // 1. Áp dụng class vào DOM
    if (contrast === 'high') {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // 2. Lưu lựa chọn vào localStorage
    localStorage.setItem('contrast', contrast);
  }, [contrast]); // Chỉ chạy lại khi `contrast` thay đổi

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Hỗ trợ tiếp cận</h1>
        <p className="last-updated">Cập nhật lần cuối: 15/12/2024</p>

        <div className="accessibility-tools">
          <h2>Công cụ hỗ trợ tiếp cận</h2>
          <p>Sử dụng các công cụ bên dưới để tùy chỉnh trải nghiệm duyệt web phù hợp với nhu cầu của bạn.</p>
          
          <div className="accessibility-controls">
            {/* --- Font Size Controls (Rendered from data) --- */}
            <div className="control-group">
              <h3>Kích thước chữ</h3>
              <div className="font-size-controls">
                {fontOptions.map(option => (
                  <button
                    key={option.key}
                    className={`font-btn ${fontSize === option.key ? 'active' : ''}`}
                    onClick={() => setFontSize(option.key)}
                    aria-label={`Đặt kích thước chữ thành ${option.key}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* --- Contrast Controls (Rendered from data) --- */}
            <div className="control-group">
              <h3>Độ tương phản</h3>
              <div className="contrast-controls">
                {contrastOptions.map(option => (
                  <button
                    key={option.key}
                    className={`contrast-btn ${contrast === option.key ? 'active' : ''}`}
                    onClick={() => setContrast(option.key)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* Nội dung thông tin về chính sách giữ nguyên vì đã rất tốt và chi tiết */}
        {/* ================================================================== */}
        
        <h2>1. Cam kết về khả năng tiếp cận</h2>
        <p>Hangul Online cam kết đảm bảo khả năng tiếp cận kỹ thuật số cho tất cả người dùng, bao gồm những người có khuyết tật. Chúng tôi tuân thủ các tiêu chuẩn quốc tế về khả năng tiếp cận web và liên tục cải thiện trải nghiệm người dùng.</p>
        
        {/* ... (Tất cả các phần nội dung còn lại của bạn giữ nguyên) ... */}

      </div>
    </div>
  );
};

export default Accessibility;