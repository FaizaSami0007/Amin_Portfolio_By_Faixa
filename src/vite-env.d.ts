/// <reference types="vite/client" />

declare module "lucide-react" {
  import * as React from "react";
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  }
  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;

  export const ArrowUp: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const ArrowDown: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const UserCheck: LucideIcon;
  export const MapPin: LucideIcon;
  export const Award: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Mail: LucideIcon;
  export const Check: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Calendar: LucideIcon;
  export const Globe: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Users: LucideIcon;
  export const Briefcase: LucideIcon;
  export const Compass: LucideIcon;
  export const Layers: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Clock: LucideIcon;
  export const FileText: LucideIcon;
  export const Send: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Tag: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const Camera: LucideIcon;
  export const Image: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Twitter: LucideIcon;
  export const Instagram: LucideIcon;
  export const Download: LucideIcon;
  export const Quote: LucideIcon;
}
