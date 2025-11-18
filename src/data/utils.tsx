import {
  LessonContent,
  MiniGame,
  MiniGameContent,
  TextDisplay,
} from "./types.js";
import { learningCourses, miniGames, vocabList } from "./data.js";

export function getLessonContent(
  courseId: number,
  topicId: number,
  lessonId: number
): LessonContent | null {
  const resultData: LessonContent = {
    courseId,
    topicId,
    lessonId,
  };

  for (const course of learningCourses) {
    if (course.id === courseId) {
      resultData.courseLevel = course.level;
      resultData.courseTitle = course.title;

      for (const topic of course.topics) {
        if (topic.id === topicId) {
          resultData.topicTitle = topic.title;

          for (const lesson of topic.lessons) {
            if (lesson.id === lessonId) {
              resultData.lessonTitle = lesson.title;
              resultData.lessonTargets = lesson.targets;
              resultData.vnDialogue = lesson.vnDialogue;
              resultData.koDialogue = lesson.koDialogue;
              resultData.culturalStory = lesson.culturalStory;
              resultData.funQuiz = lesson.funQuiz;
              resultData.grammar = lesson.grammar;
              resultData.practiceBox = lesson.practiceBox;
              resultData.minigameIds = lesson.minigameIds;
              resultData.minigameQuantity = lesson.minigameQuantity;
              for (const vocabId of lesson.vocabIds || []) {
                const vocabData = vocabList[vocabId];
                if (vocabData) {
                  resultData.vocabs = resultData.vocabs || [];
                  resultData.vocabs.push(vocabData);
                }
              }
              return resultData;
            }
          }
        }
      }
    }
  }

  return null;
}

export const getMiniGameContent = (
  courseId: number,
  topicId: number,
  lessonId: number
): MiniGameContent | null => {
  for (const course of learningCourses) {
    if (course.id === courseId) {
      for (const topic of course.topics) {
        if (topic.id === topicId) {
          for (const lesson of topic.lessons) {
            if (lesson.id === lessonId) {
              // start here
              const randomGameIds: number[] = [];
              while (
                randomGameIds.length < (lesson.minigameIds?.length || 0) &&
                randomGameIds.length < (lesson.minigameQuantity || 0)
              ) {
                const randomIndex = Math.floor(
                  Math.random() * (lesson.minigameIds?.length || 0)
                );
                const selectedId = lesson.minigameIds
                  ? lesson.minigameIds[randomIndex]
                  : null;
                if (selectedId && !randomGameIds.includes(selectedId)) {
                  randomGameIds.push(selectedId);
                }
              }

              const fullGameContents: MiniGame[] = [];
              for (const miniGameId of randomGameIds || []) {
                const miniGameData = miniGames[miniGameId];
                if (miniGameData) {
                  // random cho phan phrase matching
                  console.log("Before random:", miniGameData);
                  // if (miniGameData.type === "matching") {
                  //   const firstPhraseList =
                  //     miniGameData.content.firstPhraseList.map(
                  //       (val: TextDisplay, idx: number) => ({
                  //         listOrder: "right",
                  //         valueIndex: idx,
                  //       })
                  //     );
                  //   const secondPhraseList =
                  //     miniGameData.content.secondPhraseList.map(
                  //       (val: TextDisplay, idx: number) => ({
                  //         listOrder: "left",
                  //         valueIndex: idx,
                  //       })
                  //     );
                  //   const combinedList = [
                  //     ...firstPhraseList,
                  //     ...secondPhraseList,
                  //   ];
                  //   // shuffle combined list
                  //   for (let i = combinedList.length - 1; i > 0; i--) {
                  //     const j = Math.floor(Math.random() * (i + 1));
                  //     [combinedList[i], combinedList[j]] = [
                  //       combinedList[j],
                  //       combinedList[i],
                  //     ];
                  //   }
                  //   miniGameData.content.randomList = combinedList;
                  // } else if (miniGameData.type === "multipleChoice") {
                  //   // random cho phan multiple choice
                  // } else if (miniGameData.type === "phraseOrder") {
                  //   // random cho phan phrase order
                  // }

                  // hard code here for testing matching game
                  miniGameData.content.randomList = [
                    { listOrder: "left", valueIndex: 0 },
                    { listOrder: "left", valueIndex: 1 },
                    { listOrder: "left", valueIndex: 2 },
                    { listOrder: "right", valueIndex: 0 },
                    { listOrder: "right", valueIndex: 1 },
                    { listOrder: "right", valueIndex: 2 },
                  ];
                  console.log("After random:", miniGameData);
                  fullGameContents.push(miniGameData);
                }
              }

              return {
                courseId,
                topicId,
                lessonId,
                quantity: lesson.minigameQuantity,
                contents: fullGameContents,
              };
            }
          }
        }
      }
    }
  }

  return null;
};
