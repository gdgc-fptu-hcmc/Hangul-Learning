import React from 'react';

interface BorderedGrammarBoxProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function BorderedGrammarBox({
  title,
  children,
  className = '',
}: BorderedGrammarBoxProps) {
  return (
    <div
      className={`border-2 border-[#d9d9d9] rounded-[10px] p-[30px] flex flex-col gap-[18px] bg-white ${className}`}
      data-node-id="821:4117"
    >
      {title && (
        <p className="font-semibold text-[18px]">{title}</p>
      )}
      {children}
    </div>
  );
}
