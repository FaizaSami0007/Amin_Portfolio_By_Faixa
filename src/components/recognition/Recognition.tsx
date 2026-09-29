import React, { useState } from "react";
import { Container } from "../common/Container";
import { Badge } from "../common/Badge";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import type { RecognitionItem, EducationItem } from "../../types";

interface RecognitionProps {
  recognitions: RecognitionItem[];
  education: EducationItem[];
}

export const Recognition: React.FC<RecognitionProps> = ({
  recognitions,
  education,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "International Programs",
    "Leadership Recognition",
    "Community Recognition",
    "Certifications",
  ] as const;

  const filteredRecognitions =
    selectedCategory === "All"
      ? recognitions
      : recognitions.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="recognition"
      aria-label="Recognition and Education"
      className="section-space scroll-mt-24 border-t border-[#D9E7F2] bg-[#FFFFFF]"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Badge variant="default" dot={true}>
              Awards &amp; Credentials
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#102A43] sm:text-4xl lg:text-[42px] leading-tight">
              Honors, fellowships, and{" "}
              <span className="font-editorial font-normal italic text-[#1769AA]">
                verified credentials.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#52677A]">
              Selected international fellowships, civic awards, advisory appointments, and verified certifications.
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
                    : "border border-[#D9E7F2] bg-[#F6FAFE] text-[#52677A] hover:bg-[#EDF6FF] hover:text-[#0B3A63]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Recognition Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredRecognitions.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-[20px] border border-[#D9E7F2] bg-[#FFFFFF] p-6 sm:p-7 shadow-xs transition-all duration-200 hover:border-[#4A9FE3] hover:bg-[#EDF6FF] hover:shadow-sm"
            >
              <div>
                {/* Header Row: Category & Year */}
                <div className="flex items-center justify-between border-b border-[#D9E7F2]/60 pb-3">
                  <span className="rounded-md border border-[#DCEEFF] bg-[#EDF6FF] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0B3A63]">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-[#52677A]">
                    {item.year}
                  </span>
                </div>

                {/* Title and Organization */}
                <div className="mt-4">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#102A43] group-hover:text-[#0B3A63] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#1769AA]">
                    {item.organization}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-[#52677A]">
                  {item.description}
                </p>
              </div>

              {/* Optional Credential Link */}
              {item.credentialUrl && (
                <div className="mt-5 pt-3 border-t border-[#D9E7F2]/60">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B3A63] transition-colors group-hover:text-[#1769AA]"
                  >
                    <span>{item.credentialLabel || "View Credential"}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#1769AA]" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Education Subsection */}
        <div className="mt-16 rounded-[24px] border border-[#D9E7F2] bg-[#F6FAFE] p-7 sm:p-10 shadow-xs">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0B3A63]">
                <GraduationCap className="h-4 w-4 text-[#1769AA]" />
                <span>Academic Foundation</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#102A43]">
                Academic Studies &amp; Education
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#52677A]">
                Education provides the structured research, analytical frameworks, and foundational discipline underpinning my community and leadership practice.
              </p>
            </div>

            {/* Education Items List */}
            <div className="lg:max-w-lg w-full space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-xl border border-[#D9E7F2] bg-[#FFFFFF] p-5 shadow-xs"
                >
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-base font-bold text-[#102A43]">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-semibold text-[#52677A]">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-[#0B3A63]">
                    {edu.institution}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#52677A]">
                    {edu.focus}
                  </p>
                  {edu.highlights && (
                    <ul className="mt-3 space-y-1 text-xs text-[#52677A]">
                      {edu.highlights.map((hl) => (
                        <li key={hl} className="flex items-start gap-1.5">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#1769AA]" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
