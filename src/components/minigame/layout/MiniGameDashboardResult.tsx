import ProgressBar from "@/shared/common/ProgressBar";
import React from "react";
import { Link } from "react-router-dom";

interface MiniGameDashboardResultProps {
  correctAnswers?: number;
  totalQuestions?: number;
}

const MiniGameDashboardResult: React.FC<MiniGameDashboardResultProps> = ({
  correctAnswers = 0,
  totalQuestions = 0,
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
      <button onClick={() => window.history.back()}>Go back</button>
    </div>
  );
};

export default MiniGameDashboardResult;
