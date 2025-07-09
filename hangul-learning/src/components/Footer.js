import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import { Youtube, Facebook, Mail, Phone } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo và thông tin bên trái */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative">
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <OptimizedImage
                  src="/logo.webp"
                  alt="한국어학습 Logo"
                  className="h-12 w-12 rounded-full shadow-lg border-2 border-korean-blue"
                />
                <span className="text-xl font-bold text-white">한국어학습</span>
              </Link>
              <div className="absolute -top-1 -right-2 flex space-x-0.5">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-60"></div>
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full opacity-60"></div>
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-60"></div>
              </div>
            </div>
            <p className="text-sm text-white text-center md:text-left">
              Nền tảng học tiếng Hàn miễn phí dành cho người Việt Nam. Chúng tôi cam kết mang đến trải nghiệm học tập hiệu quả và thuận tiện nhất.
            </p>
          </div>

          {/* Liên kết và thông tin liên hệ */}
          <div className="flex flex-col items-center md:items-start space-y-6 text-center">
            <h3 className="text-lg font-semibold text-white">Liên hệ</h3>
            <div className="flex flex-col space-y-4">
              <a href="mailto:nguyenductuan11012003@gmail.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                nguyenductuan11012003@gmail.com

              </a>
              <a href="tel:+84387050243" className="flex items-center hover:text-white transition-colors">
                <Phone className="w-5 h-5 mr-3" />
                +84 387 050 243
              </a>
              <div className="flex space-x-6 mt-2">
                <a
                  href="https://youtube.com/@hangul.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61578024878281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Nhà tài trợ */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-lg font-semibold text-white">Nhà tài trợ</h3>
            <div className="flex flex-col items-center">
              <a
                href="https://www.facebook.com/gdg.fptu.hcmc"
                target="_blank"
                rel="noopener noreferrer"
                className="block group mb-6"
              >
                <OptimizedImage
                  src="/logo_nha_tai_tro.webp"
                  alt="Logo nhà tài trợ"
                  className="h-20 object-contain group-hover:opacity-90 transition-all duration-300 filter brightness-110"
                />
              </a>
              <p className="text-sm text-white text-center max-w-xs">
                Xin chân thành cảm ơn sự đồng hành và hỗ trợ quý báu từ các đối tác trong việc phát triển nền tảng học tập.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom links and copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex space-x-8 order-1 md:order-none mb-4 md:mb-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Điều khoản sử dụng</Link>
            <Link to="/donate" className="hover:text-white transition-colors">Ủng hộ</Link>
          </div>
          <p className="order-2 text-center md:text-right">&copy; {currentYear} 한국어학습 | 韓國語學習. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;