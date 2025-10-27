import ScrollToSection from "@/shared/effects/ScrollToSection";
import React from "react";
import { MdChatBubbleOutline, MdClose, MdMenu, MdQuiz } from "react-icons/md";
import { TbTextGrammar, TbVocabulary } from "react-icons/tb";

const tabTypes = [
  { type: "dialogue", label: "Hội thoại", icon: <MdChatBubbleOutline /> },
  { type: "vocabulary", label: "Từ vựng", icon: <TbVocabulary /> },
  { type: "grammar", label: "Ngữ pháp", icon: <TbTextGrammar /> },
  { type: "revise", label: "Ôn tập", icon: <MdQuiz /> },
];

interface LessonSideBarProps {
  lessonId: number | 0;
  lessonName: string | "Không có bài học";
  className?: string;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const LessonSideBar: React.FC<LessonSideBarProps> = ({
  className,
  lessonId,
  lessonName,
  activeTab = "dialogue",
  onTabChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div
      className={`${
        isOpen ? "max-w-full" : "max-w-[50px]"
      } p-3 shadow-xl rounded-md border-2 border-gray-300 transition-all duration-300 ${className}`}
    >
      {/* Hamburger and close icon */}
      <div
        className={`flex ${
          isOpen ? "justify-end" : "justify-start"
        } items-center text-[var(--custom-purple)]`}
      >
        <MdMenu
          className={`text-2xl cursor-pointer ${isOpen ? "hidden" : "block"}`}
          onClick={() => setIsOpen(true)}
        />
        <MdClose
          className={`text-2xl cursor-pointer ${isOpen ? "block" : "hidden"}`}
          onClick={() => setIsOpen(false)}
        />
      </div>

      {/* Lesson Info */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <h4 className="font-bold text-md mt-2 rounded-xl border-2 border-gray-300 p-3">
          Bài {lessonId}: {lessonName}
        </h4>

        <ul className="relative z-0 transition-all duration-300">
          {tabTypes.map((tab) => (
            <li
              key={tab.type}
              className={`pt-4 transition-all duration-300 hover:text-[var(--custom-purple)] hover:font-semibold cursor-pointer rounded-md font-medium ${
                activeTab === tab.type
                  ? "text-[var(--custom-purple)] font-semibold"
                  : ""
              }`}
            >
              <ScrollToSection
                className="flex items-center gap-2"
                targetId={tab.type}
                offset={50}
                onClick={() => {
                  onTabChange && onTabChange(tab.type);
                }}
              >
                <span
                  className={`text-2xl rounded-full border-2 bg-white p-2 transition-all duration-300 ${
                    activeTab === tab.type
                      ? "border-[var(--custom-purple)]"
                      : "border-gray-300 "
                  }`}
                >
                  {tab.icon}
                </span>
                <span className="text-md transition-all duration-300">
                  {tab.label}
                </span>
              </ScrollToSection>
            </li>
          ))}

          {/* Vertical line */}
          <div className="absolute translate-x-[21px] top-0 h-full w-[2px] bg-gray-300 -z-10 transition-all duration-300"></div>
        </ul>
      </div>
    </div>
  );
};

export default LessonSideBar;
