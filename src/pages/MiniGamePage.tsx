import MiniGameDashboardResult from "@/components/minigame/layout/MiniGameDashboardResult";
import MiniGameWrapper from "@/components/minigame/layout/MiniGameWrapper";
import MatchingGame from "@/components/minigame/minigame-types/matching/MatchingGame";
import McGame from "@/components/minigame/minigame-types/mc/McGame";
import PhraseOrderGame from "@/components/minigame/minigame-types/phrase-order/PhraseOrderGame";
import {
  getMiniGameContent,
  MiniGame,
  MiniGameMatching,
  MiniGameMc,
  MiniGamePhraseOrder,
  PhraseOrderOption,
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

  useEffect(() => {
    setCurrentQuestion(gameData?.contents[currentQuestionId]);
    console.log("currentQuestion updated:", currentQuestion);
  }, [currentQuestionId]);

  const [wrapperState, setWrapperState] = useState<
    "waiting" | "correct" | "incorrect"
  >("waiting");

  // test multiple choice game
  const [chosenValue, setChosenValue] = useState<string | undefined>(undefined);

  // test phrase order game
  // const [chosenTexts, setChosenTexts] = useState<number[]>([]);
  // const [remainTexts, setRemainTexts] = useState<boolean[]>(
  //   Array(currentQuestion?.content.texts.length).fill(true) || []
  // );

  // test matching game
  const [rightChosenList, setRightChosenList] = useState<number[]>(
    Array(currentQuestion?.content.firstPhraseList.length).fill(-1)
  );
  const [leftChosenList, setLeftChosenList] = useState<number[]>(
    Array(currentQuestion?.content.firstPhraseList.length).fill(-1)
  );

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
      onSkip={() => {
        setCurrentQuestionId(currentQuestionId + 1);
      }}
      onCheck={() => {
        setWrapperState("correct");
      }}
      onNext={() => {
        setWrapperState("waiting");
        setCurrentQuestionId(currentQuestionId + 1);
        // reset states
        setChosenValue(undefined);
        // setChosenTexts([]);
        // setRemainTexts(
        //   Array(currentQuestion?.content.texts.length).fill(true)
        // );
      }}
      wrapperState={wrapperState}
    >
      {currentQuestion?.type === "multipleChoice" && (
        <McGame
          title={currentQuestion?.title}
          content={currentQuestion?.content as MiniGameMc}
          chosenValue={chosenValue}
          onChoose={(value) => setChosenValue(value)}
          disabled={wrapperState !== "waiting"}
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
      {currentQuestion?.type === "matching" && (
        <MatchingGame
          title={currentQuestion?.title}
          content={currentQuestion?.content as MiniGameMatching}
          randomList={
            currentQuestion?.content.randomList as PhraseOrderOption[]
          }
          firstChosenList={leftChosenList}
          secondChosenList={rightChosenList}
          onClick={(listOrder, valueIndex) => {
            const leftChosenNumber = leftChosenList.filter(
              (val) => val !== -1
            ).length;
            const rightChosenNumber = rightChosenList.filter(
              (val) => val !== -1
            ).length;

            const isTwoListEqual = leftChosenNumber === rightChosenNumber;

            // check if the item is already chosen
            if (listOrder === "left") {
              const index = leftChosenList.indexOf(valueIndex);
              // already chosen
              if (index !== -1) {
                // unchoose in the left list
                const newLeftChosenList = [...leftChosenList];
                newLeftChosenList[index] = -1;
                setLeftChosenList(newLeftChosenList);
                // also unchoose in the right list
                const newRightChosenList = [...rightChosenList];
                newRightChosenList[index] = -1;
                setRightChosenList(newRightChosenList);
              } else {
                let insertedIndex = -1;
                if (isTwoListEqual) {
                  // both lists are equal, insert in the first empty slot
                  insertedIndex = leftChosenList.indexOf(-1);
                } else {
                  for (let i = 0; i < leftChosenList.length; i++) {
                    if (
                      (leftChosenList[i] !== -1 && rightChosenList[i] === -1) ||
                      (leftChosenList[i] === -1 && rightChosenList[i] !== -1)
                    ) {
                      insertedIndex = i;
                      break;
                    }
                  }
                }

                console.log("insertedIndex:", insertedIndex);

                if (
                  insertedIndex <= -1 ||
                  insertedIndex >= leftChosenList.length
                )
                  return;
                // choose in the left list
                leftChosenList[insertedIndex] = valueIndex;
                setLeftChosenList([...leftChosenList]);
              }
            } else if (listOrder === "right") {
              const index = rightChosenList.indexOf(valueIndex);
              // already chosen
              if (index !== -1) {
                // unchoose in the right list
                const newRightChosenList = [...rightChosenList];
                newRightChosenList[index] = -1;
                setRightChosenList(newRightChosenList);
                // also unchoose in the right list
                const newLeftChosenList = [...leftChosenList];
                newLeftChosenList[index] = -1;
                setLeftChosenList(newLeftChosenList);
              } else {
                // choose in the right list
                let insertedIndex = -1;
                if (isTwoListEqual) {
                  // both lists are equal, insert in the first empty slot
                  insertedIndex = rightChosenList.indexOf(-1);
                } else {
                  for (let i = 0; i < leftChosenList.length; i++) {
                    if (
                      (leftChosenList[i] !== -1 && rightChosenList[i] === -1) ||
                      (leftChosenList[i] === -1 && rightChosenList[i] !== -1)
                    ) {
                      insertedIndex = i;
                      break;
                    }
                  }
                }
                console.log("insertedIndex:", insertedIndex);

                if (
                  insertedIndex <= -1 ||
                  insertedIndex >= rightChosenList.length
                )
                  return;
                rightChosenList[insertedIndex] = valueIndex;
                setRightChosenList([...rightChosenList]);
              }
            }
          }}
        />
      )}
    </MiniGameWrapper>
  );
};

export default MiniGamePage;
