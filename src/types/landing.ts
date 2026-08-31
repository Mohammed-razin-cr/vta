export interface WorkflowStep {
  icon: string;
  title: string;
  desc: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
  duration: number;
}

export interface HeroHighlight {
  icon: string;
  value: string;
  label: string;
}

export type BrandStyle = "italic" | "wing" | "oval" | "block" | "serif";

export interface BrandItem {
  name: string;
  color: string;
  style: BrandStyle;
}

export interface TestimonialItem {
  avatar: string;
  name: string;
  role: string;
  quote: string;
}

export interface SolutionCard {
  icon: string;
  title: string;
  bg: string;
  image: string;
  bullets: string[];
}

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface FooterColumn {
  title: string;
  links: string[];
}
