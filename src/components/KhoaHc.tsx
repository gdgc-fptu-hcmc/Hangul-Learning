import React from 'react';

// Figma image assets (Component 18 from node 383:633)
const imgSkipForward = "https://www.figma.com/api/mcp/asset/301455d8-260f-4fc0-ae3e-53808f2e2818";
const imgFrame58 = "https://www.figma.com/api/mcp/asset/12f9815d-a32c-4149-9c8c-255db4d34322";
const imgFrame59 = "https://www.figma.com/api/mcp/asset/ad7e7fdb-f46a-4fce-98d6-63db20fd218e";
const imgEllipse14 = "https://www.figma.com/api/mcp/asset/77d0f2ef-af6c-4026-b5fc-16f5e92543f1";
const imgEllipse39 = "https://www.figma.com/api/mcp/asset/69078be2-0e6d-46cc-944c-242f5d175683";
const imgEllipse47 = "https://www.figma.com/api/mcp/asset/be161547-ece0-4922-8eb3-810b9893bcdc";
const imgEllipse48 = "https://www.figma.com/api/mcp/asset/3f78a937-40d2-4347-9149-6459208d5ca8";

const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  (e.currentTarget as HTMLImageElement).style.display = 'none';
};

interface KhoaHcProps {
  className?: string;
  property1?: "Hoàn thành" | "Khóa" | "Đang học" | "Bài cuối" | "Bỏ qua";
  lessonNumber?: string;
}

function KhoaHc({ className, property1 = "Hoàn thành", lessonNumber = "1" }: KhoaHcProps) {
  if (property1 === "Đang học") {
    return (
      <div className={className} data-name="Property 1=Đang học" data-node-id="228:922">
        <div className="absolute inset-[9.2%_10.35%_10.35%_10.35%]">
          <div className="w-full h-full bg-[#02953f] rounded-full"></div>
        </div>
        <div className="absolute inset-[10.35%_10.35%_10.35%_10.35%]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-[#ffaa00] rounded-full border-[6px] border-white"></div>
          </div>
        </div>
        <p className="absolute font-black inset-[20.69%_39.08%_22.99%_35.63%] leading-[normal] text-[36px] text-white flex items-center justify-center">
          {lessonNumber}
        </p>
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="flex-none rotate-[270deg] size-[87px]">
            <div className="relative size-full">
              <div className="w-full h-full border-4 border-[#ffaa00] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (property1 === "Bỏ qua") {
    return (
      <div className={className} data-name="Property 1=Bỏ qua" data-node-id="232:1033">
        <div className="absolute bg-[#464394] box-border content-stretch flex gap-[10px] items-center left-[-1px] px-[24px] py-[23px] rounded-[45px] size-[90px] top-[-1px]" data-node-id="267:1935">
          <div className="relative shrink-0 size-[42px]" data-name="skip-forward" data-node-id="232:1039">
            <img alt="" className="block max-w-none size-full" src={imgSkipForward} onError={handleImgError} />
          </div>
        </div>
      </div>
    );
  }
  
  if (property1 === "Khóa") {
    return (
      <div className={className} data-name="Property 1=Khóa" data-node-id="228:886">
        <div className="absolute h-[90px] left-px top-0 w-[88px]" data-node-id="267:1724">
          <img alt="" className="block max-w-none size-full" src={imgFrame58} onError={handleImgError} />
        </div>
      </div>
    );
  }
  
  if (property1 === "Bài cuối") {
    return (
      <div className={className} data-name="Property 1=Bài cuối" data-node-id="232:994">
        <div className="absolute h-[89px] left-0 top-px w-[90px]" data-node-id="267:1871">
          <div className="absolute bottom-0 left-0 right-0 top-[-1.12%]">
            <img alt="" className="block max-w-none size-full" src={imgFrame59} onError={handleImgError} />
          </div>
        </div>
      </div>
    );
  }
  
  // Default "Hoàn thành" state
  return (
    <div className={className} data-name="Property 1=Hoàn thành" data-node-id="228:870">
      <div className="absolute inset-[9.2%_10.35%_10.35%_10.35%]" data-node-id="75:1483">
        <img alt="" className="block max-w-none size-full" src={imgEllipse14} onError={handleImgError} />
      </div>
      <div className="absolute inset-[2.299%]" data-node-id="97:272">
        <div className="absolute inset-[-2.41%]">
          <img alt="" className="block max-w-none size-full" src={imgEllipse39} onError={handleImgError} />
        </div>
      </div>
      <div className="absolute inset-[9.2%_10.35%_10.35%_10.35%]" data-node-id="118:92">
        <div className="absolute inset-[-8.57%_-8.7%]">
          <img alt="" className="block max-w-none size-full" src={imgEllipse47} onError={handleImgError} />
        </div>
      </div>
      <p className="absolute font-black inset-[20.69%_39.08%_22.99%_35.63%] leading-[normal] text-[36px] text-white flex items-center justify-center" data-node-id="101:347">
        {lessonNumber}
      </p>
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[270deg] size-[87px]">
          <div className="relative size-full" data-node-id="118:96">
            <img alt="" className="block max-w-none size-full" src={imgEllipse48} onError={handleImgError} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KhoaHc;
