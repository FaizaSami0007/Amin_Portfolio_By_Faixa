import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight, Menu } from "lucide-react";
import type { NavItem, SocialLink } from "../../types";
import { MobileNav } from "./MobileNav";
import { Container } from "../common/Container";

interface NavbarProps {
  navItems: NavItem[];
  socials: SocialLink[];
}

export const Navbar: React.FC<NavbarProps> = ({ navItems, socials }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkedin = socials.find((s) => s.platform === "LinkedIn") || {
    url: "https://www.linkedin.com/in/amin-jan1/",
    label: "LinkedIn",
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#D9E7F2] bg-[#FFFFFF]/95 backdrop-blur-md py-3.5 shadow-[0_2px_12px_rgba(11,58,99,0.04)]"
            : "border-b border-transparent bg-transparent py-5"
        }`}
        role="banner"
      >
        <Container className="flex items-center justify-between">
          {/* Logo / Brand Wordmark */}
          <a
            href="#"
            className="group flex flex-col focus-visible:outline-2"
            aria-label="Amin Jan - Back to top"
          >
            <span className="font-editorial text-2xl sm:text-[26px] font-bold tracking-tight text-[#102A43] transition-colors group-hover:text-[#0B3A63]">
              Amin Jan
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden items-center gap-7 lg:gap-8 md:flex"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#52677A] transition-colors duration-150 hover:text-[#102A43] focus-visible:outline-2"
              >
                {item.label}
              </a>
            ))}

            {/* Let's Connect CTA */}
            <a
              href={linkedin.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0B3A63] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#FFFFFF] shadow-xs transition-all hover:bg-[#082C4A] active:scale-[0.98] focus-visible:outline-2"
              aria-label="Connect with Amin Jan on LinkedIn (opens in new tab)"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#DCEEFF]" aria-hidden="true" />
            </a>
          </nav>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#D9E7F2] bg-[#FFFFFF] text-[#0B3A63] transition-colors hover:bg-[#EDF6FF] md:hidden focus-visible:outline-2 cursor-pointer"
            aria-label="Open navigation menu"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navItems={navItems}
        socials={socials}
      />
    </>
  );
};
