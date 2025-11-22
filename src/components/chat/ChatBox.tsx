import React, { useEffect, useRef, useState } from "react";
import bgImgUrl from "@/assets/images/wavy-clouds-pattern.svg";
import logoImgUrl from "@/assets/logos/logo-only.svg";
import ClickScaleDebounce from "@/shared/effects/ClickScaleDebounce";
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaClosedCaptioning,
  FaKey,
  FaTrashAlt,
} from "react-icons/fa";
import { MdOutlineZoomInMap, MdOutlineZoomOutMap } from "react-icons/md";
import { GrClose, GrFormNextLink } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { functions } from "@/lib/firebase";
import { httpsCallable } from "firebase/functions";
import ApiKeyManager from "./ApiKeyManager";
import { IoClose } from "react-icons/io5";

interface ChatBoxProps {
  hasCloseButton?: boolean;
  onClose?: () => void;
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

const ChatBox = ({
  hasCloseButton = false,
  onClose,
  className,
}: ChatBoxProps) => {
  // loading state
  const [isLoading, setIsLoading] = useState(false);

  // parts for zoomed out
  const [isZoomedOut, setIsZoomedOut] = useState(false);
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
    handleScrollToBottom();
  }, [contents]);

  const [openApiKeyManager, setOpenApiKeyManager] = useState(false);

  const handleAddMessage = (newContent: Message) => {
    setContents((prev) => [...prev, newContent]);
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

  const callApi = async (userContent: Message) => {
    const getAiResponse = httpsCallable(functions, "getAiResponse");
    try {
      setIsLoading(true);
      const result = await getAiResponse({
        chatHistory: contents,
        newContent: userContent,
        apiKey: localStorage.getItem("apiKey"),
      });
      return result.data;
    } catch (err) {
      console.error(err);
      return {
        role: "model",
        parts: [{ text: "Tôi đang nghỉ ngơi, hãy thử lại sau nhé!" }],
      };
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!localStorage.getItem("apiKey")) {
        // force to open api key manager first
        setOpenApiKeyManager(true);
        return;
      }
      if (textAreaRef.current?.value.trim()) {
        const userContent = {
          role: "user",
          parts: [{ text: textAreaRef.current.value }],
        };
        handleAddMessage(userContent);
        textAreaRef.current.value = "";
        handleInput();
        const resContent = await callApi(userContent);
        handleAddMessage(resContent);
      }
    }
  };

  const handleClickSubmit = async () => {
    if (!localStorage.getItem("apiKey")) {
      // force to open api key manager first
      setOpenApiKeyManager(true);
      return;
    }
    if (textAreaRef.current?.value.trim()) {
      const userContent = {
        role: "user",
        parts: [{ text: textAreaRef.current.value }],
      };
      handleAddMessage(userContent);
      textAreaRef.current.value = "";
      handleInput();

      const resContent = await callApi(userContent);
      handleAddMessage(resContent);
    }
  };

  const handleClickRecommended = async (question: string) => {
    if (!localStorage.getItem("apiKey")) {
      // force to open api key manager first
      setOpenApiKeyManager(true);
      return;
    }
    const recommendedContent: Message = {
      role: "user",
      parts: [{ text: question }],
    };
    handleAddMessage(recommendedContent);
    const resContent = await callApi(recommendedContent);
    handleAddMessage(resContent);
  };

  useEffect(() => {
    const textarea = textAreaRef.current;
    if (!textarea) return;
    const computedStyle = window.getComputedStyle(textarea);
    lineHeightRef.current = parseInt(computedStyle.lineHeight || "24", 10);
    handleInput();
  }, []);

  return (
    <div
      className={`shadow-2xl w-full h-full shadow-[var(--dark-pink)] rounded-3xl pt-3 pb-10 px-4 flex flex-col ${className} ${
        isZoomedOut
          ? "!fixed !top-1/2 !left-1/2 -translate-x-1/2 -translate-y-1/2 !w-[90vw] !h-[90vh] z-[1000] backdrop-blur-sm"
          : ""
      }`}
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      {/* Api key manage */}
      {openApiKeyManager && (
        <ApiKeyManager
          open={openApiKeyManager}
          onClose={() => setOpenApiKeyManager(false)}
        />
      )}
      {/* Header */}
      <div className="flex justify-between items-center h-10 mb-2 px-2">
        <div className="flex items-center gap-1">
          <img src={logoImgUrl} alt="" className="inline-block h-full" />
          <span className="xl:block hidden font-bold text-[var(--dark-pink)] bg-white rounded-full px-3 py-1 text-xl">
            AI Chat
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <ClickScaleDebounce
            onClick={handleClearChat}
            className="flex items-center rounded-full text-[var(--dark-pink)] bg-white group overflow-hidden"
          >
            <FaTrashAlt className="text-xl m-2" />
          </ClickScaleDebounce>
          <ClickScaleDebounce
            onClick={() => setOpenApiKeyManager(true)}
            className="flex items-center rounded-full text-[var(--dark-pink)] bg-white group overflow-hidden"
          >
            <FaKey className="text-xl m-2" />
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
          {hasCloseButton && (
            <ClickScaleDebounce
              onClick={() => onClose?.()}
              className="flex items-center rounded-full text-[var(--dark-pink)] bg-white group overflow-hidden"
            >
              <GrClose className="text-xl m-2" />
            </ClickScaleDebounce>
          )}
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
            className="w-full h-full overflow-y-scroll overflow-x-hidden overscroll-y-none pb-[5vh]"
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
              {isLoading && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex space-x-1 p-3">
                  <span className="w-2 h-2 bg-[var(--darkest-pink)] rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-[var(--dark-pink)] rounded-full animate-bounce [animation-delay:-0.2s]"></span>
                  <span className="w-2 h-2 bg-[var(--light-pink)] rounded-full animate-bounce [animation-delay:-0.4s]"></span>
                </div>
              )}
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
                  onClick={handleClickSubmit}
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
