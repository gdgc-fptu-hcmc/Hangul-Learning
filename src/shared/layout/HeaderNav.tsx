// Navigation Bar Component
// From Figma node 401:2070 - Full details with all assets

import React from 'react';

// Image assets from Figma
const imgRectangle = "/src/assets/8c361907193c2bdd0c2a991275e637269ca64d92.png";
const imgLanguage = "/src/assets/e2462069590bf68360aa105537f4085c8f344a7d.svg";
const imgPolygon2 = "/src/assets/8fe697ee0ec01caccf5e61b60a6faca0b35384af.svg";
const imgFrameTopik = "/src/assets/886dc39bc5ef732ae744b0ae7e766a326e56655c.svg";
const imgFrameBasic = "/src/assets/747c072283f6da1ee5ef0bba2909d6102cba9ea8.svg";
const imgPolygon1 = "/src/assets/afa6916a2cc855e9d0edb66495dcbe9d68e27bea.svg";
const imgFrameLesson = "/src/assets/07cb358309e8ccec4e0a55d4fdeae94526a8b810.svg";
const imgHome = "/src/assets/7cdffa32089f95b80ef061bccfff45aaa6f520e8.svg";
const imgHangulGroup1 = "/src/assets/0ac29214cd41b6d55187d0fa9d302aab67ed3d74.svg";
const imgHangulGroup2 = "/src/assets/91134d58debcf6030c877f5a3fcdd9a7e4513d54.svg";
const imgHangulGroup3 = "/src/assets/e80666d7332a6832b549328ad7da5ac333482364.svg";
const imgLogoGroup1 = "/src/assets/bf8d4644228f1a973ceba9c8e83af716844d7f68.svg";
const imgLogoGroup2 = "/src/assets/a74069e8c33d644ce7039214c93633b51b0edf64.svg";
const imgLogoGroup3 = "/src/assets/68336e6d806bafad2686a34c8afc59cf8184f78e.svg";
const imgLogoGroup4 = "/src/assets/cc8c16560d86a47694e78017042bb8f50b9a8eaf.svg";
const imgLogoGroup5 = "/src/assets/e844ed2e1779297d2dc57efb7bfcbe0c84496d2a.svg";
const imgLogoGroup6 = "/src/assets/edf0471d9b63806ac7c94a173cbb30840cc8e5cd.svg";
const imgLogoGroup7 = "/src/assets/d7af5585055db6f754e1106c0cbf65e1382f2df8.svg";
const imgLogoGroup8 = "/src/assets/55701f906a66294f6b876a106cb21203cbaec4cf.svg";
const imgLogoGroup9 = "/src/assets/6c809165c24d8fcb4e0e2c27a1a88fd876ef56be.svg";
const imgLogoGroup10 = "/src/assets/0d2def5fec76d475b19ca75adb33e57d3dec5c42.svg";
const imgLogoGroup11 = "/src/assets/298041688be41cdecf5ecede63fac2a8ae39b9ba.svg";
const imgLogoGroup12 = "/src/assets/448e77511e7bc1ab13e29e99ec15ae5bf0352250.svg";
const imgLogoGroup13 = "/src/assets/dd5de93768a1f452fb9866d4878d643e3db93410.svg";
const imgLogoGroup14 = "/src/assets/673e4fece8583d5009ea56b0552b7304384b1e91.svg";
const imgLogoGroup15 = "/src/assets/fc3ad2d565a496ea223cf6c78b8c00ef708f0fb7.svg";

interface HeaderNavProps {
  className?: string;
}

export default function HeaderNav({ className = '' }: HeaderNavProps) {
  return (
    <div className={`${className}`} data-node-id="401:2070">
      <div className="absolute inset-0 rounded-[10px]" data-name="Nav Bar" data-node-id="401:1933">
        <div className="absolute bg-[rgba(255,255,255,0.75)] border-[#d9d9d9] border-[3px] border-solid inset-0 rounded-[10px]" data-node-id="I401:1933;10:2" />
        
        {/* Language Selector */}
        <div className="absolute right-[17px] size-[24px] top-[calc(50%+0.667px)] translate-y-[-50%]" data-name="Language" data-node-id="I401:1933;10:56">
          <img alt="" className="block max-w-none size-full" src={imgLanguage} />
        </div>
        
        {/* Kỳ thi TOPIK */}
        <div className="absolute contents right-[74px] top-[calc(50%+2px)] translate-y-[-50%]" data-name="Topik" data-node-id="I401:1933;10:19">
          <div className="absolute flex flex-col font-['Nunito:Bold',_sans-serif] font-bold h-[20px] justify-center leading-[0] right-[205px] text-[#0d0d0d] text-[18px] top-[calc(50%+2px)] translate-x-[100%] translate-y-[-50%] w-[107px]" data-node-id="I401:1933;10:20">
            <p className="leading-[normal]">Kỳ thi TOPIK</p>
          </div>
          <div className="absolute flex items-center justify-center right-[74px] size-[16px] top-1/2 translate-y-[-50%]">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-[16px]" data-node-id="I401:1933;10:21">
                <div className="absolute bottom-1/4 left-[11.26%] right-[11.26%] top-[6.25%]">
                  <img alt="" className="block max-w-none size-full" src={imgPolygon2} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute overflow-clip right-[209px] size-[24px] top-[calc(50%+2px)] translate-y-[-50%]" data-name="Frame" data-node-id="I401:1933;12:115">
            <div className="absolute left-0 size-[24px] top-0" data-name="Frame" data-node-id="I401:1933;12:121">
              <img alt="" className="block max-w-none size-full" src={imgFrameTopik} />
            </div>
          </div>
        </div>
        
        {/* Cơ bản */}
        <div className="absolute contents right-[267px] top-[calc(50%+2.5px)] translate-y-[-50%]" data-name="Basic" data-node-id="I401:1933;10:57">
          <div className="absolute flex flex-col font-['Nunito:Bold',_sans-serif] font-bold justify-center leading-[0] right-[350px] text-[#0d0d0d] text-[18px] text-nowrap top-[calc(50%+2.5px)] translate-x-[100%] translate-y-[-50%]" data-node-id="I401:1933;10:58">
            <p className="leading-[normal] whitespace-pre">Cơ bản</p>
          </div>
          <div className="absolute flex items-center justify-center right-[267px] size-[16px] top-[calc(50%+2px)] translate-y-[-50%]">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-[16px]" data-node-id="I401:1933;10:59">
                <div className="absolute bottom-1/4 left-[11.26%] right-[11.26%] top-[6.25%]">
                  <img alt="" className="block max-w-none size-full" src={imgPolygon2} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-[354px] size-[24px] top-[calc(50%+2px)] translate-y-[-50%]" data-name="Frame" data-node-id="I401:1933;12:112">
            <img alt="" className="block max-w-none size-full" src={imgFrameBasic} />
          </div>
        </div>
        
        {/* Bài học */}
        <div className="absolute contents right-[412px] top-[calc(50%+2.5px)] translate-y-[-50%]" data-name="Lesson" data-node-id="I401:1933;10:16">
          <div className="absolute flex flex-col font-['Nunito:Bold',_sans-serif] font-bold justify-center leading-[0] right-[498px] text-[#0d0d0d] text-[18px] text-nowrap top-[calc(50%+2.5px)] translate-x-[100%] translate-y-[-50%]" data-node-id="I401:1933;10:17">
            <p className="leading-[normal] whitespace-pre">Bài học</p>
          </div>
          <div className="absolute flex items-center justify-center right-[412px] size-[16px] top-[calc(50%+2px)] translate-y-[-50%]">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-[16px]" data-node-id="I401:1933;10:18">
                <div className="absolute bottom-1/4 left-[11.26%] right-[11.26%] top-[6.25%]">
                  <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-[502px] size-[24px] top-[calc(50%+2px)] translate-y-[-50%]" data-name="Frame" data-node-id="I401:1933;12:109">
            <img alt="" className="block max-w-none size-full" src={imgFrameLesson} />
          </div>
        </div>
        
        {/* Trang chủ */}
        <div className="absolute contents right-[593px] top-[calc(50%+1.5px)] translate-y-[-50%]" data-name="Home" data-node-id="I401:1933;72:605">
          <div className="absolute flex flex-col font-['Nunito:Bold',_sans-serif] font-bold justify-center leading-[0] right-[676px] text-[18px] text-black text-nowrap top-[calc(50%+2.5px)] translate-x-[100%] translate-y-[-50%]" data-node-id="I401:1933;12:91">
            <p className="leading-[normal] whitespace-pre">Trang chủ</p>
          </div>
          <div className="absolute right-[680px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Home" data-node-id="I401:1933;12:98">
            <img alt="" className="block max-w-none size-full" src={imgHome} />
          </div>
        </div>
        
        {/* Logo Section */}
        <div className="absolute contents left-[17px] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Logo" data-node-id="I401:1933;72:1014">
          {/* Hangul Text */}
          <div className="absolute contents left-[89px] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Hangul" data-node-id="I401:1933;10:3">
            <div className="absolute h-[26.739px] left-[89px] overflow-clip top-[calc(50%-5.63px)] translate-y-[-50%] w-[82px]" data-name="hangul" data-node-id="I401:1933;10:4">
              <div className="absolute inset-[4.49%_3.84%_4.57%_3.82%]" data-name="Group" data-node-id="I401:1933;10:5">
                <img alt="" className="block max-w-none size-full" src={imgHangulGroup1} />
              </div>
              <div className="absolute inset-[9.63%_5.55%_9.7%_5.54%]" data-name="Group" data-node-id="I401:1933;10:7">
                <img alt="" className="block max-w-none size-full" src={imgHangulGroup2} />
              </div>
              <div className="absolute inset-[16.83%_7.96%_16.91%_7.94%]" data-name="Group" data-node-id="I401:1933;10:9">
                <img alt="" className="block max-w-none size-full" src={imgHangulGroup3} />
              </div>
            </div>
            <p className="absolute font-['Nunito:Bold',_sans-serif] font-bold leading-[normal] left-[94px] text-[#0d0d0d] text-[12px] text-nowrap top-[calc(50%+5px)] whitespace-pre" data-node-id="I401:1933;10:11">
              ONLINE
            </p>
          </div>
          
          {/* Main Logo with detailed groups */}
          <div className="absolute h-[38px] left-[17px] overflow-clip top-1/2 translate-y-[-50%] w-[70px]" data-name="Logo" data-node-id="I401:1933;10:22">
            <div className="absolute inset-[0.95%_19.94%_20.87%_18.16%]" data-name="Rectangle" data-node-id="I401:1933;10:23">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
              </div>
            </div>
            <div className="absolute inset-[12.72%_33.36%_2.09%_32.72%]" data-name="Group" data-node-id="I401:1933;10:24">
              <img alt="" className="block max-w-none size-full" src={imgLogoGroup1} />
            </div>
            <div className="absolute inset-[14.91%_34.56%_4.28%_34.06%]" data-name="Group" data-node-id="I401:1933;10:26">
              <img alt="" className="block max-w-none size-full" src={imgLogoGroup2} />
            </div>
            <div className="absolute contents inset-[17.08%_26.97%_-9.74%_27.35%]" data-name="Group" data-node-id="I401:1933;10:28">
              <div className="absolute flex inset-[25.9%_26.97%_-9.74%_27.35%] items-center justify-center">
                <div className="flex-none h-[23.672px] rotate-[218.61deg] scale-y-[-100%] skew-x-[0.732deg] w-[21.716px]">
                  <div className="relative size-full" data-name="Group" data-node-id="I401:1933;10:29">
                    <img alt="" className="block max-w-none size-full" src={imgLogoGroup3} />
                  </div>
                </div>
              </div>
              <div className="absolute inset-[46.21%_41.26%_18.84%_41.2%]" data-name="Group" data-node-id="I401:1933;10:31">
                <img alt="" className="block max-w-none size-full" src={imgLogoGroup4} />
              </div>
              <div className="absolute inset-[17.08%_38.59%_53.82%_38.53%]" data-name="Group" data-node-id="I401:1933;10:33">
                <img alt="" className="block max-w-none size-full" src={imgLogoGroup5} />
              </div>
              <div className="absolute contents inset-[42.34%_42.96%_24.05%_42.21%]" data-name="Group" data-node-id="I401:1933;10:35">
                <div className="absolute inset-[42.34%_42.96%_29.43%_42.21%]" data-name="Group" data-node-id="I401:1933;10:36">
                  <img alt="" className="block max-w-none size-full" src={imgLogoGroup6} />
                </div>
                <div className="absolute inset-[68.05%_49.64%_24.05%_48.21%]" data-name="Group" data-node-id="I401:1933;10:38">
                  <img alt="" className="block max-w-none size-full" src={imgLogoGroup7} />
                </div>
                <div className="absolute inset-[68.05%_48.59%_25.59%_48.97%]" data-name="Group" data-node-id="I401:1933;10:40">
                  <img alt="" className="block max-w-none size-full" src={imgLogoGroup8} />
                </div>
              </div>
            </div>
            <div className="absolute inset-[16.93%_38.5%_53.81%_38.45%]" data-name="Group" data-node-id="I401:1933;10:42">
              <img alt="" className="block max-w-none size-full" src={imgLogoGroup9} />
            </div>
            <div className="absolute flex inset-[58.52%_1.34%_15.03%_68.11%] items-center justify-center">
              <div className="flex-none h-[10.052px] rotate-[180deg] scale-y-[-100%] w-[21.382px]">
                <div className="relative size-full" data-name="Group" data-node-id="I401:1933;10:44">
                  <img alt="" className="block max-w-none size-full" src={imgLogoGroup10} />
                </div>
              </div>
            </div>
            <div className="absolute flex inset-[65.68%_10.06%_22.19%_72.11%] items-center justify-center">
              <div className="flex-none h-[4.611px] rotate-[180deg] scale-y-[-100%] w-[12.483px]">
                <div className="relative size-full" data-name="Group" data-node-id="I401:1933;10:46">
                  <img alt="" className="block max-w-none size-full" src={imgLogoGroup11} />
                </div>
              </div>
            </div>
            <div className="absolute inset-[29.44%_66.56%_44.11%_2.89%]" data-name="Group" data-node-id="I401:1933;10:48">
              <img alt="" className="block max-w-none size-full" src={imgLogoGroup12} />
            </div>
            <div className="absolute inset-[36.59%_70.56%_51.27%_11.61%]" data-name="Group" data-node-id="I401:1933;10:50">
              <img alt="" className="block max-w-none size-full" src={imgLogoGroup13} />
            </div>
            <div className="absolute inset-[64.69%_56.62%_0.95%_1.34%]" data-name="Group" data-node-id="I401:1933;10:52">
              <img alt="" className="block max-w-none size-full" src={imgLogoGroup14} />
            </div>
            <div className="absolute inset-[72.78%_61.19%_9.04%_17.29%]" data-name="Group" data-node-id="I401:1933;10:54">
              <img alt="" className="block max-w-none size-full" src={imgLogoGroup15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
