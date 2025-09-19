import React from 'react';
import '../styles/FeaturesSection.css';

const CredentialsSection = () => {
  return (
    <section className="guest-front-door-block multi-msg-body" id="get-credentialed" label="Chứng chỉ tiếng Hàn" tabIndex="0">
      <div className="multi-msg-body__header">
        <h2 className="ql-display-medium credential-title">Bạn muốn đạt chứng chỉ tiếng Hàn nào?</h2>
        <span className="ql-body-large credential-description">
          Chứng chỉ tiếng Hàn giúp bạn chứng minh năng lực và mở ra nhiều cơ hội nghề nghiệp. Hãy khám phá các loại chứng chỉ phù hợp với mục tiêu của bạn.
        </span>
      </div>
      <ql-accordion>
        <img slot="images" data-section-idx="0" role="presentation" src="../cdn.resource.com/assets/credentials_certifications-0448f8a63e1aa69f9424b7d54615350bfd75bbe1.svg" />
        <img slot="images" data-section-idx="1" role="presentation" src="../cdn.resource.com/assets/credentials_badges-8ea1c1cafe402cc3c50981e7a5560620afbdea8a.svg" />
        <img slot="images" data-section-idx="2" role="presentation" src="../cdn.resource.com/assets/credentials_certificates-d87a2ab17da6c8986c37c81025c001df0d6f129e.svg" />

        <ql-accordion-section>
          <h3 className="ql-title-large" role="heading" slot="header">
            Chứng chỉ TOPIK
          </h3>
          <p className="ql-body-large" slot="body">
            Chứng minh năng lực tiếng Hàn với chứng chỉ TOPIK được công nhận quốc tế.
          </p>
          <a className="ql-body-medium" href="catalog0d31.html?locale=vi&level=advanced" slot="body">
            Khám phá khóa luyện thi TOPIK
          </a>
        </ql-accordion-section>

        <ql-accordion-section>
          <h3 className="ql-title-large" role="heading" slot="header">
            Chứng chỉ kỹ năng
          </h3>
          <p className="ql-body-large" slot="body">
            Các chứng chỉ kỹ năng thực tế chứng minh khả năng áp dụng tiếng Hàn trong các tình huống thực tế.
          </p>
          <a className="ql-body-medium" href="catalog0d31.html?locale=vi&skill-badge=skill-badge" slot="body">
            Khám phá chứng chỉ kỹ năng
          </a>
        </ql-accordion-section>

        <ql-accordion-section>
          <h3 className="ql-title-large" role="heading" slot="header">
            Chứng chỉ hoàn thành
          </h3>
          <p className="ql-body-large" slot="body">
            Chứng chỉ hoàn thành khóa học là cách tuyệt vời để bắt đầu hành trình học tiếng Hàn và xây dựng kỹ năng cần thiết.
          </p>
          <a className="ql-body-medium" href="catalog0d31.html?locale=vi" slot="body">
            Khám phá chứng chỉ hoàn thành
          </a>
        </ql-accordion-section>
      </ql-accordion>
    </section>
  );
};

export default CredentialsSection;


