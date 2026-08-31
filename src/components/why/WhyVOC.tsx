import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { WHY_VOC } from "@/lib/content";
import { cn } from "@/lib/utils";
import { CountUp } from "./CountUp";

/**
 * Why VOC: sticky photo plate with the job-assurance stamp and a hairline
 * stat table on the left; the four proof points as an editorial index list
 * on the right.
 */
export function WhyVOC() {
  return (
    <section id="why-voc" className="border-t border-line bg-paper py-16 sm:py-20 md:py-32">
      <div className="container-shell">
        <SectionHeader
          index="02"
          kicker="Why VOC"
          title={
            <>
              Where workshop knowledge becomes <em>career momentum.</em>
            </>
          }
        />

        <div className="grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          {/* Left: photo plate, stamp, stat table */}
          <div className="self-start lg:sticky lg:top-28">
            <Reveal standalone className="relative">
              <figure className="overflow-hidden rounded-media border border-line bg-ink">
                <Image
                  src="/assets/vta-technical.webp"
                  alt="Hands-on motorcycle service training with live equipment at VOC Technical Academy"
                  width={1920}
                  height={1080}
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 42vw, 100vw"
                  className="img-grade aspect-[4/3] w-full object-cover object-center"
                />
                <figcaption className="flex items-center justify-between gap-4 border-t border-white/15 px-5 py-4 text-paper">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember-light">
                    Workshop-first training
                  </span>
                  <span className="text-right text-xs text-paper/65">Live equipment / real servicing</span>
                </figcaption>
              </figure>
              <div className="relative z-10 ml-auto mr-4 mt-4 max-w-[220px] rounded-card bg-ember px-6 py-5 text-white shadow-lift md:absolute md:-bottom-7 md:-right-6 md:m-0">
                <p className="font-display text-3xl font-extrabold">100%</p>
                <p className="mt-1 text-[12.5px] leading-snug opacity-95">
                  Job assurance at all VOC centres
                </p>
              </div>
            </Reveal>

            {/* Hairline stat table */}
            <div className="mt-10 grid grid-cols-2 border-t border-line md:mt-16">
              {WHY_VOC.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={cn(
                    "py-5",
                    i < 2 && "border-b border-line",
                    i % 2 === 0 ? "border-r border-line pr-4" : "pl-6",
                  )}
                >
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    className="block font-display text-3xl font-extrabold text-ink md:text-4xl"
                  />
                  <p className="spec-label mt-1 text-smoke-light">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: proof points */}
          <RevealGroup>
            {WHY_VOC.points.map((point, i) => (
              <Reveal
                as="article"
                key={point.title}
                className={cn(
                  "grid gap-4 border-t border-line py-8 md:grid-cols-[64px_1fr] md:py-9",
                  i === WHY_VOC.points.length - 1 && "border-b",
                )}
              >
                <span className="spec-label pt-1.5 text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl leading-relaxed text-smoke">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
