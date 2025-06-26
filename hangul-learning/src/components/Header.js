import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const menuItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/grammar', label: 'Ngữ pháp' },
    { path: '/vocabulary', label: 'Từ vựng' },
    { path: '/exercises', label: 'Bài tập' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img className="h-8 w-auto" src="/logo.png" alt="Hangul Learning Logo" />
              <span className="text-xl font-bold text-secondary">Hangul Learning</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === item.path
                    ? 'border-primary text-secondary'
                    : 'border-transparent text-text-light hover:border-gray-300 hover:text-text-dark'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-text-dark bg-light-gray hover:bg-gray-200"
            >
              Ủng hộ
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 