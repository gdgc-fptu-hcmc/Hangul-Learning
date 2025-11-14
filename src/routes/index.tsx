import LessonsPage from "@/pages/LessonsPage";
import CoursesPage from "@/pages/CoursesPage";
import MiniGamePage from "@/pages/MiniGamePage";
import CourseRoadmap from "@/pages/CourseRoadmap";

export const routes = [
  { path: "/", element: <CoursesPage /> },
  {
    path: "/courses",
    element: <CoursesPage />,
  },
  {
    path: "/courses/:courseId",
    element: <CourseRoadmap />,
  },
  {
    path: "/courses/:courseId/topics/:topicId/lessons/:lessonId",
    element: <LessonsPage />,
  },
  {
    path: "/courses/:courseId/topics/:topicId/lessons/:lessonId/minigame",
    element: <MiniGamePage />,
  },
];
