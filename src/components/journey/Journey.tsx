import React, { useState } from "react";
import { Container } from "../common/Container";
import { Badge } from "../common/Badge";
import { MapPin, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import type { ExperienceItem } from "../../types";

interface JourneyProps {
  experiences: ExperienceItem[];
}

export const Journey: React.FC<JourneyProps> = ({ experiences }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Coordination",
    "Leadership",
    "International",
    "Community",
    "Volunteering",
  ] as const;

  const filteredExperiences =
    selectedCategory === "All"
      ? experiences
      : experiences.filter((exp) => exp.category === selectedCategory);

  // Group experiences by Year for clear temporal hierarchy
  const years = Array.from(new Set(filteredExperiences.map((e) => e.year))).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <section
      id="journey"
      aria-label="Chronological Professional Journey"
      className="section-space scroll-mt-24 border-t border-[#D9E7F2] bg-[#F6FAFE]"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Badge variant="default" dot={true}>
              Chronological Journey
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#102A43] sm:text-4xl lg:text-[42px] leading-tight">
              From participation to{" "}
              <span className="font-editorial font-normal italic text-[#0B3A63]">
                responsibility.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#52677A]">
              A chronological view tracing early volunteer involvement, selective international fellowships, and hands-on program coordination.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0B3A63] text-[#FFFFFF] shadow-xs"
                    : "border border-[#D9E7F2] bg-[#FFFFFF] text-[#52677A] hover:bg-[#EDF6FF] hover:text-[#0B3A63]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Chronological Timeline */}
        <div className="mt-14 sm:mt-16 space-y-16">
          {years.map((year) => {
            const yearItems = filteredExperiences.filter((item) => item.year === year);
            return (
              <div key={year} className="relative">
                {/* Year Header Indicator */}
                <div className="mb-8 flex items-center gap-4">
                  <span className="font-editorial text-3xl sm:text-4xl font-bold text-[#0B3A63]">
                    {year}
                  </span>
                  <div className="h-px flex-1 bg-[#D9E7F2]" />
                </div>

                {/* Vertical Timeline Track */}
                <div className="relative border-l-2 border-[#0B3A63]/30 pl-6 sm:pl-10 space-y-8">
                  {yearItems.map((item) => (
                    <article
                      key={item.id}
                      className={`group relative rounded-[20px] border p-6 sm:p-8 transition-all duration-200 ${
                        item.featured
                          ? "border-[#4A9FE3] bg-[#FFFFFF] shadow-xs"
                          : "border-[#D9E7F2] bg-[#FFFFFF] hover:border-[#4A9FE3] hover:shadow-xs"
                      }`}
                    >
                      {/* Timeline Node on Left Line */}
                      <span
                        className={`absolute -left-[31px] sm:-left-[47px] top-8 h-3.5 w-3.5 rounded-full border-2 border-[#F6FAFE] transition-colors ${
                          item.featured
                            ? "bg-[#0B3A63] ring-4 ring-[#DCEEFF]"
                            : "bg-[#1769AA] group-hover:scale-125"
                        }`}
                        aria-hidden="true"
                      />

                      {/* Header Row: Category, Period, Location */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#D9E7F2]/60 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="rounded-md border border-[#DCEEFF] bg-[#EDF6FF] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0B3A63]">
                            {item.category}
                          </span>
                          {item.featured && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1769AA]">
                              <Sparkles className="h-3 w-3 text-[#4A9FE3]" />
                              Key Milestone
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-4 text-xs font-medium text-[#52677A]">
                          {item.period && (
                            <span className="inline-flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5 text-[#1769AA]" />
                              {item.period}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-[#1769AA]" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Role and Organization */}
                      <div className="mt-4">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#102A43]">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-base font-semibold text-[#0B3A63]">
                          {item.organization}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-[#52677A]">
                        {item.description}
                      </p>

                      {/* Activities / Responsibilities */}
                      {item.activities.length > 0 && (
                        <ul className="mt-4 space-y-1.5 border-t border-[#D9E7F2]/50 pt-3 text-xs sm:text-sm text-[#52677A]">
                          {item.activities.map((act) => (
                            <li key={act} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1769AA]" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Verified Outcome Callout */}
                      {item.outcome && (
                        <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#EDF6FF] p-3 text-xs font-semibold text-[#102A43] border border-[#D9E7F2]">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1769AA]" />
                          <span>Outcome: {item.outcome}</span>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
