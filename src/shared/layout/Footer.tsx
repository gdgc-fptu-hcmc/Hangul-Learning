import React from "react";
import logo from "@/assets/logos/colored-hangul.svg";
import ScrollToTop from "../effects/ScrollToTop";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`w-full bg-white border-t-[1px] border-gray-300 ${className}`}
    >
      <div className="w-[95%] md:w-[95vw] mx-auto py-4 md:py-2 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* ===== Left: Logo + Copyright ===== */}
        <div className="flex flex-row items-center gap-4 md:gap-6">
          {/* Logo */}
          <ScrollToTop>
            <div className="w-[100px] hover:cursor-pointer">
              <img src={logo} alt="Logo" className="w-full h-auto" />
            </div>
          </ScrollToTop>

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
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-12 text-base font-semibold text-gray-700">
          <a
            href="#terms"
            className="hover:text-gray-500 transition-colors whitespace-nowrap text-center md:text-left"
          >
            Điều khoản sử dụng
          </a>
          <a
            href="#privacy"
            className="hover:text-gray-500 transition-colors whitespace-nowrap text-center md:text-left"
          >
            Chính sách quyền riêng tư
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
