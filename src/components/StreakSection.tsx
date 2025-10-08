import React from 'react';

// Figma image assets
const imgGroup2 = "https://www.figma.com/api/mcp/asset/bb901b66-b955-44d6-bd19-ad3564b9e1b0";

interface StreakSectionProps {
  className?: string;
  streakCount?: number;
}

function StreakSection({ className, streakCount = 2 }: StreakSectionProps) {
  return (
    <div className={className} data-node-id="128:366">
      <div className="absolute bg-white border-[#d9d9d9] border-[3px] border-solid h-[100px] left-0 rounded-[10px] top-0 w-[350px] shadow-lg" data-node-id="73:1469" />
      
      <div className="absolute content-stretch flex gap-[24px] items-center left-[35px] top-[17px]" data-node-id="267:1966">
        <p className="font-bold leading-[normal] relative shrink-0 text-[#1f1f1f] text-[24px]" data-node-id="118:296">
          Chuỗi của bạn
        </p>
        
        <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="267:1965">
          {/* Fire Icon */}
          <div className="relative shrink-0 size-[40px]" data-name="local_fire_department" data-node-id="267:1962">
            <div className="absolute h-[36px] left-[calc(50%+-0.4px)] top-[calc(50%+-0.243px)] translate-x-[-50%] translate-y-[-50%] w-[31.2px]" data-name="Group" data-node-id="118:257">
              <img alt="" className="block max-w-none size-full" src={imgGroup2} />
            </div>
          </div>
          
          {/* Streak Number */}
          <p className="font-black leading-[normal] relative shrink-0 text-[#da1b24] text-[48px]" data-node-id="118:295">
            {streakCount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StreakSection;