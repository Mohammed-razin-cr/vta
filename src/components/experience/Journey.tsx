"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { JOURNEY } from "@/lib/content";
import { EASE_OUT } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const TOTAL = JOURNEY.length;

/**
 * 06: The Journey. Signature scroll section: sticky giant step counter on the
 * left synced to six step blocks on the right (lg+); a simple vertical
 * timeline below lg. Active-step tracking is a single IntersectionObserver
 * against the middle band of the viewport; discrete state changes only, no
 * scroll-linked transforms.
 */
export function Journey() {
  return (
    <section
      id="journey"
      className="border-y border-line bg-paper-deep py-16 sm:py-20 md:py-32"
    >
      <div className="container-shell">
        <SectionHeader
          index="03"
          kicker="The Journey"
          title={
            <>
              Six steps from first login to <em>first posting.</em>
            </>
          }
          lede="One connected path: learn, prove it, get certified, get placed, then keep climbing."
        />

        <DesktopJourney />
        <MobileJourney />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop (lg+): sticky counter + scroll-synced step blocks            */
/* ------------------------------------------------------------------ */

function DesktopJourney() {
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const blocks = blockRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    if (blocks.length === 0) return;

    // A block is "intersecting" while it crosses the middle band of the
    // viewport; the active step is the topmost such block.
    const visible = new Set<number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = Number((entry.target as HTMLElement).dataset.index ?? 0);
          if (entry.isIntersecting) visible.add(index);
          else visible.delete(index);
        }
        if (visible.size > 0) setActiveIndex(Math.min(...visible));
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );

    blocks.forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, []);

  const active = JOURNEY[activeIndex] ?? JOURNEY[0];

  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12">
      {/* Sticky counter */}
      <div className="h-fit self-start lg:sticky lg:top-28">
        <div
          aria-hidden="true"
          className="font-display text-[7rem] font-black leading-none tracking-tighter text-ink xl:text-[8.5rem]"
        >
          {reduced ? (
            <span className="block">{active.index}</span>
          ) : (
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={active.index}
                className="block"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25, ease: EASE_OUT }}
              >
                {active.index}
              </motion.span>
            </AnimatePresence>
          )}
        </div>

        <p className="spec-label mt-4 text-smoke">
          Step {active.index} / 06
        </p>

        {/* Progress rail */}
        <div aria-hidden="true" className="mt-8 flex flex-col gap-1.5">
          {JOURNEY.map((step, i) => (
            <span
              key={step.index}
              className={cn(
                "h-8 w-px",
                !reduced && "transition-colors duration-300 ease-expo-out",
                i <= activeIndex ? "bg-ember" : "bg-line-strong",
              )}
            />
          ))}
        </div>
      </div>

      {/* Step blocks */}
      <div>
        {JOURNEY.map((step, i) => (
          <div
            key={step.index}
            ref={(el) => {
              blockRefs.current[i] = el;
            }}
            data-index={i}
            className={cn(
              "flex min-h-[30vh] flex-col justify-center border-t border-line",
              i === TOTAL - 1 && "border-b",
            )}
          >
            <Reveal standalone>
              <span className="spec-label text-ember">{step.index}</span>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink xl:text-4xl">
                {step.title}
              </h3>
              <p className="mt-3 max-w-md text-lg leading-relaxed text-smoke">
                {step.description}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile / tablet (below lg): simple vertical timeline                 */
/* ------------------------------------------------------------------ */

function MobileJourney() {
  return (
    <div className="relative pl-8 lg:hidden">
      {/* Rail */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-[7px] top-0 w-px bg-line-strong"
      />

      <RevealGroup as="ol">
        {JOURNEY.map((step, i) => (
          <Reveal
            as="li"
            key={step.index}
            className={cn("relative", i === TOTAL - 1 ? "pb-0" : "pb-10")}
          >
            {/* Dot on the rail */}
            <span
              aria-hidden="true"
              className="absolute -left-8 top-0.5 h-[15px] w-[15px] rounded-full border-2 border-ember bg-paper-deep"
            />
            <span className="spec-label text-ember">{step.index}</span>
            <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-smoke">
              {step.description}
            </p>
          </Reveal>
        ))}
      </RevealGroup>
    </div>
  );
}
