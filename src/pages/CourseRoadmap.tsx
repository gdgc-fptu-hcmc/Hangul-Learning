import React from "react";
import { useParams } from "react-router-dom";
import ColoredBanner from "@/shared/layout/ColoredBanner";
import Footer from "@/shared/layout/Footer";
import NavBar from "@/shared/layout/NavBar";

const levelNames: Record<string, string> = {
  "1": "Cấp độ 1: Sơ cấp",
  "2": "Cấp độ 2: Trung cấp",
  "3": "Cấp độ 3: Cao cấp",
};

const CourseRoadmap: React.FC = () => {
  const { id } = useParams();
  const levelLabel = (() => {
    if (!id) return "Cấp độ";
    const match = String(id).match(/(\d+)/);
    if (!match) return String(id);
    return levelNames[match[1]] ?? `Cấp độ ${match[1]}`;
  })();
  return (
    <>
      <ColoredBanner />
      <NavBar />

      {/* Breadcrumb */}
      <div className="w-[90vw] mb-6 flex items-center gap-2 text-lg font-bold text-gray-900">
        <span>Bài học</span>
        <span className="opacity-60">/</span>
        <span>{levelLabel}</span>
      </div>

      {/* Topic section */}

      <Footer />
    </>
  );
};

export default CourseRoadmap;
