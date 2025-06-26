import React, { useEffect } from 'react';

// Google AdSense Publisher ID (provided by user)
const AdsenseAd = ({ adSlot, style = { display: 'block' }, className }) => {
  const realSlot = adSlot || process.env.REACT_APP_ADSENSE_SLOT_ID;

  useEffect(() => {
    // Only push ads when slot ID is valid
    if (!realSlot || /^(123456|YourAdSlotID)/.test(realSlot)) {
      return;
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn('Adsense error', e);
    }
  }, [realSlot]);

  // Skip rendering if no valid slot ID or using placeholder
  if (!realSlot || /^(123456|YourAdSlotID)/.test(realSlot)) {
    return null;
  }

  return (
    <ins
      className={`adsbygoogle ${className || ''}`}
      style={style}
      data-ad-client="ca-pub-5760828366443806"
      data-ad-slot={realSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdsenseAd; 