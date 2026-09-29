import React, { useState } from "react";
import { Container } from "../common/Container";
import { Badge } from "../common/Badge";
import { ArrowRight, Pause, Play } from "lucide-react";
import type { CoreArea } from "../../types";

interface CoreAreasProps {
  areas: CoreArea[];
}

export const CoreAreas: React.FC<CoreAreasProps> = ({ areas }) => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the 6 items for a seamless continuous looping track
  const duplicatedAreas = [...areas, ...areas];

  return (
    <section
      id="core-areas"
      aria-label="Core Areas of Work and Practice"
      className="section-space scroll-mt-24 border-t border-[#D9E7F2] bg-[#F6FAFE] overflow-hidden"
    >
      {/* Editorial Header Section */}
      <Container className="mb-10 sm:mb-14">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12 items-end">
          {/* Left Column (~60% ~7 cols) */}
          <div className="lg:col-span-7">
            <Badge variant="default" dot={true}>
              Areas of Practice
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#102A43] sm:text-4xl lg:text-[42px] leading-tight">
              Where I focus my time, curiosity and{" "}
              <span className="font-editorial font-normal italic text-[#1769AA]">
                community energy.
              </span>
            </h2>
          </div>

          {/* Right Column (~40% ~5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <p className="text-sm sm:text-base leading-relaxed text-[#52677A]">
              An interconnected portfolio of initiatives focused on equipping youth with the tools to lead, innovate, and contribute meaningfully.
            </p>

            {/* Subtle Interactive Controls / Status */}
            <div className="flex items-center justify-between sm:justify-end gap-3 pt-1">
              <span className="text-[11px] font-medium text-[#52677A] hidden sm:inline-block">
                Continuous rail · Hover to pause
              </span>
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#D9E7F2] bg-[#FFFFFF] px-3 py-1 text-xs font-semibold text-[#102A43] transition-colors hover:bg-[#EDF6FF] hover:border-[#4A9FE3] focus-visible:outline-2 cursor-pointer"
                aria-label={isPaused ? "Resume continuous movement" : "Pause continuous movement"}
              >
                {isPaused ? (
                  <>
                    <Play className="h-3 w-3 text-[#1769AA]" fill="currentColor" />
                    <span>Play Rail</span>
                  </>
                ) : (
                  <>
                    <Pause className="h-3 w-3 text-[#52677A]" />
                    <span>Pause Rail</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Horizontal Moving Rail Viewport */}
      <div
        className="rail-viewport relative w-full overflow-x-auto lg:overflow-hidden pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Subtle Left & Right Edge Vignettes on Desktop */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden lg:block w-24 bg-gradient-to-r from-[#F6FAFE] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden lg:block w-24 bg-gradient-to-l from-[#F6FAFE] to-transparent" />

        {/* Moving Track */}
        <div
          className={`flex items-stretch gap-5 sm:gap-6 px-5 sm:px-8 w-max ${
            isPaused ? "" : "animate-practice-rail"
          }`}
          style={{
            animationPlayState: isPaused ? "paused" : undefined,
          }}
        >
          {duplicatedAreas.map((area, index) => {
            const originalIndex = index % areas.length;
            return (
              <article
                key={`${area.id}-${index}`}
                className="group relative flex flex-col justify-between w-[84vw] max-w-[340px] sm:w-[350px] lg:w-[370px] min-h-[360px] sm:min-h-[390px] shrink-0 rounded-[16px] border border-[#D9E7F2] bg-[#FFFFFF] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#4A9FE3] hover:shadow-[0_8px_30px_rgba(11,58,99,0.04)]"
              >
                {/* Top: Number, Rule, Title & Description */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#1769AA]">
                      0{originalIndex + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D9E7F2] transition-colors group-hover:bg-[#1769AA]" />
                  </div>

                  {/* Subtle Thin Rule */}
                  <div className="my-4 h-px w-full bg-[#D9E7F2] transition-colors group-hover:bg-[#4A9FE3]/50" />

                  {/* Title */}
                  <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#102A43] group-hover:text-[#0B3A63] transition-colors leading-snug">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 text-sm sm:text-[15px] leading-relaxed text-[#52677A]">
                    {area.description}
                  </p>
                </div>

                {/* Bottom: Editorial CTA Link */}
                <div className="mt-6 pt-4 border-t border-[#D9E7F2]/60 flex items-center justify-between">
                  <a
                    href={area.linkHref}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B3A63] transition-colors group-hover:text-[#1769AA] focus-visible:outline-2"
                    aria-label={`Explore ${area.title}`}
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </a>
                  <span className="text-[11px] font-medium text-[#52677A]/70">
                    0{originalIndex + 1} / 06
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

