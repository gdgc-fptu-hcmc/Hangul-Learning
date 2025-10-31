import React from "react";

interface PurpleFlashCardProps {
  header?: string;
  children?: React.ReactNode;
  className?: string;
}

const PurpleFlashCard: React.FC<PurpleFlashCardProps> = ({
  header,
  children,
  className,
}) => {
  return (
    <div className={`bg-[var(--custom-purple)] p-3 rounded-2xl ${className}`}>
      <h3 className="text-white font-semibold text-center text-lg py-3">
        {header}
      </h3>
      <div className="bg-white rounded-2xl p-3 md:p-6">{children}</div>
    </div>
  );
};

export default PurpleFlashCard;
