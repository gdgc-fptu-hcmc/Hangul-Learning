interface ScrollToTopProps {
  top?: number;
  smooth?: boolean;
  children: React.ReactNode;
}

export default function ScrollToTop({
  top = 0,
  smooth = true,
  children,
}: ScrollToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: top,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  return (
    <div onClick={scrollToTop} className="cursor-pointer">
      {children}
    </div>
  );
}
