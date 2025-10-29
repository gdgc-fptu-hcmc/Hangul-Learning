import ClickScaleDebounce from "@/shared/effects/ClickScaleDebounce";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { functions } from "@/lib/firebase";
import { httpsCallable } from "firebase/functions";

interface InputBoxProps {
  chatHistory: any[];
  onAddMessage: (message: any) => void;
  className?: string;
}

const MAX_LINES = 5;

const InputBox = ({ chatHistory, onAddMessage, className }: InputBoxProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const lineHeightRef = useRef<number>(24);

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

  const callApi = async () => {
    const userMessage = {
      role: "user",
      parts: [{ text: textAreaRef.current?.value || "" }],
    };
    const getAiResponse = httpsCallable(functions, "getAiResponse");
    onAddMessage(userMessage);
    textAreaRef.current.value = "";
    try {
      const result = await getAiResponse({
        chatHistory,
        newContent: userMessage,
      });
      onAddMessage(result.data);
    } catch (err) {
      console.error(err);
    } finally {
      handleInput();
    }
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (textAreaRef.current?.value.trim()) {
        callApi();
      }
    }
  };

  useEffect(() => {
    const textarea = textAreaRef.current;
    if (!textarea) return;
    const computedStyle = window.getComputedStyle(textarea);
    lineHeightRef.current = parseInt(computedStyle.lineHeight || "24", 10);
    handleInput();
  }, []);

  return (
    <motion.div
      layout
      transition={{ duration: 0.2 }}
      className={`flex ${
        isExpanded ? "flex-col rounded-2xl gap-2" : "flex-row rounded-full"
      } justify-between items-center w-full bg-white p-1 border-2 border-[var(--dark-pink)] ${className}`}
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
  );
};

export default InputBox;
