import React from 'react';
import cloudLogo from '../cdn.resource.com/assets/gcp_cloud-e3a77215f0b8bfa9b3f611c0d2208c7e8708ed31.svg';
import '../styles/FeaturesSection.css';

const CTASection = () => {
  return (
    <div className='guest-front-door-block msg-body' style={{ background: '#f0f4ff', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
      <div className='guest-front-door-logo' style={{ marginBottom: '24px' }}>
        <img role="presentation" src={cloudLogo} style={{ height: 64 }} />
      </div>
      <h2 className='ql-display-medium' style={{ color: '#1a237e' }}>
        <strong>Bắt đầu hành trình tiếng Hàn</strong>
      </h2>
      <span className='ql-body-large' style={{ color: '#374151', display: 'block' }}>
        Từ người mới bắt đầu đến luyện thi TOPIK, Hangul Online đồng hành cùng bạn trên con đường chinh phục tiếng Hàn.
      </span>
      <ql-button href='users/sign_up0d31.html?locale=vi' style={{ background: '#1976d2', color: '#fff', borderRadius: '8px', padding: '12px 32px', fontWeight: 600 }}>
        Bắt đầu ngay
      </ql-button>
    </div>
  );
};

export default CTASection;


