import React from "react";

interface CustomBoxProps {
  tailPosition?:
    | "top-left"
    | "top-middle"
    | "top-right"
    | "right-left"
    | "right-middle"
    | "right-right"
    | "bottom-left"
    | "bottom-middle"
    | "bottom-right"
    | "left-left"
    | "left-middle"
    | "left-right"
    | "none";
  tailSize?: number;
  tailRounded?: "sm" | "md" | "lg" | "none";
  children?: React.ReactNode;
  className?: string;
}

const CustomBox: React.FC<CustomBoxProps> = ({
  // này là box có viền gray bình thường, có thể thêm thắt thành box có đuôi (tail)...
  tailPosition = "none", // mặc định là ko có tail, nếu có thì tail nằm ở trái, phải, giữa của cạnh box, có thể nằm ở trên dưới trải phải
  tailSize = 30, // kích thước đuôi box theo px
  tailRounded = "none", // bo góc tail
  children,
  className,
}) => {
  const tailRoundedClass = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    none: "",
  }[tailRounded];

  return (
    <div
      className={`${
        tailPosition !== "none" ? "relative" : ""
      } z-[999] w-full border-2 bg-white border-gray-300 ${className}`}
    >
      {children}
      {/* Tail Part */}
      {tailPosition !== "none" && (
        <div
          className={`absolute z-[-999]  bg-white  ${tailRoundedClass} border-t-2 border-r-2  border-t-gray-300 border-r-gray-300 ${
            tailPosition === "left-left"
              ? "left-0 top-2 -translate-x-1/2 translate-y-1/2 rotate-[-135deg]"
              : tailPosition === "left-middle"
              ? "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-135deg]"
              : tailPosition === "left-right"
              ? "left-0 bottom-2 -translate-x-1/2 -translate-y-1/2 rotate-[-135deg]"
              : tailPosition === "right-left"
              ? "right-0 top-2 rotate-45 translate-x-1/2 translate-y-1/2"
              : tailPosition === "right-middle"
              ? "right-0 top-1/2 rotate-45 translate-x-1/2 -translate-y-1/2"
              : tailPosition === "right-right"
              ? "right-0 bottom-2 rotate-45 translate-x-1/2 -translate-y-1/2"
              : tailPosition === "top-left"
              ? "top-0 left-2 translate-x-1/2 -translate-y-1/2 -rotate-45"
              : tailPosition === "top-middle"
              ? "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"
              : tailPosition === "top-right"
              ? "top-0 right-2 -translate-x-1/2 -translate-y-1/2 -rotate-45"
              : tailPosition === "bottom-left"
              ? "right-2 bottom-0 rotate-[135deg] -translate-x-1/2 translate-y-1/2"
              : tailPosition === "bottom-middle"
              ? "left-1/2 bottom-0 rotate-[135deg] -translate-x-1/2 translate-y-1/2"
              : tailPosition === "bottom-right"
              ? "left-2 bottom-0 rotate-[135deg] translate-x-1/2 translate-y-1/2"
              : ""
          }`}
          style={{
            width: `${tailSize}px`,
            height: `${tailSize}px`,
          }}
        ></div>
      )}
    </div>
  );
};

export default CustomBox;
