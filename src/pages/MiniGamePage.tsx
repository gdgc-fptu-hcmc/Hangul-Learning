import MiniGameDashboardResult from "@/components/minigame/layout/MiniGameDashboardResult";
import MiniGameWrapper from "@/components/minigame/layout/MiniGameWrapper";
import McGame from "@/components/minigame/minigame-types/mc/McGame";
import {
  getMiniGameContent,
  MiniGame,
  MiniGameMatching,
  MiniGameMc,
  MiniGamePhraseOrder,
} from "@/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MiniGamePage = () => {
  const { courseId, topicId, lessonId } = useParams<{
    courseId: string;
    topicId: string;
    lessonId: string;
  }>();

  const gameData = getMiniGameContent(
    Number(courseId),
    Number(topicId),
    Number(lessonId)
  );
  console.log("gameData:", gameData);

  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<MiniGame | undefined>(
    gameData?.contents[0]
  );
  const [wrapperState, setWrapperState] = useState<
    "waiting" | "correct" | "incorrect"
  >("waiting");

  useEffect(() => {
    setCurrentQuestion(gameData?.contents[currentQuestionId]);
    console.log("currentQuestion updated:", currentQuestion);
  }, [currentQuestionId]);

  // đoạn jsx show đáp án + (show giải thích nếu có)
  const retrieveAnswer = () => {
    // switch (currentQuestion?.type) {
    //   case "multiple-choice":
    //     return currentQuestion?.options.find((option) => option.isCorrect)
    //       ?.content;
    //   case "fill-in-the-blank":
    //     return currentQuestion?.answer;
    //   default:
    //     return null;
    // }
    return <div>Đáp án ở đây</div>;
  };

  // nếu đã trả lời hết câu hỏi thì hiện thị trang kết quả
  if (currentQuestionId + 1 >= (gameData?.quantity || 0)) {
    return (
      <MiniGameDashboardResult
        correctAnswers={5}
        totalQuestions={gameData?.quantity}
      />
    );
  }

  return (
    <MiniGameWrapper
      currentQuestion={currentQuestionId}
      totalQuestions={gameData?.quantity}
      answer={retrieveAnswer()}
      onSkip={() => setCurrentQuestionId(currentQuestionId + 1)}
      onCheck={() => setWrapperState("correct")}
      onNext={() => {
        setWrapperState("waiting");
        setCurrentQuestionId(currentQuestionId + 1);
      }}
      wrapperState={wrapperState}
    >
      {currentQuestion?.type === "multipleChoice" && (
        <McGame
          title={currentQuestion?.title}
          content={currentQuestion?.content as MiniGameMc}
        />
      )}
    </MiniGameWrapper>
  );
};

export default MiniGamePage;
