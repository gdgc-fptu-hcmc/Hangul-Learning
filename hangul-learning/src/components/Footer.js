import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

// Component Footer: hiển thị chân trang với logo nhà tài trợ, liên kết phụ trợ và bản quyền
function Footer() {
  // Lấy năm hiện tại để hiển thị bản quyền động
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Phần Nhà tài trợ: hiển thị logo, đường dẫn đối tác và lời cảm ơn */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
            Được tài trợ bởi
          </p>
          <div className="flex justify-center mb-4">
            <a
              href="https://www.facebook.com/gdg.fptu.hcmc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OptimizedImage
                src="/logo_nha_tai_tro.jpg"
                alt="Logo nhà tài trợ"
                className="h-16 md:h-20 object-contain hover:grayscale-0 transition-all duration-300 cursor-pointer"
              />
            </a>
          </div>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
          Xin chân thành cảm ơn sự đồng hành và hỗ trợ quý báu từ các đối tác trong quá trình phát triển nền tảng học tiếng Hàn miễn phí.
          </p>
        </div>

        {/* Bottom links and copyright */}
        {/* Phần liên kết chính sách, ủng hộ và thông tin bản quyền */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm border-t border-gray-700 pt-6">
          <div className="flex space-x-6 order-1 md:order-none mb-4 md:mb-0">
            <Link to="/privacy-policy" className="hover:text-white">Chính sách bảo mật</Link>
            <Link to="/terms-of-service" className="hover:text-white">Điều khoản sử dụng</Link>
            <Link to="/donate" className="hover:text-white">Ủng hộ</Link>
          </div>
          <p className="order-2 text-center md:text-right">&copy; {currentYear} 한국어학습 | 韓國語學習. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
