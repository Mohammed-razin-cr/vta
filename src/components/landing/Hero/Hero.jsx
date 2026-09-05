import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TalentCloudDiagram } from "./TalentCloudDiagram";
import { HeroHighlights } from "./HeroHighlights";
const HERO_HEADLINE_PHRASES = ["Talent Cloud", "Skills Network", "Career Gateway", "Workforce Future"];
const HERO_ACTIONS = [
    { label: "EXPLORE PLATFORM", href: "#platform" },
    { label: "HIRE CERTIFIED TALENT", href: "#employers" },
    { label: "PARTNER WITH US", href: "#partners" },
];
export function Hero() {
    return (<section className="relative overflow-hidden bg-gradient-to-br from-[#FEF5F4] via-white to-[#FEF5F4]">
      <Image src="/assets/hero-bg-clean.png" alt="" fill priority aria-hidden="true" className="pointer-events-none absolute inset-0 object-cover object-center"/>
      <div className="relative mx-auto grid w-full max-w-[1536px] grid-cols-[minmax(0,1fr)] items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-4 lg:py-10 xl:py-12">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[color:var(--brand-red-soft)] border border-red-100 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[9px] min-[320px]:text-[10px] sm:text-[11px] font-bold tracking-wider text-[color:var(--brand-red)] animate-soft-pulse">
            <span className="w-2 h-2 rounded-full bg-[color:var(--brand-red)]" aria-hidden="true"/>
            AI POWERED WORKFORCE PLATFORM
          </div>

          <h1 className="mt-4 sm:mt-6 text-[37px] sm:text-[49px] lg:text-[61px] leading-[1.08] sm:leading-[1.05] font-black text-gray-900 tracking-tight">
            India&apos;s Automotive
            <br />
            <span className="hero-headline-rotator text-[color:var(--brand-red)]" aria-hidden="true">
              {HERO_HEADLINE_PHRASES.map((phrase, index) => (<span key={phrase} style={{ animationDelay: `${index * 3 - 0.5}s` }}>
                  {phrase}
                </span>))}
            </span>
            <span className="sr-only">Talent Cloud</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-[15px] leading-relaxed text-gray-700 max-w-xl">
            Connecting Students, Mechanics, Trainers, Employers, OEMs and CSR Partners on one AI-powered
            platform for Learning, Certification, Hiring and Career Growth.
          </p>

          <div className="mt-7 flex w-full max-w-[270px] flex-wrap items-center gap-2.5 sm:mt-8 sm:max-w-none">
            {HERO_ACTIONS.map((action) => (<a key={action.label} href={action.href} className="hero-cta-pill">
                <span className="hero-cta-pill__label">
                  <svg className="hero-cta-pill__tire" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9"/>
                    <circle cx="12" cy="12" r="2.5"/>
                    <path d="M12 9.5V4.5M14.38 11.23l4.75-1.54M13.47 14.02l2.94 4.05M10.53 14.02l-2.94 4.05M9.62 11.23L4.87 9.69"/>
                  </svg>
                  <span>{action.label}</span>
                </span>
                <span className="hero-cta-pill__arrow" aria-hidden="true">
                  <ArrowRight />
                </span>
              </a>))}
          </div>

          <HeroHighlights />
        </div>

        <TalentCloudDiagram />
      </div>
    </section>);
}
