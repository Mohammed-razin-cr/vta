"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TEXT_SELECTOR = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "label",
  "legend",
  "blockquote",
  "figcaption",
  "nav a",
  "footer a",
  "button",
  "[data-text-reveal]",
].join(",");

function isMotionCandidate(element: HTMLElement) {
  if (!element.textContent?.trim()) return false;
  if (element.closest("[aria-hidden='true'], [data-text-motion-ignore]")) return false;
  if (element.matches("[data-no-text-motion]")) return false;
  if (element.getClientRects().length === 0) return false;

  const styles = window.getComputedStyle(element);
  return styles.display !== "none" && styles.visibility !== "hidden";
}

export function GlobalTextMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let frame = 0;
    let disposed = false;
    const context = gsap.context(() => undefined);

    frame = window.requestAnimationFrame(() => {
      context.add(() => {
        const root = document.body;
        const elements = gsap.utils
          .toArray<HTMLElement>(TEXT_SELECTOR, root)
          .filter(isMotionCandidate);
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduceMotion) {
          gsap.set(elements, { clearProps: "all" });
          return;
        }

        const viewportEdge = window.innerHeight * 0.94;
        const entranceText: HTMLElement[] = [];
        const scrollText: HTMLElement[] = [];

        elements.forEach((element) => {
          const bounds = element.getBoundingClientRect();
          (bounds.top < viewportEdge && bounds.bottom > 0 ? entranceText : scrollText).push(element);
        });

        gsap.from(entranceText, {
          y: 8,
          opacity: 0.55,
          duration: 0.34,
          stagger: { each: 0.018, amount: Math.min(0.16, entranceText.length * 0.018) },
          ease: "power1.out",
          clearProps: "transform,opacity",
        });

        scrollText.forEach((element) => {
          gsap.from(element, {
            y: 8,
            opacity: 0.55,
            duration: 0.34,
            ease: "power1.out",
            clearProps: "transform,opacity",
            scrollTrigger: { trigger: element, start: "top 92%", once: true },
          });
        });

        const refresh = () => {
          if (!disposed) ScrollTrigger.refresh();
        };
        const pendingImages = Array.from(root.querySelectorAll("img")).filter(
          (image) => !image.complete,
        );

        ScrollTrigger.refresh();
        document.fonts.ready.then(refresh);
        Promise.all(
          pendingImages.map(
            (image) =>
              new Promise<void>((resolve) => {
                image.addEventListener("load", () => resolve(), { once: true });
                image.addEventListener("error", () => resolve(), { once: true });
              }),
          ),
        ).then(refresh);
      });
    });

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      context.revert();
    };
  }, [pathname]);

  return null;
}
