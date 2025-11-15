import MiniGameDashboardResult from "@/components/minigame/layout/MiniGameDashboardResult";
import MiniGameWrapper from "@/components/minigame/layout/MiniGameWrapper";
import McGame from "@/components/minigame/minigame-types/mc/McGame";
import PhraseOrderGame from "@/components/minigame/minigame-types/phrase-order/PhraseOrderGame";
import {
  getMiniGameContent,
  MiniGame,
  MiniGameMatching,
  MiniGameMc,
  MiniGamePhraseOrder,
  TextDisplay,
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

  // test phrase order game
  const [chosenTexts, setChosenTexts] = useState<number[]>([]);
  const [remainTexts, setRemainTexts] = useState<boolean[]>(
    Array(currentQuestion?.content.texts.length).fill(true)
  );

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
  if (currentQuestionId + 1 >= (gameData?.contents.length || 0)) {
    return (
      <MiniGameDashboardResult
        correctAnswers={5}
        totalQuestions={gameData?.contents.length || 0}
      />
    );
  }

  return (
    <MiniGameWrapper
      currentQuestion={currentQuestionId}
      totalQuestions={gameData?.contents.length || 0}
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
      {currentQuestion?.type === "phraseOrder" && (
        <PhraseOrderGame
          title={currentQuestion?.title}
          content={currentQuestion?.content as MiniGamePhraseOrder}
          remainTexts={remainTexts}
          chosenTexts={chosenTexts}
          onChooseText={(chosenIndex) => {
            setChosenTexts([...chosenTexts, chosenIndex]);
            setRemainTexts(
              remainTexts.map((val, idx) => (idx === chosenIndex ? false : val))
            );
          }}
          onRemoveText={(removedIndex) => {
            setChosenTexts(chosenTexts.filter((t) => t !== removedIndex));
            setRemainTexts(
              remainTexts.map((val, idx) => (idx === removedIndex ? true : val))
            );
          }}
          disabled={wrapperState !== "waiting"}
        />
      )}
    </MiniGameWrapper>
  );
};

export default MiniGamePage;
