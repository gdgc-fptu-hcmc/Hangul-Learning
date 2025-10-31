import React from "react";
import { PiLightbulbFilamentFill } from "react-icons/pi";

interface MeoNhoProps {
  children?: React.ReactNode;
  className?: string;
}

const MeoNho: React.FC<MeoNhoProps> = ({ children, className }) => {
  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <PiLightbulbFilamentFill className="text-[var(--custom-orange)] text-[30px] rounded-md p-1 border-2 border-gray-300" />{" "}
      <span className="flex-1">{children}</span>
    </div>
  );
};

export default MeoNho;
