interface GreenExampleBoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function GreenExampleBox({ children, className = "" }: GreenExampleBoxProps) {
  return (
    <div
      className={`bg-[#f4faee] rounded-[10px] p-[20px] flex flex-col gap-[10px] ${className}`}
      data-name="Example Section"
    >
      <p className="font-bold text-[var(--custom-green)] text-[18px]">
        Ví dụ:
      </p>
      <div className="font-normal text-[#202020] text-[18px]">
        {children}
      </div>
    </div>
  );
}
