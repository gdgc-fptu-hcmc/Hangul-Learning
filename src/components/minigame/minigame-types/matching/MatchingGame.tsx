import { MiniGameMatching, TextDisplay } from "@/data";
import React from "react";

interface MatchingGameProps {
  title?: string;
  content: MiniGameMatching;
  firstRemainList?: number[];
  firstChosenList?: number[];
  secondRemainList?: number[];
  secondChosenList?: number[];
}

const MatchingGame: React.FC<MatchingGameProps> = ({ title, content }) => {
  const getText = (textList: TextDisplay[], idx: number): TextDisplay => {
    return textList[idx];
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
      <div></div>
    </div>
  );
};

export default MatchingGame;
