import { button } from "framer-motion/client";
import React from "react";
import { PiSpeakerHighFill } from "react-icons/pi";

interface SpeakerBoxProps {
  text?: string;
  audioUrl?: string;
  outerClassName?: string;
  speakerClassName?: string;
}

// this is used to pass the argument of text and call api to speechlyze
// or play the audio from audioUrl
const SpeakerBox: React.FC<SpeakerBoxProps> = ({
  text,
  audioUrl = "",
  outerClassName = "",
  speakerClassName = "",
}) => {
  const handleClick = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    } else {
      // Call text-to-speech API (e.g., Speechlyze) with the provided text
      // This is a placeholder for the actual API call
      console.log(`Playing synthesized speech for text: ${text}`);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`inline-block text-[35px] cursor-pointer rounded-lg border-2 border-gray-300  ${outerClassName}`}
    >
      <PiSpeakerHighFill
        className={`m-3 text-[var(--custom-purple)] ${speakerClassName}`}
      />
    </button>
  );
};

export default SpeakerBox;
