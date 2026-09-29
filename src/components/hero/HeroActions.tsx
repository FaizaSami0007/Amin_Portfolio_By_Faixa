import React from "react";
import { ArrowRight, Download, Linkedin, Twitter, Instagram } from "lucide-react";

interface HeroActionsProps {
  linkedinUrl: string;
}

export const HeroActions: React.FC<HeroActionsProps> = ({ linkedinUrl }) => {
  return (
    <div className="mt-8 sm:mt-10 flex flex-col gap-6">
      {/* Primary & Secondary Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
        <a
          href="#journey"
          className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B3A63] px-5 py-2.5 sm:px-5.5 sm:py-3 text-xs sm:text-sm font-semibold text-[#FFFFFF] shadow-xs transition-all duration-200 hover:bg-[#082C4A] active:scale-[0.99] focus-visible:outline-2"
        >
          <span>Explore My Journey</span>
          <ArrowRight className="h-3.5 w-3.5 text-[#DCEEFF] transition-transform duration-200 group-hover:translate-x-1" />
        </a>

        <a
          href="/documents/Amin_Jan_CV.pdf"
          download="Amin_Jan_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[#D9E7F2] bg-[#FFFFFF] px-5 py-2.5 sm:px-5.5 sm:py-3 text-xs sm:text-sm font-semibold text-[#102A43] shadow-xs transition-all duration-200 hover:bg-[#EDF6FF] hover:border-[#4A9FE3] active:scale-[0.99] focus-visible:outline-2"
          aria-label="Download Amin Jan's CV (PDF)"
        >
          <span>Download CV</span>
          <Download className="h-3.5 w-3.5 text-[#52677A] transition-transform duration-200 group-hover:translate-y-0.5" />
        </a>
      </div>

      {/* Subtle Social Media Channel Icons */}
      <div className="flex items-center gap-4 text-[#102A43]">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="p-1.5 rounded-md text-[#102A43] transition-colors hover:text-[#1769AA] focus-visible:outline-2"
          aria-label="Amin Jan on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href="https://x.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="p-1.5 rounded-md text-[#102A43] transition-colors hover:text-[#1769AA] focus-visible:outline-2"
          aria-label="Amin Jan on X"
        >
          <Twitter className="h-4 w-4" />
        </a>
        <a
          href="https://www.instagram.com/iamaminjan?stkn=YWhkNjNlajZjbjZ4"
          target="_blank"
          rel="noreferrer noopener"
          className="p-1.5 rounded-md text-[#102A43] transition-colors hover:text-[#1769AA] focus-visible:outline-2"
          aria-label="Amin Jan on Instagram"
        >
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};
