import React from 'react';

// Figma image assets (refreshed)
const img = "https://www.figma.com/api/mcp/asset/3c341033-9ba4-4be9-a2d0-1f9b7168d030";
const img1 = "https://www.figma.com/api/mcp/asset/d1edcc66-7ead-4807-be18-fbf12cd542aa";
const img2 = "https://www.figma.com/api/mcp/asset/5c4a9be7-0279-406d-9e3d-3c599c01b3a8";
const img3 = "https://www.figma.com/api/mcp/asset/ff7dc3c7-d8c7-4178-94ab-16d6efbfc1da";
const img4 = "https://www.figma.com/api/mcp/asset/3acdf963-056a-41ee-b959-04aa5621f29f";
const img5 = "https://www.figma.com/api/mcp/asset/0122602b-366d-41c7-90ff-876aa5092c3e";
const img6 = "https://www.figma.com/api/mcp/asset/93777c6a-6c88-41e6-973d-6bd4029ae7e9";
const img7 = "https://www.figma.com/api/mcp/asset/6c277340-50a6-4790-b8d0-6e9e06ee93f3";
const imgGroup = "https://www.figma.com/api/mcp/asset/1e341081-ad5a-43a7-af0f-27a84eaa004c";
const img8 = "https://www.figma.com/api/mcp/asset/e3478bcf-ccb7-42ba-aa24-79b3bdae898c";
const img9 = "https://www.figma.com/api/mcp/asset/6b73e9c0-8315-42ff-9d4a-be1a803b45d7";
const img10 = "https://www.figma.com/api/mcp/asset/0c8ac9c5-aed7-4ccf-89ef-df37b142cc7a";
const img11 = "https://www.figma.com/api/mcp/asset/9bed8ebb-87e7-4757-ab3f-8b7aa757338e";
// Unused assets removed to satisfy linter

const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  (e.currentTarget as HTMLImageElement).style.display = 'none';
};

interface NavBarProps {
  className?: string;
}

function NavBar({ className }: NavBarProps) {
  return (
    <div className={className} data-name="Nav Bar" data-node-id="73:1376">
      <div className="absolute bg-[rgba(255,255,255,0.75)] border-[#d9d9d9] border-[3px] border-solid inset-0 rounded-[10px]" data-node-id="I73:1376;10:2" />
      
      {/* Language Selector */}
      <div className="absolute right-[17px] size-[24px] top-[calc(50%+0.667px)] translate-y-[-50%]" data-name="Language" data-node-id="I73:1376;10:56">
        <img alt="" className="block max-w-none size-full" src={img} onError={handleImgError} />
      </div>
      
      {/* TOPIK */}
      <div className="absolute contents right-[74px] top-[calc(50%+2px)] translate-y-[-50%]" data-name="Topik" data-node-id="I73:1376;10:19">
        <div className="absolute flex flex-col font-bold h-[20px] justify-center leading-[0] right-[205px] text-[#0d0d0d] text-[18px] top-[calc(50%+2px)] translate-x-[100%] translate-y-[-50%] w-[107px]" data-node-id="I73:1376;10:20">
          <p className="leading-[normal] whitespace-pre-wrap">Kỳ thi TOPIK</p>
        </div>
        <div className="absolute flex items-center justify-center right-[74px] size-[16px] top-1/2 translate-y-[-50%]">
          <div className="flex-none rotate-[180deg]">
            <div className="relative size-[16px]" data-node-id="I73:1376;10:59">
              <div className="absolute inset-[6.25%_11.26%_25%_11.26%]">
                <img alt="" className="block max-w-none size-full" src={img1} onError={handleImgError} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute overflow-clip right-[209px] size-[24px] top-[calc(50%+2px)] translate-y-[-50%]" data-name="Frame" data-node-id="I73:1376;12:115">
          <div className="absolute left-0 size-[24px] top-0" data-name="Frame" data-node-id="I73:1376;12:121">
            <img alt="" className="block max-w-none size-full" src={img2} onError={handleImgError} />
          </div>
        </div>
      </div>
      
      {/* Basic */}
      <div className="absolute contents right-[267px] top-[calc(50%+2.5px)] translate-y-[-50%]" data-name="Basic" data-node-id="I73:1376;10:57">
        <div className="absolute flex flex-col font-bold justify-center leading-[0] right-[350px] text-[#0d0d0d] text-[18px] top-[calc(50%+2.5px)] translate-x-[100%] translate-y-[-50%] whitespace-nowrap" data-node-id="I73:1376;10:58">
          <p className="leading-[normal]">Cơ bản</p>
        </div>
        <div className="absolute flex items-center justify-center right-[267px] size-[16px] top-[calc(50%+2px)] translate-y-[-50%]">
          <div className="flex-none rotate-[180deg]">
            <div className="relative size-[16px]" data-node-id="I73:1376;10:59">
              <div className="absolute inset-[6.25%_11.26%_25%_11.26%]">
                <img alt="" className="block max-w-none size-full" src={img1} onError={handleImgError} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[354px] size-[24px] top-[calc(50%+2px)] translate-y-[-50%]" data-name="Frame" data-node-id="I73:1376;12:112">
          <img alt="" className="block max-w-none size-full" src={img3} onError={handleImgError} />
        </div>
      </div>
      
      {/* Lesson */}
      <div className="absolute contents right-[412px] top-[calc(50%+2.5px)] translate-y-[-50%]" data-name="Lesson" data-node-id="I73:1376;10:16">
        <div className="absolute flex flex-col font-bold justify-center leading-[0] right-[498px] text-[#0d0d0d] text-[18px] top-[calc(50%+2.5px)] translate-x-[100%] translate-y-[-50%] whitespace-nowrap" data-node-id="I73:1376;10:17">
          <p className="leading-[normal]">Bài học</p>
        </div>
        <div className="absolute flex items-center justify-center right-[412px] size-[16px] top-[calc(50%+2px)] translate-y-[-50%]">
          <div className="flex-none rotate-[180deg]">
            <div className="relative size-[16px]" data-node-id="I73:1376;10:18">
              <div className="absolute inset-[6.25%_11.26%_25%_11.26%]">
                <img alt="" className="block max-w-none size-full" src={img4} onError={handleImgError} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[502px] size-[24px] top-[calc(50%+2px)] translate-y-[-50%]" data-name="Frame" data-node-id="I73:1376;12:109">
          <img alt="" className="block max-w-none size-full" src={img5} onError={handleImgError} />
        </div>
      </div>
      
      {/* Home */}
      <div className="absolute contents right-[593px] top-[calc(50%+1.5px)] translate-y-[-50%]" data-name="Home" data-node-id="I73:1376;72:605">
        <div className="absolute flex flex-col font-bold justify-center leading-[0] right-[676px] text-[18px] text-black top-[calc(50%+2.5px)] translate-x-[100%] translate-y-[-50%] whitespace-nowrap" data-node-id="I73:1376;12:91">
          <p className="leading-[normal]">Trang chủ</p>
        </div>
        <div className="absolute right-[680px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Home" data-node-id="I73:1376;12:98">
          <img alt="" className="block max-w-none size-full" src={img6} onError={handleImgError} />
        </div>
      </div>
      
      {/* Logo */}
      <div className="absolute contents left-[17px] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Logo" data-node-id="I73:1376;72:1014">
        <div className="absolute contents left-[89px] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Hangul" data-node-id="I73:1376;10:3">
            <div className="absolute h-[26.739px] left-[89px] overflow-clip top-[calc(50%+-5.63px)] translate-y-[-50%] w-[82px]" data-name="hangul" data-node-id="I73:1376;10:4">
              <div className="absolute inset-[4.49%_3.84%_4.57%_3.82%]" data-name="Group" data-node-id="I73:1376;10:5">
                <img alt="" className="block max-w-none size-full" src={img7} onError={handleImgError} />
              </div>
              <div className="absolute inset-[9.63%_5.55%_9.7%_5.54%]" data-name="Group" data-node-id="I73:1376;10:7">
                <img alt="" className="block max-w-none size-full" src={imgGroup} onError={handleImgError} />
              </div>
              <div className="absolute inset-[16.83%_7.96%_16.91%_7.94%]" data-name="Group" data-node-id="I73:1376;10:9">
                <img alt="" className="block max-w-none size-full" src={img8} onError={handleImgError} />
              </div>
            </div>
          <p className="absolute font-bold leading-[normal] left-[94px] text-[#0d0d0d] text-[12px] top-[calc(50%+5px)]" data-node-id="I73:1376;10:11">
            ONLINE
          </p>
        </div>
        
        {/* Main Logo */}
        <div className="absolute h-[38px] left-[17px] overflow-clip top-1/2 translate-y-[-50%] w-[70px]" data-name="Logo" data-node-id="I73:1376;10:22">
          <div className="absolute inset-[0.95%_19.94%_20.87%_18.16%]" data-name="Rectangle" data-node-id="I73:1376;10:23">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img9} onError={handleImgError} />
            </div>
          </div>
          <div className="absolute inset-[12.72%_33.36%_2.09%_32.72%]" data-name="Group" data-node-id="I73:1376;10:24">
            <img alt="" className="block max-w-none size-full" src={img10} onError={handleImgError} />
          </div>
          <div className="absolute inset-[14.91%_34.56%_4.28%_34.06%]" data-name="Group" data-node-id="I73:1376;10:26">
            <img alt="" className="block max-w-none size-full" src={img11} onError={handleImgError} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;