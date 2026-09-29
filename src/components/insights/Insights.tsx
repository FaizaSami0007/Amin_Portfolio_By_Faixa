import React from "react";
import { Container } from "../common/Container";
import { Badge } from "../common/Badge";
import { Clock } from "lucide-react";
import type { InsightItem } from "../../types";

interface InsightsProps {
  insights: InsightItem[];
}

export const Insights: React.FC<InsightsProps> = ({ insights }) => {
  return (
    <section
      id="insights"
      aria-label="Editorial Insights and Reflections"
      className="section-space scroll-mt-24 border-t border-[#D9E7F2] bg-[#F6FAFE]"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Badge variant="default" dot={true}>
              Editorial &amp; Insights
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#102A43] sm:text-4xl lg:text-[42px] leading-tight">
              Reflections from the{" "}
              <span className="font-editorial font-normal italic text-[#1769AA]">
                field and journey.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#52677A]">
            Thought-pieces and practitioner notes exploring leadership methodologies, youth enterprise design, and civic engagement.
          </p>
        </div>

        {/* Insights 3-Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-[22px] border border-[#D9E7F2] bg-[#FFFFFF] p-7 shadow-xs transition-all duration-200 hover:bg-[#EDF6FF] hover:border-[#4A9FE3] hover:shadow-sm"
            >
              <div>
                {/* Meta Row: Category & Read Time */}
                <div className="flex items-center justify-between border-b border-[#D9E7F2]/60 pb-3">
                  <span className="rounded-md border border-[#DCEEFF] bg-[#EDF6FF] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0B3A63]">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#52677A]">
                    <Clock className="h-3 w-3 text-[#1769AA]" />
                    {item.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="mt-4 text-lg sm:text-xl font-bold tracking-tight text-[#102A43] group-hover:text-[#0B3A63] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-sm leading-relaxed text-[#52677A]">
                  {item.excerpt}
                </p>

                {/* Core Takeaway Callout */}
                <div className="mt-5 rounded-xl border border-[#D9E7F2] bg-[#F6FAFE] p-3.5 text-xs text-[#102A43]">
                  <strong className="block font-bold text-[#0B3A63] uppercase text-[10px] tracking-wider">
                    Core Reflection
                  </strong>
                  <p className="mt-1 font-medium italic text-[#102A43]/90">
                    &ldquo;{item.keyTakeaway}&rdquo;
                  </p>
                </div>
              </div>

              {/* Card Footer: Status & Date */}
              <div className="mt-6 pt-3 border-t border-[#D9E7F2]/60 flex items-center justify-between text-xs text-[#52677A]">
                <span>{item.status}</span>
                <span>{item.date}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
