import React from "react";

interface ScrollToSectionProps {
  targetId: string; // id of the element to scroll to
  behavior?: ScrollBehavior; // "smooth" or "auto"
  block?: ScrollLogicalPosition; // "start" | "center" | "end" | "nearest"
  offset?: number; // pixel offset from top
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ScrollToSection({
  targetId,
  behavior = "smooth",
  offset = 0,
  children,
  className = "",
  onClick,
}: ScrollToSectionProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    onClick?.();

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const targetPosition = elementPosition - offset;

      window.scrollTo({
        top: targetPosition,
        behavior,
      });
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
