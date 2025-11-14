interface TopicTitleProps {
  className?: string;
  topicNumber: number;
  title: string;
  accent?: string;
  barColor?: string;
  sticky?: boolean;
}

function TopicTitle({
  className = "",
  topicNumber,
  title,
  accent = "",
  barColor = "",
  sticky = false,
}: TopicTitleProps) {
  const stickyClass = sticky ? "sticky top-0 z-10" : "";

  return (
    <div className={`${className} ${stickyClass}`}>
      <div
        className={`
          rounded-[10px]
          border-4
          ${barColor}
          bg-gradient-to-r
          ${accent}
          flex flex-col items-center justify-center
          px-[93px] py-[9px]
          w-full h-full
        `}
      >
        <p className="font-bold text-[18px]">
          Chủ đề {topicNumber}
        </p>

        <p className="font-bold text-[24px] text-[#202020] text-center">
          {title}
        </p>
      </div>
    </div>
  );
}

export default TopicTitle;
