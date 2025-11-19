import type { MiniGamePhraseOrder, TextDisplay } from "@/data";
import CustomBox from "@/shared/common/CustomBox";
import SpeakerBox from "@/shared/common/SpeakerBox";
import TextShow from "@/shared/common/TextShow";
import { button } from "framer-motion/client";
import React from "react";

interface PhraseOrderGameProps {
  title: string;
  content: MiniGamePhraseOrder;
  onChooseText: (chosenIndex: number) => void;
  onRemoveText: (removedIndex: number) => void;
  chosenTexts: number[];
  remainTexts: boolean[];
  disabled: boolean;
}

const PhraseOrderGame: React.FC<PhraseOrderGameProps> = ({
  title,
  content: { displayType, question, texts, randomTexts, rightOrder },
  onRemoveText = () => {},
  onChooseText = () => {},
  chosenTexts = [],
  remainTexts = [],
  disabled = false,
}) => {
  const getText = (index: number): TextDisplay => texts[index];

  return (
    <div className="flex flex-col justify-between items-center w-full h-full gap-10">
      {/* Upper: title + question word ... */}
      <div className="flex flex-col justify-between items-start max-w-3xl w-full">
        {/* Title Section */}
        <h2 className="text-[var(--custom-purple)] font-bold text-[32px] mb-3 w-full text-center">
          {title}
        </h2>

        {/* Question Section */}
        <div className="flex items-start gap-16 w-full">
          <div className="max-w-[250px] w-full h-[300px] flex justify-center items-center bg-white">
            <img src={question?.image} alt="" className="" />
          </div>
          {displayType === 1 && (
            <div className="flex items-center py-3 gap-6">
              <SpeakerBox
                audioUrl={question?.audio}
                outerClassName="flex-shrink-0"
                speakerClassName="text-[25px] !m-2"
              />
              <CustomBox
                tailPosition="left-middle"
                tailSize={25}
                tailRounded="md"
                className="p-3 rounded-md"
              >
                {question?.text && (
                  <TextShow
                    textDisplay={question.text}
                    showSubText={true}
                    mainClassName="text-xl"
                  />
                )}
              </CustomBox>
            </div>
          )}
          {displayType === 2 && (
            <CustomBox
              tailPosition="left-middle"
              tailSize={20}
              tailRounded="md"
              className="p-3 rounded-md w-max max-w-[300px] rounded-xl"
            >
              {question?.text && (
                <TextShow
                  textDisplay={question.text}
                  showSubText={true}
                  mainClassName="text-xl"
                />
              )}
            </CustomBox>
          )}
          {displayType === 3 && (
            <div className="self-end mb-10">
              <SpeakerBox
                audioUrl={question?.audio}
                outerClassName="!rounded-3xl"
                speakerClassName="text-[100px]"
              />
            </div>
          )}
        </div>
      </div>

      {/* User Have been chosen these boxes */}
      <div
        className={`flex flex-wrap gap-2 border-t-2 border-b-2 border-dashed border-gray-200 w-full max-w-3xl px-4 py-1 min-h-[85px] ${
          disabled && "pointer-events-none"
        }`}
      >
        {chosenTexts.length > 0 &&
          chosenTexts.map((chosenIndex, index) => (
            <button onClick={() => onRemoveText(chosenIndex)} key={index}>
              <CustomBox className="flex  justify-center items-center border-[3px] w-max p-2 min-w-[100px] rounded-xl cursor-pointer">
                <TextShow
                  textDisplay={getText(chosenIndex)}
                  showSubText={displayType === 2 || displayType === 3}
                  subClassName="text-sm"
                />
              </CustomBox>
            </button>
          ))}
      </div>

      {/* Display box elements */}
      <div
        className={`${
          disabled && "pointer-events-none"
        }  w-full max-w-3xl flex items-center flex-wrap gap-2 min-h-[90px] `}
      >
        {remainTexts.length > 0 &&
          remainTexts.map(
            (isRemaining, index) =>
              isRemaining && (
                <button onClick={() => onChooseText(index)} key={index}>
                  <CustomBox
                    key={index}
                    className="flex  justify-center items-center border-[3px] w-max p-2 min-w-[100px] rounded-xl cursor-pointer"
                  >
                    <TextShow
                      textDisplay={getText(index)}
                      showSubText={displayType === 2 || displayType === 3}
                      subClassName="text-sm"
                    />
                  </CustomBox>
                </button>
              )
          )}
      </div>
    </div>
  );
};

export default PhraseOrderGame;
