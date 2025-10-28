import React from "react";
import { FunQuiz } from "@/data";
import CustomBox from "@/shared/common/CustomBox";
import { MdQuestionMark } from "react-icons/md";
import EyeIcon from "@/assets/icons/eyes.svg";

interface FunQuizBoxProps {
  quiz: FunQuiz;
  className?: string;
}

const FunQuizBox = ({ quiz, className }: FunQuizBoxProps) => {
  const [checkedIndex, setCheckedIndex] = React.useState<number | null>(null);
  const [correctAnswer, setCorrectAnswer] = React.useState<boolean | null>(
    null
  );
  return (
    <CustomBox className={`p-0 rounded-xl overflow-hidden  ${className}`}>
      <h3 className="flex items-center gap-4 p-3  bg-[var(--custom-orange)] text-white font-bold">
        <MdQuestionMark className="inline-block rounded-full p-1 text-[30px] bg-white text-[var(--custom-orange)]" />{" "}
        <span className="text-xl">Câu hỏi vui:</span>
      </h3>
      <div className="w-[90%] mx-auto pb-3">
        <p className="mt-3 p-3 font-semibold text-md">{quiz.question}</p>
        <ul className="ml-3">
          {quiz.options.map((option, index) => (
            <li key={index} className="p-2 flex items-center gap-3">
              {/* check dot */}
              <div
                className={`p-1 border-2 border-gray-300 rounded-full hover:cursor-pointer w-6 h-6`}
                onClick={() => setCheckedIndex(index)}
              >
                <div
                  className={`w-full h-full rounded-full ${
                    checkedIndex === index
                      ? "bg-[var(--custom-purple)]"
                      : "bg-transparent"
                  }`}
                ></div>
              </div>
              {/* option text */}
              <div className="font-medium text-md">{option}</div>
            </li>
          ))}
        </ul>
        {checkedIndex !== null && (
          <button
            className="ml-3 mt-3 p-1 border-2 rounded-xl border-gray-300"
            onClick={() =>
              setCorrectAnswer(quiz.correctAnswerIndex === checkedIndex)
            }
          >
            <span className="font-semibold text-sm text-[var(--custom-purple)]">
              Kiểm tra đáp án
            </span>
            <img src={EyeIcon} alt="" className="inline-block w-[20px] ml-1" />
          </button>
        )}
        {/* explanation */}
        {correctAnswer !== null && (
          <p className="p-3 font-semibold text-sm text-[var(--custom-purple)]">
            {correctAnswer ? "Chính xác! " + quiz.explanation : "Hãy thử lại!"}
          </p>
        )}
      </div>
    </CustomBox>
  );
};

export default FunQuizBox;
