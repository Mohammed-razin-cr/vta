import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { HERO } from "@/lib/content";
import { TalentCloudDiagram } from "@/components/landing/Hero/TalentCloudDiagram";
import { HeroHeadline } from "./HeroHeadline";
import { HeroVisualMotion } from "./HeroVisualMotion";
import { AudiencePathway } from "./AudiencePathway";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pb-14 pt-10 md:pb-20 md:pt-16 lg:min-h-[calc(100vh-76px)] lg:py-16">
      <HeroBackgroundVideo />
      <div className="relative z-10 mx-auto grid w-full max-w-[1640px] items-center gap-x-12 gap-y-12 px-5 md:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-x-14 xl:gap-x-20 xl:px-10 2xl:px-12">
        <div className="max-w-3xl">
          <Reveal standalone>
            <div className="flex items-center gap-3 max-[299px]:gap-0 sm:gap-4">
              <span className="spec-label text-ember max-[299px]:hidden">01</span>
              <p className="ai-status-pill" aria-label="AI powered workforce platform">
                <span aria-hidden="true" className="ai-status-pill__node">
                  <span className="ai-status-pill__core" />
                </span>
                <span aria-hidden="true" className="ai-status-pill__copy">
                  <strong>AI powered</strong>
                  <span className="ai-status-pill__divider" />
                  <span>Workforce platform</span>
                </span>
              </p>
            </div>
          </Reveal>

          <HeroHeadline />

          <Reveal standalone>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-smoke md:text-xl">
              {HERO.lede}
            </p>
          </Reveal>

          <Reveal standalone>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" withArrow href={HERO.primaryCta.href}>
                {HERO.primaryCta.label}
              </Button>
              <Button size="lg" variant="secondary" withArrow href={HERO.secondaryCta.href}>
                {HERO.secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          <RevealGroup className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-4">
            <Reveal>
              <div className="relative flex flex-col justify-between rounded-[22px] border border-line/70 bg-[#f9f9f8] p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-line hover:bg-white hover:shadow-md sm:p-5 min-h-[135px]">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-display text-3xl font-extrabold tracking-tight text-ember sm:text-4xl lg:text-[2.6rem]">
                    5,000+
                  </p>
                  <svg className="h-9 w-9 shrink-0 text-smoke-light/60" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 34l-6 6M34 14l6-6M20 24l10-10M24 20l-10 10M16 8a8 8 0 000 16 8 8 0 008-8M32 24a8 8 0 008 8 8 8 0 00-8-8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="mt-3 font-display text-xs font-bold leading-tight text-ink sm:text-sm">
                  Technicians Trained
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative flex flex-col justify-between rounded-[22px] border border-line/70 bg-[#f9f9f8] p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-line hover:bg-white hover:shadow-md sm:p-5 min-h-[135px]">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-display text-3xl font-extrabold tracking-tight text-ember sm:text-4xl lg:text-[2.6rem]">
                    6
                  </p>
                  <svg className="h-9 w-9 shrink-0 text-smoke-light/60" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M24 8c3-4 8-5 11-2s6 3 9 2c2-1 4-5 8-4s5 4 8 7c2 4 0 8 3 10s6 4 5 8c-2 4-4 5-5 9s3 6 2 10c-2 4-5 7-8 10s-4 8-8 10c-4 3-8 1-12-2s-6-5-9-9c-3-4-5-7-5-12s3-8 2-12c-2-4-4-7-3-10s4-5 7-8c2-3 4-7 7-9z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="mt-3 font-display text-xs font-bold leading-tight text-ink sm:text-sm">
                  State Locations
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative flex flex-col justify-between rounded-[22px] border border-line/70 bg-[#f9f9f8] p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-line hover:bg-white hover:shadow-md sm:p-5 min-h-[135px]">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-display text-3xl font-extrabold tracking-tight text-ember sm:text-4xl lg:text-[2.6rem]">
                    180+
                  </p>
                  <svg className="h-9 w-9 shrink-0 text-smoke-light/60" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 40V16l14-8 14 8v24M18 40V28h12v12M18 20h2m10 0h2m-14 6h2m10 0h2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="mt-3 font-display text-xs font-bold leading-tight text-ink sm:text-sm">
                  Outlets in Network
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative flex flex-col justify-between rounded-[22px] border border-line/70 bg-[#f9f9f8] p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-line hover:bg-white hover:shadow-md sm:p-5 min-h-[135px]">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-display text-3xl font-extrabold tracking-tight text-ember sm:text-4xl lg:text-[2.6rem]">
                    100+
                  </p>
                  <svg className="h-9 w-9 shrink-0 text-smoke-light/60" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="24" cy="24" r="16" strokeLinecap="round" />
                    <path d="M8 24h32M24 8c5 5 8 10 8 16s-3 11-8 16M24 8c-5 5-8 10-8 16s3 11 8 16" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="mt-3 font-display text-xs font-bold leading-tight text-ink sm:text-sm">
                  Tie-Ups
                </p>
              </div>
            </Reveal>
          </RevealGroup>
        </div>

        <div className="min-w-0 lg:justify-self-end">
          <HeroVisualMotion className="relative w-full">
            <div
              className="relative mx-auto aspect-[4/3] w-full max-w-[670px] sm:w-[calc(100%-50px)]"
              style={{ aspectRatio: "4 / 3", maxWidth: "670px" }}
            >
              <TalentCloudDiagram />
            </div>
          </HeroVisualMotion>

          <Reveal standalone className="mx-auto mt-6 w-full max-w-[720px] md:mt-7">
            <AudiencePathway />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
