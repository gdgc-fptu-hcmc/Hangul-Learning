import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  className,
}) => {
  return (
    <div
      className={`w-full bg-gray-400  rounded-full p-[2px] h-5 flex items-center ${className}`}
    >
      <div
        className="rounded-full bg-white p-[2px] h-full flex items-center min-w-[15px]"
        style={{ width: `${(current / total) * 100}%` }}
      >
        <div className="bg-[var(--custom-orange)] h-full w-full rounded-full "></div>
      </div>
    </div>
  );
};

export default ProgressBar;
