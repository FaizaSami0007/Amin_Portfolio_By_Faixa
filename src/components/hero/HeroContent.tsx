import React from "react";
import { Badge } from "../common/Badge";
import { HeroActions } from "./HeroActions";

interface HeroContentProps {
  name: string;
  eyebrow: string;
  headlineMain: string;
  headlineEditorial: string;
  shortBio: string;
  linkedinUrl: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  name,
  eyebrow = "YOUTH LEADER • EDUCATOR • COMMUNITY BUILDER",
  headlineMain = "Creating opportunities",
  headlineEditorial = "where young people can learn, lead and contribute.",
  shortBio,
  linkedinUrl,
}) => {
  return (
    <div className="flex flex-col justify-center">
      {/* Eyebrow / Professional Tag */}
      <div className="mb-3.5 sm:mb-4">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#1769AA]">
          {eyebrow}
        </span>
      </div>

      {/* Main Editorial Headline */}
      <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-bold tracking-[-0.03em] text-[#102A43] leading-[1.12]">
        Creating <br className="hidden sm:inline" />
        opportunities <br />
        <span className="font-editorial font-normal italic text-[#1769AA] block mt-1 sm:mt-1.5">
          where young people can learn, lead and contribute.
        </span>
      </h1>

      {/* Supporting Description */}
      <p className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-[#52677A]">
        Amin Jan is a youth leader, educator and community development professional working at the intersection of education, entrepreneurship, climate action and international engagement.
      </p>

      {/* CTA Buttons & Social Icons */}
      <HeroActions linkedinUrl={linkedinUrl} />
    </div>
  );
};
