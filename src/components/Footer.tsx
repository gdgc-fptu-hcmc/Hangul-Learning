import React from "react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`w-full bg-white border-t-[3px] border-gray-300 ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-[51px] h-[45px] flex items-center justify-between">
        {/* ===== Left: Logo + Copyright ===== */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="relative flex items-center justify-center h-7 w-[82px]">
            <img
              src="https://www.figma.com/api/mcp/asset/1e341081-ad5a-43a7-af0f-27a84eaa004c"
              alt="Hangul Logo Layer 1"
              className="absolute inset-0 w-full h-full object-contain"
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
            />
            <img
              src="https://www.figma.com/api/mcp/asset/78a93174-8799-45a8-a800-21f5852acae1"
              alt="Hangul Logo Layer 2"
              className="absolute inset-0 w-full h-full object-contain"
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
            />
          </div>
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-700">
            <div className="flex items-center justify-center w-5 h-5 border-2 border-gray-700 rounded-full">
              <span className="text-xs font-bold">C</span>
            </div>
            <p className="text-sm font-semibold whitespace-nowrap">Copyright 2025</p>
          </div>
        </div>
        {/* ===== Right: Links ===== */}
        <div className="flex items-center gap-12 text-base font-semibold text-gray-700 underline underline-offset-4">
          <a href="#terms" className="hover:text-blue-600 transition-colors whitespace-nowrap">Điều khoản sử dụng</a>
          <a href="#privacy" className="hover:text-blue-600 transition-colors whitespace-nowrap">Chính sách quyền riêng tư</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;