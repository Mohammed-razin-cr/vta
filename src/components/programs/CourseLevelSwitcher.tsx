"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { COURSE_LEVELS } from "@/lib/content";
import { cn } from "@/lib/utils";

type CourseId = (typeof COURSE_LEVELS)[number]["id"];

export function CourseLevelSwitcher() {
  const [activeId, setActiveId] = useState<CourseId>("bronze");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeCourse = COURSE_LEVELS.find((course) => course.id === activeId) ?? COURSE_LEVELS[0];

  const selectByIndex = (index: number) => {
    const nextIndex = (index + COURSE_LEVELS.length) % COURSE_LEVELS.length;
    const nextCourse = COURSE_LEVELS[nextIndex];
    setActiveId(nextCourse.id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="spec-label text-smoke">Choose your level</p>
        <p className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-smoke-light sm:block">
          Foundation to mastery
        </p>
      </div>

      <div
        role="tablist"
        aria-label="VTA course levels"
        className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-4"
      >
        {COURSE_LEVELS.map((course, index) => {
          const active = course.id === activeId;
          return (
            <button
              key={course.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={`course-tab-${course.id}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`course-panel-${course.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => setActiveId(course.id)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                  event.preventDefault();
                  selectByIndex(index + 1);
                }
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                  event.preventDefault();
                  selectByIndex(index - 1);
                }
                if (event.key === "Home") {
                  event.preventDefault();
                  selectByIndex(0);
                }
                if (event.key === "End") {
                  event.preventDefault();
                  selectByIndex(COURSE_LEVELS.length - 1);
                }
              }}
              className={cn(
                "group relative min-h-[88px] cursor-pointer px-4 py-3.5 text-left transition-colors duration-200 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ember",
                active ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-white",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-0 top-0 h-0.5 bg-ember transition-opacity duration-200",
                  active ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                )}
              />
              <span className={cn("font-mono text-[9px] font-semibold uppercase tracking-[0.16em]", active ? "text-paper/45" : "text-smoke-light")}>
                Level {course.index}
              </span>
              <span className="mt-1.5 block font-display text-base font-bold sm:text-lg">{course.shortTitle}</span>
              <span className={cn("mt-0.5 block text-[11px]", active ? "text-paper/55" : "text-smoke")}>{course.stage}</span>
            </button>
          );
        })}
      </div>

      <article
        key={activeCourse.id}
        id={`course-panel-${activeCourse.id}`}
        role="tabpanel"
        aria-labelledby={`course-tab-${activeCourse.id}`}
        tabIndex={0}
        className="relative mt-4 grid overflow-hidden rounded-media border border-line-dark bg-ink text-paper shadow-[0_24px_70px_-42px_rgba(22,19,15,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember lg:grid-cols-[1.04fr_0.96fr]"
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-[3px] bg-ember" />

        <div className="flex flex-col p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="spec-label text-ember-warm">{activeCourse.kicker}</p>
              <h3 className="mt-4 max-w-xl font-display text-display-md text-paper">{activeCourse.title}</h3>
            </div>
            <span className="hidden font-mono text-xs font-semibold tracking-[0.18em] text-paper/25 sm:block">
              {activeCourse.index}
            </span>
          </div>

          <dl className="mt-6 grid grid-cols-2 border-y border-line-dark sm:grid-cols-3">
            <div className="py-4 pr-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">Duration</dt>
              <dd className="mt-1 text-xs font-semibold leading-tight text-paper sm:text-sm">{activeCourse.duration}</dd>
            </div>
            <div className="border-l border-line-dark px-3 py-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">Format</dt>
              <dd className="mt-1 text-xs font-semibold leading-tight text-paper sm:text-sm">{activeCourse.format}</dd>
            </div>
            <div className="col-span-2 border-t border-line-dark py-4 sm:col-span-1 sm:border-l sm:border-t-0 sm:pl-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">Practice</dt>
              <dd className="mt-1 text-xs font-semibold leading-tight text-paper sm:text-sm">{activeCourse.practice}</dd>
            </div>
          </dl>

          <div className="mt-3">
            {activeCourse.modules.map((module, index) => (
              <div key={module.title} className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 border-b border-line-dark py-4 sm:gap-4 sm:py-5">
                <span className="pt-0.5 font-mono text-[10px] font-semibold tracking-[0.12em] text-ember-warm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-paper">{module.title}</p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-paper/60">{module.description}</p>
                </div>
              </div>
            ))}
          </div>

          <dl className="mt-5 grid overflow-hidden rounded-card border border-line-dark sm:grid-cols-3">
            {activeCourse.enrolmentDetails.map((detail, index) => (
              <div key={detail.label} className={cn("px-4 py-4", index > 0 && "border-t border-line-dark sm:border-l sm:border-t-0")}>
                <dt className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-paper/40">{detail.label}</dt>
                <dd className="mt-1.5 text-xs font-semibold leading-snug text-paper sm:text-sm">{detail.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="uiverse-button-borders">
              <a className="uiverse-primary-button" href={activeCourse.cta.href}>{activeCourse.cta.label}</a>
            </span>
            <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-paper/45">
              {activeCourse.stage} level
              <br />
              Hands-on training
            </p>
          </div>
        </div>

        <div className="relative min-h-[340px] border-t border-line-dark sm:min-h-[420px] lg:min-h-full lg:border-l lg:border-t-0">
          <Image
            src={activeCourse.image}
            alt={activeCourse.imageAlt}
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="img-grade-dark object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
          <div aria-hidden="true" className="absolute inset-4 rounded-card border border-paper/15" />

          <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4">
            <span className="rounded-xs border border-paper/20 bg-ink/65 px-2.5 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-paper backdrop-blur-sm">
              Course {activeCourse.index}
            </span>
            <span className="flex items-center gap-2 text-right font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-paper/90 sm:text-[10px]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember-warm shadow-[0_0_0_4px_rgba(255,107,99,0.14)]" />
              Live workshop practice
            </span>
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55">Training environment</p>
              <p className="mt-1 max-w-xs text-sm font-semibold text-paper">Learn on the equipment used in real workshops.</p>
            </div>
            <span className="hidden shrink-0 rounded-xs bg-paper px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink sm:block">
              Learn. Perform. Earn.
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
