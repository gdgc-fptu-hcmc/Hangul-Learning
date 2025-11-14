import type { TextDisplay } from "@/data";
import React from "react";

interface TextDisplayProps {
  textDisplay: TextDisplay;
  showSubText?: boolean;
  className?: string;
  mainClassName?: string;
  subClassName?: string;
}

const TextShow: React.FC<TextDisplayProps> = ({
  textDisplay: {
    main, // bắt buộc
    sub, // optional: nếu mà có thì sẽ hiển thị màu xanh ở trên, có thể dùng cho romanji của từ hoặc cho mục đích khác
  },
  showSubText = false,
  className,
  mainClassName,
  subClassName,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-max gap-1 ${className}`}
    >
      {sub && showSubText && (
        <span className={`text-[var(--custom-blue)] ${subClassName}`}>
          {sub}
        </span>
      )}
      <div className={`font-bold text-lg text-black ${mainClassName}`}>
        {main}
      </div>
    </div>
  );
};

export default TextShow;
