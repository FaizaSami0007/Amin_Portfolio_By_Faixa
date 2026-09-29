import React from "react";
import { Container } from "../common/Container";
import { Badge } from "../common/Badge";
import { Camera, MapPin, Calendar } from "lucide-react";
import { portfolioImages } from "../../data/images";

export const Gallery: React.FC = () => {
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
      isLarge: true,
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
      isLarge: false,
    },
    {
      id: "susi-moment",
      title: "SUSI Leadership Fellowship",
      location: "Amherst, MA, USA",
      year: "2024",
      imageSrc: portfolioImages.susiExchange.src,
      fallbackText: "SUSI Cohort at UMass Amherst",
      alt: "Study of the U.S. Institutes exchange fellowship at UMass Amherst",
      caption: "Academic seminars on public policy, civic engagement, and leadership frameworks.",
      category: "International Exchange",
      isLarge: false,
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
      isLarge: false,
    },
  ];

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
            <span>Documentary Photography</span>
          </div>
        </div>

        {/* Asymmetrical Curated Editorial Layout */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Main Large Feature Card (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <article className="group relative flex flex-1 flex-col overflow-hidden rounded-[24px] border border-white/15 bg-white/10 p-2 sm:p-3 transition-all duration-300 hover:border-white/30 hover:bg-white/15">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-[#082C4A]">
                <img
                  src={galleryItems[0].imageSrc}
                  alt={galleryItems[0].alt}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-[#082C4A]/80 px-3 py-1 text-xs font-semibold text-[#DCEEFF] backdrop-blur-md">
                    {galleryItems[0].category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs text-[#DCEEFF]/80">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[#4A9FE3]" />
                    {galleryItems[0].location}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold">
                    <Calendar className="h-3.5 w-3.5 text-[#4A9FE3]" />
                    {galleryItems[0].year}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-[#FFFFFF]">
                  {galleryItems[0].title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#DCEEFF]/85">
                  {galleryItems[0].caption}
                </p>
              </div>
            </article>
          </div>

          {/* Right Stack (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {galleryItems.slice(1).map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-white/15 bg-white/10 p-2 transition-all duration-300 hover:border-white/30 hover:bg-white/15"
              >
                <div className="flex flex-col sm:flex-row gap-4 p-3 items-center">
                  <div className="relative aspect-[4/3] w-full sm:w-36 shrink-0 overflow-hidden rounded-xl bg-[#082C4A]">
                    {item.imageSrc && item.id !== "susi-moment" ? (
                      <img
                        src={item.imageSrc}
                        alt={item.alt}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
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

                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex items-center justify-between text-[11px] text-[#DCEEFF]/70">
                      <span>{item.category}</span>
                      <span>{item.year}</span>
                    </div>
                    <h4 className="mt-1 text-base font-bold text-[#FFFFFF]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#DCEEFF]/80 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
