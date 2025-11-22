import MiniGameDashboardResult from "@/components/minigame/layout/MiniGameDashboardResult";
import MiniGameWrapper from "@/components/minigame/layout/MiniGameWrapper";
import MatchingGame from "@/components/minigame/minigame-types/matching/MatchingGame";
import McGame from "@/components/minigame/minigame-types/mc/McGame";
import PhraseOrderGame from "@/components/minigame/minigame-types/phrase-order/PhraseOrderGame";
import { useGameData } from "@/contexts/GameDataContext";
import {
  getMiniGameContent,
  MiniGame,
  MiniGameMatching,
  MiniGameMc,
  MiniGamePhraseOrder,
  MatchingOption,
  TextDisplay,
} from "@/data";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MiniGamePage = () => {
  const navigate = useNavigate();

  const { courseId, topicId, lessonId } = useParams<{
    courseId: string;
    topicId: string;
    lessonId: string;
  }>();

  const freshGameData = getMiniGameContent(
    Number(courseId),
    Number(topicId),
    Number(lessonId)
  );

  // get/set from context
  const {
    gameData: savedGameData,
    setGameData,
    clearGameData,
    addEarnedScoresByOne,
    earnedScores,
    resetEarnedScore,
  } = useGameData();

  useEffect(() => {
    if (!savedGameData && freshGameData) {
      resetEarnedScore();
      setGameData(JSON.parse(JSON.stringify(freshGameData)));
    }
  }, [freshGameData, savedGameData]);

  const gameData = savedGameData ?? freshGameData;

  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  // derive currentQuestion from gameData + index (no separate state)
  const currentQuestion = gameData?.contents?.[currentQuestionId];

  const [wrapperState, setWrapperState] = useState<
    "waiting" | "correct" | "incorrect"
  >("waiting");

  // state for multiple choice game
  const [chosenValue, setChosenValue] = useState<string | undefined>(undefined);

  // state for phrase order game
  const [chosenTexts, setChosenTexts] = useState<number[]>([]);
  const [remainTexts, setRemainTexts] = useState<boolean[]>([]);

  // state for matching game
  const [rightChosenList, setRightChosenList] = useState<number[]>([]);
  const [leftChosenList, setLeftChosenList] = useState<number[]>([]);

  // đoạn jsx show đáp án + (show giải thích nếu có)
  const retrieveAnswer = () => {
    let answer = null;
    switch (currentQuestion?.type) {
      case "multipleChoice":
        answer = <>Câu {currentQuestion?.content.correctValue}</>;
        break;
      case "phraseOrder":
        answer = (
          <div className="flex gap-2">
            {currentQuestion?.content.rightOrder.map((num, index) => (
              <span key={index}>
                {currentQuestion?.content.texts[num].main}{" "}
                {index !== currentQuestion?.content.rightOrder.length - 1
                  ? " --> "
                  : ""}
              </span>
            ))}
          </div>
        );
        break;
      case "matching":
        answer = (
          <div className="grid grid-flow-col grid-rows-3 gap-x-6 text-sm  ">
            {currentQuestion?.content.firstPhraseList.map((text, idx) => (
              <div key={idx}>
                {text.main} {" --> "}{" "}
                {currentQuestion.content.secondPhraseList[idx].main}
              </div>
            ))}
          </div>
        );
        break;
    }

    return (
      // answer wrapper
      <div className="flex gap-4 justify-center items-center">
        <span className="font-bold text-lg">Đáp án đúng:</span>
        {answer}
      </div>
    );
  };

  const isAnswerTrue = () => {
    if (!currentQuestion) return false;

    switch (currentQuestion.type) {
      case "multipleChoice":
        return (
          chosenValue === (currentQuestion.content as MiniGameMc).correctValue
        );
      case "phraseOrder":
        const rightOrder = (currentQuestion.content as MiniGamePhraseOrder)
          .rightOrder;

        console.log("Checking phrase order answer:");
        console.log("Expected order:", rightOrder);
        console.log("User chosen order:", chosenTexts);
        return (
          rightOrder.length === chosenTexts.length &&
          rightOrder.every((val, idx) => {
            console.log(currentQuestion.content.randomTexts[chosenTexts[idx]]);
            return (
              val === currentQuestion.content.randomTexts[chosenTexts[idx]]
            );
          })
        );
      case "matching":
        return (
          rightChosenList.every((val, idx) => val !== -1) &&
          leftChosenList.every((val, idx) => val !== -1) &&
          leftChosenList.every((val, idx) => val === rightChosenList[idx])
        );
    }
  };

  // unified reset logic: run whenever gameData or currentQuestionId changes
  useEffect(() => {
    // reset MC
    setChosenValue(undefined);

    // reset Phrase Order
    setChosenTexts([]);
    if (currentQuestion?.type === "phraseOrder") {
      setRemainTexts(Array(currentQuestion.content.texts.length).fill(true));
    } else {
      setRemainTexts([]);
    }

    // reset Matching
    if (currentQuestion?.type === "matching") {
      setLeftChosenList(
        Array(currentQuestion.content.firstPhraseList.length).fill(-1)
      );
      setRightChosenList(
        Array(currentQuestion.content.secondPhraseList.length).fill(-1)
      );
    } else {
      setLeftChosenList([]);
      setRightChosenList([]);
    }

    // ensure wrapper state is waiting when question changes
    setWrapperState("waiting");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    gameData,
    currentQuestionId,
    currentQuestion?.type,
    currentQuestion?.content,
  ]);

  // nếu đã trả lời hết câu hỏi thì hiện thị trang kết quả
  if (currentQuestionId >= (gameData?.contents.length || 0)) {
    return (
      <MiniGameDashboardResult
        correctAnswers={earnedScores}
        totalQuestions={gameData?.contents.length || 0}
        onGoBack={() => {
          navigate(
            `/courses/${courseId}/topics/${topicId}/lessons/${lessonId}`,
            { replace: true }
          );
        }}
      />
    );
  }

  return (
    <MiniGameWrapper
      currentQuestion={currentQuestionId}
      totalQuestions={gameData?.contents.length || 0}
      answer={retrieveAnswer()}
      onSkip={() => {
        // effect will reset state when currentQuestionId changes
        setCurrentQuestionId((s) => s + 1);
        // wrapper state will be set to waiting by the effect, but keep this for immediate UI consistency
        setWrapperState("waiting");
      }}
      onCheck={() => {
        if (isAnswerTrue()) {
          addEarnedScoresByOne();
          setWrapperState("correct");
        } else {
          setWrapperState("incorrect");
        }
      }}
      onNext={() => {
        setWrapperState("waiting");
        // effect will reset state when index changes
        setCurrentQuestionId((s) => s + 1);
      }}
      onGoBack={() => {
        navigate(`/courses/${courseId}/topics/${topicId}/lessons/${lessonId}`, {
          replace: true,
        });
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
            setChosenTexts((prev) => [...prev, chosenIndex]);
            setRemainTexts((prev) =>
              prev.map((val, idx) => (idx === chosenIndex ? false : val))
            );
          }}
          onRemoveText={(removedIndex) => {
            setChosenTexts((prev) => prev.filter((t) => t !== removedIndex));
            setRemainTexts((prev) =>
              prev.map((val, idx) => (idx === removedIndex ? true : val))
            );
          }}
          disabled={wrapperState !== "waiting"}
        />
      )}
      {currentQuestion?.type === "matching" && (
        <MatchingGame
          title={currentQuestion?.title}
          content={currentQuestion?.content as MiniGameMatching}
          randomList={currentQuestion?.content.randomList as MatchingOption[]}
          firstChosenList={leftChosenList}
          secondChosenList={rightChosenList}
          disabled={wrapperState !== "waiting"}
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

                if (
                  insertedIndex <= -1 ||
                  insertedIndex >= leftChosenList.length
                )
                  return;
                // choose in the left list
                const newLeft = [...leftChosenList];
                newLeft[insertedIndex] = valueIndex;
                setLeftChosenList(newLeft);
              }
            } else if (listOrder === "right") {
              const index = rightChosenList.indexOf(valueIndex);
              // already chosen
              if (index !== -1) {
                // unchoose in the right list
                const newRightChosenList = [...rightChosenList];
                newRightChosenList[index] = -1;
                setRightChosenList(newRightChosenList);
                // also unchoose in the left list
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

                if (
                  insertedIndex <= -1 ||
                  insertedIndex >= rightChosenList.length
                )
                  return;
                const newRight = [...rightChosenList];
                newRight[insertedIndex] = valueIndex;
                setRightChosenList(newRight);
              }
            }
          }}
        />
      )}
    </MiniGameWrapper>
  );
};

export default MiniGamePage;
