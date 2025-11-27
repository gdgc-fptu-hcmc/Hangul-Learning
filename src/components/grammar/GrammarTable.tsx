interface GrammarTableRow {
  [key: string]: React.ReactNode;
}

interface GrammarTableProps {
  headers: string[];
  rows: GrammarTableRow[];
  className?: string;
}

export default function GrammarTable({ headers, rows, className = '' }: GrammarTableProps) {
  const numColumns = headers.length;

  return (
    <div
      className={`border-2 border-[#d9d9d9] rounded-[10px] bg-white overflow-hidden ${className}`}
    >
      {/* Header Row */}
      <div
        className="grid border-b-2 border-[#d9d9d9]"
        style={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}
      >
        {headers.map((header, index) => (
          <div
            key={index}
            className={`px-[12px] py-[10px] text-[18px] font-semibold text-[#202020] ${index < numColumns - 1 ? 'border-r-2 border-[#d9d9d9]' : ''
              }`}
          >
            {header}
          </div>
        ))}
      </div>

      {/* Data Rows */}
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid ${rowIndex < rows.length - 1 ? 'border-b-2 border-[#d9d9d9]' : ''}`}
          style={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}
        >
          {Object.values(row).map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`px-[12px] py-[10px] text-[18px] font-medium text-[#202020] ${cellIndex < numColumns - 1 ? 'border-r-2 border-[#d9d9d9]' : ''
                }`}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
