import React from "react";

interface PracticeBoxProps {
  children?: React.ReactNode;
  className?: string;
}

const PracticeBox: React.FC<PracticeBoxProps> = ({ children, className }) => {
  return (
    <div className={`rounded-lg border-2 border-gray-300 p-5 ${className}`}>
      {children}
    </div>
  );
};

export default PracticeBox;
