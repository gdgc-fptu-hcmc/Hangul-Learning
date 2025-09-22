import React from 'react';

import React from 'react';
import DiscoverySection from '../components/DiscoverySection';
import '../styles/Catalog.css';

const Catalog = () => {
  return (
    <div className="page catalog-page">
      <div className="catalog-page-container">
        <h1 className="ql-display-medium">Khám phá</h1>
        <p className="ql-body-large">Chọn chủ đề để bắt đầu học nhanh.</p>
        <DiscoverySection />
      </div>
    </div>
  );
};

export default Catalog;
