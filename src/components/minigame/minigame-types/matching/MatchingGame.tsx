import { MiniGameMatching, PhraseOrderOption, TextDisplay } from "@/data";
import TextShow from "@/shared/common/TextShow";
import ClickScaleDebounce from "@/shared/effects/ClickScaleDebounce";
import { button, div } from "framer-motion/client";
import React from "react";

interface MatchingGameProps {
  title?: string;
  content: MiniGameMatching;
  randomList: PhraseOrderOption[];
  firstChosenList?: number[];
  secondChosenList?: number[];
  onClick?: (listOrder: string, valueIndex: number) => void;
  disabled?: boolean;
}

const MatchingGame: React.FC<MatchingGameProps> = ({
  title,
  content,
  randomList,
  firstChosenList,
  secondChosenList,
  onClick,
  disabled,
}) => {
  const firstPhraseList = content.firstPhraseList;
  const secondPhraseList = content.secondPhraseList;

  console.log("MatchingGame firstChosenList:", firstChosenList);
  console.log("MatchingGame secondChosenList:", secondChosenList);

  const getText = (listOrder: string, index: number): TextDisplay => {
    if (listOrder === "left") {
      return firstPhraseList[index];
    } else if (listOrder === "right") {
      return secondPhraseList[index];
    }
    return { main: "none", sub: "none" };
  };

  const getIndexInOriginalList = (
    listOrder: string,
    valueIndex: number
  ): number => {
    if (listOrder === "left") {
      return firstChosenList ? firstChosenList.indexOf(valueIndex) : -1;
    } else if (listOrder === "right") {
      return secondChosenList ? secondChosenList.indexOf(valueIndex) : -1;
    }
    return -1;
  };

  const getColorStyle = (index: number): string => {
    switch (index) {
      case 0:
        return "bg-[#ffebeb]";
      case 1:
        return "bg-[#d4e8bc]";
      case 2:
        return "bg-[#d8f9ff]";
      case 3:
        return "bg-[#fff3b0]";
      case 4:
        return "bg-[#eeedff]";
      case 5:
        return "bg-[#eeedff]";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="flex flex-col justify-between items-center w-full h-full gap-10">
      {/* Upper: title + question word ... */}
      <div className="flex flex-col justify-between items-start max-w-3xl w-full">
        {/* Title Section */}
        <h2 className="text-[var(--custom-purple)] font-bold text-[32px] mb-3 w-full text-center">
          {title}
        </h2>
      </div>

      {/* Interact section */}
      <div
        className={`grid grid-cols-3 auto-rows-auto gap-2 w-full max-w-3xl min-h-[30vh] ${
          disabled ? "pointer-events-none opacity-60" : ""
        }`}
      >
        {randomList?.map((item, index) => (
          <ClickScaleDebounce
            key={index}
            className={`rounded-xl border min-w-full cursor-pointer flex justify-center items-center ${getColorStyle(
              getIndexInOriginalList(item.listOrder, item.valueIndex)
            )}`}
            onClick={() => onClick?.(item.listOrder, item.valueIndex)}
          >
            <TextShow textDisplay={getText(item.listOrder, item.valueIndex)} />
          </ClickScaleDebounce>
        ))}
      </div>
    </div>
  );
};

export default MatchingGame;
