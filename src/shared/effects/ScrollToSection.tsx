import React from "react";

interface ScrollToSectionProps {
  targetId: string; // the id of the element you want to scroll to
  behavior?: ScrollBehavior; // "smooth" or "auto"
  block?: ScrollLogicalPosition; // "start" | "center" | "end" | "nearest"
  children: React.ReactNode; // what to render (button, text, etc.)
  className?: string;
}

export default function ScrollToSection({
  targetId,
  behavior = "smooth",
  block = "start",
  children,
  className = "",
}: ScrollToSectionProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior, block });
    } else {
      console.warn(`Element with id "${targetId}" not found`);
    }
  };

  return (
    <div onClick={handleClick} className={`cursor-pointer ${className}`}>
      {children}
    </div>
  );
}
