import type { MiniGameMc } from "@/data";
import McOptionButton from "./McOptionButton";
import SpeakerBox from "@/shared/common/SpeakerBox";
import TextShow from "@/shared/common/TextShow";
import CustomBox from "@/shared/common/CustomBox";

interface McGameProps {
  title?: string;
  content: MiniGameMc;
  onChoose?: (value: string) => void;
  chosenValue?: string;
  disabled?: boolean;
}

const McGame: React.FC<McGameProps> = ({
  title,
  content: { displayType, question, options, correctValue },
  disabled = false,
  onChoose,
  chosenValue,
}) => {
  console.log("McGame content:", title, displayType, options, correctValue);

  return (
    <div className="flex flex-col justify-between items-center w-full h-full gap-10">
      {/* Upper: title + question word ... */}
      <div className="flex flex-col justify-between items-start max-w-3xl w-full">
        {/* Title Section */}
        <h2 className="text-[var(--custom-purple)] font-bold text-[32px] mb-3 w-full text-center">
          {title}
        </h2>

        {/* Question Section show only when on displayType 1 or 2 */}
        {(displayType === 1 || displayType === 2) && (
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
              <div className="self-end mb-10">
                <SpeakerBox
                  audioUrl={question?.audio}
                  outerClassName="!rounded-3xl"
                  speakerClassName="text-[100px]"
                />
              </div>
            )}
          </div>
        )}
      </div>
      {/* Options Section */}
      <div
        className={`w-full flex  ${
          displayType === 3 || displayType === 4
            ? "justify-between gap-8 max-w-full"
            : "flex-col gap-4 max-w-3xl"
        }`}
      >
        {options.map((option) => (
          <McOptionButton
            key={option.value}
            displayType={displayType}
            option={option}
            onSelect={onChoose}
            isSelected={option.value === chosenValue}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default McGame;
