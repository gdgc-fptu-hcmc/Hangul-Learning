// Import existing KhoaHc component since it's already in the project
import KhoaHc from './KhoaHc';

// Asset imports - SVGs exported from Figma
const imgFrame58 = "/src/assets/c7e4405d39ce6e19bdd9c02b0caf88b63730f37a.svg";
const imgFrame59 = "/src/assets/93f9ef8f561252242bed4d808054b890ba8d3f09.svg";
const imgEllipse14 = "/src/assets/2dba0553c876bfcb2d6494975e2e5d473716307e.svg";
const imgEllipse39 = "/src/assets/0a233db77c614d64ce2893444add8e0b64455513.svg";
const imgEllipse47 = "/src/assets/3767912e0f3fa7a3b3c11b3ec6635810bbf0ed89.svg";
const imgEllipse48 = "/src/assets/a11f0bf7ad4c4591cef586470adf5ce4f3b323ed.svg";
const img = "/src/assets/bc0bedea38caef628655aee3332802d07bb95269.svg";
const img1 = "/src/assets/3b2d07c3066ddad30a33bebe50c691fb54a71ae0.svg";
const imgUnion = "/src/assets/841e3773132fa02937af79c08c655199da32dbb1.svg";

interface Component32Props {
  className?: string;
}

/**
 * Component32 - Learning path section for Topic 1
 * Displays the topic title and connected lessons flow
 * Exact conversion from Figma node 383:625
 * Size: 660x632px
 */
export default function Component32({ className = '' }: Component32Props) {
  return (
    <div className={className} data-name="Component 32" data-node-id="383:625">
      <div className="absolute inset-0" data-name="Component 33" data-node-id="383:524">
        {/* Topic Title - Yellow sticky header */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="contents pointer-events-auto sticky top-0" data-name="Topic Tittle" data-node-id="344:806">
            <div className="absolute bottom-[85.28%] left-0 right-0 top-0" data-node-id="344:807" />
            <div className="absolute bg-[#ffebb1] border-4 border-[#ffcf41] border-solid bottom-[85.28%] box-border content-stretch flex flex-col font-bold items-center leading-[normal] left-0 px-[93px] py-[9px] right-0 rounded-[10px] text-nowrap top-[2.85%] whitespace-pre" data-node-id="344:808">
              <p className="relative shrink-0 text-[#755700] text-[18px]" data-node-id="344:809">
                Chủ đề 1
              </p>
              <p className="relative shrink-0 text-[#202020] text-[24px]" data-node-id="344:810">
                Làm quen & Giới thiệu bản thân
              </p>
            </div>
          </div>
        </div>

        {/* Duplicate sticky header (Figma artifact) */}
        <div className="absolute bottom-[85.28%] contents left-0 right-0 top-0" data-node-id="359:502">
          <div className="absolute inset-0 pointer-events-none">
            <div className="contents pointer-events-auto sticky top-0" data-name="Topic Tittle" data-node-id="344:870">
              <div className="absolute bottom-[85.28%] left-0 right-0 top-0" data-node-id="344:871" />
              <div className="absolute bg-[#ffebb1] border-4 border-[#ffcf41] border-solid bottom-[85.28%] box-border content-stretch flex flex-col font-bold items-center leading-[normal] left-0 px-[93px] py-[9px] right-0 rounded-[10px] text-nowrap top-[2.85%] whitespace-pre" data-node-id="344:872">
                <p className="relative shrink-0 text-[#755700] text-[18px]" data-node-id="344:873">
                  Chủ đề 1
                </p>
                <p className="relative shrink-0 text-[#202020] text-[24px]" data-node-id="344:874">
                  Làm quen & Giới thiệu bản thân
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson number 2 text (standalone) */}
        <p className="absolute bottom-[52.69%] font-black leading-[normal] left-1/4 right-[71.67%] text-[36px] text-nowrap text-white top-[39.56%] whitespace-pre" data-node-id="344:768">
          2
        </p>

        {/* Label: Xưng hô và giới thiệu (first instance) */}
        <p className="absolute font-bold inset-[52.22%_65.61%_39.87%_19.09%] leading-[normal] text-[18px] text-black text-center" data-node-id="344:822">
          Xưng hô và giới thiệu
        </p>

        {/* Group30 component - duplicate label */}
        <div className="absolute inset-[52.22%_65.61%_39.87%_19.09%]" data-node-id="383:500">
          <p className="absolute font-bold inset-0 leading-[normal] text-[18px] text-black text-center" data-node-id="344:886">
            Xưng hô và giới thiệu
          </p>
        </div>

        {/* Rectangle56 - Right arc flow line */}
        <div className="absolute inset-[60.37%_26.71%_6.69%_50.01%] -z-10" data-node-id="383:498">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="flex-none h-[208.191px] rotate-[180deg] w-[153.625px]">
              <div 
                className="size-full rounded-bl-[84px] rounded-tl-[84px]" 
                style={{
                  border: '2.518px dashed #d9d9d9',
                  borderRight: 'none'
                }}
                data-node-id="344:762" 
              />
            </div>
          </div>
        </div>

        {/* Left arc flow line */}
        <div 
          className="absolute inset-[26.89%_49.86%_39.63%_26.86%] rounded-bl-[84px] rounded-tl-[84px] -z-10" 
          style={{
            border: '2.518px dashed #d9d9d9',
            borderRight: 'none'
          }}
          data-node-id="344:763" 
        />

        {/* Duplicate right arc flow lines */}
        <div className="absolute flex inset-[60.37%_26.71%_6.69%_50.01%] items-center justify-center -z-10">
          <div className="flex-none h-[208.191px] rotate-[180deg] w-[153.625px]">
            <div 
              className="size-full rounded-bl-[84px] rounded-tl-[84px]" 
              style={{
                border: '2.518px dashed #d9d9d9',
                borderRight: 'none'
              }}
              data-node-id="344:764" 
            />
          </div>
        </div>

        <div 
          className="absolute inset-[26.89%_49.86%_39.63%_26.86%] rounded-bl-[84px] rounded-tl-[84px] -z-10" 
          style={{
            border: '2.518px dashed #d9d9d9',
            borderRight: 'none'
          }}
          data-node-id="344:767" 
        />

        {/* Lesson 3 - Active (Đang học) with custom SVG implementation */}
        <div className="absolute inset-[53.32%_42.12%_32.91%_44.7%]" data-name="Khóa học" data-node-id="344:771">
          <div className="absolute inset-[9.2%_10.35%_10.35%_10.35%]" data-node-id="I344:771;228:923">
            <img alt="" className="block max-w-none size-full" src={imgEllipse14} />
          </div>
          <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center left-[9px] px-[22px] py-[10px] top-[8px] w-[69px]" data-node-id="I344:771;231:940">
            <div className="absolute inset-0" data-node-id="I344:771;228:925">
              <div className="absolute inset-[-8.57%_-8.7%]">
                <img alt="" className="block max-w-none size-full" src={img} />
              </div>
            </div>
            <p className="font-black leading-[normal] relative shrink-0 text-[36px] text-nowrap text-white whitespace-pre" data-node-id="I344:771;228:926">
              3
            </p>
          </div>
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="flex-none rotate-[270deg] size-[87px]">
              <div className="relative size-full" data-node-id="I344:771;228:927">
                <div className="absolute bottom-0 left-[0.06%] right-[0.06%] top-1/2">
                  <img alt="" className="block max-w-none size-full" src={img1} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson 4 - Locked (using KhoaHc component) */}
        <div className="absolute inset-[70.89%_19.7%_14.87%_66.67%]" data-name="Component 4" data-node-id="344:772">
          <div className="absolute h-[90px] left-px top-0 w-[88px]" data-node-id="I344:772;267:1724">
            <img alt="" className="block max-w-none size-full" src={imgFrame58} />
          </div>
        </div>

        {/* Lesson 5 - Review (Bài cuối - using KhoaHc component) */}
        <div className="absolute bottom-0 left-[45%] right-[41.36%] top-[85.76%]" data-name="Component 7" data-node-id="344:773">
          <div className="absolute h-[89px] left-0 top-px w-[90px]" data-node-id="I344:773;267:1871">
            <div className="absolute bottom-0 left-0 right-0 top-[-1.12%]">
              <img alt="" className="block max-w-none size-full" src={imgFrame59} />
            </div>
          </div>
        </div>

        {/* Continue button (Union arrow) */}
        <div className="absolute inset-[46.68%_39.39%_44.2%_42.12%]" data-name="Union" data-node-id="344:775">
          <div className="absolute inset-[-3.47%_-1.64%]">
            <img alt="" className="block max-w-none size-full" src={imgUnion} />
          </div>
        </div>

        <p className="absolute font-bold inset-[47.94%_41.82%_46.84%_44.39%] leading-[normal] text-[#4f4f4f] text-[24px] text-nowrap whitespace-pre" data-node-id="344:778">
          Tiếp tục
        </p>

        {/* Label: Giới thiệu tên và sở thích */}
        <p className="absolute font-bold inset-[68.04%_39.55%_24.05%_42.27%] leading-[normal] text-[18px] text-black text-center" data-node-id="344:823">
          Giới thiệu tên và sở thích
        </p>

        {/* Label: Động lực và câu khích lệ */}
        <p className="absolute font-bold inset-[86.08%_18.18%_6.01%_65%] leading-[normal] text-[18px] text-black text-center" data-node-id="344:824">
          Động lực và câu khích lệ
        </p>

        {/* Additional duplicate flow lines */}
        <div className="absolute flex inset-[60.37%_26.71%_6.69%_50.01%] items-center justify-center -z-10">
          <div className="flex-none h-[208.191px] rotate-[180deg] w-[153.625px]">
            <div 
              className="size-full rounded-bl-[84px] rounded-tl-[84px]" 
              style={{
                border: '2.518px dashed #d9d9d9',
                borderRight: 'none'
              }}
              data-node-id="344:826" 
            />
          </div>
        </div>

        <div 
          className="absolute inset-[26.89%_49.86%_39.63%_26.86%] rounded-bl-[84px] rounded-tl-[84px] -z-10" 
          style={{
            border: '2.518px dashed #d9d9d9',
            borderRight: 'none'
          }}
          data-node-id="344:827" 
        />

        <div className="absolute flex inset-[60.37%_26.71%_6.69%_50.01%] items-center justify-center -z-10">
          <div className="flex-none h-[208.191px] rotate-[180deg] w-[153.625px]">
            <div 
              className="size-full rounded-bl-[84px] rounded-tl-[84px]" 
              style={{
                border: '2.518px dashed #d9d9d9',
                borderRight: 'none'
              }}
              data-node-id="344:828" 
            />
          </div>
        </div>

        {/* Group 27 - Left arc flow line (360:563) */}
        <div 
          className="absolute inset-[26.89%_49.86%_39.63%_26.86%] rounded-bl-[84px] rounded-tl-[84px] -z-10" 
          style={{
            border: '2.518px dashed #d9d9d9',
            borderRight: 'none'
          }}
          data-node-id="360:563" 
        />

        {/* Duplicate Lesson 3 implementation */}
        <div className="absolute inset-[53.32%_42.12%_32.91%_44.7%]" data-name="Khóa học" data-node-id="344:835">
          <div className="absolute inset-[9.2%_10.35%_10.35%_10.35%]" data-node-id="I344:835;228:923">
            <img alt="" className="block max-w-none size-full" src={imgEllipse14} />
          </div>
          <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[70px] items-center justify-center left-[9px] px-[22px] py-[10px] top-[8px] w-[69px]" data-node-id="I344:835;231:940">
            <div className="absolute inset-0" data-node-id="I344:835;228:925">
              <div className="absolute inset-[-8.57%_-8.7%]">
                <img alt="" className="block max-w-none size-full" src={img} />
              </div>
            </div>
            <p className="font-black leading-[normal] relative shrink-0 text-[36px] text-nowrap text-white whitespace-pre" data-node-id="I344:835;228:926">
              3
            </p>
          </div>
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="flex-none rotate-[270deg] size-[87px]">
              <div className="relative size-full" data-node-id="I344:835;228:927">
                <div className="absolute bottom-0 left-[0.06%] right-[0.06%] top-1/2">
                  <img alt="" className="block max-w-none size-full" src={img1} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Using KhoaHc component for Lesson 4 and 5 */}
        <KhoaHc property1="Khóa" className="absolute inset-[70.89%_19.7%_14.87%_66.67%]" />
        <KhoaHc property1="Bài cuối" className="absolute bottom-0 left-[45%] right-[41.36%] top-[85.76%]" />

        {/* Duplicate continue button */}
        <div className="absolute contents inset-[46.68%_39.39%_44.2%_42.12%]" data-node-id="344:838">
          <div className="absolute inset-[46.68%_39.39%_44.2%_42.12%]" data-name="Union" data-node-id="344:839">
            <div className="absolute inset-[-3.47%_-1.64%]">
              <img alt="" className="block max-w-none size-full" src={imgUnion} />
            </div>
          </div>
          <p className="absolute font-bold inset-[47.94%_41.82%_46.84%_44.39%] leading-[normal] text-[#4f4f4f] text-[24px] text-nowrap whitespace-pre" data-node-id="344:842">
            Tiếp tục
          </p>
        </div>

        {/* Group with Lesson 1 (Completed) */}
        <div className="absolute contents inset-[19.78%_41.82%_57.59%_45%]" data-node-id="360:503">
          <div className="absolute inset-[19.78%_41.82%_66.46%_45%]" data-name="Component 2" data-node-id="344:769">
            <div className="absolute inset-[9.2%_10.35%_10.35%_10.35%]" data-node-id="I344:769;75:1483">
              <img alt="" className="block max-w-none size-full" src={imgEllipse14} />
            </div>
            <div className="absolute inset-[2.299%]" data-node-id="I344:769;97:272">
              <div className="absolute inset-[-2.41%]">
                <img alt="" className="block max-w-none size-full" src={imgEllipse39} />
              </div>
            </div>
            <div className="absolute inset-[9.2%_10.35%_10.35%_10.35%]" data-node-id="I344:769;118:92">
              <div className="absolute inset-[-8.57%_-8.7%]">
                <img alt="" className="block max-w-none size-full" src={imgEllipse47} />
              </div>
            </div>
            <p className="absolute font-black inset-[20.69%_39.08%_22.99%_35.63%] leading-[normal] text-[36px] text-nowrap text-white whitespace-pre" data-node-id="I344:769;101:347">
              1
            </p>
            <div className="absolute flex inset-0 items-center justify-center">
              <div className="flex-none rotate-[270deg] size-[87px]">
                <div className="relative size-full" data-node-id="I344:769;118:96">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse48} />
                </div>
              </div>
            </div>
          </div>
          
          <p className="absolute font-bold inset-[34.49%_42.42%_57.59%_46.36%] leading-[normal] text-[#202020] text-[18px] text-center" data-node-id="344:821">
            Chào hỏi cơ bản
          </p>

          {/* Duplicate Lesson 1 */}
          <div className="absolute contents inset-[19.78%_41.82%_66.46%_45%]" data-node-id="383:637">
            <div className="absolute inset-[19.78%_41.82%_66.46%_45%]" data-name="Component 18" data-node-id="344:833">
              <div className="absolute inset-[9.2%_10.35%_10.35%_10.35%]" data-node-id="I344:833;75:1483">
                <img alt="" className="block max-w-none size-full" src={imgEllipse14} />
              </div>
              <div className="absolute inset-[2.299%]" data-node-id="I344:833;97:272">
                <div className="absolute inset-[-2.41%]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse39} />
                </div>
              </div>
              <div className="absolute inset-[9.2%_10.35%_10.35%_10.35%]" data-node-id="I344:833;118:92">
                <div className="absolute inset-[-8.57%_-8.7%]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse47} />
                </div>
              </div>
              <p className="absolute font-black inset-[20.69%_39.08%_22.99%_35.63%] leading-[normal] text-[36px] text-nowrap text-white whitespace-pre" data-node-id="I344:833;101:347">
                1
              </p>
              <div className="absolute flex inset-0 items-center justify-center">
                <div className="flex-none rotate-[270deg] size-[87px]">
                  <div className="relative size-full" data-node-id="I344:833;118:96">
                    <img alt="" className="block max-w-none size-full" src={imgEllipse48} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute contents inset-[34.49%_42.42%_57.59%_46.36%]" data-node-id="360:562">
            <p className="absolute font-bold inset-[34.49%_42.42%_57.59%_46.36%] leading-[normal] text-[#202020] text-[18px] text-center" data-node-id="344:885">
              Chào hỏi cơ bản
            </p>
          </div>
        </div>

        {/* Duplicate labels */}
        <p className="absolute font-bold inset-[68.04%_39.55%_24.05%_42.27%] leading-[normal] text-[18px] text-black text-center" data-node-id="344:887">
          Giới thiệu tên và sở thích
        </p>
        <p className="absolute font-bold inset-[86.08%_18.18%_6.01%_65%] leading-[normal] text-[18px] text-black text-center" data-node-id="344:888">
          Động lực và câu khích lệ
        </p>

        {/* Lesson 2 - Completed (Component 19) */}
        <div className="absolute inset-[36.71%_66.67%_49.52%_20.15%]" data-name="Component 19" data-node-id="344:834">
          <div className="absolute inset-[9.2%_10.35%_10.35%_10.35%]" data-node-id="I344:834;75:1483">
            <img alt="" className="block max-w-none size-full" src={imgEllipse14} />
          </div>
          <div className="absolute inset-[2.299%]" data-node-id="I344:834;97:272">
            <div className="absolute inset-[-2.41%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse39} />
            </div>
          </div>
          <div className="absolute inset-[9.2%_10.35%_10.35%_10.35%]" data-node-id="I344:834;118:92">
            <div className="absolute inset-[-8.57%_-8.7%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse47} />
            </div>
          </div>
          <p className="absolute font-black inset-[20.69%_39.08%_22.99%_35.63%] leading-[normal] text-[36px] text-nowrap text-white whitespace-pre" data-node-id="I344:834;101:347">
            2
          </p>
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="flex-none rotate-[270deg] size-[87px]">
              <div className="relative size-full" data-node-id="I344:834;118:96">
                <img alt="" className="block max-w-none size-full" src={imgEllipse48} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
