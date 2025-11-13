import LessonsPage from "@/pages/LessonsPage";
import CoursesPage from "@/pages/CoursesPage";
import MiniGamePage from "@/pages/MiniGamePage";

export const routes = [
  { path: "/", element: <CoursesPage /> },
  //   {
  //     path: "/courses/:courseId",
  //     element: <CoursesPage />, // thay bang trang cua Minh
  //   },
  {
    path: "/courses/:courseId/topics/:topicId/lessons/:lessonId",
    element: <LessonsPage />,
  },
  {
    path: "/courses/:courseId/topics/:topicId/lessons/:lessonId/minigame",
    element: <MiniGamePage />,
  },
];
