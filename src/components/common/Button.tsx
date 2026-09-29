import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "sage";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-[#0B3A63] text-[#FFFFFF] hover:bg-[#082C4A] border border-transparent shadow-xs active:scale-[0.99]",
    secondary:
      "bg-[#FFFFFF] text-[#0B3A63] border border-[#D9E7F2] hover:bg-[#EDF6FF] hover:border-[#4A9FE3] active:scale-[0.99] shadow-xs",
    ghost:
      "bg-transparent text-[#52677A] hover:text-[#0B3A63] hover:bg-[#EDF6FF] border border-transparent",
    sage:
      "bg-[#1769AA] text-[#FFFFFF] hover:bg-[#0B3A63] border border-transparent active:scale-[0.99]",
  };

  const sizes = {
    sm: "text-xs font-semibold px-3.5 py-1.5 rounded-full gap-1.5",
    md: "text-sm font-semibold px-5 py-2.5 rounded-full gap-2",
    lg: "text-base font-semibold px-6 py-3 rounded-full gap-2.5",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer noopener" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};
