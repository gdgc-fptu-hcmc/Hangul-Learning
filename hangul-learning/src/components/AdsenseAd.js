import React, { useEffect, useState, useRef } from 'react';

// Enhanced AdSense component compliant with Better Ads Standards
const AdsenseAd = ({ 
  adSlot, 
  style = { display: 'block' }, 
  className = '',
  label = 'Quảng cáo',
  minHeight = '250px'
}) => {
  // state:
  // isLoaded: kiểm tra script AdSense đã được load thành công hay chưa
  // isVisible: quảng cáo đã vào viewport và sẵn sàng load
  // hasError: xảy ra lỗi khi load script hoặc khởi tạo quảng cáo
  // isMobile: phát hiện thiết bị di động dựa trên độ rộng cửa sổ
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // ref đến container quảng cáo để quan sát visibility
  const adRef = useRef(null);
  const realSlot = adSlot || process.env.REACT_APP_ADSENSE_SLOT_ID;

  // useEffect: phát hiện resize để cập nhật isMobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // useEffect: quan sát phần tử để lazy-load quảng cáo khi vào viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { rootMargin: '50px', threshold: 0.1 }
    );
    const currentRef = adRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, [isVisible]);

  // useEffect: load script AdSense và khởi tạo quảng cáo khi isVisible và realSlot có giá trị
  useEffect(() => {
    if (!isVisible || !realSlot) return;
    const loadAd = async () => {
      try {
        // Check if AdSense script is already loaded
        if (!window.adsbygoogle) {
          const script = document.createElement('script');
          script.async = true;
          script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456';
          script.crossOrigin = 'anonymous';
          document.head.appendChild(script);
          
          // Wait for script to load
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
          });
        }

        // Wait a bit more for AdSense to be ready
        setTimeout(() => {
          try {
            if (window.adsbygoogle && adRef.current) {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
              setIsLoaded(true);
            }
          } catch (error) {
            console.warn('AdSense initialization failed:', error);
            setHasError(true);
          }
        }, 500);

      } catch (error) {
        console.warn('AdSense script loading failed:', error);
        setHasError(true);
      }
    };
    loadAd();
  }, [isVisible, realSlot]);

  // Hàm tính style cho mobile hoặc desktop
  const getMobileStyles = () => {
    if (!isMobile) return style;
    return { ...style, minHeight: '200px', maxWidth: '100%', margin: '0 auto' };
  };

  // Trạng thái lỗi: hiển thị thông báo lỗi thân thiện cho mobile
  if (hasError) {
    return (
      <div className="mobile-card bg-gray-50 border border-gray-200 text-center py-8">
        <div className="text-gray-500 text-sm">
          {isMobile ? 'Quảng cáo không thể tải' : 'Advertisement could not be loaded'}
        </div>
      </div>
    );
  }

  // Trạng thái loading: hiển thị spinner và nhãn
  if (isVisible && !isLoaded && !hasError) {
    return (
      <div className={`mobile-card bg-gray-50 border border-gray-200 ${className}`} style={{ ...getMobileStyles(), minHeight: isMobile ? '200px' : minHeight }}>
        {/* Spinner và ghi chú đang tải */}
        <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-2">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
          <div className="text-xs sm:text-sm font-medium">{label}</div>
          <div className="text-xs text-gray-400">{isMobile ? 'Đang tải...' : 'Loading advertisement...'}</div>
        </div>
      </div>
    );
  }

  // Render quảng cáo đã load thành công với nhãn và container responsive
  return (
    <div ref={adRef} className={`mobile-card bg-gray-50 border border-gray-200 overflow-hidden ${className}`} style={{ ...getMobileStyles(), minHeight: isMobile ? '200px' : minHeight }}>
      {/* Nhãn quảng cáo - tuân thủ Better Ads Standards */}
      <div className="bg-gray-100 px-3 py-1 text-xs text-gray-600 border-b border-gray-200">
        <span className="font-medium">{label}</span>
        {isMobile && <span className="ml-2 text-gray-500">• Ủng hộ website</span>}
      </div>
      {/* Thẻ ins adsbygoogle */}
      <div className="p-2 sm:p-4">
        {isVisible && <ins className="adsbygoogle" /* ... attributes ... */ />}
      </div>
      {/* Safe area bottom cho mobile */}
      {isMobile && <div className="safe-area-bottom" />}
    </div>
  );
};

export default AdsenseAd; 