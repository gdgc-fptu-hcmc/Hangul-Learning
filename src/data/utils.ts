import { LessonContent, LessonStep } from "./types";
import { getLessonStatusStyles } from "./lessonStatus";
import { learningCourses } from "./data";

export function getLessonStatusLabel(status: LessonStep["status"]) {
  switch (status) {
    case "completed":
      return "Đã hoàn thành";
    case "available":
      return "Sẵn sàng";
    case "locked":
      return "Chưa mở khóa";
    case "final":
      return "Bài cuối";
    default:
      return "";
  }
}

export function getLessonChipStyles(lesson: LessonStep) {
  return lesson.highlight
    ? "border-amber-400 bg-amber-100 text-amber-700"
    : getLessonStatusStyles(lesson.status);
}

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
              return resultData;
            }
          }
        }
      }
    }
  }

  return null;
}
