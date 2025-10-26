import React from "react";
import bannerImage from "@/assets/images/wavy-clouds-pattern.svg";
import { Link } from "react-router-dom";

const ColoredBanner = () => {
  return (
    <div
      className="w-full relative bg-cover"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="w-[95vw] flex justify-end items-center p-2 gap-2">
        <Link
          to="/"
          className="p-2 min-w-[80px] bg-white text-xs font-semibold text-center rounded-md hover:bg-gray-200"
        >
          Về Hangul
        </Link>
        <Link
          to="/"
          className="p-2 min-w-[80px] bg-white text-xs font-semibold text-center rounded-md hover:bg-gray-200"
        >
          Donate
        </Link>
      </div>
    </div>
  );
};

export default ColoredBanner;
