import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { HERO_HIGHLIGHTS } from "@/lib/constants/landing-data";
import { TalentCloudDiagram } from "./TalentCloudDiagram";
import { ExploreButton } from "@/components/common/ExploreButton";

export function Hero() {
  return (
    <section data-hero className="hero-section relative overflow-hidden">
      <Image
        src="/assets/vta-technical.webp"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="hero-section__photo pointer-events-none absolute inset-0 object-cover object-center"
      />
      <div className="hero-section__wash" aria-hidden="true" />
      <div className="hero-grid relative mx-auto max-w-[1440px] px-5 md:px-8 py-16 lg:py-20 grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-center">
        <div className="hero-copy">
          <div data-hero-reveal className="hero-eyebrow inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[color:var(--brand-red)]" aria-hidden="true" />
            AI POWERED WORKFORCE PLATFORM
          </div>

          <h1 data-hero-reveal className="hero-title" aria-label="India's Automotive Talent Cloud™">
            India&apos;s Automotive
            <br />
            <span>Talent Cloud</span><sup>™</sup>
          </h1>

          <p data-hero-reveal className="hero-lede">
            Connecting Students, Mechanics, Trainers, Employers, OEMs and CSR Partners on one AI-powered
            platform for Learning, Certification, Hiring and Career Growth.
          </p>

          <div data-hero-reveal className="hero-actions">
            <ExploreButton href="#platform" />
            <a href="#contact" className="hero-secondary-button">
              Hire Certified Talent
            </a>
            <a href="#contact" className="hero-secondary-button">
              Partner With Us
            </a>
          </div>

          <dl data-hero-reveal className="hero-highlights">
            {HERO_HIGHLIGHTS.map((item) => (
              <div key={item.label} className="hero-highlight group">
                <CheckCircle2 aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="sr-only">{item.label}</dt>
                  <dd>{item.value}</dd>
                  <div>{item.label}</div>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div data-hero-visual className="hero-visual-wrap" data-parallax="-5">
          <div className="hero-visual-wrap__label"><span>VTA / 01</span>Connected automotive ecosystem</div>
          <TalentCloudDiagram />
        </div>
      </div>
      <div className="hero-scroll-cue" aria-hidden="true"><span>Scroll to explore</span></div>
    </section>
  );
}
