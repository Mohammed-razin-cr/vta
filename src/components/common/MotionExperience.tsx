"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export function MotionExperience() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const pointerCleanups: Array<() => void> = [];
    const textSplits: SplitText[] = [];

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(".reveal, [data-hero-reveal]", { clearProps: "all" });
        return;
      }

      const heroTitle = document.querySelector<HTMLElement>(".hero-title");
      const heroSplit = heroTitle ? new SplitText(heroTitle, { type: "lines", linesClass: "motion-line" }) : null;
      if (heroSplit) textSplits.push(heroSplit);

      const heroTimeline = gsap.timeline({ defaults: { ease: "expo.out" } });
      heroTimeline
        .from(".hero-eyebrow", {
          y: 36,
          opacity: 0,
          duration: 0.72,
        })
        .from(heroSplit?.lines ?? ".hero-title", {
          yPercent: 110,
          rotateX: -48,
          rotateZ: 1.5,
          opacity: 0,
          transformOrigin: "50% 100%",
          transformPerspective: 900,
          duration: 1,
          stagger: 0.1,
        }, "-=0.48")
        .from(".hero-lede, .hero-actions, .hero-highlights", {
          y: 24,
          opacity: 0,
          duration: .72,
          stagger: .1,
        }, "-=.58")
        .from(
          "[data-hero-visual]",
          { x: 70, z: -120, rotateY: -18, rotateX: 5, opacity: 0, duration: 1.35, transformPerspective: 1200 },
          "-=1.05"
        );

      gsap.utils.toArray<HTMLElement>(".section-title").forEach((title) => {
        const split = new SplitText(title, { type: "lines", linesClass: "motion-line" });
        textSplits.push(split);
        gsap.from(split.lines, {
          yPercent: 95,
          rotateX: -35,
          opacity: 0,
          transformOrigin: "50% 100%",
          transformPerspective: 800,
          duration: .82,
          stagger: .08,
          ease: "expo.out",
          scrollTrigger: { trigger: title, start: "top 86%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        if (element.closest("[data-hero]") || element.matches(".section-title")) return;
        const isTilt = element.classList.contains("tilt-card");
        gsap.from(element, {
          opacity: 0,
          y: isTilt ? 42 : 20,
          z: isTilt ? -54 : 0,
          rotateX: isTilt ? 7 : 0,
          scale: isTilt ? .965 : 1,
          duration: isTilt ? .9 : .64,
          ease: "expo.out",
          transformPerspective: 1100,
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((layer) => {
        const amount = Number(layer.dataset.parallax ?? 8);
        gsap.to(layer, {
          yPercent: amount,
          ease: "none",
          scrollTrigger: {
            trigger: layer.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".tilt-card").forEach((card) => {
        const xTo = gsap.quickTo(card, "rotationY", { duration: 0.45, ease: "power3.out" });
        const yTo = gsap.quickTo(card, "rotationX", { duration: 0.45, ease: "power3.out" });
        const zTo = gsap.quickTo(card, "z", { duration: 0.45, ease: "power3.out" });
        const scaleTo = gsap.quickTo(card, "scale", { duration: 0.45, ease: "power3.out" });

        const onPointerMove = (event: PointerEvent) => {
          const bounds = card.getBoundingClientRect();
          const px = (event.clientX - bounds.left) / bounds.width;
          const py = (event.clientY - bounds.top) / bounds.height;
          card.style.setProperty("--glow-x", `${px * 100}%`);
          card.style.setProperty("--glow-y", `${py * 100}%`);
          xTo((px - 0.5) * 8);
          yTo((py - 0.5) * -8);
          zTo(10);
          scaleTo(1.012);
        };
        const onPointerLeave = () => {
          xTo(0);
          yTo(0);
          zTo(0);
          scaleTo(1);
        };

        card.addEventListener("pointermove", onPointerMove);
        card.addEventListener("pointerleave", onPointerLeave);
        card.addEventListener("pointercancel", onPointerLeave);

        pointerCleanups.push(() => {
          card.removeEventListener("pointermove", onPointerMove);
          card.removeEventListener("pointerleave", onPointerLeave);
          card.removeEventListener("pointercancel", onPointerLeave);
        });
      });

      const hero = document.querySelector<HTMLElement>("[data-hero]");
      const heroVisual = document.querySelector<HTMLElement>("[data-hero-visual]");
      if (hero && heroVisual && window.matchMedia("(pointer: fine)").matches) {
        const xTo = gsap.quickTo(heroVisual, "x", { duration: .8, ease: "power3.out" });
        const yTo = gsap.quickTo(heroVisual, "y", { duration: .8, ease: "power3.out" });
        const rotateYTo = gsap.quickTo(heroVisual, "rotationY", { duration: .8, ease: "power3.out" });
        const rotateXTo = gsap.quickTo(heroVisual, "rotationX", { duration: .8, ease: "power3.out" });
        const onHeroMove = (event: PointerEvent) => {
          const bounds = hero.getBoundingClientRect();
          const nx = (event.clientX - bounds.left) / bounds.width - .5;
          const ny = (event.clientY - bounds.top) / bounds.height - .5;
          xTo(nx * 16); yTo(ny * 10); rotateYTo(nx * 4); rotateXTo(ny * -3);
        };
        const onHeroLeave = () => { xTo(0); yTo(0); rotateYTo(0); rotateXTo(0); };
        hero.addEventListener("pointermove", onHeroMove);
        hero.addEventListener("pointerleave", onHeroLeave);
        pointerCleanups.push(() => { hero.removeEventListener("pointermove", onHeroMove); hero.removeEventListener("pointerleave", onHeroLeave); });
      }
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });

    return () => {
      window.removeEventListener("load", refresh);
      pointerCleanups.forEach((cleanup) => cleanup());
      textSplits.forEach((split) => split.revert());
      context.revert();
    };
  }, []);

  return null;
}
