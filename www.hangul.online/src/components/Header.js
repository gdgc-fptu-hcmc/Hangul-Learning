import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import logoSrc from '../cdn.resource.com/PGyhmgS3zZncIEGywnx5UXsKwepRRFQ9BhAg/WHNrlQ=.png';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
    setIsUserMenuOpen(false);
  };

  return (
    <div className="google-cloud-header">
      <div className="header-container">
        <div className="header-left">
          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className="material-icons">menu</span>
          </button>

          <Link
            to="/"
            className="logo-link"
          >
            <img
              alt="Hangul Online"
              height="24"
              aria-label="Hangul Online"
              src={logoSrc}
            />
          </Link>
        </div>

        <nav className="header-nav">
          <Link to="/catalog" className="nav-link">Khám phá</Link>
          <Link to="/paths" className="nav-link">Lộ trình học</Link>
          <Link to="/subscriptions" className="nav-link">Gói học</Link>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Tìm kiếm">
            <span className="material-icons">search</span>
          </button>

          <button className="icon-btn" aria-label="Trợ giúp">
            <span className="material-icons">help_outline</span>
          </button>

          <button className="icon-btn" aria-label="Ngôn ngữ">
            <span className="material-icons">public</span>
          </button>

          {user ? (
            <div className="user-menu-container">
              <button
                className="user-menu-btn"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                aria-label="Menu người dùng"
              >
                <div className="user-avatar">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || 'User'} />
                  ) : (
                    <span className="material-icons">person</span>
                  )}
                </div>
                <span className="user-name">
                  {user.displayName || user.email?.split('@')[0] || 'User'}
                </span>
                <span className="material-icons">expand_more</span>
              </button>

              {isUserMenuOpen && (
                <div className="user-dropdown">
                  <div className="user-info">
                    <div className="user-avatar-large">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt={user.displayName || 'User'} />
                      ) : (
                        <span className="material-icons">person</span>
                      )}
                    </div>
                    <div className="user-details">
                      <div className="user-display-name">
                        {user.displayName || 'User'}
                      </div>
                      <div className="user-email">{user.email}</div>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" onClick={() => navigate('/profile')}>
                    <span className="material-icons">person</span>
                    Hồ sơ cá nhân
                  </button>
                  <button className="dropdown-item" onClick={() => navigate('/progress')}>
                    <span className="material-icons">school</span>
                    Tiến độ học tập
                  </button>
                  <button className="dropdown-item" onClick={() => navigate('/certificates')}>
                    <span className="material-icons">workspace_premium</span>
                    Chứng chỉ của tôi
                  </button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" onClick={handleLogout}>
                    <span className="material-icons">logout</span>
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signin" className="sign-in-btn">Đăng nhập</Link>
              <Link to="/signup" className="sign-up-btn">Đăng ký</Link>
            </>
          )}
        </div>
      </div>

      {/* Trial Banner */}
      <div className="console-free-trial-banner-container">
        <div className="trial-banner">
          <div className="trial-banner-actions">
            <p className="trial-banner-text ql-body-medium">
              Thực hành tiếng Hàn với các bài tập tương tác
            </p>
            <div className="custom-action">
              <button
                className="ql-button elevated"
                onClick={() => scrollToSection('lessons')}
              >
                Bắt đầu học ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
