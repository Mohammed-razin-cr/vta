"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { BRAND, CAREER, FACILITIES_BACKDROP, WHY_VOC } from "@/lib/content";
import { EASE_OUT, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Staggers the three tagline lines. */
const taglineGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/** Each line rises out of its overflow-hidden wrapper. */
const taglineLine: Variants = {
  hidden: { y: "105%" },
  visible: { y: "0%", transition: { duration: 0.85, ease: EASE_OUT } },
};

const TAGLINE_CLASS =
  "mt-7 font-display font-black uppercase leading-[0.92] tracking-[-0.025em] text-[clamp(2.55rem,14vw,3.4rem)] sm:text-[clamp(3.4rem,6.2vw,6.4rem)]";

/**
 * Career: the emotional finale + final CTA band.
 * Dark ink surface, the brand tagline at display scale, and the one
 * allowed gradient moment on "Earn."
 */
export function Career() {
  const reduced = useReducedMotion();

  const [trained, outlets] = WHY_VOC.stats;
  const proofItems = [
    {
      value: `${trained.value.toLocaleString("en-US")}${trained.suffix}`,
      label: trained.label,
    },
    {
      value: `${outlets.value.toLocaleString("en-US")}${outlets.suffix}`,
      label: outlets.label,
    },
    { value: "100%", label: WHY_VOC.jobAssurance.replace("100% ", "") },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line-dark bg-ink py-16 text-paper sm:py-20 md:py-32"
    >
      <div className="container-shell relative">
        <div className="grid min-w-0 items-stretch gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="flex min-w-0 flex-col justify-center">
            <Reveal standalone>
              <div className="flex items-center gap-3">
                <span className="spec-label text-ember-warm">07</span>
                <p className="spec-label text-paper/50">The next shift starts here</p>
              </div>
            </Reveal>

            {reduced ? (
              <h2 className={TAGLINE_CLASS}>
                {BRAND.tagline.map((word, i) => (
                  <span
                    key={word}
                    className={cn(
                      "block",
                      i === BRAND.tagline.length - 1 ? "text-ember" : "text-paper",
                    )}
                  >
                    {word}.
                  </span>
                ))}
              </h2>
            ) : (
              <motion.h2
                className={TAGLINE_CLASS}
                variants={taglineGroup}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
              >
                {BRAND.tagline.map((word, i) => (
                  <span key={word} className="block overflow-hidden">
                    <motion.span
                      variants={taglineLine}
                      className={cn(
                        "block",
                        i === BRAND.tagline.length - 1 ? "text-ember" : "text-paper",
                      )}
                    >
                      {word}.
                    </motion.span>
                  </span>
                ))}
              </motion.h2>
            )}

            <Reveal standalone>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
                From your first workshop hour to your first posting: one path, on
                real machines, backed by the VOC Automotive network.
              </p>
            </Reveal>

            <Reveal standalone>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button size="lg" withArrow href={CAREER.ctaPrimary.href}>
                  {CAREER.ctaPrimary.label}
                </Button>
                <Button size="lg" variant="secondary" dark href={CAREER.ctaSecondary.href}>
                  {CAREER.ctaSecondary.label}
                </Button>
                <a
                  href={CAREER.ctaTertiary.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-[52px] cursor-pointer items-center gap-2 rounded-btn px-2 text-base font-semibold text-paper/70 transition-colors duration-200 ease-expo-out hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  <span>{CAREER.ctaTertiary.label}</span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal standalone>
            <div className="overflow-hidden rounded-media border border-line-dark bg-ink-soft shadow-lift">
              <div className="relative min-h-[190px] sm:min-h-[230px]">
                <Image
                  src={FACILITIES_BACKDROP.image}
                  alt={FACILITIES_BACKDROP.alt}
                  fill
                  sizes="(min-width: 1280px) 620px, (min-width: 1024px) 52vw, 100vw"
                  className="img-grade-dark object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-5 py-4 sm:px-6">
                  <p className="spec-label text-ember-warm">Live equipment / real practice</p>
                  <p className="mt-1 font-display text-lg font-bold text-paper">Train where the work happens.</p>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <ContactForm dark />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal standalone>
          <ul className="mt-14 grid border-y border-line-dark sm:grid-cols-3">
            {proofItems.map((item, index) => (
              <li
                key={item.label}
                className={cn(
                  "py-5 sm:px-6",
                  index > 0 && "border-t border-line-dark sm:border-l sm:border-t-0",
                  index === 0 && "sm:pl-0",
                )}
              >
                <strong className="block font-display text-2xl font-extrabold text-paper">
                  {item.value}
                </strong>
                <span className="spec-label mt-1 block text-paper/45">{item.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default Career;
