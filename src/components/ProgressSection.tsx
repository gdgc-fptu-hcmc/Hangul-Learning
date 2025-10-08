import React, { useEffect, useRef } from 'react';
import './ProgressSection.css';

interface ProgressSectionProps {
  className?: string;
  currentProgress?: number;
  totalLessons?: number;
}

function ProgressSection({ 
  className, 
  currentProgress = 2, 
  totalLessons = 25 
}: ProgressSectionProps) {
  const progressPercentage = (currentProgress / totalLessons) * 100;
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${progressPercentage}%`;
    }
  }, [progressPercentage]);
  
  return (
    <div className={className} data-node-id="128:365">
      <div className="absolute h-[262px] left-0 top-0 w-[350px]" data-node-id="73:1467">
        <img
          alt=""
          className="block max-w-none size-full"
          src="https://www.figma.com/api/mcp/asset/968316ee-b084-47e8-beb3-c42bddc5b36f"
          onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
        />
      </div>
      
      {/* Progress Bar */}
      <div className="absolute h-[26px] left-[30px] top-[72px] w-[246px]" data-name="Progress Bar" data-node-id="97:145">
        <div className="absolute bg-[#d9d9d9] border-2 border-[#d9d9d9] border-solid h-[26px] left-0 rounded-[100px] top-0 w-[246px]" data-node-id="97:100" />
        <div 
          ref={progressBarRef}
          className="absolute bg-[#ffaa00] border-2 border-solid border-white h-[26px] left-0 rounded-[100px] top-0 progress-bar-fill" 
          data-node-id="97:143"
        />
      </div>
      
      {/* Progress Text */}
      <p className="absolute font-bold leading-[normal] left-[262px] text-[#ffaa00] text-[14px] top-[75px]" data-node-id="97:101">
        {currentProgress}/{totalLessons}
      </p>
      
      {/* Title */}
      <p className="absolute font-bold h-[33px] leading-[normal] left-[30px] text-[#1f1f1f] text-[24px] top-[25px] w-[203px] whitespace-pre-wrap" data-node-id="97:330">
        Quá trình học
      </p>
    </div>
  );
}

export default ProgressSection;