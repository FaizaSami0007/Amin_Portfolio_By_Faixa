import React from "react";
import { Container } from "../common/Container";
import { Badge } from "../common/Badge";
import { ArrowRight } from "lucide-react";
import type { CoreArea } from "../../types";

interface CoreAreasProps {
  areas: CoreArea[];
}

export const CoreAreas: React.FC<CoreAreasProps> = ({ areas }) => {
  return (
    <section
      id="core-areas"
      aria-label="Core Areas of Work and Practice"
      className="section-space scroll-mt-24 bg-[#F6FAFE] border-t border-[#D9E7F2]"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Badge variant="default" dot={true}>
              Areas of Practice
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#102A43] sm:text-4xl lg:text-[40px] leading-tight">
              Where I focus my time, curiosity, and{" "}
              <span className="font-editorial font-normal italic text-[#0B3A63]">
                community energy.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#52677A]">
            An interconnected portfolio of initiatives focused on equipping youth with the tools to lead, innovate, and contribute meaningfully.
          </p>
        </div>

        {/* 6 Core Area Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <article
              key={area.id}
              className="group flex flex-col justify-between rounded-[14px] border border-[#D9E7F2] bg-[#FFFFFF] p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:bg-[#EDF6FF] hover:border-[#4A9FE3] hover:shadow-sm"
            >
              <div>
                {/* Area Number / Pill */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1769AA]">
                    0{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D9E7F2] group-hover:bg-[#1769AA] transition-colors" />
                </div>

                {/* Card Title */}
                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#102A43] group-hover:text-[#0B3A63] transition-colors">
                  {area.title}
                </h3>

                {/* Card Description */}
                <p className="mt-3 text-sm leading-relaxed text-[#52677A]">
                  {area.description}
                </p>

                {/* Focus Highlights Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {area.focusHighlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-md border border-[#D9E7F2] bg-[#FFFFFF] group-hover:bg-[#FFFFFF]/90 px-2.5 py-1 text-[11px] font-medium text-[#52677A]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Context Link */}
              {area.linkHref && (
                <div className="mt-6 pt-4 border-t border-[#D9E7F2]/60">
                  <a
                    href={area.linkHref}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B3A63] transition-colors group-hover:text-[#1769AA]"
                  >
                    <span>{area.linkLabel || "Explore focus area"}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
