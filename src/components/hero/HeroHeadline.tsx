"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const STATIC_LINES = ["Real machines.", "Real skills."] as const;
const ROTATING_LINES = ["Real careers.", "Job-ready.", "EV-ready.", "Keep growing."] as const;
/**
 * GSAP-driven outcome rotation. The visible text
 * is decorative; a stable, complete h1 remains available to assistive tech.
 */
export function HeroHeadline() {
  const rootRef = useRef<HTMLHeadingElement>(null);
  const rotatingLineRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const staticLines = gsap.utils.toArray<HTMLElement>("[data-headline-static]", root);
    const rotatingLine = rotatingLineRef.current;
    if (!rotatingLine) return;

    if (reduced) {
      gsap.set(staticLines, { clearProps: "all" });
      rotatingLine.textContent = ROTATING_LINES[0];
      gsap.set(rotatingLine, { yPercent: 0, autoAlpha: 1 });
      return;
    }

    const context = gsap.context(() => {
      let activeIndex = 0;
      gsap.set(staticLines, { clearProps: "all" });
      gsap.set(rotatingLine, { yPercent: 0, autoAlpha: 1 });

      const rotation = gsap.timeline({
        repeat: -1,
        delay: 3.15,
        defaults: { ease: "expo.inOut" },
      });

      rotation
        .to(rotatingLine, { yPercent: -108, autoAlpha: 0, duration: 0.52 })
        .set(rotatingLine, { yPercent: 108 })
        .call(() => {
          activeIndex = (activeIndex + 1) % ROTATING_LINES.length;
          rotatingLine.textContent = ROTATING_LINES[activeIndex];
        })
        .to(rotatingLine, { yPercent: 0, autoAlpha: 1, duration: 0.58 })
        .to({}, { duration: 2.25 });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <h1
      ref={rootRef}
      className="mt-6 font-display text-[clamp(1.75rem,11vw,2.9rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-ink sm:text-display-xl lg:text-[clamp(3.35rem,5.15vw,5.6rem)]"
    >
      <span className="sr-only">Real machines. Real skills. Real careers.</span>
      <span aria-hidden="true" className="block">
        {STATIC_LINES.map((line) => (
          <span key={line} className="block overflow-hidden">
            <span data-headline-static className="block will-change-transform lg:whitespace-nowrap">
              {line}
            </span>
          </span>
        ))}

        <span className="block overflow-hidden">
          <span className="relative block h-[1em] whitespace-nowrap">
            <em
              ref={rotatingLineRef}
              data-headline-rotating
              className="absolute inset-0 block will-change-[transform,opacity]"
            >
              {ROTATING_LINES[0]}
            </em>
          </span>
        </span>
      </span>
    </h1>
  );
}
