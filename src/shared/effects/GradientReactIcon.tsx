import React from "react";

interface GradientReactIconProps {
  icon: React.ElementType;
  size?: number;
  className?: string;
}

const GradientReactIcon: React.FC<GradientReactIconProps> = ({
  icon: Icon,
  size = 24,
  className = "",
}) => {
  const colors = [
    "var(--custom-red)",
    "var(--custom-orange)",
    "var(--custom-yellow)",
    "var(--custom-purple)",
  ];

  return (
    <>
      {/* Define the gradient */}
      <svg width="0" height="0" className="inline">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {colors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (colors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>
      </svg>

      {/* Render the icon with the gradient fill */}
      <Icon
        className={className}
        size={size}
        style={{ fill: "url(#icon-gradient)" }}
      />
    </>
  );
};

export default GradientReactIcon;
