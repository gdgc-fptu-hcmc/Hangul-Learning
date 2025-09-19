import React from 'react';
import { Link } from 'react-router-dom';
import logoSrc from '../cdn.resource.com/PGyhmgS3zZncIEGywnx5UXsKwepRRFQ9BhAg/WHNrlQ=.png';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='professional-footer'>
      <div className='footer-container'>
        {/* Main Footer Content */}
        <div className='footer-main'>
          {/* Company Info */}
          <div className='footer-section company-info'>
            <div className='footer-logo'>
              <img src={logoSrc} alt="Hangul Online" />
            </div>
            <p className='company-description'>
              Nền tảng học tiếng Hàn trực tuyến hàng đầu Việt Nam. 
              Chúng tôi cam kết mang đến trải nghiệm học tập chất lượng cao 
              với phương pháp giảng dạy hiện đại và hiệu quả.
            </p>
            <div className='social-links'>
              <a href="https://www.facebook.com/profile.php?id=61578024878281" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className='social-link'>
                <span className="material-icons">facebook</span>
              </a>
              <a href="https://www.youtube.com/@hangul.online" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className='social-link'>
                <span className="material-icons">smart_display</span>
              </a>
              <a href="mailto:nguyenductuan11012003@gmail.com" aria-label="Email" className='social-link'>
                <span className="material-icons">email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='footer-section'>
            <h3 className='footer-title'>Khóa học</h3>
            <ul className='footer-links'>
              <li><Link to="/catalog">Khám phá khóa học</Link></li>
              <li><Link to="/paths">Lộ trình học</Link></li>
              <li><Link to="/hangul">Hangul cơ bản</Link></li>
              <li><Link to="/conversation">Giao tiếp</Link></li>
              <li><Link to="/topik">Luyện thi TOPIK</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className='footer-section'>
            <h3 className='footer-title'>Hỗ trợ</h3>
            <ul className='footer-links'>
              <li><Link to="/help">Trung tâm trợ giúp</Link></li>
              <li><Link to="/faq">Câu hỏi thường gặp</Link></li>
              <li><a href="mailto:nguyenductuan11012003@gmail.com">Liên hệ hỗ trợ</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61578024878281" target="_blank" rel="noopener noreferrer">Cộng đồng học tập</a></li>
              <li><a href="mailto:nguyenductuan11012003@gmail.com">Góp ý</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className='footer-bottom'>
          <div className='footer-bottom-left'>
            <p className='copyright'>
              © {currentYear} Hangul Online. Tất cả quyền được bảo lưu.
            </p>
            <div className='footer-meta-links'>
              <Link to="/privacy">Chính sách bảo mật</Link>
              <Link to="/terms">Điều khoản dịch vụ</Link>
              <Link to="/cookies">Quản lý cookie</Link>
              <Link to="/accessibility">Hỗ trợ tiếp cận</Link>
            </div>
          </div>
          
          <div className='footer-bottom-right'>
            <div className='language-selector'>
              <span className="material-icons">language</span>
              <select className='language-select'>
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
