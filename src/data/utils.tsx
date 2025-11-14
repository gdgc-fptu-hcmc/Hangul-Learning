import { LessonContent, MiniGame, MiniGameContent } from "./types.js";
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
              const resultData: MiniGame[] = [];

              for (const miniGameId of lesson.minigameIds || []) {
                const miniGameData = miniGames[miniGameId];
                if (miniGameData) {
                  resultData.push(miniGameData);
                }
              }

              return {
                courseId,
                topicId,
                lessonId,
                quantity: lesson.minigameQuantity,
                contents: resultData,
              };
            }
          }
        }
      }
    }
  }

  return null;
};
