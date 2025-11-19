import ProgressBar from "@/shared/common/ProgressBar";
import React from "react";
import { Link } from "react-router-dom";

interface MiniGameDashboardResultProps {
  correctAnswers?: number;
  totalQuestions?: number;
  onGoBack?: () => void;
}

const MiniGameDashboardResult: React.FC<MiniGameDashboardResultProps> = ({
  correctAnswers = 0,
  totalQuestions = 0,
  onGoBack = () => {},
}) => {
  return (
    <div>
      <h1>
        Mini Game Results{" "}
        <span>{(correctAnswers / totalQuestions) * 100}%</span>
      </h1>
      <ProgressBar current={correctAnswers} total={totalQuestions} />
      <p>
        Bạn đã trả lời đúng {correctAnswers} trên {totalQuestions} câu hỏi.
      </p>
      <button onClick={() => onGoBack?.()}>Go back</button>
    </div>
  );
};

export default MiniGameDashboardResult;
