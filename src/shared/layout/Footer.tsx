import React from "react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`w-full bg-white border-t-[3px] border-gray-300 ${className}`}
    >
      <div className="md:w-[95vw] mx-auto h-[45px] flex items-center justify-between">
        {/* ===== Left: Logo + Copyright ===== */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="w-[100px] hover:cursor-pointer">
            <img
              src="/logos/plain-hangul.svg"
              alt="Logo"
              className="w-full h-auto"
            />
          </div>
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-700">
            <div className="flex items-center justify-center w-5 h-5 border-2 border-gray-700 rounded-full">
              <span className="text-xs font-bold">C</span>
            </div>
            <p className="text-sm font-semibold whitespace-nowrap">
              Copyright 2025
            </p>
          </div>
        </div>
        {/* ===== Right: Links ===== */}
        <div className="flex items-center gap-12 text-base font-semibold text-gray-700">
          <a
            href="#terms"
            className="hover:text-gray-500 transition-colors whitespace-nowrap"
          >
            Điều khoản sử dụng
          </a>
          <a
            href="#privacy"
            className="hover:text-gray-500 transition-colors whitespace-nowrap"
          >
            Chính sách quyền riêng tư
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
