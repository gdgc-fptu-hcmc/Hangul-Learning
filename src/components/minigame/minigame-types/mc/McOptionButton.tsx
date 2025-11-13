import { MiniGameMcOption } from "@/data";
import TextShow from "@/shared/common/TextShow";
import React from "react";

interface OptionButtonProps {
  displayType: 1 | 2 | 3 | 4;
  option: MiniGameMcOption;
  isSelected?: boolean;
  onSelect: (optionValue: string) => void;
  optionState?: "default" | "correct" | "incorrect";
  disabled?: boolean;
  className?: string;
}

const McOptionButton: React.FC<OptionButtonProps> = ({
  displayType,
  option,
  isSelected = false,
  onSelect,
  optionState = "default",
  disabled = false,
  className,
}) => {
  return (
    <button
      onClick={() => !disabled && onSelect(option.value)}
      disabled={disabled}
      className={`group ${
        displayType === 3 || displayType === 4 ? "max-w-md" : "max-w-2xl"
      } w-full px-2 py-1 border-[3px] flex flex-col items-center border-gray-300 rounded-lg ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      {(displayType === 3 || displayType === 4) && option.image && (
        <div className="w-full h-[200px] bg-gray-300 my-2 flex items-center justify-center overflow-hidden">
          <img src={option.image} alt={option.value} className="" />
        </div>
      )}

      {/* below */}
      <div className="flex w-full justify-between items-center">
        <div
          className={`border-[3px] border-[var(--custom-orange)] w-[40px] h-[40px] rounded-lg flex items-center justify-center font-bold text-lg ${
            isSelected
              ? "text-white bg-[var(--custom-orange)]"
              : "text-[var(--custom-orange)] bg-white"
          }`}
        >
          {option.value}
        </div>

        <div className="flex-1 flex items-center justify-center mt-2">
          {displayType === 1 && <TextShow textDisplay={option.text} />}
          {displayType === 2 && option.text.sub && (
            <TextShow
              textDisplay={option.text}
              showSubText
              subClassName="text-sm"
              mainClassName="font-black"
            />
          )}
          {displayType === 3 && option.text.sub && (
            <TextShow
              textDisplay={option.text}
              showSubText
              subClassName="text-sm"
              mainClassName="font-black"
            />
          )}
          {displayType === 4 && (
            <TextShow textDisplay={option.text} mainClassName="font-black" />
          )}
        </div>
      </div>
    </button>
  );
};

export default McOptionButton;
