import { Dialogue } from "@/data";
import CustomBox from "@/shared/common/CustomBox";
import React from "react";
import SpeakerBox from "./SpeakerBox";

const DialogueBox: React.FC<{ dialogue: Dialogue }> = ({ dialogue }) => {
  return (
    <div className="w-full min-h-[300px] px-4 pt-10 border-2 border-gray-300 rounded-xl flex flex-col gap-5">
      {dialogue.contents.map((content, index) => (
        <div
          key={index}
          className={`flex items-start gap-5 ${
            content.role === dialogue.mainRole
              ? "flex-row-reverse"
              : "justify-start"
          }`}
        >
          {/* Avatar */}
          <img
            src={content.avatarUrl}
            alt=""
            className="inline-block overflow-hidden w-[60px] h-[60px] object-cover object-center"
          />
          {/* lines */}
          <div
            className={`flex-1 flex ${
              content.role === dialogue.mainRole ? `items-end` : `items-start`
            } flex-col gap-5`}
          >
            {content.lines.map((line, lineIndex) =>
              lineIndex === 0 ? (
                <div
                  key={lineIndex}
                  className={`flex gap-5 items-center ${
                    dialogue.mainRole === content.role ? "" : "flex-row-reverse"
                  } `}
                >
                  {dialogue.hasSpeakerBox && (
                    <SpeakerBox text={line.text} audioUrl={line.audioUrl} />
                  )}
                  <CustomBox
                    tailPosition={`${
                      content.role === dialogue.mainRole
                        ? "right-middle"
                        : "left-middle"
                    }`}
                    tailSize={15}
                    tailRounded="sm"
                    className={`w-max text-xl p-3 rounded-xl`}
                  >
                    {line.text}{" "}
                  </CustomBox>
                </div>
              ) : (
                <div
                  key={lineIndex}
                  className={`flex gap-5 items-center ${
                    dialogue.mainRole === content.role ? "" : "flex-row-reverse"
                  } `}
                >
                  {dialogue.hasSpeakerBox && (
                    <SpeakerBox text={line.text} audioUrl={line.audioUrl} />
                  )}
                  <CustomBox className={`w-max text-xl p-3 rounded-xl`}>
                    {line.text}{" "}
                  </CustomBox>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DialogueBox;
