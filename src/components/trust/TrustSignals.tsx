import React from "react";
import { Container } from "../common/Container";
import { GraduationCap, Globe, Users, Compass, Layers } from "lucide-react";
import type { TrustSignal } from "../../types";

interface TrustSignalsProps {
  signals: TrustSignal[];
}

export const TrustSignals: React.FC<TrustSignalsProps> = ({ signals }) => {
  const getIconForSignal = (name: string) => {
    if (name.includes("SUSI")) return <GraduationCap className="h-6 w-6 text-[#1769AA]" />;
    if (name.includes("UNFPA")) return <Globe className="h-6 w-6 text-[#1769AA]" />;
    if (name.includes("Volunteers")) return <Users className="h-6 w-6 text-[#1769AA]" />;
    if (name.includes("YSALI")) return <Compass className="h-6 w-6 text-[#1769AA]" />;
    return <Layers className="h-6 w-6 text-[#1769AA]" />;
  };

  return (
    <section
      aria-label="Selected Programs and Affiliations"
      className="border-y border-[#D9E7F2] bg-[#FFFFFF] py-6 sm:py-8"
    >
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#D9E7F2]">
          {signals.slice(0, 5).map((signal, idx) => (
            <div
              key={signal.name}
              className={`group flex items-center gap-3.5 transition-colors duration-200 ${
                idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EDF6FF] text-[#1769AA] transition-transform group-hover:scale-105">
                {getIconForSignal(signal.name)}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-[#102A43] group-hover:text-[#0B3A63] transition-colors">
                  {signal.name}
                </span>
                <span className="text-[11px] font-medium leading-snug text-[#52677A] line-clamp-1">
                  {signal.fullName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
