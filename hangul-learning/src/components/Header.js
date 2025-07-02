import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/guide', label: 'Hướng dẫn' },
    { path: '/basic', label: 'Cơ bản' },
    { path: '/vocabulary', label: 'Từ vựng' },
    { path: '/grammar', label: 'Ngữ pháp' },
    { path: '/exercises', label: 'Bài tập' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm safe-area-top">
      <div className="container-mobile relative">
        <div className="flex items-center justify-between h-16 xs:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 xs:space-x-3 relative group tap-highlight-none" onClick={closeMenu}>
              {/* Korean decorative accent line - hidden on very small screens */}

              
              <OptimizedImage 
                className="h-8 w-8 xs:h-10 xs:w-10 rounded-full shadow-lg border-2 border-korean-blue object-cover group-hover:scale-105 transition-transform" 
                src="/logo.webp" 
                alt="한국어학습 Logo" 
                style={{ borderColor: '#2B6CB0' }}
                width="40"
                height="40"
                loading="eager"
              />
              
              <div className="relative">
                <span className="korean-authentic-title text-base xs:text-lg sm:text-xl" style={{ 
                  fontFamily: '"Noto Sans CJK KR", "Apple SD Gothic Neo", "나눔바른고딕", "NanumBarunGothic", "맑은 고딕", sans-serif',
                  fontSize: 'clamp(16px, 4vw, 20px)',
                  fontWeight: '600',
                  color: '#1A365D',
                  background: 'linear-gradient(45deg, #1A4B84 0%, #8B4B9C 50%, #C4314B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.3px',
                  lineHeight: '1.2',
                  position: 'relative'
                }}>
                  한국어학습
                </span>
                
                {/* Korean traditional Obangsaek pattern dots - responsive */}
                <div className="absolute -top-0.5 xs:-top-1 -right-2 xs:-right-3 flex space-x-0.5">
                  <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 bg-blue-500 rounded-full opacity-60"></div>
                  <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 bg-red-500 rounded-full opacity-60"></div>
                  <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 bg-yellow-500 rounded-full opacity-60"></div>
                </div>
                
                {/* Subtle Korean paper texture effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 pointer-events-none"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors touch-target ${
                  location.pathname === item.path
                    ? 'border-primary text-secondary'
                    : 'border-transparent text-text-light hover:border-gray-300 hover:text-text-dark'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Donate Button & Mobile Menu Button */}
          <div className="flex items-center space-x-2 xs:space-x-4">
            {/* Desktop Donate Button */}
            <Link
              to="/donate"
              className="hidden sm:inline-flex items-center justify-center px-3 xs:px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-text-dark bg-light-gray hover:bg-gray-200 transition-colors touch-target"
            >
              Ủng hộ
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-text-light hover:text-text-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary touch-target tap-highlight-none"
              aria-expanded="false"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg max-h-96 overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block px-4 py-4 rounded-md text-base font-medium transition-colors touch-target tap-highlight-none min-h-12 active:bg-gray-100 ${
                    location.pathname === item.path
                      ? 'text-primary bg-orange-50 border-l-4 border-primary'
                      : 'text-text-light hover:text-text-dark hover:bg-gray-50'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Donate Button */}
              <Link
                to="/donate"
                onClick={closeMenu}
                className="block w-full text-center px-4 py-4 mt-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-orange-600 transition-colors touch-target tap-highlight-none min-h-12 active:bg-orange-700"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                Ủng hộ dự án
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-25" 
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
}

export default Header; 