import LessonSideBar from "@/components/lessons/LessonSideBar";
import React from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { ImPushpin } from "react-icons/im";
import { Link } from "react-router-dom";
import { getLessonContent } from "@/data/utils";
import targetImg from "@/assets/images/wavy-clouds-pattern.svg";
import { MdChatBubbleOutline, MdQuiz } from "react-icons/md";
import { TbTextGrammar, TbVocabulary } from "react-icons/tb";
import useScrollBy from "@/hooks/useScrollBy";
import SpeakerBox from "@/components/lessons/SpeakerBox";
import DialogueBox from "@/components/lessons/DialogueBox";
import CustomBox from "@/shared/common/CustomBox";
import parse from "html-react-parser";
import FunQuizBox from "@/components/lessons/FunQuizBox";

const LessonsPage = () => {
  // get lesson content
  const courseId = 1;
  const topicId = 1;
  const lessonId = 1;
  const content = getLessonContent(courseId, topicId, lessonId);
  console.log("Lesson Content:", content);

  // active tab handler
  const sectionIds = ["dialogue", "vocabulary", "grammar", "revise"];
  const activeSection = useScrollBy(sectionIds, 50);
  const [activeTab, setActiveTab] = React.useState(activeSection || "dialogue");
  React.useEffect(() => {
    if (activeSection) setActiveTab(activeSection);
  }, [activeSection]);

  // state for change dialogue from vn - to ko and vice versa
  const [activeLanguage, setActiveLanguage] = React.useState("ko");

  return (
    <>
      <div className="md:w-[90%] w-[95%] mx-auto mt-[5vh]">
        <Link
          to={`/topics/${topicId}`}
          className="group  flex justify-between items-center gap-4 w-max font-bold text-[var(--custom-purple)]"
        >
          <GrFormPreviousLink className="inline-block group-hover:translate-x-[-4px] transition-transform text-2xl " />
          <span>Quay lại roadmap</span>
        </Link>
        <header className="mt-10">
          <div className="rounded-md w-max p-1 ">
            <p className="text-gray-500 text-sm mb-2 font-semibold">
              Chủ đề {content?.topicId}: {content?.topicTitle}
            </p>
            <h1 className="font-bold text-3xl ">
              Bài {content?.lessonId}: {content?.lessonTitle}
            </h1>
          </div>
        </header>
        {/* Below Parts */}
        <div className="flex flex-row gap-10 no-wrap items-start mt-10">
          {/* Side Bar */}
          <LessonSideBar
            lessonId={content?.lessonId}
            lessonName={content?.lessonTitle}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            className="w-[300px] sticky top-5"
          />

          {/* Lesson Content */}
          <div className="flex-1 h-[200vh]">
            <div className="w-[90%] mx-auto">
              <section
                id="targets"
                className="flex md:flex-row items-center gap-5"
              >
                <img
                  src={targetImg}
                  alt=""
                  className="w-[150px] h-[150px] rounded-md object-cover object-center overflow-hidden"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <ImPushpin className="inline-block p-1 border-2 border-gray-300 rounded text-3xl text-[var(--custom-red)]" />
                    <span className="text-lg font-bold">Mục tiêu bài học:</span>
                  </div>
                  <ul className="list-disc list-inside">
                    {content?.lessonTargets.map((target, index) => (
                      <li key={index} className="text-md mt-2">
                        {target}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              {/* Doan Doi Thoai */}
              <section id="dialogue" className="mt-5">
                <div className="flex items-center gap-3">
                  <MdChatBubbleOutline className="inline-block rounded-full p-2 text-[50px] border-2 border-gray-300 text-gray-600" />
                  <span className="text-2xl font-bold">Hội thoại</span>
                </div>
                {/* Change tabs */}
                <ul className="flex gap-5 mt-5 font-bold text-lg">
                  <li>
                    <button
                      className={`${
                        activeLanguage === "ko"
                          ? "underline decoration-2 decoration-[var(--custom-purple)] underline-offset-8"
                          : ""
                      } cursor-pointer `}
                      onClick={() => setActiveLanguage("ko")}
                    >
                      Tiếng Hàn
                    </button>
                  </li>
                  <li>
                    <button
                      className={`${
                        activeLanguage === "vn"
                          ? "underline decoration-2 decoration-[var(--custom-purple)] underline-offset-8"
                          : ""
                      } cursor-pointer `}
                      onClick={() => setActiveLanguage("vn")}
                    >
                      Tiếng Việt
                    </button>
                  </li>
                </ul>
                {/* Dialogue Box */}
                <div className="mt-5">
                  <DialogueBox
                    dialogue={
                      activeLanguage === "ko"
                        ? content?.koDialogue
                        : content?.vnDialogue
                    }
                  />
                </div>
                <div className="flex items-center gap-2 mt-10">
                  <ImPushpin className="inline-block p-1 border-2 border-gray-300 rounded text-3xl text-[var(--custom-red)]" />
                  <span className="text-lg font-bold">
                    Câu chuyện văn hóa: {`${content?.culturalStory?.title}`}
                  </span>
                </div>
                <div className="mt-5">
                  {parse(`${content?.culturalStory?.content}`)}
                </div>
                {content?.funQuiz && (
                  <FunQuizBox
                    quiz={content.funQuiz}
                    className="mt-10 max-w-[50%] m mx-auto"
                  />
                )}
              </section>
              {/* Vocabs */}
              <section id="vocabulary" className="mt-5">
                <div className="flex items-center gap-3">
                  <TbVocabulary className="inline-block rounded-full p-2 text-[50px] border-2 border-gray-300 text-gray-600" />
                  <span className="text-2xl font-bold">Danh sách từ vựng</span>
                </div>
              </section>
              {/* Grammar */}
              <section id="grammar" className="mt-5">
                <div className="flex items-center gap-3">
                  <TbTextGrammar className="inline-block rounded-full p-2 text-[50px] border-2 border-gray-300 text-gray-600" />
                  <span className="text-2xl font-bold">Ngữ pháp</span>
                </div>
              </section>

              {/* Revise */}
              <section id="revise" className="mt-5">
                <div className="flex items-center gap-3">
                  <MdQuiz className="inline-block rounded-full p-2 text-[50px] border-2 border-gray-300 text-[var(--custom-purple)]" />
                  <span className="text-2xl font-bold">Ôn tập</span>
                </div>
              </section>
            </div>
          </div>

          {/* AI Chat Box */}
          <div className="w-[400px] h-[100px] sticky top-5 border-2 border-gray-300 rounded-md p-5">
            <h2 className="text-2xl font-bold">AI Chat Box</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonsPage;
