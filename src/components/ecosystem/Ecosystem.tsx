"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { ECOSYSTEM } from "@/lib/content";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

/**
 * 05: VTA Talent Cloud. Dark platform section: audience tabs (candidates,
 * employers, trainers, partners) plus the platform capability set.
 */
export function Ecosystem() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const audiences = ECOSYSTEM.audiences;
  const audience = audiences[active];

  const handleTabKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const count = audiences.length;
    let next: number | null = null;

    if (event.key === "ArrowRight") next = (index + 1) % count;
    else if (event.key === "ArrowLeft") next = (index - 1 + count) % count;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = count - 1;

    if (next !== null) {
      event.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  const panelBody = (
    <>
      <div>
        <p className="font-display text-2xl font-bold leading-snug tracking-tight text-paper md:text-[1.7rem]">
          {audience.summary}
        </p>
        <Button className="mt-8" dark withArrow href={audience.cta.href}>
          {audience.cta.label}
        </Button>
      </div>

      <ul>
        {audience.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-center gap-3.5 border-t border-line-dark py-[18px] last:border-b"
          >
            <Check
              aria-hidden="true"
              className="h-[18px] w-[18px] shrink-0 text-ember-warm"
            />
            <span className="text-paper/80">{bullet}</span>
          </li>
        ))}
      </ul>
    </>
  );

  const panelClasses = "grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16";

  return (
    <section id="talent-cloud" className="bg-ink py-16 text-paper sm:py-20 md:py-32">
      <div className="container-shell">
        <SectionHeader
          dark
          index="05"
          kicker="VTA Talent Cloud"
          title={
            <>
              Training is step one. The <em>platform</em> carries the career.
            </>
          }
          lede="The VTA Talent Cloud connects learning, certification, hiring and growth for everyone in the ecosystem."
        />

        <Reveal standalone>
          <div
            role="tablist"
            aria-label="Who the platform serves"
            className="grid grid-cols-2 border-b border-line-dark sm:flex sm:gap-1"
          >
            {audiences.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.key}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`talent-tab-${item.key}`}
                  aria-selected={isActive}
                  aria-controls={`talent-panel-${item.key}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={cn(
                    "relative min-h-11 cursor-pointer whitespace-nowrap border-t border-line-dark px-3 py-3 text-left font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 first:border-t-0 even:border-l sm:border-l-0 sm:border-t-0 sm:px-4 sm:text-xs sm:tracking-[0.18em]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
                    isActive ? "text-paper" : "text-paper/50 hover:text-paper/80",
                  )}
                >
                  {item.title}
                  {isActive &&
                    (reduced ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-px h-[2px] bg-ember"
                      />
                    ) : (
                      <motion.span
                        aria-hidden="true"
                        layoutId="tab-underline"
                        transition={{ duration: 0.28, ease: EASE_OUT }}
                        className="absolute inset-x-0 -bottom-px h-[2px] bg-ember"
                      />
                    ))}
                </button>
              );
            })}
          </div>

          <div className="mt-10 min-h-[26rem] md:mt-12 md:min-h-[20rem] lg:min-h-[15rem]">
            {reduced ? (
              <div
                id={`talent-panel-${audience.key}`}
                role="tabpanel"
                aria-labelledby={`talent-tab-${audience.key}`}
                className={panelClasses}
              >
                {panelBody}
              </div>
            ) : (
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={audience.key}
                  id={`talent-panel-${audience.key}`}
                  role="tabpanel"
                  aria-labelledby={`talent-tab-${audience.key}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.22, ease: EASE_OUT }}
                  className={panelClasses}
                >
                  {panelBody}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </Reveal>

        <Reveal standalone className="mt-14 md:mt-16">
          <p className="spec-label text-paper/50">Platform capabilities</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {ECOSYSTEM.capabilities.map((capability) => (
              <Tag key={capability} dark>
                {capability}
              </Tag>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Ecosystem;
