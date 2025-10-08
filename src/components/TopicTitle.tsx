
interface TopicTitleProps {
  className?: string;
  topicNumber: number;
  title: string;
  variant?: 'yellow' | 'green' | 'purple';
  sticky?: boolean;
}

function TopicTitle({ 
  className = "",
  topicNumber, 
  title, 
  variant = 'yellow',
  sticky = false 
}: TopicTitleProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'yellow':
        return {
          background: 'bg-[#ffebb1]', // Figma: #ffebb1
          border: 'border-[#ffcf41]',  // Figma: #ffcf41
          topicColor: 'text-[#755700]' // Figma: #755700
        };
      case 'green':
        return {
          background: 'bg-[#e3f2d2]', // Figma: #e3f2d2
          border: 'border-[#c5e99a]',  // Figma: #c5e99a
          topicColor: 'text-[#6ba823]' // Figma: #6ba823
        };
      case 'purple':
        return {
          background: 'bg-[#eeedff]', // Figma: #eeedff
          border: 'border-[#d6d4ff]',  // Figma: #d6d4ff
          topicColor: 'text-[#464394]' // Figma: #464394
        };
      default:
        return {
          background: 'bg-[#ffebb1]',
          border: 'border-[#ffcf41]',
          topicColor: 'text-[#755700]'
        };
    }
  };

  const styles = getVariantStyles();
  const stickyClass = sticky ? 'sticky top-0 z-10' : '';

  return (
    <div className={`${className} ${stickyClass}`}>
      <div className={`${styles.background} ${styles.border} border-4 rounded-[10px] flex flex-col items-center justify-center px-[93px] py-[9px] w-full h-full`}>
        <p className={`font-bold ${styles.topicColor} text-[18px]`}>
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