import React from "react";

const DEFAULT_MAX_WIDTH = 768;

const useIsMobile = (maxWidth?: number) => {
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth < (maxWidth || DEFAULT_MAX_WIDTH)
  );

  React.useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth < (maxWidth || DEFAULT_MAX_WIDTH));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
