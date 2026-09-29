import React, { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { NavItem, SocialLink } from "../../types";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  socials: SocialLink[];
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navItems,
  socials,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const linkedin = socials.find((s) => s.platform === "LinkedIn") || {
    url: "https://www.linkedin.com/in/amin-jan1/",
    label: "LinkedIn",
  };

  return (
    <div
      id="mobile-navigation"
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col bg-[#FFFFFF]/98 backdrop-blur-xl md:hidden transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="container-shell flex h-20 items-center justify-between border-b border-[#D9E7F2]">
        <a
          href="#"
          onClick={onClose}
          className="text-base font-bold tracking-tight text-[#102A43]"
          aria-label="Amin Jan homepage"
        >
          AMIN JAN
        </a>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E7F2] bg-[#FFFFFF] text-[#0B3A63] transition-colors hover:bg-[#EDF6FF] focus-visible:outline-2"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="container-shell flex flex-1 flex-col justify-between py-8 overflow-y-auto">
        <div className="flex flex-col space-y-1">
          <span className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#52677A]">
            Navigation
          </span>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="group flex items-center justify-between border-b border-[#D9E7F2]/60 py-4 text-xl font-medium text-[#102A43] transition-colors hover:text-[#0B3A63]"
            >
              <span>{item.label}</span>
              <span className="text-sm text-[#1769AA] opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Footer actions inside mobile menu */}
        <div className="pt-8">
          <a
            href={linkedin.url}
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0B3A63] px-6 text-sm font-semibold text-[#FFFFFF] shadow-xs transition-colors hover:bg-[#082C4A]"
          >
            Connect on LinkedIn <ArrowUpRight className="h-4 w-4 text-[#DCEEFF]" />
          </a>
          <p className="mt-4 text-center text-xs text-[#52677A]">
            Youth Leader • Educator • Community Builder
          </p>
        </div>
      </nav>
    </div>
  );
};
