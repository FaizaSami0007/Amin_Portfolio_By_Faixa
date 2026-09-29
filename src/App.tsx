import React from "react";
import { siteConfig } from "./data/site";
import { aboutData } from "./data/about";
import { coreAreasData } from "./data/coreAreas";
import { experiencesData } from "./data/experience";
import { caseStudiesData } from "./data/projects";
import { recognitionsData } from "./data/recognition";
import { educationData } from "./data/education";
import { insightsData } from "./data/insights";
import { SkipLink } from "./components/common/SkipLink";
import { Navbar } from "./components/navigation/Navbar";
import { Hero } from "./components/hero/Hero";
import { TrustSignals } from "./components/trust/TrustSignals";
import { AtAGlance } from "./components/glance/AtAGlance";
import { About } from "./components/about/About";
import { CoreAreas } from "./components/areas/CoreAreas";
import { Journey } from "./components/journey/Journey";
import { Impact } from "./components/impact/Impact";
import { Recognition } from "./components/recognition/Recognition";
import { Gallery } from "./components/gallery/Gallery";
import { Insights } from "./components/insights/Insights";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/layout/Footer";

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#102A43]">
      {/* Accessible Skip to Content Link */}
      <SkipLink targetId="main-content" />

      {/* Global Sticky Navigation */}
      <Navbar navItems={siteConfig.navItems} socials={siteConfig.socials} />

      {/* Main Content Landmark */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* Phase 01: Hero Introduction */}
        <Hero config={siteConfig} />

        {/* Phase 02: Selected Programs / Trust Signals */}
        <TrustSignals signals={siteConfig.trustSignals} />

        {/* Phase 02: At a Glance Scale */}
        <AtAGlance metrics={siteConfig.metrics} />

        {/* Phase 03: About Section */}
        <About data={aboutData} />

        {/* Phase 02: Core Areas of Practice */}
        <CoreAreas areas={coreAreasData} />

        {/* Phase 03: Chronological Journey Timeline */}
        <Journey experiences={experiencesData} />

        {/* Phase 04: Impact & Deep-Dive Case Studies */}
        <Impact caseStudies={caseStudiesData} />

        {/* Phase 05: Recognition, Certifications & Education */}
        <Recognition
          recognitions={recognitionsData}
          education={educationData}
        />

        {/* Phase 05: Curated Editorial Documentary Gallery */}
        <Gallery />

        {/* Phase 06: Insights & Practitioner Reflections */}
        <Insights insights={insightsData} />

        {/* Phase 07: Contact CTA & Form */}
        <Contact config={siteConfig} />
      </main>

      {/* Global Minimal Editorial Footer */}
      <Footer config={siteConfig} />
    </div>
  );
}

export default App;
