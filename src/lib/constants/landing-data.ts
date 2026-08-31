import type {
  BrandItem,
  FeatureItem,
  FooterColumn,
  HeroHighlight,
  NavLink,
  SolutionCard,
  StatItem,
  TestimonialItem,
  WorkflowStep,
} from "@/types/landing";

export const NAV_LINKS: NavLink[] = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Employers", href: "#employers" },
  { label: "OEM & CSR", href: "#oem-csr" },
  { label: "Training", href: "#training" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const HERO_HIGHLIGHTS: HeroHighlight[] = [
  { icon: "users", value: "10,000+", label: "Learners Trained" },
  { icon: "building-2", value: "500+", label: "Employers" },
  { icon: "shield-check", value: "95%", label: "Placement Success" },
  { icon: "award", value: "50+", label: "Partners" },
];

export const BRANDS: BrandItem[] = [
  { name: "KTM", color: "#FF6600", style: "italic" },
  { name: "HONDA", color: "#CC0000", style: "wing" },
  { name: "TVS", color: "#1E4C9A", style: "italic" },
  { name: "HERO", color: "#E4322B", style: "block" },
  { name: "ROYAL ENFIELD", color: "#8B0000", style: "serif" },
  { name: "GULF", color: "#F58220", style: "oval" },
  { name: "VEEDOL", color: "#D71920", style: "block" },
  { name: "SKILL INDIA", color: "#0A4C95", style: "serif" },
  { name: "NSDC", color: "#2E9E4A", style: "block" },
  { name: "BAJAJ", color: "#164A9A", style: "italic" },
];

export const SOLUTIONS: SolutionCard[] = [
  {
    icon: "graduation-cap",
    title: "Candidates",
    bg: "bg-[#FFF3F1]",
    image: "/assets/card-candidate.png",
    bullets: [
      "Learn from industry experts",
      "Get certified",
      "Find the right job",
      "Build a successful career",
    ],
  },
  {
    icon: "building-2",
    title: "Employers",
    bg: "bg-[#EEF3FB]",
    image: "/assets/card-employer.png",
    bullets: [
      "Post jobs easily",
      "Access verified talent",
      "Assess & hire faster",
      "Upskill your workforce",
    ],
  },
  {
    icon: "book-open",
    title: "Trainers",
    bg: "bg-[#EEF7F0]",
    image: "/assets/card-trainer.png",
    bullets: ["Create courses", "Teach & mentor", "Track learners", "Earn and grow"],
  },
  {
    icon: "handshake",
    title: "Partners",
    bg: "bg-[#FFF6E9]",
    image: "/assets/card-partners.png",
    bullets: [
      "Drive CSR impact",
      "Skill communities",
      "Track outcomes",
      "Build a skilled nation",
    ],
  },
];

export const STEPS: WorkflowStep[] = [
  { icon: "file-text", title: "1. Register", desc: "Sign up in minutes and create your profile" },
  { icon: "book-open-check", title: "2. Learn", desc: "Access courses & training programs" },
  { icon: "clipboard-check", title: "3. Assessment", desc: "AI-powered assessments & practical tests" },
  { icon: "badge-check", title: "4. Certification", desc: "Get industry-recognized digital certificate" },
  { icon: "briefcase", title: "5. Placement", desc: "Connect with employers & get hired" },
  { icon: "trending-up", title: "6. Career Growth", desc: "Upskill continuously and grow your career" },
];

export const FEATURES: FeatureItem[] = [
  { icon: "book-open", title: "Learning Management", desc: "Interactive courses, videos, and resources" },
  { icon: "list-checks", title: "Assessment Engine", desc: "AI-based tests & skill evaluations" },
  { icon: "qr-code", title: "Digital Certification", desc: "QR verified certificates & digital badges" },
  { icon: "user-square-2", title: "Talent Marketplace", desc: "Job matching & career opportunities" },
  { icon: "briefcase", title: "Employer Portal", desc: "Hire, assess & manage your workforce" },
  { icon: "handshake", title: "Partner Portal", desc: "CSR, OEM & govt. program management" },
  { icon: "bar-chart-3", title: "Analytics & Insights", desc: "Real-time dashboards & reports" },
  { icon: "smartphone", title: "Mobile App", desc: "Learn, apply & grow on-the-go" },
];

export const STATS: StatItem[] = [
  { icon: "users", value: "10,000+", label: "Learners Trained", duration: 1800 },
  { icon: "building-2", value: "500+", label: "Employers Onboarded", duration: 1950 },
  { icon: "user-round", value: "200+", label: "Expert Trainers", duration: 2100 },
  { icon: "shield-check", value: "95%", label: "Placement Success", duration: 2250 },
  { icon: "handshake", value: "50+", label: "Partners & Collaborators", duration: 2400 },
  { icon: "wrench", value: "25+", label: "States Presence", duration: 2550 },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    avatar: "/assets/avatar-employer.jpg",
    name: "– Service Manager",
    role: "Honda BigWing",
    quote: "VTA has given us access to skilled technicians that are job-ready from day one.",
  },
  {
    avatar: "/assets/avatar-learner.jpg",
    name: "– Venkatesh R",
    role: "VTA Learner",
    quote: "The training content is practical, industry-focused and helped me build my confidence.",
  },
  {
    avatar: "/assets/avatar-trainer.jpg",
    name: "– Arjun M",
    role: "VTA Certified Trainer",
    quote: "The platform is easy to use and helps us track, teach and support learners effectively.",
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  { title: "Platform", links: ["Overview", "Features", "How It Works", "Technology", "Security"] },
  {
    title: "Solutions",
    links: ["For Candidates", "For Employers", "For Trainers", "For Partners", "For OEM & CSR"],
  },
  {
    title: "Programs",
    links: ["Automotive Service", "EV Technology", "Diagnostics", "Soft Skills", "Certification"],
  },
  { title: "Resources", links: ["Blog", "Case Studies", "Guides", "Events", "Careers"] },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "Terms & Conditions", "Privacy Policy"],
  },
];
