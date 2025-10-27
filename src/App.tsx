import "./App.css";
import CoursesPage from "@/pages/CoursesPage";
import CourseRoadmap from "@/pages/CourseRoadmap";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseRoadmap />} />
        <Route path="*" element={<CoursesPage />} />
      </Routes>
    </>
  );
}

export default App;
