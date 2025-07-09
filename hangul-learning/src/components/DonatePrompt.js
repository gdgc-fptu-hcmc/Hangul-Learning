import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DonatePrompt = () => {
  const [show, setShow] = useState(true); // Changed to true for immediate display

  useEffect(() => {
    // Kiểm tra xem đã hiển thị chưa trong localStorage
    const shown = localStorage.getItem('donatePromptShown');
    if (!shown) {
      setShow(true);
      // Sau 5 phút sẽ lưu trạng thái đã hiển thị
      const timer = setTimeout(() => {
        localStorage.setItem('donatePromptShown', 'true');
      }, 300000); // 5 minutes

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-white rounded-lg shadow-lg p-4 border border-korean-blue animate-float-mobile z-50">
      <div className="flex items-start">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">
            Bạn thấy nội dung hữu ích? Hãy ủng hộ chúng tôi để duy trì và phát triển thêm nhiều tính năng mới!
          </p>
          <div className="flex space-x-2">
            <Link
              to="/donate"
              className="text-sm px-3 py-1.5 bg-primary text-white rounded hover:bg-orange-600 transition-colors"
            >
              Ủng hộ ngay
            </Link>
            <button
              onClick={() => setShow(false)}
              className="text-sm px-3 py-1.5 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Để sau
            </button>
          </div>
        </div>
        <button
          onClick={() => setShow(false)}
          className="ml-4 text-gray-400 hover:text-gray-600 text-xl"
          aria-label="Đóng"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default DonatePrompt; 