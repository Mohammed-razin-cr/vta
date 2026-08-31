"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a "10,000+" / "95%" style string up from 0 once its bound
 * element scrolls into view, matching the original count-up script
 * (cubic ease-out, IntersectionObserver-triggered, single run).
 */
export function useCountUp(rawValue: string, duration: number) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const match = rawValue.match(/^([\d,]+)(.*)$/);
    if (!match) {
      setDisplay(rawValue);
      return;
    }

    const target = parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = match[2];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplay(target.toLocaleString() + suffix);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();

            function tick(now: number) {
              const progress = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(target * eased).toLocaleString() + suffix);
              if (progress < 1) requestAnimationFrame(tick);
            }

            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rawValue, duration]);

  return { display, ref };
}
