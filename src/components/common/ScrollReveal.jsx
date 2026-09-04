"use client";
import { useEffect } from "react";
/**
 * Mount once per page. Observes every element carrying the `.reveal`
 * class (see src/styles/landing.css) and adds `.in-view` when it
 * scrolls into the viewport, mirroring the original vanilla-JS
 * IntersectionObserver behavior exactly, including the
 * prefers-reduced-motion bypass.
 */
export function ScrollReveal() {
    useEffect(() => {
        const revealElements = document.querySelectorAll(".reveal");
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion || !("IntersectionObserver" in window)) {
            revealElements.forEach((el) => el.classList.add("in-view"));
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    return null;
}
