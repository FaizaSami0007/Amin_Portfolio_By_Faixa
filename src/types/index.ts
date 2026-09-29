export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface TrustSignal {
  name: string;
  fullName: string;
  category: "Exchange" | "United Nations" | "Alumni" | "Leadership" | "Governance";
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface AboutChapter {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  highlight?: string;
}

export interface AboutData {
  eyebrow: string;
  headline: string;
  headlineEditorial: string;
  summary: string;
  corePillars: {
    title: string;
    description: string;
  }[];
  chapters: AboutChapter[];
}

export interface CoreArea {
  id: string;
  title: string;
  description: string;
  focusHighlights: string[];
  linkHref?: string;
  linkLabel?: string;
}

export interface ExperienceItem {
  id: string;
  year: string;
  period?: string;
  organization: string;
  role: string;
  location: string;
  category: "Leadership" | "Coordination" | "International" | "Community" | "Volunteering";
  description: string;
  activities: string[];
  outcome?: string;
  featured?: boolean;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  organization: string;
  year: string;
  role: string;
  category: "Entrepreneurship" | "International Leadership" | "Civic Engagement";
  tagline: string;
  context: string;
  challenge: string;
  myRole: string;
  activities: string[];
  scale: string;
  outcome: string;
  reflection: string;
  isFlagship?: boolean;
}

export interface RecognitionItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: "International Programs" | "Leadership Recognition" | "Community Recognition" | "Certifications";
  description: string;
  credentialUrl?: string;
  credentialLabel?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  focus: string;
  highlights?: string[];
}

export interface InsightItem {
  id: string;
  category: "Youth Leadership" | "Entrepreneurship" | "International Exchange" | "Civic Education";
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  keyTakeaway: string;
  status: "Published Reflection" | "Editorial Draft";
}

export interface SiteConfig {
  name: string;
  role: string;
  eyebrow: string;
  headlineMain: string;
  headlineEditorial: string;
  shortBio: string;
  location: string;
  email: string;
  linkedin: string;
  navItems: NavItem[];
  socials: SocialLink[];
  trustSignals: TrustSignal[];
  metrics: MetricItem[];
}
