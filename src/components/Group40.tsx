// Import existing KhoaHc component
import KhoaHc from './KhoaHc';

// Asset imports - SVGs exported from Figma
const imgUnion = "/src/assets/af846b7fc5f9685ff80bb5140e7ba15e7c4623b5.svg";

interface Group40Props {
  className?: string;
}

/**
 * Group40 / Group41 - Learning path section for Topic 2 "Gia đình & Bạn bè"
 * Simplified version with clean flow lines
 * From Figma node 395:2442 (Group 41) / 395:2431 (Group 39)
 * Size: 660x700px
 * Position in Learning Page: left-277px, top-796px
 */
export default function Group40({ className = '' }: Group40Props) {
  return (
    <div className={className} data-name="Group 41" data-node-id="395:2442">
      {/* Main content container - Group 39 */}
      <div className="absolute inset-0" data-node-id="395:2431">
        
        {/* Flow line - Right bottom arc connecting lessons 3->4->5 */}
        <div className="absolute flex inset-[64%_25.36%_6.26%_51.36%] items-center justify-center -z-10" data-node-id="383:519">
          <div className="flex-none h-[208.191px] rotate-[180deg] w-[153.625px]">
            <div 
              className="size-full rounded-bl-[83.948px] rounded-tl-[83.948px]" 
              style={{
                border: '2.518px dashed #d9d9d9',
                borderRight: 'none'
              }}
              data-node-id="344:829" 
            />
          </div>
        </div>

        {/* Flow line - Left top arc connecting lessons 1->2->3 */}
        <div className="absolute inset-[34%_49.71%_35.78%_27.01%] -z-10" data-node-id="383:518">
          <div 
            className="absolute inset-0 rounded-bl-[83.948px] rounded-tl-[83.948px]" 
            style={{
              border: '2.518px dashed #d9d9d9',
              borderRight: 'none'
            }}
            data-node-id="344:844" 
          />
        </div>

        {/* "Học vượt?" button - Union icon with text overlay */}
        <div className="absolute inset-[20.43%_37.42%_71.25%_40.76%] z-10" data-name="Union" data-node-id="344:866">
          <div className="absolute inset-[-3.43%_-1.39%]">
            <img alt="Học vượt button" className="block max-w-none size-full" src={imgUnion} />
          </div>
        </div>

        <p className="absolute font-['Nunito:Bold',_sans-serif] font-bold inset-[21.71%_40%_73.57%_43.18%] leading-[normal] text-[#4f4f4f] text-[24px] text-nowrap whitespace-pre z-20" data-node-id="344:869">
          Học vượt?
        </p>

        {/* Lesson 1: Bỏ qua (Skip) - Purple button at top */}
        <KhoaHc 
          property1="Bỏ qua" 
          className="absolute inset-[27.57%_41.67%_60%_45.15%]" 
        />

        {/* Lesson 2: Khóa (Locked) - First locked lesson */}
        <KhoaHc 
          property1="Khóa" 
          className="absolute inset-[43.57%_66.21%_43.57%_20.15%]" 
        />

        {/* Lesson 3: Khóa (Locked) - Second locked lesson */}
        <KhoaHc 
          property1="Khóa" 
          className="absolute inset-[57.86%_41.52%_29.29%_44.85%]" 
        />

        {/* Lesson 4: Khóa (Locked) - Third locked lesson */}
        <KhoaHc 
          property1="Khóa" 
          className="absolute inset-[73.71%_19.55%_13.43%_66.82%]" 
        />

        {/* Lesson 5: Bài cuối (Final lesson) - Crown icon at bottom */}
        <KhoaHc 
          property1="Bài cuối" 
          className="absolute bottom-0 left-[45.15%] right-[41.21%] top-[87.14%]" 
        />

        {/* Topic Title - Green sticky header (rendered last to be on top) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="contents pointer-events-auto sticky top-0" data-name="Topic Tittle" data-node-id="344:811">
            <div className="absolute bottom-[86.71%] left-0 right-0 top-0" data-node-id="344:812" />
            <div className="absolute bg-[#e3f2d2] border-4 border-[#c5e99a] border-solid bottom-[86.71%] box-border content-stretch flex flex-col font-['Nunito:Bold',_sans-serif] font-bold items-center leading-[normal] left-0 px-[93px] py-[9px] right-0 rounded-[10px] text-nowrap top-[2.57%] whitespace-pre" data-node-id="344:813">
              <p className="relative shrink-0 text-[#6ba823] text-[18px]" data-node-id="344:814">
                Chủ đề 2
              </p>
              <p className="relative shrink-0 text-[#202020] text-[24px]" data-node-id="344:815">
                Gia đình & Bạn bè
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
