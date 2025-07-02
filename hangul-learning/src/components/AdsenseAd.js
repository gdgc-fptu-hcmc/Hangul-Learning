import React, { useEffect, useState, useRef } from 'react';

// Enhanced AdSense component compliant with Better Ads Standards
const AdsenseAd = ({ 
  adSlot, 
  style = { display: 'block' }, 
  className = '',
  label = 'Quảng cáo',
  minHeight = '250px'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const adRef = useRef(null);
  const realSlot = adSlot || process.env.REACT_APP_ADSENSE_SLOT_ID;

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    const currentRef = adRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  // Load AdSense script and initialize ad
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

  // Mobile-specific styles
  const getMobileStyles = () => {
    if (!isMobile) return style;
    
    return {
      ...style,
      minHeight: '200px',
      maxWidth: '100%',
      margin: '0 auto',
    };
  };

  // Error state - mobile friendly
  if (hasError) {
    return (
      <div className="mobile-card bg-gray-50 border border-gray-200 text-center py-8">
        <div className="text-gray-500 text-sm">
          {isMobile ? 'Quảng cáo không thể tải' : 'Advertisement could not be loaded'}
        </div>
      </div>
    );
  }

  // Loading state - mobile friendly
  if (isVisible && !isLoaded && !hasError) {
    return (
      <div 
        className={`mobile-card bg-gray-50 border border-gray-200 ${className}`}
        style={{
          ...getMobileStyles(),
          minHeight: isMobile ? '200px' : minHeight
        }}
      >
        <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
          <div className="text-xs sm:text-sm font-medium">
            {label}
          </div>
          <div className="text-xs text-gray-400">
            {isMobile ? 'Đang tải...' : 'Loading advertisement...'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={adRef}
      className={`mobile-card bg-gray-50 border border-gray-200 overflow-hidden ${className}`}
      style={{
        ...getMobileStyles(),
        minHeight: isMobile ? '200px' : minHeight
      }}
    >
      {/* Clear ad label - Better Ads Standards compliance */}
      <div className="bg-gray-100 px-3 py-1 text-xs text-gray-600 border-b border-gray-200">
        <span className="font-medium">{label}</span>
        {isMobile && (
          <span className="ml-2 text-gray-500">• Ủng hộ website</span>
        )}
      </div>

      {/* AdSense Ad */}
      <div className="p-2 sm:p-4">
        {isVisible && (
          <ins
            className="adsbygoogle"
            style={{
              display: 'block',
              textAlign: 'center',
              minHeight: isMobile ? '160px' : '200px',
              width: '100%'
            }}
            data-ad-client="ca-pub-1234567890123456"
            data-ad-slot={realSlot}
            data-ad-format={isMobile ? 'auto' : 'rectangle'}
            data-full-width-responsive={isMobile ? 'true' : 'false'}
            data-adtest={process.env.NODE_ENV === 'development' ? 'on' : 'off'}
          />
        )}
      </div>

      {/* Safe area for mobile devices */}
      {isMobile && (
        <div className="safe-area-bottom" />
      )}
    </div>
  );
};

export default AdsenseAd; 