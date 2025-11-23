import useIsMobile from "@/hooks/useIsMobile";
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
  lessonLink = "#",
  miniGameLink = "#",
  mainColor = "--main-color",
  className = "",
}) => {
  const isMobile = useIsMobile();
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
    <div
      ref={wrapperRef}
      className={`relative inline-block max-w-full ${className}`}
      // pass CSS var to use stable Tailwind classes
      style={{ ["--node-color" as any]: `var(${mainColor})` }}
    >
      {/* custom icon button */}
      <button
        onClick={() => setClicked((c) => !c)}
        className={`
          border-4
          border-[var(--node-color)]
          bg-white
          rounded-full
          p-1.5 sm:p-2
        `}
      >
        <div
          className={`
            bg-[var(--node-color)]
            text-white
            rounded-full
            p-2.5 sm:p-3
            text-2xl sm:text-3xl md:text-4xl
          `}
        >
          {icon}
        </div>
      </button>

      {/* title */}
      <p
        className={`
          absolute
          top-[calc(100%+6px)]
          left-1/2
          -translate-x-1/2
          rounded-full
          bg-white
          px-3 py-1
          text-sm sm:text-base md:text-lg
          font-semibold
          border-2 border-gray-300
          duration-200
          w-max max-w-[160px] sm:max-w-[200px]
          text-center
          break-words
          ${clicked ? "scale-[0.9]" : "scale-100"}
        `}
      >
        {title}
      </p>

      {/* popup */}
      <CustomBox
        tailPosition={isMobile ? "top-middle" : "top-right"}
        tailRounded="md"
        tailSize={20}
        className={`
          !absolute
          /* mobile: center */
          top-[calc(100%+12px)]
          left-1/2
          -translate-x-1/2

          /* desktop: right */
          md:top-[calc(100%-7px)]
          md:left-auto
          md:right-[calc(50%-30px)]
          md:translate-x-0

          p-4 sm:p-5
          bg-white
          rounded-lg
          duration-200
          min-w-[220px]
          max-w-[80vw]
          !z-[999]
          ${
            clicked
              ? "scale-100 opacity-100"
              : "scale-90 opacity-0 pointer-events-none"
          }
        `}
      >
        <h2 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 pointer-events-none">
          {title}
        </h2>

        <div className="space-y-4 sm:space-y-5 text-sm sm:text-base">
          <div>
            <p className="font-bold mb-1">Bài học</p>
            <Link
              to={lessonLink}
              className="
                border-2 border-gray-300
                p-2
                rounded-lg
                flex items-center gap-2 sm:gap-3
                hover:bg-gray-50
              "
            >
              <FaPlay
                className="
                  text-[var(--node-color)]
                  text-lg sm:text-xl
                "
              />
              <span className="font-bold">Bắt đầu</span>
            </Link>
          </div>

          <div>
            <p className="font-bold mb-1">Ôn tập</p>
            <Link
              to={miniGameLink}
              className="
                border-2 border-gray-300
                p-2
                rounded-lg
                flex items-center gap-2 sm:gap-3
                hover:bg-gray-50
              "
            >
              <IoExtensionPuzzle
                className="
                  text-[var(--node-color)]
                  text-lg sm:text-xl
                "
              />
              <span className="font-bold">Mini game</span>
            </Link>
          </div>
        </div>
      </CustomBox>
    </div>
  );
};

export default LessonNodeOnRoadmap;
