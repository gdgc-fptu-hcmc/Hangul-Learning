import CustomBox from "@/shared/common/CustomBox";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import { Link } from "react-router-dom";

interface LessonNodeOnRoadmapProps {
  icon: React.ReactNode;
  title: string;
  lessonLink?: string;
  miniGameLink?: string;
  mainColor?: string;
  className?: string;
}

const LessonNodeOnRoadmap: React.FC<LessonNodeOnRoadmapProps> = ({
  icon,
  title,
  lessonLink,
  miniGameLink,
  mainColor,
  className = "",
}) => {
  const [clicked, setClicked] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  // close when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={`relative w-max ${className}`}>
      {/* custom icon button */}
      <button
        onClick={() => setClicked(!clicked)}
        className={`border-4 border-[var(${mainColor})] text-white bg-white rounded-full p-1`}
      >
        <div className={`bg-[var(${mainColor})] p-3 text-4xl rounded-full`}>
          {icon}
        </div>
      </button>

      {/* title */}
      <p
        className={`absolute top-[calc(100%+5px)] left-1/2 -translate-x-1/2
          rounded-full bg-white px-3 py-1 text-lg font-semibold border-2 border-gray-300
          duration-200 w-max max-w-[200px] text-center ${
            clicked && "scale-[0.85]"
          }`}
      >
        {title}
      </p>

      {/* popup */}
      <CustomBox
        tailPosition="top-right"
        tailRounded="md"
        tailSize={20}
        className={`!absolute top-[calc(100%-7px)] right-[calc(50%-30px)] p-5
          bg-white rounded-lg duration-200 w-max max-w-[200px] !z-[999]
          ${
            clicked
              ? "scale-100 opacity-100"
              : "scale-90 opacity-0 pointer-events-none"
          }`}
      >
        <h2 className="text-lg font-bold mb-5 pointer-events-none">{title}</h2>

        <div>
          <p className="font-bold">Bài học</p>
          <Link
            to={lessonLink}
            className="border-2 border-gray-300 p-2 rounded-lg flex items-center gap-3"
          >
            <FaPlay className={`text-[var(${mainColor})] text-xl`} />
            <span className="font-bold">Bắt đầu</span>
          </Link>
        </div>

        <div className="mt-5">
          <p className="font-bold">Ôn tập</p>
          <Link
            to={miniGameLink}
            className="border-2 border-gray-300 p-2 rounded-lg flex items-center gap-3"
          >
            <IoExtensionPuzzle className={`text-[var(${mainColor})] text-xl`} />
            <span className="font-bold">Mini game</span>
          </Link>
        </div>
      </CustomBox>
    </div>
  );
};

export default LessonNodeOnRoadmap;
