import React, { useEffect, useRef, useState } from "react";
import bgImgUrl from "@/assets/images/wavy-clouds-pattern.svg";
import ClickScaleDebounce from "@/shared/effects/ClickScaleDebounce";
import logoImgUrl from "@/assets/logos/logo-only.svg";
import { FaArrowUp, FaTrashAlt } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import InputBox from "./InputBox";

interface ChatBoxProps {
  className?: string;
}

const firstContentFromAi = {
  role: "model",
  parts: [
    { text: "Xin chào, tôi là trợ lý ảo dạy tiếng Hàn." },
    { text: "Tôi có thể giúp gì cho bạn hôm nay?" },
  ],
};

const ChatBox = ({ className }: ChatBoxProps) => {
  const [contents, setContents] = useState<any[]>(() => {
    const saved = localStorage.getItem("chatHistory");
    if (saved) return JSON.parse(saved);
    localStorage.setItem("chatHistory", JSON.stringify([firstContentFromAi]));
    return [firstContentFromAi];
  });

  // Update localStorage whenever chat history changes
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(contents));
  }, [contents]);

  // Add new message to chat
  const handleAddMessage = (newContent: any) => {
    console.log("Adding new content:", newContent);
    setContents((prev) => [...prev, newContent]);
  };

  // Clear chat
  const handleClearChat = () => {
    const initial = [firstContentFromAi];
    setContents(initial);
    localStorage.setItem("chatHistory", JSON.stringify(initial));
  };

  return (
    <div
      className={`min-h-[300px] shadow-2xl shadow-[var(--dark-pink)] rounded-3xl pt-3 pb-10 px-4 flex flex-col ${className}`}
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

        {/* Buttons */}
        <div className="flex gap-3 items-center justify-between">
          <ClickScaleDebounce
            onClick={handleClearChat}
            className="flex items-center rounded-full text-[var(--dark-pink)] bg-white group overflow-hidden"
          >
            <FaTrashAlt className="text-xl m-2" />
            <span className="group-hover:mr-2 font-semibold max-w-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-w-xs group-hover:opacity-100 whitespace-nowrap">
              Xóa trò chuyện
            </span>
          </ClickScaleDebounce>

          <ClickScaleDebounce className="flex items-center rounded-full text-[var(--dark-pink)] bg-white group overflow-hidden">
            <MdOutlineZoomOutMap className="text-xl m-2" />
          </ClickScaleDebounce>
        </div>
      </div>

      {/* Chat body */}
      <div className="relative flex-1 flex flex-col bg-white rounded-3xl pt-5 pb-5 px-4 overflow-hidden pb-[5vh]">
        {/* Messages */}
        <div className="w-full h-full overflow-y-scroll overflow-x-hidden pb-[5vh]">
          {contents.map((content: any, index: number) => (
            <div
              key={index}
              className={`flex flex-col gap-2 mb-4 relative max-w-[70%] z-0 ${
                content.role === "user" ? "ml-auto" : "mr-auto"
              }`}
            >
              {content.parts.map((part: any, partIndex: number) => (
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
              {content.role === "model" && (
                <img
                  src={logoImgUrl}
                  alt=""
                  className="inline-block w-20 left-full top-0 absolute z-[0]"
                />
              )}
            </div>
          ))}
        </div>

        {/* Input box */}
        <div className="absolute w-[80%] bottom-5 left-1/2 -translate-x-1/2 flex justify-center">
          <InputBox
            chatHistory={contents}
            onAddMessage={handleAddMessage}
            className="w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
