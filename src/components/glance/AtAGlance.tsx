import React from "react";
import { Container } from "../common/Container";
import { Badge } from "../common/Badge";
import type { MetricItem } from "../../types";

interface AtAGlanceProps {
  metrics: MetricItem[];
}

export const AtAGlance: React.FC<AtAGlanceProps> = ({ metrics }) => {
  return (
    <section
      id="at-a-glance"
      aria-label="At a Glance - Key Verified Metrics"
      className="section-space relative bg-[#FFFFFF]"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center">
          <Badge variant="default" dot={true}>
            At a Glance
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#102A43] sm:text-4xl lg:text-[40px] leading-tight">
            Grounded in consistent{" "}
            <span className="font-editorial font-normal italic text-[#1769AA]">
              community participation.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52677A] leading-relaxed">
            Every metric represents tangible engagement—from selective leadership cohorts to direct student mentoring and workshop delivery.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => (
            <article
              key={item.label}
              className="group flex flex-col justify-between rounded-[20px] border border-[#D9E7F2] bg-[#FFFFFF] p-6 sm:p-7 shadow-xs transition-all duration-200 hover:bg-[#EDF6FF] hover:border-[#4A9FE3] hover:shadow-sm"
            >
              <div>
                {/* Metric Value */}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0B3A63] transition-colors">
                    {item.value}
                  </span>
                </div>

                {/* Metric Label */}
                <h3 className="mt-3 text-base font-bold tracking-tight text-[#102A43]">
                  {item.label}
                </h3>
              </div>

              {/* Context Description */}
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#52677A]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
