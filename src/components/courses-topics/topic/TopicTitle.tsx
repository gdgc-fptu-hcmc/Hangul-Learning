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
          w-full h-full
          px-4 py-3
          sm:px-8 sm:py-4
          md:px-[93px] md:py-[9px]
          text-center
          ${topicTitleClassName}
        `}
      >
        <p className="font-bold text-lg sm:text-xl">Chủ đề {topicNumber}</p>

        <p className="font-bold text-base sm:text-lg md:text-[20px] text-[#202020]">
          {title}
        </p>
      </div>
    </div>
  );
}

export default TopicTitle;
