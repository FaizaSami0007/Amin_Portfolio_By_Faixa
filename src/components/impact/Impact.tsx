import React, { useState } from "react";
import { Container } from "../common/Container";
import { Badge } from "../common/Badge";
import {
  Sparkles,
  Users,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import type { CaseStudyItem } from "../../types";

interface ImpactProps {
  caseStudies: CaseStudyItem[];
}

export const Impact: React.FC<ImpactProps> = ({ caseStudies }) => {
  const [activeStudyId, setActiveStudyId] = useState<string>(
    caseStudies[0]?.id || ""
  );

  const activeStudy =
    caseStudies.find((c) => c.id === activeStudyId) || caseStudies[0];

  return (
    <section
      id="impact"
      aria-label="Impact and Case Studies"
      className="section-space scroll-mt-24 border-t border-[#D9E7F2] bg-[#FFFFFF]"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Badge variant="default" dot={true}>
              Evidence &amp; Case Studies
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#102A43] sm:text-4xl lg:text-[42px] leading-tight">
              What the work{" "}
              <span className="font-editorial font-normal italic text-[#1769AA]">
                actually involved.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#52677A]">
              Detailed breakdowns of major initiatives—answering why the program existed, what was delivered, the scale of participation, and key human reflections.
            </p>
          </div>

          {/* Quick Select Buttons */}
          <div className="flex flex-wrap gap-2">
            {caseStudies.map((study) => (
              <button
                key={study.id}
                type="button"
                onClick={() => setActiveStudyId(study.id)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeStudyId === study.id
                    ? "bg-[#0B3A63] text-[#FFFFFF] shadow-xs"
                    : "border border-[#D9E7F2] bg-[#F6FAFE] text-[#52677A] hover:bg-[#EDF6FF] hover:text-[#0B3A63]"
                }`}
              >
                {study.isFlagship && (
                  <Sparkles className="h-3 w-3 text-[#4A9FE3]" />
                )}
                <span>{study.title.split("(")[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Study Detail Card */}
        {activeStudy && (
          <div className="mt-12 rounded-[24px] sm:rounded-[28px] border border-[#082C4A] bg-[#0B3A63] text-[#FFFFFF] p-6 sm:p-10 shadow-md transition-all duration-300">
            {/* Header / Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#DCEEFF]">
                  {activeStudy.category}
                </span>
                {activeStudy.isFlagship && (
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#DCEEFF] px-3 py-1 text-xs font-bold text-[#0B3A63]">
                    <Sparkles className="h-3.5 w-3.5 text-[#1769AA]" />
                    Flagship Initiative
                  </span>
                )}
              </div>

              <div className="text-xs font-semibold text-[#DCEEFF]">
                <span>{activeStudy.year}</span>
                <span className="mx-2">•</span>
                <span>{activeStudy.organization}</span>
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="mt-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FFFFFF]">
                {activeStudy.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base font-semibold text-[#DCEEFF]">
                Role: {activeStudy.role}
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#FFFFFF]/90">
                {activeStudy.tagline}
              </p>
            </div>

            {/* Grid Layout of Deep-Dive Sections */}
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Left Column (7 Cols) - Context, Challenge & Activities */}
              <div className="lg:col-span-7 space-y-8">
                {/* Context & Challenge */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#DCEEFF]">
                    01 • Context &amp; Challenge
                  </h4>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-6 space-y-3.5">
                    <p className="text-sm leading-relaxed text-[#DCEEFF]/90">
                      <strong className="text-[#FFFFFF] font-semibold">Context:</strong>{" "}
                      {activeStudy.context}
                    </p>
                    <p className="text-sm leading-relaxed text-[#DCEEFF]/90">
                      <strong className="text-[#FFFFFF] font-semibold">Challenge:</strong>{" "}
                      {activeStudy.challenge}
                    </p>
                  </div>
                </div>

                {/* My Role & Activities */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#DCEEFF]">
                    02 • My Role &amp; Core Activities
                  </h4>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-6 space-y-4">
                    <p className="text-sm leading-relaxed text-[#DCEEFF]/90">
                      {activeStudy.myRole}
                    </p>
                    <ul className="space-y-2 border-t border-white/15 pt-3 text-sm text-[#DCEEFF]/90">
                      {activeStudy.activities.map((act) => (
                        <li key={act} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4A9FE3]" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column (5 Cols) - Scale, Outcome & Personal Reflection */}
              <div className="lg:col-span-5 space-y-8">
                {/* Scale & Verified Outcome */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#DCEEFF]">
                    03 • Scale &amp; Outcome
                  </h4>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 shrink-0 text-[#4A9FE3] mt-0.5" />
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#DCEEFF]/80">
                          Participant Scale
                        </span>
                        <p className="mt-1 text-sm font-semibold text-[#FFFFFF]">
                          {activeStudy.scale}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-white/15 pt-3 flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#4A9FE3] mt-0.5" />
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#DCEEFF]/80">
                          Verified Outcome
                        </span>
                        <p className="mt-1 text-sm leading-relaxed text-[#DCEEFF]/90">
                          {activeStudy.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Reflection (Human Dimension) */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#DCEEFF]">
                    04 • Personal Reflection
                  </h4>
                  <div className="rounded-2xl border border-white/15 bg-white/15 p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DCEEFF]">
                      <BookOpen className="h-4 w-4 text-[#4A9FE3]" />
                      <span>What I Learned</span>
                    </div>
                    <blockquote className="mt-3 text-sm leading-relaxed font-medium italic text-[#FFFFFF]">
                      &ldquo;{activeStudy.reflection}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
