const imgPolygon4 = "/src/assets/06b237e35a2b005c9cd44d4b2b80987283abb64c.svg";

interface Group43Props {
  className?: string;
}

/**
 * Group 43 - "Học vượt?" Dropdown (Collapsed State)
 * Purple text "Học vượt?" with grey border and down arrow
 * From Figma node 398:1572
 * Size: 144x64px
 */
export default function Group43({ className = '' }: Group43Props) {
  return (
    <div className={`relative ${className}`} data-node-id="398:1572">
      {/* Grey border box (not background) */}
      <div 
        className="absolute bottom-[18.75%] left-0 right-0 rounded-[12px] top-0 border-[3px] border-[#d9d9d9] bg-white" 
        data-node-id="398:1366" 
      />
      
      {/* Down arrow (Polygon4 rotated 180deg) */}
      <div className="absolute bottom-0 flex items-center justify-center left-[41.98%] right-[41.98%] top-[67.5%] z-10">
        <div className="flex-none h-[20.8px] rotate-[180deg] w-[23.111px]">
          <div className="relative size-full" data-node-id="398:1367">
            <div className="absolute bottom-1/4 left-[13.86%] right-[13.86%] top-[8.19%]">
              <img alt="" className="block max-w-none size-full" src={imgPolygon4} />
            </div>
          </div>
        </div>
      </div>
      
      {/* "Học vượt?" text */}
      <p 
        className="absolute font-['Nunito:Bold',_sans-serif] font-bold inset-[15.63%_11.81%_32.81%_11.11%] leading-[normal] text-[#464394] text-[24px] text-nowrap whitespace-pre z-10" 
        data-node-id="398:1368"
      >
        Học vượt?
      </p>
    </div>
  );
}
