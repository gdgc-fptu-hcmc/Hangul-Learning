import React from 'react';

const SponsorSection = ({ className = "" }) => {
  return (
    <div className={`py-12 bg-gray-50 border-t border-gray-200 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center">
          <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-6">
            Được tài trợ bởi
          </p>
          <div className="flex justify-center">
            <img 
              src="/logo_nha_tai_tro.jpg" 
              alt="Logo nhà tài trợ" 
              className="h-16 md:h-20 max-w-sm object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            />
          </div>
          <p className="mt-4 text-xs text-gray-400 max-w-md mx-auto">
            Cảm ơn sự hỗ trợ của đối tác trong việc phát triển nền tảng học tiếng Hàn miễn phí và sắp xếp lại bố trí hợp lý
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default SponsorSection; 