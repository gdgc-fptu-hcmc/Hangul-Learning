import React from "react";
import { Link, useParams } from "react-router-dom";
import ColoredBanner from "@/shared/layout/ColoredBanner";
import Footer from "@/shared/layout/Footer";
import NavBar from "@/shared/layout/NavBar";
import TopicSection from "@/components/TopicSection";
import { LearningCourse, learningCourses } from "@/data";

const CourseRoadmap: React.FC = () => {
  const { courseId } = useParams<{ courseId?: string }>();

  const defaultCourse = learningCourses[0];
  const normalizedCourseId = courseId?.toString().toLowerCase();

  const selectedCourse: LearningCourse | undefined = learningCourses.find(
    (course) => {
      const idAsString = String(course.id);
      const idAsSlug = `level-${course.id}`;

      return (
        normalizedCourseId === idAsString ||
        normalizedCourseId === idAsSlug.toLowerCase()
      );
    }
  ) ?? defaultCourse;

  const levelLabel = selectedCourse?.level ?? "Cấp độ 1: Sơ cấp";

  return (
    <>
      <ColoredBanner />
      <NavBar />

      {/* Breadcrumb */}
      <div className="w-full flex justify-center">
        <div className="w-[90vw] mb-6 flex items-center gap-2 text-lg font-bold text-gray-900">
          <Link to="/courses" className="hover:underline">
            Bài học
          </Link>
          <span className="opacity-60">/</span>
          <span>{levelLabel}</span>
        </div>
      </div>

      {/* Topic section */}
      <TopicSection learningTopics={selectedCourse?.topics} className="mb-20" />
      <Footer />
    </>
  );
};

export default CourseRoadmap;
