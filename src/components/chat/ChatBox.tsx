import React, { useEffect, useRef, useState } from "react";
import bgImgUrl from "@/assets/images/wavy-clouds-pattern.svg";
import logoImgUrl from "@/assets/logos/logo-only.svg";
import ClickScaleDebounce from "@/shared/effects/ClickScaleDebounce";
import { motion } from "framer-motion";
import { FaArrowUp, FaTrashAlt } from "react-icons/fa";
import { MdOutlineZoomInMap, MdOutlineZoomOutMap } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { functions } from "@/lib/firebase";
import { httpsCallable } from "firebase/functions";

interface ChatBoxProps {
  className?: string;
}

interface Message {
  role: "user" | "model";
  parts: { text: string }[];
}

const firstContentFromAi: Message = {
  role: "model",
  parts: [
    { text: "Xin chào, tôi là trợ lý ảo dạy tiếng Hàn." },
    { text: "Tôi có thể giúp gì cho bạn hôm nay?" },
  ],
};

const recommendedQuestions = [
  "Hangul là gì?",
  "Làm thế nào để học Hangul?",
  "Bạn có thể giúp tôi luyện tập Hangul không?",
  "Xin chào trong tiếng Hàn nói như thế nào?",
  "Làm thế nào để giới thiệu bản thân bằng tiếng Hàn?",
  "Các bước cơ bản để học tiếng Hàn là gì?",
  "Bạn có thể gợi ý một số tài nguyên học tiếng Hàn không?",
];

const MAX_RECOMMENDED_QUESTIONS_SHOWN = 3;
const MAX_LINES = 5;

const ChatBox = ({ className }: ChatBoxProps) => {
  const [isZoomedOut, setIsZoomedOut] = useState(true);
  const [questionsFull, setQuestionsFull] = useState(false);
  const [contents, setContents] = useState<Message[]>(() => {
    const saved = localStorage.getItem("chatHistory");
    if (saved) return JSON.parse(saved);
    localStorage.setItem("chatHistory", JSON.stringify([firstContentFromAi]));
    return [firstContentFromAi];
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const lineHeightRef = useRef<number>(24);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(contents));
  }, [contents]);

  const handleAddMessage = (newContent: Message) => {
    setContents((prev) => [...prev, newContent]);
    handleScrollToBottom();
  };

  const handleClearChat = () => {
    const initial = [firstContentFromAi];
    setContents(initial);
    localStorage.setItem("chatHistory", JSON.stringify(initial));
  };

  const handleInput = () => {
    const textarea = textAreaRef.current;
    if (!textarea) return;
    textarea.rows = 1;
    textarea.rows = Math.min(
      Math.floor(textarea.scrollHeight / lineHeightRef.current),
      MAX_LINES
    );
    if (textarea.scrollHeight > lineHeightRef.current) {
      setIsExpanded(true);
    }
    if (textarea.value === "") {
      setIsExpanded(false);
    }
  };

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const handleScrollToBottom = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  const callApi = async () => {
    const userMessage: Message = {
      role: "user",
      parts: [{ text: textAreaRef.current?.value || "" }],
    };
    const getAiResponse = httpsCallable(functions, "getAiResponse");
    handleAddMessage(userMessage);
    textAreaRef.current!.value = "";
    try {
      const result = await getAiResponse({
        chatHistory: contents,
        newContent: userMessage,
      });
      handleAddMessage(result.data);
    } catch (err) {
      console.error(err);
    } finally {
      handleInput();
    }
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (textAreaRef.current?.value.trim()) callApi();
    }
  };

  useEffect(() => {
    const textarea = textAreaRef.current;
    if (!textarea) return;
    const computedStyle = window.getComputedStyle(textarea);
    lineHeightRef.current = parseInt(computedStyle.lineHeight || "24", 10);
    handleInput();
    handleScrollToBottom();
  }, []);

  const handleClickRecommended = (question: string) => {
    if (textAreaRef.current) textAreaRef.current.value = question;
    handleInput();
  };

  return (
    <div
      className={`shadow-2xl min-h-[300px] shadow-[var(--dark-pink)] rounded-3xl pt-3 pb-10 px-4 flex flex-col ${className} ${
        isZoomedOut
          ? "!fixed !top-1/2 !left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[90vh] z-[1000] backdrop-blur-sm"
          : ""
      }`}
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      {/* Header */}
      <div className="flex justify-between items-center h-10 mb-2 px-2">
        <div className="flex items-center gap-1">
          <img src={logoImgUrl} alt="" className="inline-block h-full" />
          <span className="font-bold text-[var(--dark-pink)] bg-white rounded-full px-3 py-1 text-xl">
            AI Chat
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <ClickScaleDebounce
            onClick={handleClearChat}
            className="flex items-center rounded-full text-[var(--dark-pink)] bg-white group overflow-hidden"
          >
            <FaTrashAlt className="text-xl m-2" />
            <span className="group-hover:mr-2 font-semibold max-w-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-w-xs group-hover:opacity-100 whitespace-nowrap">
              Xóa trò chuyện
            </span>
          </ClickScaleDebounce>
          <ClickScaleDebounce
            onClick={() => setIsZoomedOut(!isZoomedOut)}
            className="flex items-center rounded-full text-[var(--dark-pink)] bg-white group overflow-hidden"
          >
            {isZoomedOut ? (
              <MdOutlineZoomInMap className="text-xl m-2" />
            ) : (
              <MdOutlineZoomOutMap className="text-xl m-2" />
            )}
          </ClickScaleDebounce>
        </div>
      </div>

      {/* Body */}
      <div
        className={`flex-1 flex bg-white rounded-3xl pt-5 pb-5 px-4 overflow-hidden pb-[5vh] ${
          isZoomedOut ? "flex-row" : "flex-col"
        }`}
      >
        {isZoomedOut && (
          <div className="w-[30%] max-h-full bg-transparent overflow-x-hidden border-r-2 border-gray-300 px-4">
            <h3 className="font-bold text-xl text-[var(--dark-pink)]">
              How can I help you today?
            </h3>
            <p className="font-semibold">Try some questions:</p>
            <motion.ul className="relative flex flex-col gap-3 mt-4">
              {recommendedQuestions.map((question, index) => (
                <li
                  key={index}
                  className={`flex group items-center bg-[var(--dark-pink)] p-[2px] text-sm border-2 font-semibold text-[var(--dark-pink)] rounded-full cursor-pointer hover:scale-[1.02] ${
                    index >= MAX_RECOMMENDED_QUESTIONS_SHOWN && !questionsFull
                      ? "hidden"
                      : ""
                  }`}
                  onClick={() => handleClickRecommended(question)}
                >
                  <p className="flex-1 bg-white rounded-full px-2 p-1">
                    {question}
                  </p>
                  <GrFormNextLink className="w-[15px] mx-1 text-white text-xl group-hover:inline-block hidden" />
                </li>
              ))}
            </motion.ul>
            <ClickScaleDebounce
              onClick={() => setQuestionsFull(!questionsFull)}
            >
              <div className="mt-2 mx-auto w-max cursor-pointer">
                <IoMdAdd
                  className={`rounded-full border-2 p-1 border-[var(--dark-pink)] inline-block text-[var(--dark-pink)] text-[35px] hover:scale-[1.02] ${
                    questionsFull ? "rotate-45" : ""
                  }`}
                />
              </div>
            </ClickScaleDebounce>
          </div>
        )}

        {/* Messages */}
        <div
          className={`flex-1 relative w-full h-full ${
            isZoomedOut ? "px-4" : "px-0"
          }`}
        >
          <div
            ref={chatContainerRef}
            className="w-full h-full overflow-y-scroll overflow-x-hidden pb-[5vh]"
          >
            {contents.map((content, index) => (
              <div
                key={index}
                className={`flex flex-col gap-2 mb-4 relative max-w-[70%] z-0 ${
                  content.role === "user" ? "ml-auto" : "mr-auto"
                }`}
              >
                {content.role === "model" && (
                  <img
                    src={logoImgUrl}
                    alt=""
                    className="inline-block w-[50px] left-full top-0 z-[0] translate-y-1/2"
                  />
                )}
                {content.parts.map((part, partIndex) => (
                  <p
                    key={partIndex}
                    className={`z-0 shadow-lg rounded-lg border text-sm font-medium p-2 ${
                      content.role === "user"
                        ? "ml-auto bg-[var(--dark-pink)] text-white"
                        : "mr-auto bg-gray-200"
                    }`}
                  >
                    {part.text}
                  </p>
                ))}
              </div>
            ))}

            {/* InputBox */}
            <div className="absolute w-[80%] -bottom-5 left-1/2 -translate-x-1/2 flex justify-center">
              <motion.div
                layout
                transition={{ duration: 0.2 }}
                className={`flex ${
                  isExpanded
                    ? "flex-col rounded-2xl gap-2"
                    : "flex-row rounded-full"
                } justify-between items-center w-full bg-white p-1 border-2 border-[var(--dark-pink)]`}
              >
                <motion.textarea
                  ref={textAreaRef}
                  onInput={handleInput}
                  onKeyDown={handleSubmit}
                  placeholder="Nhập nội dung..."
                  className={`flex-1 ${
                    isExpanded ? "w-full mt-2 mx-2" : "ml-5 mr-2"
                  } resize-none outline-none border-0 text-[var(--dark-pink)] font-semibold placeholder:text-[var(--light-pink)] bg-white`}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <ClickScaleDebounce
                  onClick={callApi}
                  className="ml-auto rounded-full bg-[var(--dark-pink)] p-2"
                >
                  <FaArrowUp
                    className={`text-xl text-white duration-200 ${
                      isExpanded ? "rotate-0" : "rotate-90"
                    }`}
                  />
                </ClickScaleDebounce>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
