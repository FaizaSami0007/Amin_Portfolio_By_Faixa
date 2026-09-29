import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "forest" | "navy" | "blue" | "terracotta" | "outline";
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
  dot = false,
}) => {
  const baseStyles =
    "inline-flex items-center text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full gap-2 transition-colors";

  const variants = {
    default: "bg-[#EDF6FF] text-[#0B3A63] border border-[#DCEEFF]",
    forest: "bg-[#0B3A63] text-[#FFFFFF] border border-transparent",
    navy: "bg-[#0B3A63] text-[#FFFFFF] border border-transparent",
    blue: "bg-[#DCEEFF] text-[#0B3A63] border border-white/20",
    terracotta: "bg-[#DCEEFF] text-[#1769AA] border border-[#D9E7F2]",
    outline: "bg-transparent text-[#52677A] border border-[#D9E7F2]",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {dot && (
        <span
          className="h-1.5 w-1.5 rounded-full bg-[#1769AA] shrink-0 animate-pulse"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};
