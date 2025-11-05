import CustomBox from "@/shared/common/CustomBox";
import React from "react";

interface PracticeBoxProps {
  practiceType?:
    | "fill-in-blank"
    | "dropdown-choice"
    | "multiple-choice"
    | "none";
  children?: React.ReactNode;
  className?: string;
}

const PracticeBox: React.FC<PracticeBoxProps> = ({
  practiceType = "none",
  children,
  className,
}) => {
  return (
    <>
      {practiceType !== "none" && (
        <CustomBox
          className={`border-2 border-dashed border-gray-400 p-4 mb-4 ${className}`}
        >
          {children}
        </CustomBox>
      )}
    </>
  );
};

export default PracticeBox;
