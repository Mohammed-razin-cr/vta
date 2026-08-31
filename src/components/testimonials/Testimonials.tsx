"use client";

import Image from "next/image";
import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const pad = (n: number) => String(n).padStart(2, "0");

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  return (
    <article className="relative h-full w-[calc(100vw-32px)] max-w-[530px] shrink-0 rounded-[30px] border border-line bg-white p-4 pt-12 shadow-[0_26px_70px_-40px_rgba(22,19,15,0.48)] sm:w-[530px] sm:p-6 sm:pt-14">
      <span className="absolute left-5 top-5 z-10 rounded-[14px] border border-white bg-[#f3f4f3] px-5 py-2 font-display text-base font-semibold text-ink shadow-[0_10px_24px_-16px_rgba(22,19,15,0.45)] sm:left-7 sm:text-lg">
        Testimonial
      </span>
      <span className="absolute right-5 top-6 font-mono text-[10px] font-semibold tracking-[0.18em] text-smoke-light sm:right-7">
        {pad(index + 1)} / {pad(TESTIMONIALS.length)}
      </span>

      <blockquote className="grid min-h-[270px] grid-cols-[78px_minmax(0,1fr)] items-center gap-4 rounded-[22px] border border-line bg-[#fbfbfa] px-4 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_14px_35px_-32px_rgba(22,19,15,.45)] max-[299px]:grid-cols-1 max-[299px]:items-start sm:min-h-[300px] sm:grid-cols-[128px_minmax(0,1fr)] sm:gap-7 sm:px-6 sm:py-9">
        <div className="relative aspect-square w-full overflow-hidden rounded-full border-[3px] border-white bg-[#eceeec] shadow-[0_12px_26px_-16px_rgba(22,19,15,0.72)] max-[299px]:w-[72px]">
          <Image
            src={testimonial.avatar}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 639px) 78px, 128px"
            className="object-cover object-top"
          />
        </div>

        <div className="min-w-0">
          <svg
            aria-hidden="true"
            viewBox="0 0 150 22"
            className="mt-2 h-5 w-[120px] text-smoke-light sm:w-[145px]"
            fill="none"
          >
            <path
              d="M2 11c12-12 24-12 36 0s24 12 36 0 24-12 36 0 24 12 38 0M38 11c8-8 16-8 24 0s16 8 24 0 16-8 24 0"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <p className="mt-3 text-base leading-[1.48] text-ink/78 sm:text-[1.05rem]">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ember">
            {testimonial.role}
          </p>
        </div>
      </blockquote>
    </article>
  );
}

export function Testimonials() {
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <section id="stories" className="overflow-hidden border-t border-line bg-white py-16 sm:py-20 md:py-32">
      <div className="container-shell relative">
        <SectionHeader
          index="06"
          kicker="Voices"
          title={
            <>
              What the floor <em>actually says.</em>
            </>
          }
          lede="Perspectives from the people learning, teaching and hiring across the VOC ecosystem."
        />
        {!reducedMotion && (
          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-pressed={paused}
            className="mb-7 inline-flex min-h-11 items-center gap-2 rounded-btn border border-line-strong bg-white px-4 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:absolute sm:bottom-0 sm:right-8 sm:mb-0"
          >
            {paused ? <Play aria-hidden="true" className="h-4 w-4" /> : <Pause aria-hidden="true" className="h-4 w-4" />}
            {paused ? "Play reviews" : "Pause reviews"}
          </button>
        )}
      </div>

      <Reveal standalone>
        <div
          className="testimonial-marquee"
          role="region"
          aria-label="Seven continuously scrolling testimonials."
          data-paused={paused ? "true" : "false"}
        >
          <div className="testimonial-marquee__track">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="testimonial-marquee__group"
                aria-hidden={groupIndex === 1 ? "true" : undefined}
              >
                {TESTIMONIALS.map((testimonial, index) => (
                  <TestimonialCard
                    key={`${groupIndex}-${testimonial.name}-${testimonial.role}`}
                    testimonial={testimonial}
                    index={index}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
