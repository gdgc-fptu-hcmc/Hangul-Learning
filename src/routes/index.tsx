import LessonsPage from "@/pages/LessonsPage";
import CoursesPage from "@/pages/CoursesPage";

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
];
