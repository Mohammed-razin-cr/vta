"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { FACILITIES } from "@/lib/content";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const SCROLL_STEP = 400;

/**
 * Section 04: Facilities. A horizontally scrolling gallery of the academy's
 * training areas: snap-scrolling cards on all sizes, with prev/next controls
 * on md+ (native swipe on mobile).
 */
export function Facilities() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const scrollByStep = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({
      left: direction * SCROLL_STEP,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  const controlClasses =
    "inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-btn border border-line-strong text-ink transition-colors duration-200 ease-expo-out hover:border-ink hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

  return (
    <section id="facilities" className="border-t border-line bg-paper py-16 sm:py-20 md:py-32">
      <div className="container-shell flex items-end justify-between gap-8">
        <SectionHeader
          index="04"
          kicker="Inside the academy"
          className="mb-0 md:mb-0"
          title={
            <>
              Built like the workshops <em>you&apos;ll work in.</em>
            </>
          }
          lede="Classrooms, circuit benches, engine bays and live service areas. Training happens where the work happens."
        />
        <div className="hidden shrink-0 gap-2 pb-2 md:flex">
          <button
            type="button"
            aria-label="Previous facility"
            onClick={() => scrollByStep(-1)}
            className={controlClasses}
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next facility"
            onClick={() => scrollByStep(1)}
            className={`${controlClasses} w-auto px-4 text-sm font-semibold`}
          >
            Next
          </button>
        </div>
      </div>

      <div className="container-shell mt-12">
        <div className="mb-4 flex items-center justify-between md:hidden" aria-hidden="true">
          <span className="spec-label text-smoke-light">Swipe to explore</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ember">01 / 05</span>
        </div>
        <div
          ref={trackRef}
          role="region"
          aria-label="Academy facilities"
          tabIndex={0}
          className="touch-pan-x snap-x snap-mandatory overflow-x-auto pb-2 scrollbar-hide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          <RevealGroup className="flex w-max gap-5 md:gap-6">
            {FACILITIES.map((facility, i) => (
              <Reveal
                key={facility.title}
                as="figure"
                className="group w-[78vw] shrink-0 snap-start overflow-hidden rounded-media border border-line bg-white sm:w-[380px] lg:w-[420px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={`${facility.title} at VOC Technical Academy`}
                    fill
                    sizes="(max-width: 640px) 78vw, 420px"
                    className="img-grade object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between border-t border-line px-5 py-4">
                  <span className="font-semibold text-ink">{facility.title}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-smoke-light">
                    {`0${i + 1} / 05`}
                  </span>
                </figcaption>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

export default Facilities;
