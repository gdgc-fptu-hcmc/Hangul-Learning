import KhoaHc from './KhoaHc';

const imgUnion = "/src/assets/5ec288e9b3a67542229ab7f1d2120e0a1b210269.svg";
const imgPolygon4 = "/src/assets/06b237e35a2b005c9cd44d4b2b80987283abb64c.svg";

interface Group33Props {
  className?: string;
}

/**
 * Group 33 - "Học vượt?" section
 * Purple-themed skip lesson button with dropdown
 * Grey border (not background) around "Học vượt?" text
 * From Figma node 398:1358
 * Size: 144x133px
 */
export default function Group33({ className = '' }: Group33Props) {
  return (
    <div className={`relative ${className}`} data-name="Group 33" data-node-id="398:1358">
      
      {/* Union icon background - Top (lower z-index) */}
      <div className="absolute bottom-[53.16%] left-0 right-0 top-0 -z-10" data-name="Union" data-node-id="344:797">
        <div className="absolute inset-[-3.21%_-1.39%]">
          <img alt="Học vượt button" className="block max-w-none size-full" src={imgUnion} />
        </div>
      </div>

      {/* Grey border box around "Học vượt?" text (higher z-index, covers Union) */}
      <div 
        className="absolute bottom-[60.9%] left-0 right-0 rounded-[12px] top-0 border-[3px] border-[#d9d9d9] bg-white" 
        data-node-id="344:862" 
      />

      {/* "Học vượt?" text */}
      <p 
        className="absolute font-['Nunito:Bold',_sans-serif] font-bold inset-[7.52%_11.81%_67.67%_11.11%] leading-[normal] text-[#464394] text-[24px] text-nowrap whitespace-pre z-10" 
        data-node-id="344:800"
      >
        Học vượt?
      </p>

      {/* Dropdown arrow (Polygon4) */}
      <div className="absolute flex inset-[32.48%_41.98%_51.88%_41.98%] items-center justify-center z-10">
        <div className="flex-none h-[20.8px] rotate-[180deg] w-[23.111px]">
          <div className="relative size-full" data-node-id="344:863">
            <div className="absolute bottom-1/4 left-[13.86%] right-[13.86%] top-[8.19%]">
              <img alt="Dropdown arrow" className="block max-w-none size-full" src={imgPolygon4} />
            </div>
          </div>
        </div>
      </div>

      {/* Skip lesson button at bottom */}
      <KhoaHc 
        property1="Bỏ qua" 
        className="absolute bottom-0 left-[19.44%] right-[20.14%] top-[34.59%]" 
      />

    </div>
  );
}
