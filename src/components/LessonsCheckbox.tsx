import React from 'react';

// Figma image assets (refreshed)
const imgVector = "https://www.figma.com/api/mcp/asset/e6b500ed-fbd0-4c3c-9de5-dae7aa9a7dfa";
const imgGroup6 = "https://www.figma.com/api/mcp/asset/12df08df-def0-41a7-a2b3-8742cdd5b1e7";
const imgCheck = "https://www.figma.com/api/mcp/asset/30820d3d-b978-442c-83ef-cce4b23567ed";

const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  (e.currentTarget as HTMLImageElement).style.display = 'none';
};

interface LessonsCheckboxProps {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3" | "Variant4";
}

function LessonsCheckbox({ className, property1 = "Default" }: LessonsCheckboxProps) {
  if (property1 === "Variant2") {
    return (
      <div className={className} data-name="Property 1=Variant2" data-node-id="261:1295">
        <div className="absolute bg-[#d9d9d9] border-2 border-[#d9d9d9] border-solid inset-0 rounded-[5px]" data-node-id="261:1290" />
        <div className="absolute aspect-[10.000005722045898/9.6630220413208] left-[24%] right-[20%] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="261:1291">
          <img alt="" className="block max-w-none size-full" src={imgVector} onError={handleImgError} />
        </div>
      </div>
    );
  }
  
  if (property1 === "Variant4") {
    return (
      <div className={className} data-name="Property 1=Variant4" data-node-id="261:1388">
        <div className="absolute bg-[#d9d9d9] border-2 border-[#d9d9d9] border-solid inset-0 rounded-[5px]" data-node-id="261:1389" />
        <div className="absolute inset-[24%_23.74%_20.11%_24%]" data-node-id="261:1391">
          <img alt="" className="block max-w-none size-full" src={imgGroup6} onError={handleImgError} />
        </div>
      </div>
    );
  }
  
  if (property1 === "Variant3") {
    return (
      <div className={className} data-name="Property 1=Variant3" data-node-id="261:1299">
        <div className="absolute bg-white border-[#d9d9d9] border-[3px] border-solid inset-0 rounded-[5px]" data-node-id="261:1300" />
      </div>
    );
  }
  
  // Default state
  return (
    <div className={className} data-name="Property 1=Default" data-node-id="261:1293">
      <div className="absolute bg-[#6ba823] border-2 border-[#6ba823] border-solid inset-0 rounded-[5px]" data-node-id="261:1284" />
      <div className="absolute inset-[12%_8%_8%_12%]" data-name="check" data-node-id="261:1285">
        <img alt="" className="block max-w-none size-full" src={imgCheck} onError={handleImgError} />
      </div>
    </div>
  );
}

export default LessonsCheckbox;
