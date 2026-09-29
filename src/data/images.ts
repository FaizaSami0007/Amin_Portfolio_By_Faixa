export interface PortfolioImage {
  src: string;
  alt: string;
  caption?: string;
  context: string;
  year?: string;
  section: "hero" | "about" | "pep" | "journey" | "international" | "youth" | "climate" | "gallery";
  status: "verified" | "pending_client_supply";
}

export const portfolioImages: Record<string, PortfolioImage> = {
  hero: {
    src: "/images/hero/amin-jan-hero.png",
    alt: "Amin Jan — Professional portrait at the United States Institute of Peace",
    caption: "Amin Jan — Youth Leader & Educator",
    context: "Hero introduction portrait at USIP",
    year: "2026",
    section: "hero",
    status: "verified",
  },
  about: {
    src: "/images/about/amin-jan-about.png",
    alt: "Amin Jan receiving recognition for youth leadership and community engagement",
    caption: "Active across youth leadership, mentorship & community capacity building",
    context: "About narrative - leadership recognition ceremony",
    year: "2025",
    section: "about",
    status: "verified",
  },
  pepWorkshop: {
    src: "/images/pep/amin-pep-workshop.jpg",
    alt: "Amin Jan with leaders and participants at Peshawar Entrepreneurship Program (PEP) certificate ceremony",
    caption: "Peshawar Entrepreneurship Program (PEP) • 2026",
    context: "Flagship PEP Case Study Delivery and Certificate Ceremony",
    year: "2026",
    section: "pep",
    status: "verified",
  },
  susiExchange: {
    src: "/images/international/amin-susi-umass.jpg",
    alt: "Amin Jan participating in SUSI exchange program at University of Massachusetts Amherst",
    caption: "SUSI Exchange • University of Massachusetts Amherst, 2024",
    context: "SUSI International Leadership Fellowship",
    year: "2024",
    section: "international",
    status: "pending_client_supply",
  },
  journeyMilestone: {
    src: "/images/journey/amin-leadership-session.jpg",
    alt: "Amin Jan presenting at regional youth development symposium",
    caption: "Regional Youth Leadership Symposium • 2024",
    context: "Chronological Journey Milestone Anchor",
    year: "2024",
    section: "journey",
    status: "pending_client_supply",
  },
  gallery1: {
    src: "/images/hero/amin-jan-hero.png",
    alt: "Amin Jan leading a youth dialogue session",
    caption: "Youth Leadership Dialogue • 2025",
    context: "Moments & Documentary Gallery",
    year: "2025",
    section: "gallery",
    status: "verified",
  },
  gallery2: {
    src: "/images/about/amin-jan-about.png",
    alt: "Amin Jan at national community summit",
    caption: "Community Empowerment Summit • 2025",
    context: "Moments & Documentary Gallery",
    year: "2025",
    section: "gallery",
    status: "verified",
  },
};
