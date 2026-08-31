import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { BRONZE_COURSE, TRAINING_TRACKS } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Programs: flagship Bronze Level plate (dark feature card) followed by the
 * three training tracks laid out as spec-sheet rows.
 */
export function Programs() {
  return (
    <section id="programs" className="border-t border-line bg-paper py-16 sm:py-20 md:py-32">
      <div className="container-shell">
        <SectionHeader
          index="01"
          kicker="Programs"
          align="split"
          title={
            <>
              Training shaped around the <em>real workshop.</em>
            </>
          }
          lede="Three job-ready tracks and a 120-hour foundation course, taught on live machines, not slides."
        />

        {/* Featured Bronze plate */}
        <Reveal standalone>
          <article className="relative grid overflow-hidden rounded-media border border-line-dark bg-ink text-paper shadow-[0_24px_70px_-42px_rgba(22,19,15,0.85)] lg:grid-cols-[1.04fr_0.96fr]">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-[3px] bg-ember" />

            <div className="flex flex-col p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="spec-label text-ember-warm">{BRONZE_COURSE.kicker}</p>
                  <h3 className="mt-4 max-w-xl font-display text-display-md text-paper">
                    {BRONZE_COURSE.title}
                  </h3>
                </div>
                <span className="hidden font-mono text-xs font-semibold tracking-[0.18em] text-paper/25 sm:block">
                  01
                </span>
              </div>

              <dl className="mt-6 grid grid-cols-2 border-y border-line-dark sm:grid-cols-3">
                <div className="py-4 pr-3">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">
                    Duration
                  </dt>
                  <dd className="mt-1 text-xs font-semibold leading-tight text-paper sm:text-sm">{BRONZE_COURSE.duration}</dd>
                </div>
                <div className="border-l border-line-dark px-3 py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">
                    Format
                  </dt>
                  <dd className="mt-1 text-xs font-semibold leading-tight text-paper sm:text-sm">Workshop-first</dd>
                </div>
                <div className="col-span-2 border-t border-line-dark py-4 sm:col-span-1 sm:border-l sm:border-t-0 sm:pl-3">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">
                    Practice
                  </dt>
                  <dd className="mt-1 text-xs font-semibold leading-tight text-paper sm:text-sm">Live machines</dd>
                </div>
              </dl>

              <div className="mt-3">
                {BRONZE_COURSE.modules.map((module, index) => (
                  <div
                    key={module.title}
                    className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 border-b border-line-dark py-4 sm:gap-4 sm:py-5"
                  >
                    <span className="pt-0.5 font-mono text-[10px] font-semibold tracking-[0.12em] text-ember-warm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold text-paper">{module.title}</p>
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-paper/60">
                        {module.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <dl className="mt-5 grid overflow-hidden rounded-card border border-line-dark sm:grid-cols-3">
                {BRONZE_COURSE.enrolmentDetails.map((detail, index) => (
                  <div
                    key={detail.label}
                    className={cn(
                      "px-4 py-4",
                      index > 0 && "border-t border-line-dark sm:border-l sm:border-t-0",
                    )}
                  >
                    <dt className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-paper/40">{detail.label}</dt>
                    <dd className="mt-1.5 text-xs font-semibold leading-snug text-paper sm:text-sm">{detail.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                <span className="uiverse-button-borders">
                  <a className="uiverse-primary-button" href={BRONZE_COURSE.cta.href}>
                    {BRONZE_COURSE.cta.label}
                  </a>
                </span>
                <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-paper/45">
                  Foundation course
                  <br />
                  Hands-on training
                </p>
              </div>
            </div>

            <div className="relative min-h-[340px] border-t border-line-dark sm:min-h-[420px] lg:min-h-full lg:border-l lg:border-t-0">
              <Image
                src={BRONZE_COURSE.image}
                alt={BRONZE_COURSE.imageAlt}
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="img-grade-dark object-cover object-[52%_58%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10"
              />
              <div aria-hidden="true" className="absolute inset-4 rounded-card border border-paper/15" />

              <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4">
                <span className="rounded-xs border border-paper/20 bg-ink/65 px-2.5 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-paper backdrop-blur-sm">
                  Course 01
                </span>
                <span className="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-paper/90 sm:text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember-warm shadow-[0_0_0_4px_rgba(255,107,99,0.14)]" />
                  Live workshop practice
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55">
                    Training environment
                  </p>
                  <p className="mt-1 max-w-xs text-sm font-semibold text-paper">
                    Learn on the equipment used in real workshops.
                  </p>
                </div>
                <span className="hidden shrink-0 rounded-xs bg-paper px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink sm:block">
                  Learn. Perform. Earn.
                </span>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Training tracks: spec-sheet rows */}
        <RevealGroup className="mt-10 sm:mt-12 md:mt-16">
          {TRAINING_TRACKS.map((track, i) => (
            <Reveal
              as="article"
              key={track.index}
              className={cn(
                "group grid items-start gap-4 border-t border-line py-6 transition-colors duration-200 hover:bg-white md:-mx-4 md:grid-cols-[72px_minmax(0,0.9fr)_minmax(0,1.1fr)] md:rounded-card md:px-4 md:py-10",
                i === TRAINING_TRACKS.length - 1 && "border-b",
              )}
            >
              <p className="spec-label text-ember">{track.index}</p>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-ink md:text-[1.65rem]">
                  {track.title}
                </h3>
                <p className="mt-2 max-w-md text-smoke">{track.description}</p>
              </div>

              <div className="flex flex-wrap content-start gap-2">
                {track.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
