import React from "react";
import { Quote } from "lucide-react";

interface HeroVisualProps {
  imageSrc?: string;
  name: string;
  location: string;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({
  imageSrc = "/images/hero/amin-jan-hero.png",
  name,
  location,
}) => {
  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none flex justify-center lg:justify-end">
      {/* Background Soft Atmospheric Glow Shape */}
      <div className="relative w-full">
        {/* Main Photo Frame Container */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[#D9E7F2] bg-[#FFFFFF] p-2.5 sm:p-3 shadow-[0_8px_32px_rgba(11,58,99,0.06)]">
          <div className="relative aspect-[4/3.4] sm:aspect-[4/3.3] w-full overflow-hidden rounded-[18px] sm:rounded-[24px] bg-[#EDF6FF]">
            <img
              src={imageSrc}
              alt={`Professional portrait of ${name} at the United States Institute of Peace`}
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
              loading="eager"
            />
          </div>
        </div>

        {/* Floating Verified Quote Card (Bottom-Right) */}
        <div className="absolute -bottom-5 -right-2 sm:-bottom-7 sm:-right-4 max-w-[230px] sm:max-w-[260px] rounded-xl border border-[#D9E7F2] bg-[#FFFFFF]/95 p-3.5 sm:p-4 shadow-[0_10px_24px_rgba(11,58,99,0.07)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5">
          <div className="flex items-center gap-1.5 text-[#1769AA]">
            <Quote className="h-3.5 w-3.5 fill-[#1769AA]/20 rotate-180" />
          </div>
          <p className="mt-1.5 text-xs font-medium leading-snug text-[#102A43]">
            &ldquo;I believe in the power of young people to create positive change.&rdquo;
          </p>
          <span className="mt-1.5 block text-[10.5px] font-bold text-[#52677A]">
            — Amin Jan
          </span>
        </div>

        {/* Subtle Top-Right Editorial Annotation */}
        <div className="hidden sm:block absolute -top-3 -left-4 rounded-lg border border-[#D9E7F2] bg-[#FFFFFF]/90 px-3 py-1.5 shadow-xs backdrop-blur-xs">
          <p className="font-editorial italic text-[11px] text-[#0B3A63]">
            People • Education • Communities
          </p>
        </div>
      </div>
    </div>
  );
};
