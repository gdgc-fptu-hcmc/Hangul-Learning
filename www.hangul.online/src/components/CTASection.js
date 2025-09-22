import React from 'react';
import cloudLogo from '../cdn.resource.com/assets/gcp_cloud-e3a77215f0b8bfa9b3f611c0d2208c7e8708ed31.svg';
import '../styles/FeaturesSection.css';

const CTASection = () => {
  return (
    <div className='guest-front-door-block msg-body cta-panel'>
      <div className='guest-front-door-logo cta-logo'>
        <img role="presentation" src={cloudLogo} />
      </div>
      <h2 className='ql-display-medium cta-title'>
        <strong>Bắt đầu hành trình tiếng Hàn</strong>
      </h2>
      <span className='ql-body-large cta-text'>
        Từ người mới bắt đầu đến luyện thi TOPIK, Hangul Online đồng hành cùng bạn trên con đường chinh phục tiếng Hàn.
      </span>
      <ql-button href='users/sign_up0d31.html?locale=vi' class='cta-button'>
        Bắt đầu ngay
      </ql-button>
    </div>
  );
};

export default CTASection;
