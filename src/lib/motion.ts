import type { Variants } from "framer-motion";

/** Shared motion language. Use these instead of ad-hoc values. */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATION = {
  micro: 0.2,
  reveal: 0.65,
  slow: 0.9,
} as const;

export const VIEWPORT = { once: true, margin: "-12% 0px" } as const;

/** Rise + fade for a single element. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE_OUT },
  },
};

/** Parent container that staggers `rise` children. */
export const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

/** Subtle fade for large media blocks. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.slow, ease: EASE_OUT } },
};
