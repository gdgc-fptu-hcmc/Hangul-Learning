interface TopicTitleProps {
  className?: string;
  topicNumber: number;
  title: string;
  topicTitleClassName?: string;
  sticky?: boolean;
}

function TopicTitle({
  className = "",
  topicNumber,
  title,
  topicTitleClassName = "",
  sticky = false,
}: TopicTitleProps) {
  const stickyClass = sticky ? "sticky top-0 z-10" : "";

  return (
    <div className={`${className} ${stickyClass}`}>
      <div
        className={`
          rounded-[10px]
          border-4
          flex flex-col items-center justify-center
          px-[93px] py-[9px]
          w-full h-full
          ${topicTitleClassName}
        `}
      >
        <p className="font-bold text-xl">Chủ đề {topicNumber}</p>

        <p className="font-bold text-[20px] text-[#202020] text-center">
          {title}
        </p>
      </div>
    </div>
  );
}

export default TopicTitle;
