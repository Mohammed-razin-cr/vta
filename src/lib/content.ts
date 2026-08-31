/**
 * All landing-page content for VOC Technical Academy.
 * Every fact here comes from the original site/repository; do not add claims.
 */

export const BRAND = {
  name: "VOC Technical Academy",
  short: "VTA",
  tagline: ["Learn", "Perform", "Earn"],
  parent: "VOC Automotive",
  logo: "/assets/vta-logo.png",
  gear: "/assets/vta-gear.png",
} as const;

export const NAV = [
  { label: "Programs", href: "#programs" },
  { label: "Why VOC", href: "#why-voc" },
  { label: "The Journey", href: "#journey" },
  { label: "Facilities", href: "#facilities" },
  { label: "Talent Cloud", href: "#talent-cloud" },
  { label: "Stories", href: "#stories" },
] as const;

export const ROUTES = {
  login: "/login",
  register: "/register",
  employerLogin: "/employer/login",
  employerRegister: "/employer/register",
} as const;

export const HERO = {
  kicker: "VOC Technical Academy",
  // Headline set in component for typographic control.
  lede: "Hands-on two-wheeler training in multi-brand diagnostics, maintenance and EV technology, built inside real workshops and backed by the VOC Automotive network.",
  primaryCta: { label: "Explore programs", href: "#programs" },
  secondaryCta: { label: "Hire certified talent", href: "#talent-cloud" },
  stats: [
    { value: "5,000+", label: "Technicians trained" },
    { value: "180+", label: "Outlets in the network" },
    { value: "100+", label: "Industry tie-ups" },
    { value: "6", label: "State locations" },
  ],
  image: "/assets/vta-engine-image.webp",
  imageAlt: "Cutaway two-wheeler engine used for training at VOC Technical Academy",
} as const;

/** Authentic brand marks used in the academy's industry credibility rail. */
export const INDUSTRY_BRANDS = [
  { name: "KTM", src: "/assets/brands/ktm.svg", widthClass: "w-28 md:w-32" },
  { name: "Honda", src: "/assets/brands/honda.svg", widthClass: "w-20 md:w-24" },
  { name: "TVS Motor", src: "/assets/brands/tvs.svg", widthClass: "w-40 md:w-44" },
  { name: "Hero MotoCorp", src: "/assets/brands/hero.svg", widthClass: "w-32 md:w-36" },
  { name: "Royal Enfield", src: "/assets/brands/royal-enfield.svg", widthClass: "w-44 md:w-48" },
  { name: "Gulf Oil", src: "/assets/brands/gulf.svg", widthClass: "w-24 md:w-28" },
  { name: "Veedol", src: "/assets/brands/veedol.png", widthClass: "w-36 md:w-40" },
  { name: "Skill India", src: "/assets/brands/skill-india.jpg", widthClass: "w-36 md:w-40" },
  { name: "NSDC", src: "/assets/brands/nsdc.svg", widthClass: "w-36 md:w-40" },
  { name: "Bajaj Auto", src: "/assets/brands/bajaj.svg", widthClass: "w-36 md:w-40" },
] as const;

export const TRAINING_TRACKS = [
  {
    index: "01",
    title: "Technical Training",
    description: "Engine-out fundamentals through advanced electronic diagnosis on live machines.",
    items: [
      "Basic Training",
      "Periodic Maintenance Training",
      "Troubleshooting Training",
      "FI & OBD Tool Training",
    ],
  },
  {
    index: "02",
    title: "Process Training",
    description: "How a professional workshop actually runs, from job card to delivery.",
    items: ["Workshop Process Training", "Smart Dealer & Rider App Training"],
  },
  {
    index: "03",
    title: "Soft Skill Training",
    description: "The customer-facing skills that turn a good technician into a trusted one.",
    items: ["Customer Handling Training", "Selling Skill Training"],
  },
] as const;

export const BRONZE_COURSE = {
  kicker: "Flagship foundation course",
  title: "Bronze Level Course",
  duration: "120 hours",
  cta: { label: "Enroll now", href: "#contact" },
  image: "/assets/bronze-course-workshop.jpg",
  imageAlt: "Motorcycle mechanic carrying out hands-on service work inside a real workshop",
  enrolmentDetails: [
    { label: "Next batch", value: "Ask admissions" },
    { label: "Fee details", value: "Request current quote" },
    { label: "Career outcome", value: "Job assurance at VOC centres" },
  ],
  modules: [
    {
      title: "Tools & Equipment",
      description: "Identification and safe use of general-purpose workshop tools.",
    },
    {
      title: "Workshop Equipment",
      description: "Usage, maintenance and safety practices across core service equipment.",
    },
    {
      title: "Measuring Instruments",
      description: "Practical application of special tools, installers, pullers and measuring equipment.",
    },
  ],
} as const;

export const WHY_VOC = {
  stats: [
    { value: 5000, suffix: "+", label: "Technicians trained" },
    { value: 180, suffix: "+", label: "Outlets" },
    { value: 100, suffix: "+", label: "Tie-ups" },
    { value: 6, suffix: "", label: "State locations" },
  ],
  jobAssurance: "100% job assurance at all VOC centres",
  points: [
    {
      title: "Workshop-first, not classroom-first",
      description:
        "Multi-brand two-wheeler theory is paired with hands-on hours in diagnostics, repair and maintenance. You learn on the machines you'll service.",
    },
    {
      title: "A real network behind your career",
      description:
        "Training connects directly into VOC Automotive's service network, including 180+ outlets and 100+ industry tie-ups, with 100% job assurance at all VOC centres.",
    },
    {
      title: "EV-ready from day one",
      description:
        "The curriculum covers emerging electric-vehicle technology alongside FI & OBD diagnostics, so your skills match where the industry is going.",
    },
    {
      title: "Trainers from the service floor",
      description:
        "Expert-led programs taught by people who have run workshops, with process, tooling and customer handling included.",
    },
  ],
  image: "/assets/mechanics-hero.png",
  imageAlt: "Technicians working together on a motorcycle in a service workshop",
} as const;

export const JOURNEY = [
  {
    index: "01",
    title: "Register",
    description: "Sign up in minutes and create your learner profile.",
  },
  {
    index: "02",
    title: "Learn",
    description: "Train on live machines across technical, process and soft-skill tracks.",
  },
  {
    index: "03",
    title: "Prove it",
    description: "AI-powered assessments and practical tests measure real capability.",
  },
  {
    index: "04",
    title: "Get certified",
    description: "Earn an industry-recognized, QR-verified digital certificate.",
  },
  {
    index: "05",
    title: "Get placed",
    description: "Connect with employers across the network and get hired.",
  },
  {
    index: "06",
    title: "Keep climbing",
    description: "Upskill continuously and grow through the VOC ecosystem.",
  },
] as const;

export const FACILITIES = [
  { title: "Classroom", image: "/assets/vta-classroom.webp" },
  { title: "Electrical Circuit Area", image: "/assets/vta-eca-image.webp" },
  { title: "Engine Area", image: "/assets/vta-engine-image.webp" },
  { title: "Service Area", image: "/assets/vta-service-area-image.webp" },
  { title: "Technical Area", image: "/assets/vta-technicalarea.webp" },
] as const;

export const FACILITIES_BACKDROP = {
  image: "/assets/vta-technical.webp",
  alt: "Hands-on training bench at VOC Technical Academy",
} as const;

/** The VTA Talent Cloud platform: who it serves and what it runs on. */
export const ECOSYSTEM = {
  audiences: [
    {
      key: "candidates",
      title: "Candidates",
      summary: "Learn from industry experts, get certified and find the right job.",
      bullets: [
        "Learn from industry experts",
        "Get certified",
        "Find the right job",
        "Build a successful career",
      ],
      cta: { label: "Create learner profile", href: "/register" },
    },
    {
      key: "employers",
      title: "Employers",
      summary: "Post jobs, access verified talent and upskill your workforce.",
      bullets: [
        "Post jobs easily",
        "Access verified talent",
        "Assess & hire faster",
        "Upskill your workforce",
      ],
      cta: { label: "Hire certified talent", href: "/employer/register" },
    },
    {
      key: "trainers",
      title: "Trainers",
      summary: "Create courses, mentor learners and grow with the platform.",
      bullets: ["Create courses", "Teach & mentor", "Track learners", "Earn and grow"],
      cta: { label: "Join as a trainer", href: "/register" },
    },
    {
      key: "partners",
      title: "Partners",
      summary: "Drive CSR impact, skill communities and track real outcomes.",
      bullets: [
        "Drive CSR impact",
        "Skill communities",
        "Track outcomes",
        "Build a skilled nation",
      ],
      cta: { label: "Partner with VOC", href: "#contact" },
    },
  ],
  capabilities: [
    "Learning management",
    "AI-based assessment engine",
    "QR-verified digital certification",
    "Talent marketplace",
    "Employer portal",
    "Partner & CSR portal",
    "Analytics & insights",
    "Mobile app",
  ],
} as const;

export const TESTIMONIALS = [
  {
    quote: "VTA has given us access to skilled technicians that are job-ready from day one.",
    name: "Service Manager",
    role: "Honda BigWing",
    avatar: "/assets/avatar-employer.jpg",
  },
  {
    quote: "The training content is practical, industry-focused and helped me build my confidence.",
    name: "Venkatesh R",
    role: "VTA Learner",
    avatar: "/assets/avatar-learner.jpg",
  },
  {
    quote: "The platform is easy to use and helps us track, teach and support learners effectively.",
    name: "Arjun M",
    role: "VTA Certified Trainer",
    avatar: "/assets/avatar-trainer.jpg",
  },
  {
    quote: "The hands-on sessions made diagnostics easier to understand and apply in the workshop.",
    name: "Razin",
    role: "VTA Learner",
    avatar: "/assets/card-candidate.png",
  },
  {
    quote: "The training structure is clear, practical and closely connected to day-to-day service work.",
    name: "Saqib",
    role: "VTA Learner",
    avatar: "/assets/card-trainer.png",
  },
  {
    quote: "Certification gives us a clearer way to recognise capable technicians and hire with confidence.",
    name: "Imran",
    role: "Employer Partner",
    avatar: "/assets/card-employer.png",
  },
  {
    quote: "Learning on live equipment helped me move from theory to confident workshop practice.",
    name: "Surya",
    role: "VTA Learner",
    avatar: "/assets/avatar-learner.jpg",
  },
] as const;

export const CAREER = {
  ctaPrimary: { label: "Start your journey", href: "/register" },
  ctaSecondary: { label: "Hire certified talent", href: "/employer/register" },
  ctaTertiary: { label: "Partner with VOC", href: "https://vocautomotive.com" },
} as const;

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/voc-automotive-india-pvt-ltd-66/" },
  { label: "YouTube", href: "https://www.youtube.com/@voiceofcustomer01" },
  { label: "Instagram", href: "https://www.instagram.com/voiceofcustomer_" },
  { label: "Facebook", href: "https://www.facebook.com/VOCAUTOMOTIVE" },
] as const;

export const FOOTER = {
  blurb:
    "VOC Technical Academy trains job-ready two-wheeler technicians through hands-on programs, modern facilities and the VOC Automotive service network.",
  website: { label: "vocautomotive.com", href: "https://vocautomotive.com" },
  columns: [
    {
      title: "Academy",
      links: [
        { label: "Programs", href: "#programs" },
        { label: "Why VOC", href: "#why-voc" },
        { label: "The Journey", href: "#journey" },
        { label: "Facilities", href: "#facilities" },
        { label: "Success stories", href: "#stories" },
      ],
    },
    {
      title: "Talent Cloud",
      links: [
        { label: "For candidates", href: "#talent-cloud" },
        { label: "For employers", href: "#talent-cloud" },
        { label: "For trainers", href: "#talent-cloud" },
        { label: "For partners", href: "#talent-cloud" },
      ],
    },
    {
      title: "Accounts",
      links: [
        { label: "Employee login", href: "/login" },
        { label: "Employee register", href: "/register" },
        { label: "Employer login", href: "/employer/login" },
        { label: "Employer register", href: "/employer/register" },
      ],
    },
  ],
} as const;
