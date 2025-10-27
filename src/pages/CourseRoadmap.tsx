import React from "react";
import { Link, useParams } from "react-router-dom";
import ColoredBanner from "@/shared/layout/ColoredBanner";
import Footer from "@/shared/layout/Footer";
import NavBar from "@/shared/layout/NavBar";
import TopicSection from "@/components/TopicSection";
import { learningCourses } from "@/data";

const CourseRoadmap: React.FC = () => {
  const { id } = useParams();
  // extract number from id level-1, level-2, etc.
  const match = id?.toString().match(/(\d+)/);
  const idx = match ? match[1] : null;
  const idNumber = Number(idx ?? 1);

  // get level label
  const levelLabel = (() => {
    return (
      learningCourses.find((course) => course.id === idNumber)?.level ??
      "Cấp độ 1: Sơ cấp"
    );
  })();

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

      <Footer />
    </>
  );
};

export default CourseRoadmap;
