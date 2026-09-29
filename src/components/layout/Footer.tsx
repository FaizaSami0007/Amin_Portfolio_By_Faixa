import React from "react";
import { Container } from "../common/Container";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import type { SiteConfig } from "../../types";

interface FooterProps {
  config: SiteConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      aria-label="Site Footer"
      className="border-t border-[#0B3A63] bg-[#082C4A] py-10 sm:py-12 text-sm text-[#DCEEFF]"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand & Role */}
          <div>
            <a
              href="#"
              className="text-base font-bold tracking-tight text-[#FFFFFF] hover:text-[#4A9FE3] transition-colors"
            >
              {config.name.toUpperCase()}
            </a>
            <p className="mt-1 text-xs sm:text-sm text-[#DCEEFF]/80">
              {config.role}
            </p>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-[#DCEEFF]/90">
            <a
              href="#about"
              className="hover:text-[#FFFFFF] transition-colors"
            >
              About
            </a>
            <a
              href="#journey"
              className="hover:text-[#FFFFFF] transition-colors"
            >
              Journey
            </a>
            <a
              href="#impact"
              className="hover:text-[#FFFFFF] transition-colors"
            >
              Impact
            </a>
            <a
              href="#recognition"
              className="hover:text-[#FFFFFF] transition-colors"
            >
              Recognition
            </a>
            <a
              href="#gallery"
              className="hover:text-[#FFFFFF] transition-colors"
            >
              Moments
            </a>
            <a
              href={config.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-[#DCEEFF] hover:text-[#FFFFFF] transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-[#FFFFFF] hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-[#DCEEFF]/60">
          <p>© {new Date().getFullYear()} Amin Jan. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
