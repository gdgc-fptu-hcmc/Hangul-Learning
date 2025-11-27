import React from "react";
import { FaKey } from "react-icons/fa";

interface TuKhoaProps {
  children?: React.ReactNode;
  className?: string;
}

const TuKhoa: React.FC<TuKhoaProps> = ({ children, className }) => {
  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <FaKey className="text-[var(--custom-orange)] text-[30px] rounded-md p-1 border-2 border-gray-300" />{" "}
      <span className="flex-1">{children}</span>
    </div>
  );
};

export default TuKhoa;
