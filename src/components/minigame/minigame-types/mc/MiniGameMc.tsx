// components/questions/MultipleChoiceQuestion.jsx
import McOptionButton from "./McOptionButton";

const MultipleChoiceQuestion = ({
  question,
  word,
  options,
  selectedAnswer,
  onAnswerSelect,
  currentState = "waiting",
  correctAnswer,
  image,
  layout = "vertical",
}) => {
  const getOptionState = (optionValue) => {
    if (currentState === "waiting") {
      return selectedAnswer === optionValue ? "selected" : "default";
    } else {
      if (optionValue === correctAnswer) return "correct";
      if (optionValue === selectedAnswer && optionValue !== correctAnswer)
        return "incorrect";
      return "default";
    }
  };

  return (
    <div className="flex justify-center">
      <div className="space-y-7 flex flex-col ml-60 items-start w-[1174px] h-[622px]">
        {/* Title Section */}
        <h2 className="text-[#464394] font-bold text-[32px] leading-normal font-nunito">
          {question}
        </h2>
        <div className="flex">
          {/* hinh xin chao SVG */}
          <div className="mr-8">{image}</div>
          {/* box word */}
        </div>

        {/* Options Section */}
        <div
          className={
            layout === "horizontal"
              ? "mt-10 flex justify-center space-x-4 mr-52" // hàng ngang
              : "mt-10 space-y-4 w-[645px]" // cột dọc (mặc định)
          }
        >
          {options.map((opt) => (
            <McOptionButton
              key={opt.value}
              option={opt.value}
              label={opt.label}
              koreanText={opt.koreanText}
              isSelected={selectedAnswer === opt.value}
              onSelect={onAnswerSelect}
              state={getOptionState(opt.value)}
              disabled={currentState !== "waiting"}
              size={layout === "horizontal" ? "large" : "normal"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;
