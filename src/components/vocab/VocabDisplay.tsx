import { Vocab } from "@/data";
import CustomBox from "@/shared/common/CustomBox";
import React from "react";

interface VocabDisplayProps {
  displayType?: 1 | 2; // optional
  vocab: Vocab;
  className?: string;
}

const VocabDisplay: React.FC<VocabDisplayProps> = ({
  displayType = 1,
  vocab,
  className = "",
}) => {
  console.log("vocab parts:", vocab.parts);

  return (
    <div className={`group relative font-bold text-3xl w-max ${className}`}>
      {/* display colored parts */}
      {vocab.parts && vocab.parts.length > 0 ? (
        vocab.parts.map((part, index) => (
          <span
            key={index}
            className="underline underline-offset-8 decoration-dotted decoration-gray-500"
            style={{
              color: `var(${part.color})`,
            }}
          >
            {part.text}
          </span>
        ))
      ) : (
        <span className="underline underline-offset-8 decoration-dotted decoration-gray-500">
          {vocab.text}
        </span>
      )}

      {/* hover info box */}
      {vocab.parts && vocab.parts.length > 0 && (
        <CustomBox
          tailPosition="bottom-right"
          tailSize={20}
          tailRounded="md"
          className="rounded-md p-2 bg-white shadow-md border border-gray-200 
          !absolute bottom-full left-0 -translate-y-[15px] w-max opacity-0 hidden group-hover:block group-hover:opacity-100 duration-200 "
        >
          <p className="font-bold text-sm mb-1">Giải thích:</p>
          <ul className="space-y-1">
            {vocab.parts.map((part, index) => (
              <li
                key={index}
                className="text-sm font-medium flex gap-2 items-center"
              >
                <span
                  className="font-semibold"
                  style={{
                    color: `var(${part.color})`,
                  }}
                >
                  {part.text}
                </span>
                <span>({part.description})</span>
              </li>
            ))}
          </ul>
        </CustomBox>
      )}
    </div>
  );
};

export default VocabDisplay;
