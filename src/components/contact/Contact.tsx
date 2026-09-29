import React from "react";
import { Container } from "../common/Container";
import { ContactForm } from "./ContactForm";
import { ArrowUpRight, MapPin, MessageSquare } from "lucide-react";
import type { SiteConfig } from "../../types";

interface ContactProps {
  config: SiteConfig;
}

export const Contact: React.FC<ContactProps> = ({ config }) => {
  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration"
      className="section-space scroll-mt-24 bg-[#0B3A63] text-[#FFFFFF]"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column (5 Cols) - Editorial Statement & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#DCEEFF]">
                <MessageSquare className="h-3.5 w-3.5 text-[#4A9FE3]" />
                Connect &amp; Collaborate
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#FFFFFF] leading-tight">
                Let&apos;s connect around{" "}
                <span className="font-editorial font-normal italic text-[#DCEEFF]">
                  meaningful work.
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#FFFFFF]/85">
                For youth initiatives, entrepreneurship programs, university workshops, speaking opportunities, or collaborative partnerships.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3.5">
              {/* LinkedIn Direct */}
              <a
                href={config.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 p-4 transition-all duration-200 hover:bg-white/15 hover:border-white/25"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white group-hover:bg-[#082C4A] transition-colors">
                    <span className="text-xs font-bold text-[#DCEEFF]">in</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#DCEEFF]/80">
                      LinkedIn Network
                    </span>
                    <span className="text-sm font-semibold text-[#FFFFFF]">
                      Connect with Amin Jan
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#DCEEFF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Verified Location */}
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <MapPin className="h-4 w-4 text-[#4A9FE3]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#DCEEFF]/80">
                    Location Base
                  </span>
                  <span className="text-sm font-semibold text-[#FFFFFF]">
                    {config.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols) - Accessible Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};
