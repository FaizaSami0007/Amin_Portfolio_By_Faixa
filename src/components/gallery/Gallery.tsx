import React, { useState } from "react";
import { Container } from "../common/Container";
import { Badge } from "../common/Badge";
import { Camera, MapPin, Calendar, ArrowRight } from "lucide-react";
import { portfolioImages } from "../../data/images";

export const Gallery: React.FC = () => {
  const [activeMomentId, setActiveMomentId] = useState<string>("hero-moment");

  const galleryItems = [
    {
      id: "hero-moment",
      title: "Youth Leadership Dialogue",
      location: "Peshawar, Pakistan",
      year: "2025",
      imageSrc: portfolioImages.hero.src,
      alt: "Amin Jan leading a youth dialogue session",
      caption: "Fostering inclusive leadership pathways and grassroots dialogue among university students.",
      category: "Youth Leadership",
    },
    {
      id: "pep-moment",
      title: "Peshawar Entrepreneurship Program (PEP)",
      location: "Peshawar, Pakistan",
      year: "2026",
      imageSrc: portfolioImages.pepWorkshop.src,
      fallbackText: "PEP Workshop Session",
      alt: "Amin Jan with leaders and participants at Peshawar Entrepreneurship Program (PEP) certificate ceremony",
      caption: "Interactive hands-on bootcamp mentoring 40+ student entrepreneurs on digital venture creation.",
      category: "Entrepreneurship",
    },
    {
      id: "susi-moment",
      title: "SUSI Leadership Fellowship",
      location: "Amherst, MA, USA",
      year: "2024",
      imageSrc: portfolioImages.susiExchange.src,
      fallbackText: "SUSI Cohort at UMass Amherst",
      alt: "Amin Jan during the Study of the U.S. Institutes (SUSI) leadership exchange at University of Massachusetts Amherst",
      caption: "Academic seminars on public policy, civic engagement, and leadership frameworks.",
      category: "International Exchange",
    },
    {
      id: "community-moment",
      title: "Community & Civic Action",
      location: "Khyber Pakhtunkhwa",
      year: "2025",
      imageSrc: portfolioImages.about.src,
      alt: "Amin Jan interacting with community organizers",
      caption: "Mobilizing volunteer networks for education equity and youth mentorship initiatives.",
      category: "Community Development",
    },
  ];

  const featuredItem =
    galleryItems.find((item) => item.id === activeMomentId) || galleryItems[0];
  const sideItems = galleryItems.filter((item) => item.id !== activeMomentId);

  return (
    <section
      id="gallery"
      aria-label="Moments and Photography Gallery"
      className="section-space scroll-mt-24 border-t border-[#082C4A] bg-[#0B3A63] text-[#FFFFFF]"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Badge variant="blue" dot={true}>
              Documentary Moments
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#FFFFFF] sm:text-4xl lg:text-[42px] leading-tight">
              People. Places.{" "}
              <span className="font-editorial font-normal italic text-[#DCEEFF]">
                Purpose.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#DCEEFF]/90">
              Authentic documentary moments from fellowship cohorts, university workshops, community development initiatives, and public engagement.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#DCEEFF]/80">
            <Camera className="h-4 w-4 text-[#4A9FE3]" />
            <span>Click any moment to feature</span>
          </div>
        </div>

        {/* Asymmetrical Curated Interactive Layout */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Main Large Featured Card (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <article
              key={featuredItem.id}
              className="group relative flex flex-1 flex-col overflow-hidden rounded-[24px] border border-white/20 bg-white/10 p-2.5 sm:p-3 shadow-md transition-all duration-300 hover:border-white/35"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-[#082C4A]">
                <img
                  src={featuredItem.imageSrc}
                  alt={featuredItem.alt}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-[#082C4A]/85 px-3 py-1 text-xs font-semibold text-[#DCEEFF] backdrop-blur-md border border-white/10">
                    {featuredItem.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between text-xs text-[#DCEEFF]/80">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#4A9FE3]" />
                    {featuredItem.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-semibold">
                    <Calendar className="h-3.5 w-3.5 text-[#4A9FE3]" />
                    {featuredItem.year}
                  </span>
                </div>
                <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF]">
                  {featuredItem.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#DCEEFF]/90">
                  {featuredItem.caption}
                </p>
              </div>
            </article>
          </div>

          {/* Right Stack of Interactive Cards (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {sideItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveMomentId(item.id)}
                className="group flex w-full text-left overflow-hidden rounded-[20px] border border-white/15 bg-white/10 p-2 transition-all duration-200 hover:border-[#4A9FE3] hover:bg-white/15 active:scale-[0.99] focus-visible:outline-2 cursor-pointer shadow-xs"
                aria-label={`View ${item.title} in main viewer`}
              >
                <div className="flex w-full flex-col sm:flex-row gap-3.5 p-2.5 items-center">
                  <div className="relative aspect-[4/3] w-full sm:w-36 shrink-0 overflow-hidden rounded-xl bg-[#082C4A]">
                    {item.imageSrc ? (
                      <img
                        src={item.imageSrc}
                        alt={item.alt}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center p-3 text-center bg-[#082C4A]/60">
                        <Camera className="h-5 w-5 text-[#4A9FE3]" />
                        <span className="mt-1 text-[11px] font-semibold text-[#DCEEFF]">
                          {item.fallbackText || item.title}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col justify-center min-w-0">
                    <div className="flex items-center justify-between text-[11px] text-[#DCEEFF]/70">
                      <span className="font-semibold text-[#4A9FE3]">{item.category}</span>
                      <span>{item.year}</span>
                    </div>
                    <h4 className="mt-1 text-sm sm:text-base font-bold text-[#FFFFFF] group-hover:text-[#DCEEFF] transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#DCEEFF]/80 line-clamp-2">
                      {item.caption}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-[#4A9FE3] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Click to view</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
