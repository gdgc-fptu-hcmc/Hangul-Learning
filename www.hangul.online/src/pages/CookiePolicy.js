import React, { useState, useEffect } from 'react';
import '../styles/Legal.css';

// --- Data-driven approach for cookie categories ---
// Giúp code gọn gàng, dễ mở rộng và bảo trì hơn
const cookieCategories = [
  {
    key: 'functional',
    title: 'Cookie chức năng',
    description: 'Những cookie này cho phép trang web ghi nhớ các lựa chọn của bạn để cung cấp các tính năng nâng cao và cá nhân hóa hơn.',
  },
  {
    key: 'analytics',
    title: 'Cookie phân tích',
    description: 'Những cookie này giúp chúng tôi hiểu cách bạn tương tác với trang web, qua đó cải thiện hiệu suất.',
  },
  {
    key: 'marketing',
    title: 'Cookie marketing',
    description: 'Những cookie này được sử dụng để theo dõi và hiển thị các quảng cáo phù hợp và hấp dẫn với bạn.',
  },
];

const CookiePolicy = () => {
  // --- State Management ---
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  // --- State Persistence: Load preferences from localStorage on initial render ---
  // Chạy một lần duy nhất khi component được mount
  useEffect(() => {
    try {
      const savedPreferences = localStorage.getItem('cookiePreferences');
      if (savedPreferences) {
        setCookiePreferences(JSON.parse(savedPreferences));
      }
    } catch (error) {
      console.error("Failed to parse cookie preferences from localStorage", error);
    }
  }, []);

  // --- Event Handlers ---
  const handlePreferenceChange = (type) => {
    // Cookie cần thiết không thể bị vô hiệu hóa
    if (type === 'necessary') return;

    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    try {
      localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
      // Hiển thị thông báo thành công một cách tinh tế
      setShowConfirmation(true);
      // Tự động ẩn thông báo sau 3 giây
      setTimeout(() => setShowConfirmation(false), 3000);
    } catch (error) {
      console.error("Failed to save cookie preferences to localStorage", error);
      alert("Đã có lỗi xảy ra khi lưu tùy chọn của bạn.");
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    setCookiePreferences(allAccepted);
    // Lưu ngay sau khi chấp nhận tất cả
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  // --- Render Logic ---
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Chính sách Cookie</h1>
        <p className="last-updated">Cập nhật lần cuối: 15/12/2024</p>

        <div className="cookie-banner">
          <h2>Quản lý sự đồng ý về Cookie</h2>
          <p>Chúng tôi sử dụng cookie để cải thiện trải nghiệm của bạn trên trang web. Bạn có thể tùy chỉnh các tùy chọn cookie bên dưới và lưu lại lựa chọn của mình.</p>

          <div className="cookie-controls">
            {/* Necessary Cookies - Rendered separately as it's always disabled */}
            <div className="cookie-category">
              <div className="cookie-header">
                <h3>Cookie cần thiết</h3>
                <label className="cookie-toggle">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.necessary}
                    disabled
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <p>Những cookie này là bắt buộc cho hoạt động của trang web và không thể bị tắt trong hệ thống của chúng tôi.</p>
            </div>

            {/* Other Cookie Categories - Rendered using .map() for DRY code */}
            {cookieCategories.map((category) => (
              <div className="cookie-category" key={category.key}>
                <div className="cookie-header">
                  <h3>{category.title}</h3>
                  <label className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={cookiePreferences[category.key]}
                      onChange={() => handlePreferenceChange(category.key)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <p>{category.description}</p>
              </div>
            ))}
          </div>

          {/* Improved UX for confirmation message */}
          {showConfirmation && (
            <div className="confirmation-message">
              Tùy chọn của bạn đã được lưu thành công!
            </div>
          )}

          <div className="cookie-actions">
            <button className="save-preferences" onClick={savePreferences}>
              Lưu tùy chọn
            </button>
            <button className="accept-all" onClick={handleAcceptAll}>
              Chấp nhận tất cả
            </button>
          </div>
        </div>

        {/* ... (Các phần nội dung còn lại của chính sách giữ nguyên) ... */}
        <h2>1. Cookie là gì?</h2>
        <p>Cookie là các tệp văn bản nhỏ được lưu trữ trên thiết bị của bạn khi bạn truy cập trang web. Chúng được sử dụng để ghi nhớ thông tin về bạn và sở thích của bạn, giúp cải thiện trải nghiệm duyệt web.</p>
        
        {/* ... Phần còn lại của trang ... */}
      </div>
    </div>
  );
};

export default CookiePolicy;