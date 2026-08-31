import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { HERO } from "@/lib/content";
import { TalentCloudDiagram } from "@/components/landing/Hero/TalentCloudDiagram";
import { HeroHeadline } from "./HeroHeadline";
import { HeroVisualMotion } from "./HeroVisualMotion";
import { AudiencePathway } from "./AudiencePathway";

export function Hero() {
  return (
    <section className="relative bg-paper pb-14 pt-10 md:pb-20 md:pt-16 lg:min-h-[calc(100vh-76px)] lg:py-16">
      <div className="relative mx-auto grid w-full max-w-[1640px] items-center gap-x-12 gap-y-12 px-5 md:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-x-14 xl:gap-x-20 xl:px-10 2xl:px-12">
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

          <RevealGroup className="mt-10 grid grid-cols-2 border-y border-line sm:grid-cols-4">
            {HERO.stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                className={`py-4 ${index % 2 === 0 ? "border-r border-line pr-3" : "pl-4"} ${
                  index === 1 ? "sm:border-r sm:pr-3" : ""
                } ${index > 1 ? "border-t border-line sm:border-t-0" : ""} ${
                  index > 1 ? "sm:pl-4" : ""
                }`}
              >
                <p className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-smoke">{stat.label}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>

        <div className="min-w-0 lg:justify-self-end">
          <HeroVisualMotion className="relative w-full">
            <div
              className="relative mx-auto aspect-[4/3] w-[calc(100%-50px)] max-w-[670px]"
              style={{ aspectRatio: "4 / 3", width: "calc(100% - 50px)", maxWidth: "670px" }}
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
