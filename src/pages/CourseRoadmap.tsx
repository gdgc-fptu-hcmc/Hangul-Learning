import React from "react";
import { Link, useParams } from "react-router-dom";
import ColoredBanner from "@/shared/layout/ColoredBanner";
import Footer from "@/shared/layout/Footer";
import NavBar from "@/shared/layout/NavBar";
import TopicSection from "@/components/TopicSection";

const levelNames: Record<string, string> = {
  "1": "Cấp độ 1: Sơ cấp",
  "2": "Cấp độ 2: Trung cấp",
  "3": "Cấp độ 3: Cao cấp",
};

const CourseRoadmap: React.FC = () => {
  const { id } = useParams();
  // extract number from id level-1, level-2, etc.
  const match = id?.toString().match(/(\d+)/);
  const idx = match ? match[1] : null;
  // Determine level label for breadcrumb
  const levelLabel = (() => {
    if (!id) return "Cấp độ";
    if (!match) return String(idx);
    return levelNames[String(idx)] ?? `Cấp độ ${idx}`;
  })();
  // Determine picks based on level number
  const picks = (() => {
    const n = Number(idx ?? 1);
    switch (Number.isFinite(n) ? n : 1) {
      case 1:
        return [1, 2, 3];
      case 2:
        return [4, 5, 6];
      case 3:
        return [7, 8, 9];
      default:
        return [1, 2, 3];
    }
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
      <TopicSection
        picks={picks}
        className="w-full mx-auto max-w-[1114px] p-"
      />
      <Footer />
    </>
  );
};

export default CourseRoadmap;
