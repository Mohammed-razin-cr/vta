"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { INDUSTRY_BRANDS } from "@/lib/content";

/** Seconds for one half-loop (the track is two copies, so -50% = one full cycle). */
const MARQUEE_DURATION = 38;

function BrandLogo({ brand }: { brand: (typeof INDUSTRY_BRANDS)[number] }) {
  return (
    <span className={`relative block h-12 shrink-0 md:h-14 ${brand.widthClass}`}>
      <Image
        src={brand.src}
        alt={brand.name}
        fill
        sizes="144px"
        className="object-contain object-center transition-opacity duration-200 hover:opacity-80"
      />
    </span>
  );
}

/** One full run of wordmarks; each followed by an ember tick so the loop tiles seamlessly. */
function BrandRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div aria-hidden={ariaHidden || undefined} className="flex shrink-0 items-center">
      {INDUSTRY_BRANDS.map((brand) => (
        <span key={brand.name} className="flex items-center">
          <BrandLogo brand={brand} />
          <span
            aria-hidden="true"
            className="mx-6 inline-block h-1 w-1 bg-ember opacity-70 md:mx-8"
          />
        </span>
      ))}
    </div>
  );
}

/**
 * Industry credibility strip under the hero. Typographic wordmarks only;
 * an infinite linear marquee that pauses on hover and renders as a static
 * wrapped grid when the visitor prefers reduced motion.
 */
export function TrustMarquee() {
  const reduced = useReducedMotion();
  const paused = useRef(false);
  const x = useMotionValue(0);
  const translate = useTransform(x, (value) => `${value}%`);

  useAnimationFrame((_time, delta) => {
    if (paused.current || reduced) return;
    // Linear drift: 50% of the track per MARQUEE_DURATION seconds.
    let next = x.get() - (delta / 1000) * (50 / MARQUEE_DURATION);
    if (next <= -50) next += 50;
    x.set(next);
  });

  return (
    <section aria-label="Industry brands" className="border-y border-line bg-paper py-9 md:py-10">
      <div className="container-shell flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
        <p className="spec-label max-w-[220px] shrink-0 text-smoke md:max-w-[200px]">
          Trusted across the industry
        </p>

        {reduced ? (
          <div className="flex flex-1 flex-wrap items-center gap-x-8 gap-y-3">
            {INDUSTRY_BRANDS.map((brand) => (
              <BrandLogo key={brand.name} brand={brand} />
            ))}
          </div>
        ) : (
          <div className="relative flex-1 overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent"
            />
            <motion.div
              className="flex w-max items-center"
              style={{ x: translate }}
              onHoverStart={() => {
                paused.current = true;
              }}
              onHoverEnd={() => {
                paused.current = false;
              }}
            >
              <BrandRow />
              <BrandRow ariaHidden />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
