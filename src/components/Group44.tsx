// Import existing KhoaHc component
import KhoaHc from './KhoaHc';

// Asset imports - SVGs exported from Figma
const imgUnion = "/src/assets/5ec288e9b3a67542229ab7f1d2120e0a1b210269.svg";
const imgPolygon4 = "/src/assets/06b237e35a2b005c9cd44d4b2b80987283abb64c.svg";

interface Group44Props {
  className?: string;
}

/**
 * Group44 - Learning path section for Topic 3 "Số đếm & Thời gian"
 * Purple-themed topic with lessons and flow lines
 * From Figma node 401:1699
 * Size: 660x696px
 */
export default function Group44({ className = '' }: Group44Props) {
  return (
    <div className={className} data-name="Group 44" data-node-id="401:1699">
      
      {/* Flow line - Right bottom arc connecting lessons 2->3->4 */}
      <div className="absolute flex inset-[63.79%_25.36%_6.29%_51.36%] items-center justify-center -z-10" data-node-id="401:1616">
        <div className="flex-none h-[208.191px] rotate-[180deg] w-[153.625px]">
          <div 
            className="size-full rounded-bl-[83.948px] rounded-tl-[83.948px]" 
            style={{
              border: '2.518px dashed #d9d9d9',
              borderRight: 'none'
            }}
          />
        </div>
      </div>

      {/* Flow line - Left top arc connecting lessons skip->1->2 */}
      <div className="absolute inset-[33.62%_49.71%_35.99%_27.01%] -z-10" data-node-id="401:1618">
        <div 
          className="absolute inset-0 rounded-bl-[83.948px] rounded-tl-[83.948px]" 
          style={{
            border: '2.518px dashed #d9d9d9',
            borderRight: 'none'
          }}
        />
      </div>

      {/* "Học vượt?" section with Union icon and dropdown */}
      <div className="absolute inset-[20.55%_37.27%_60.34%_40.91%]" data-node-id="383:521">
        
        {/* Union icon background */}
        <div className="absolute bottom-[53.16%] left-0 right-0 top-0 z-10" data-name="Union" data-node-id="344:797">
          <div className="absolute inset-[-3.21%_-1.39%]">
            <img alt="Học vượt button" className="block max-w-none size-full" src={imgUnion} />
          </div>
        </div>

        {/* Grey border box around "Học vượt?" text */}
        <div 
          className="absolute bottom-[60.9%] left-0 right-0 rounded-[12px] top-0 border-[3px] border-[#d9d9d9] bg-white" 
          data-node-id="344:862" 
        />

        {/* "Học vượt?" text */}
        <p 
          className="absolute font-['Nunito:Bold',_sans-serif] font-bold inset-[7.52%_11.81%_67.67%_11.11%] leading-[normal] text-[#464394] text-[24px] text-nowrap whitespace-pre z-20" 
          data-node-id="344:800"
        >
          Học vượt?
        </p>

        {/* Dropdown arrow (Polygon4) */}
        <div className="absolute flex inset-[32.48%_41.98%_51.88%_41.98%] items-center justify-center z-20">
          <div className="flex-none h-[20.8px] rotate-[180deg] w-[23.111px]">
            <div className="relative size-full" data-node-id="344:863">
              <div className="absolute bottom-1/4 left-[13.86%] right-[13.86%] top-[8.19%]">
                <img alt="Dropdown arrow" className="block max-w-none size-full" src={imgPolygon4} />
              </div>
            </div>
          </div>
        </div>

        {/* Skip lesson button at bottom of "Học vượt?" section */}
        <KhoaHc 
          property1="Bỏ qua" 
          className="absolute bottom-0 left-[19.44%] right-[20.14%] top-[34.59%]" 
        />
      </div>

      {/* Lesson 1: Khóa (Locked) - First locked lesson */}
      <KhoaHc 
        property1="Khóa" 
        className="absolute inset-[43.25%_66.21%_43.82%_20.15%]" 
      />

      {/* Lesson 2: Khóa (Locked) - Second locked lesson */}
      <KhoaHc 
        property1="Khóa" 
        className="absolute inset-[57.62%_41.52%_29.45%_44.85%]" 
      />

      {/* Lesson 3: Khóa (Locked) - Third locked lesson */}
      <KhoaHc 
        property1="Khóa" 
        className="absolute inset-[73.56%_19.55%_13.51%_66.82%]" 
      />

      {/* Lesson 4: Bài cuối (Final lesson) - Crown icon at bottom */}
      <KhoaHc 
        property1="Bài cuối" 
        className="absolute bottom-0 left-[45.15%] right-[41.21%] top-[87.07%]" 
      />

      {/* Topic Title - Purple sticky header (rendered last to be on top) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="contents pointer-events-auto sticky top-0" data-name="Topic Tittle" data-node-id="401:1625">
          <div className="absolute bottom-[86.64%] left-0 right-0 top-0" data-node-id="401:1626" />
          <div className="absolute bg-[#eeedff] border-4 border-[#d6d4ff] border-solid bottom-[86.64%] box-border content-stretch flex flex-col font-['Nunito:Bold',_sans-serif] font-bold items-center leading-[normal] left-0 px-[93px] py-[9px] right-0 rounded-[10px] text-nowrap top-[2.59%] whitespace-pre" data-node-id="401:1627">
            <p className="relative shrink-0 text-[#464394] text-[18px]" data-node-id="401:1628">
              Chủ đề 3
            </p>
            <p className="relative shrink-0 text-[#202020] text-[24px]" data-node-id="401:1629">
              Số đếm & Thời gian
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
