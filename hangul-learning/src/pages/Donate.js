import React from 'react';
import SEO from '../components/SEO';

const Donate = () => {
  // List of QR images (local public image paths)
  const qrImages = [
    {
      src: '/IMG_Sacombank_20250625_081940.jpg',
      label: 'QR Momo'
    },
    // Thêm ảnh khác nếu cần
    // { src: '/momo_qr.png', label: 'Momo' },
  ];

  return (
    <div className="page-container fade-in" style={{ textAlign: 'center', padding: '2rem' }}>
      <SEO title="Ủng hộ Hangul Learning" description="Mua cho chúng tôi một cốc cà phê nếu bạn thấy trang hữu ích!" />
      <h1 className="page-title">Ủng hộ tác giả ☕</h1>
      <p className="page-subtitle" style={{ marginBottom: '2rem' }}>
        Nếu bạn thấy dự án này hữu ích, hãy mời mình một ly cà phê để có thêm động lực phát triển nhé!
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
        {qrImages.map(({ src, label }) => (
          <div key={src} style={{ maxWidth: '260px', textAlign: 'center' }}>
            <img
              src={src}
              alt={label}
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <p style={{ marginTop: '0.5rem', fontWeight: 500 }}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donate; 