import React, { useState } from 'react';
import cloudLogo from '../cdn.resource.com/assets/gcp_cloud-e3a77215f0b8bfa9b3f611c0d2208c7e8708ed31.svg';
import CategoryNav from '../components/CategoryNav';
import LessonsSection from '../components/LessonsSection';
import VipSection from '../components/VipSection';
import BusinessSection from '../components/BusinessSection';
import CredentialsSection from '../components/CredentialsSection';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';
import '../styles/Hero.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Đề xuất');

  const scrollToLessons = () => {
    const element = document.getElementById('lessons');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section - Main landing area */}
      <section id="home">
        <div className="guest-front-door-wrapper">
          <div className="intro-background">
            <div className="guest-front-door-block intro-body">
              <div className="guest-front-door-logo">
                <img 
                  role="presentation" 
                  src={cloudLogo} 
                  alt="Hangul Online"
                />
              </div>
              <h1 className="ql-display-large">
                Học tiếng Hàn với <span className="hangul-brand">Hangul Online</span>
              </h1>
              <span className="ql-body-large">
                Nền tảng học tiếng Hàn hàng đầu Việt Nam với lộ trình rõ ràng từ Hangul cơ bản đến giao tiếp nâng cao và luyện thi TOPIK.
              </span>
              
              <div className="catalog-search">
                <form className="js-search-form" onSubmit={handleSearch}>
                  <input 
                    type="search" 
                    name="keywords" 
                    id="autocomplete" 
                    className="js-autocomplete" 
                    maxLength="255" 
                    autoComplete="off" 
                    role="combobox" 
                    aria-autocomplete="list" 
                    aria-expanded="false" 
                    aria-controls="autocomplete-menu" 
                    placeholder="Tìm khóa học tiếng Hàn..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <button 
                    type="button"
                    className="search-bar-icon clear"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    <span className="material-icons">close</span>
                  </button>
                  
                  {isSearchFocused && (
                    <div className="elevation-3" id="autocomplete-loading-icon">
                      <div className="ql-spinner"></div>
                      <div className="ql-body-small">Đang tải…</div>
                    </div>
                  )}
                  
                  {searchQuery && !isSearchFocused && (
                    <div className="elevation-3" id="autocomplete-no-results">
                      <div className="ql-body-small">Không tìm thấy kết quả.</div>
                    </div>
                  )}
                  
                  <ul 
                    aria-hidden="true" 
                    aria-live="polite" 
                    className="hide" 
                    id="autocomplete-menu" 
                    role="listbox"
                  ></ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <CategoryNav 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Main Content Sections */}
      <ql-floating-nav-bar-container>
        {/* Lessons Section - Khóa học tiếng Hàn */}
        <LessonsSection activeCategory={activeCategory} />
        
        {/* VIP Section - Trở thành thành viên VIP */}
        <VipSection />
        
        {/* Business Section - Đào tạo doanh nghiệp */}
        {/* <BusinessSection /> */}
        
        {/* Credentials Section - Chứng chỉ tiếng Hàn */}
        {/* <CredentialsSection /> */}
        {/* <FeaturesSection /> */}
        {/* CTA Section - Call to Action */}
        <CTASection />
      </ql-floating-nav-bar-container>
    </div>
  );
};

export default Home;
