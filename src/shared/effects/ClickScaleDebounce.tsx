import React from "react";
import { motion } from "framer-motion";

interface ClickScaleDebounceProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const ClickScaleDebounce = ({
  children,
  onClick,
  className,
}: ClickScaleDebounceProps) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileTap={{ scale: [1, 0.95, 1] }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default ClickScaleDebounce;
