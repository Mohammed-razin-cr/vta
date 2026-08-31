"use client";

import { useEffect, useRef } from "react";

const AUDIENCES = [
  {
    index: "01",
    title: "Learners",
    detail: "Learn & upskill",
    image: "/assets/avatar-learner.jpg",
    video: "/assets/videos/learners-bg.mp4",
  },
  {
    index: "02",
    title: "Trainers",
    detail: "Teach & empower",
    image: "/assets/avatar-trainer.jpg",
    video: "/assets/videos/talent-cloud-trainers.mp4",
  },
  {
    index: "03",
    title: "Employers",
    detail: "Hire & grow",
    image: "/assets/avatar-employer.jpg",
    video: "/assets/videos/talent-cloud-employers.mp4",
  },
  {
    index: "04",
    title: "Partners",
    detail: "Impact & enable",
    image: "/assets/card-partners.png",
    video: "/assets/videos/talent-cloud-partners.mp4",
  },
] as const;

const CONNECTOR_POINTS = ["25%", "50%", "75%"] as const;

export function AudiencePathway() {
  const pathwayRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const pathway = pathwayRef.current;
    if (!pathway) return;

    const videos = Array.from(pathway.querySelectorAll("video"));
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = false;
    const syncAnimation = () => {
      const shouldPlay = isVisible && !document.hidden && !motionPreference.matches;
      pathway.dataset.motionActive = String(shouldPlay);

      videos.forEach((video) => {
        if (shouldPlay) {
          video.muted = true;
          void video.play().catch(() => undefined);
        } else {
          video.pause();
          if (motionPreference.matches) video.currentTime = 0;
        }
      });
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        syncAnimation();
      },
      { threshold: 0.15 },
    );

    observer.observe(pathway);
    motionPreference.addEventListener("change", syncAnimation);
    document.addEventListener("visibilitychange", syncAnimation);
    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", syncAnimation);
      document.removeEventListener("visibilitychange", syncAnimation);
    };
  }, []);

  return (
    <section
      ref={pathwayRef}
      aria-labelledby="audience-pathway-title"
      className="audience-pathway mx-auto w-full max-w-[720px]"
    >
      <h2 id="audience-pathway-title" className="sr-only">
        The Talent Cloud connects learners, trainers, employers and partners
      </h2>

      <div className="relative">
        <div
          aria-hidden="true"
          className="audience-pathway__rail absolute left-[5%] right-[5%] top-[65px] z-0 hidden h-[5px] overflow-hidden rounded-full border-y border-ink/35 bg-gradient-to-b from-white via-smoke-light to-ink shadow-[0_2px_5px_rgba(22,19,15,0.22)] sm:block md:top-[73px] xl:top-[81px]"
        >
          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/70" />
        </div>

        <div aria-hidden="true" className="absolute inset-x-0 top-[59px] z-[1] hidden sm:block md:top-[67px] xl:top-[75px]">
          {CONNECTOR_POINTS.map((left) => (
            <span
              key={left}
              style={{ left }}
              className="audience-pathway__junction-wrap absolute flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-smoke-light bg-paper shadow-lift-sm"
            >
              <span className="audience-pathway__junction h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_rgba(228,50,43,0.65)]" />
            </span>
          ))}
        </div>

        <ol className="relative z-[2] mx-auto grid max-w-[310px] grid-cols-2 gap-2 sm:max-w-none sm:grid-cols-4 md:gap-4">
          {AUDIENCES.map((audience, index) => (
            <li
              key={audience.index}
              className={`audience-pathway__item flex min-w-0 flex-col items-center rounded-card border bg-white p-2.5 text-center shadow-lift-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none ${
                index === 0 ? "border-ember/35" : "border-line"
              }`}
            >
              <p className="font-mono text-[10px] font-bold tracking-[0.14em] text-ember sm:text-xs md:text-sm">
                {audience.index}
              </p>

              <div
                className={`audience-pathway__node relative mt-1.5 aspect-square w-full max-w-[92px] rounded-full bg-[conic-gradient(from_30deg,#5f5b55,#f7f5ef_12%,#8d877f_24%,#ffffff_36%,#68635d_50%,#eeeae3_64%,#77716a_78%,#ffffff_90%,#5f5b55)] p-[4px] sm:mt-2 sm:w-20 sm:max-w-none md:w-24 xl:w-28 ${
                  index === 0
                    ? "shadow-[0_0_0_2px_rgba(228,50,43,0.8),0_0_28px_rgba(228,50,43,0.24),0_18px_30px_-22px_rgba(22,19,15,0.55)]"
                    : "shadow-[0_18px_30px_-22px_rgba(22,19,15,0.55)]"
                }`}
              >
                <span aria-hidden="true" className="absolute inset-[4px] rounded-full border border-white/80" />
                <div className="relative h-full w-full overflow-hidden rounded-full border border-ink/35 bg-white p-1 sm:p-1">
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-paper-deep">
                    <video
                      src={audience.video}
                      poster={audience.image}
                      aria-hidden="true"
                      tabIndex={-1}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      disablePictureInPicture
                      controlsList="nodownload noplaybackrate"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <h3 className="mt-2.5 font-display text-sm font-bold tracking-tight text-ink md:text-base xl:text-lg">
                {audience.title}
              </h3>
              <p className="mt-0.5 text-[11px] text-smoke md:text-xs">{audience.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
