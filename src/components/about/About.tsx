import React from "react";
import { Container } from "../common/Container";
import { Badge } from "../common/Badge";
import type { AboutData } from "../../types";

interface AboutProps {
  data: AboutData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section
      id="about"
      aria-label="About Amin Jan"
      className="section-space scroll-mt-24 border-t border-[#D9E7F2] bg-[#FFFFFF]"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left Column (5 Cols) - Sticky Editorial Overview & Core Principles */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="lg:sticky lg:top-28">
              <Badge variant="default" dot={true}>
                {data.eyebrow}
              </Badge>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#102A43] sm:text-4xl lg:text-[42px] leading-[1.12]">
                {data.headline}{" "}
                <span className="font-editorial font-normal italic text-[#0B3A63]">
                  {data.headlineEditorial}
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#52677A]">
                {data.summary}
              </p>

              {/* Core Pillars Cards */}
              <div className="mt-8 sm:mt-10 space-y-3.5">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B3A63]">
                  Core Principles
                </span>
                {data.corePillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-[#D9E7F2] bg-[#F6FAFE] p-4 transition-colors duration-200 hover:bg-[#EDF6FF]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0B3A63] text-[10px] font-bold text-[#FFFFFF]">
                        0{idx + 1}
                      </span>
                      <h3 className="text-sm font-bold text-[#102A43]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-xs leading-normal text-[#52677A]">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Authentic Candid Editorial Image Frame */}
              <div className="mt-8 overflow-hidden rounded-[20px] border border-[#D9E7F2] bg-[#F6FAFE] p-2 shadow-xs">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[14px] bg-[#EDF6FF]">
                  <img
                    src="/images/about/amin-jan-about.png"
                    alt="Amin Jan receiving recognition for youth leadership and community service"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <p className="px-3 py-2 text-[11px] font-medium text-[#52677A]">
                  Active across youth leadership, mentorship &amp; community capacity building.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols) - The 5 Human Narrative Chapters */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="border-b border-[#D9E7F2] pb-3">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#52677A]">
                Human Story &amp; Path
              </span>
            </div>

            <div className="space-y-6">
              {data.chapters.map((chapter, index) => (
                <article
                  key={chapter.id}
                  className="group relative rounded-[20px] border border-[#D9E7F2] bg-[#FFFFFF] p-6 sm:p-8 transition-all duration-200 hover:border-[#4A9FE3] hover:bg-[#F6FAFE] hover:shadow-xs"
                >
                  <div className="flex items-baseline justify-between border-b border-[#D9E7F2]/60 pb-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1769AA]">
                        Chapter 0{index + 1}
                      </span>
                      <h3 className="mt-1 text-xl font-bold tracking-tight text-[#102A43]">
                        {chapter.title}
                      </h3>
                    </div>
                    {chapter.subtitle && (
                      <span className="text-xs font-medium text-[#52677A] hidden sm:inline-block">
                        {chapter.subtitle}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#52677A]">
                    {chapter.content}
                  </p>

                  {chapter.highlight && (
                    <blockquote className="mt-4 border-l-2 border-[#1769AA] bg-[#EDF6FF] py-2 px-3.5 rounded-r-lg text-xs sm:text-sm font-medium italic text-[#102A43]">
                      &ldquo;{chapter.highlight}&rdquo;
                    </blockquote>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
