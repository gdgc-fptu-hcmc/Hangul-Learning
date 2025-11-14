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
  onGoBack,
}) => {
  return (
    <div>
      <h2>Kết quả</h2>
      <p>
        Bạn đã trả lời đúng {correctAnswers} trên {totalQuestions} câu hỏi.
      </p>
      <button onClick={onGoBack}>Go back</button>
    </div>
  );
};

export default MiniGameDashboardResult;
