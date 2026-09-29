import React from "react";
import { Container } from "../common/Container";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import type { SiteConfig } from "../../types";

interface HeroProps {
  config: SiteConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <section
      id="hero"
      aria-label="Introduction and Overview"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#F6FAFE] pt-8 sm:pt-12 pb-16 sm:pb-24"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left Text Column (6 cols on desktop) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            <HeroContent
              name={config.name}
              eyebrow={config.eyebrow}
              headlineMain={config.headlineMain}
              headlineEditorial={config.headlineEditorial}
              shortBio={config.shortBio}
              linkedinUrl={config.linkedin}
            />
          </div>

          {/* Right Visual Column (6 cols on desktop) */}
          <div className="lg:col-span-6 xl:col-span-6">
            <HeroVisual
              name={config.name}
              location={config.location}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
