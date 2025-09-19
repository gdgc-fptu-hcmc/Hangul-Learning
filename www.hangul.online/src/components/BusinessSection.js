import React from 'react';
import '../styles/FeaturesSection.css';

const BusinessSection = () => {
  return (
    <section className='guest-front-door-block statistics-body' id='train-your-team' label='Đào tạo doanh nghiệp' tabIndex='0'>
      <ql-chip icon='corporate_fare' large>
        <span>Cho doanh nghiệp</span>
      </ql-chip>
      <h2 className='ql-display-medium'>Các doanh nghiệp đầu tư vào <strong>đào tạo tiếng Hàn</strong> cho nhân viên đạt được <strong>kết quả kinh doanh tốt hơn</strong>.</h2>
      <div className='metrics'>
        <div className='metric'><h3>85%</h3> <a target="_blank" href="#">nhân viên</a> cải thiện kỹ năng giao tiếp sau khi học tiếng Hàn.</div>
        <div className='metric'><a target="_blank" href="#">Khóa học tiếng Hàn</a> có tỷ lệ hoàn thành <h3>92%</h3>, cao hơn nhiều so với các khóa học ngôn ngữ khác.</div>
        <div className='metric'>Doanh nghiệp đầu tư vào đào tạo tiếng Hàn tăng <a target="_blank" href="#">hiệu quả làm việc</a> lên <h3>150%</h3>.</div>
      </div>
      <ql-button href='subscriptions0d31.html?locale=vi' outlined>
        Tìm hiểu gói doanh nghiệp
      </ql-button>
    </section>
  );
};

export default BusinessSection;


