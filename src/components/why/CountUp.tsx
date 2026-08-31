"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const formatter = new Intl.NumberFormat("en-US");

/** Count-up duration in ms. */
const DURATION = 1400;

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
};

/**
 * Counts from 0 to `value` with an ease-out curve once the element enters the
 * viewport, then appends the suffix. Server render, no-JS and reduced-motion
 * all show the final value immediately.
 */
export function CountUp({ value, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduced = useReducedMotion();

  // SSR / initial render shows the final value; the animation only takes over
  // once it actually starts, so there is never an empty or zeroed fallback.
  const [display, setDisplay] = useState(value);
  const [running, setRunning] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || reduced || started.current) return;
    started.current = true;

    let raf = 0;
    const start = performance.now();

    setRunning(true);
    setDisplay(0);

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setRunning(false);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className={className}>
      {/* Stable value for assistive tech; the animated copy is decorative. */}
      <span className="sr-only">
        {formatter.format(value)}
        {suffix}
      </span>
      <span aria-hidden="true">
        {formatter.format(display)}
        {running ? "" : suffix}
      </span>
    </span>
  );
}
