"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
const COURSE_LEVELS = [
    {
        id: "beginner",
        index: "01",
        shortTitle: "Beginner",
        stage: "Foundation",
        kicker: "Flagship foundation course",
        title: "Beginner Level Course",
        duration: "120 hours",
        format: "Workshop-first",
        practice: "Live machines",
        image: "/assets/bronze-course-workshop.jpg",
        imageAlt: "Motorcycle mechanic carrying out hands-on service work inside a real workshop",
        modules: [
            { title: "Tools & Equipment", description: "Identification and safe use of general-purpose workshop tools." },
            { title: "Workshop Equipment", description: "Usage, maintenance and safety practices across core service equipment." },
            { title: "Measuring Instruments", description: "Practical use of specialist tools and measuring equipment." },
        ],
    },
    {
        id: "bronze",
        index: "02",
        shortTitle: "Bronze",
        stage: "Progression",
        kicker: "Applied technician course",
        title: "Bronze Level Course",
        duration: "Ask admissions",
        format: "Workshop-first",
        practice: "Engine systems",
        image: "/assets/silver-course-engine-workshop.webp",
        imageAlt: "VTA learner servicing a motorcycle engine in the workshop",
        modules: [
            { title: "Engine Fundamentals", description: "Build practical confidence in engine inspection and service procedures." },
            { title: "Periodic Maintenance", description: "Apply structured multi-brand maintenance routines on live machines." },
            { title: "Electrical Foundations", description: "Practice essential circuit checks and workshop-safe diagnosis." },
        ],
    },
    {
        id: "silver",
        index: "03",
        shortTitle: "Silver",
        stage: "Advanced",
        kicker: "Advanced diagnostics course",
        title: "Silver Level Course",
        duration: "Ask admissions",
        format: "Workshop-first",
        practice: "Diagnostic tools",
        image: "/assets/gold-course-diagnostics-workshop.webp",
        imageAlt: "VTA learner performing live motorcycle diagnostics with a scan tool",
        modules: [
            { title: "Troubleshooting", description: "Use a systematic process to isolate mechanical and electrical faults." },
            { title: "FI & OBD Tools", description: "Read diagnostic data and apply FI and OBD tools to live service scenarios." },
            { title: "Workshop Process", description: "Follow a professional workflow from job card through final delivery." },
        ],
    },
    {
        id: "expert",
        index: "04",
        shortTitle: "Expert",
        stage: "Mastery",
        kicker: "Mastery and leadership course",
        title: "Expert Level Course",
        duration: "Ask admissions",
        format: "Workshop-first",
        practice: "Service leadership",
        image: "/assets/vta-service-area-image.webp",
        imageAlt: "VOC Technical Academy live service area used for practical technician training",
        modules: [
            { title: "Advanced Diagnostics", description: "Combine tools, measurements and service data to solve complex cases." },
            { title: "Customer & Team Skills", description: "Strengthen communication and service-floor coordination." },
            { title: "Career Leadership", description: "Prepare for senior technician, trainer and workshop leadership roles." },
        ],
    },
];
export function Programs() {
    const [activeId, setActiveId] = useState("beginner");
    const tabRefs = useRef([]);
    const activeCourse = COURSE_LEVELS.find((course) => course.id === activeId) ?? COURSE_LEVELS[0];
    const selectTab = (index) => {
        const nextIndex = (index + COURSE_LEVELS.length) % COURSE_LEVELS.length;
        setActiveId(COURSE_LEVELS[nextIndex].id);
        tabRefs.current[nextIndex]?.focus();
    };
    return (<section id="programs" className="scroll-mt-24 border-t border-gray-200 bg-[#f7f5f1] py-10 sm:py-12 lg:py-8 xl:py-10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <header className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,.75fr)] lg:items-end lg:gap-8">
          <div className="reveal">
            <h2 className="landing-section-title max-w-[760px] text-gray-950">
              Training shaped around the <span className="text-[color:var(--brand-red)]">real workshop.</span>
            </h2>
          </div>
          <p className="reveal max-w-xl text-base leading-7 text-gray-600 lg:justify-self-end lg:pb-1 lg:text-sm lg:leading-6">
            Four progressive course levels and three job-ready tracks, taught on live machines, not slides.
          </p>
        </header>

        <div className="mt-8 reveal sm:mt-12 lg:mt-5">
          <div className="mb-4 flex items-center justify-between gap-4 lg:mb-2">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gray-700">Choose your level</p>
            <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-gray-500 sm:block">Beginner to expert</p>
          </div>

          <div role="tablist" aria-label="VTA course levels" className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-300 bg-gray-300 sm:grid-cols-4">
            {COURSE_LEVELS.map((course, index) => {
            const active = course.id === activeId;
            return (<button key={course.id} ref={(node) => { tabRefs.current[index] = node; }} id={`course-tab-${course.id}`} type="button" role="tab" aria-selected={active} aria-controls={`course-panel-${course.id}`} tabIndex={active ? 0 : -1} onClick={() => setActiveId(course.id)} onKeyDown={(event) => {
                    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                        event.preventDefault();
                        selectTab(index + 1);
                    }
                    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                        event.preventDefault();
                        selectTab(index - 1);
                    }
                    if (event.key === "Home") {
                        event.preventDefault();
                        selectTab(0);
                    }
                    if (event.key === "End") {
                        event.preventDefault();
                        selectTab(COURSE_LEVELS.length - 1);
                    }
                }} className={cn("group relative min-h-[102px] cursor-pointer border-b border-r border-gray-300 px-4 py-4 text-left transition-colors duration-200 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[color:var(--brand-red)] sm:border-b-0 last:border-r-0 lg:min-h-[74px] lg:py-2.5", active
                    ? "bg-[linear-gradient(135deg,#050505_0%,#101010_58%,#24130e_100%)] text-white"
                    : "bg-[#f7f5f1] text-gray-950 hover:bg-white")}>
                  <span className={cn("absolute inset-x-0 top-0 h-[3px] bg-[color:var(--brand-red)] transition-opacity", active ? "opacity-100" : "opacity-0 group-hover:opacity-100")}/>
                  <span className={cn("font-mono text-[11px] font-semibold uppercase tracking-[0.16em]", active ? "text-white/55" : "text-gray-500")}>Level {course.index}</span>
                  <span className="mt-2 block text-lg font-bold leading-none lg:mt-1.5 lg:text-base">{course.shortTitle}</span>
                  <span className={cn("mt-2 block text-xs lg:mt-1", active ? "text-white/65" : "text-gray-600")}>{course.stage}</span>
                </button>);
        })}
          </div>

          <article key={activeCourse.id} id={`course-panel-${activeCourse.id}`} role="tabpanel" aria-labelledby={`course-tab-${activeCourse.id}`} tabIndex={0} className="relative mt-4 grid overflow-hidden rounded-2xl border border-black/90 bg-[linear-gradient(135deg,#050505_0%,#0d0d0d_56%,#24130e_100%)] text-white shadow-[0_28px_70px_-42px_rgba(0,0,0,.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-red)] lg:mt-2.5 lg:h-[360px] lg:grid-cols-[1.04fr_.96fr]">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 z-20 h-[3px] bg-[color:var(--brand-red)]"/>
            <div className="flex flex-col p-6 sm:p-8 lg:p-6">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ff655f]">{activeCourse.kicker}</p>
                  <h3 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-black leading-none tracking-[-0.035em] lg:mt-2 lg:text-[2.15rem]">{activeCourse.title}</h3>
                </div>
                <span className="hidden font-mono text-xs font-semibold tracking-[0.18em] text-white/25 sm:block">{activeCourse.index}</span>
              </div>

              <dl className="mt-7 grid grid-cols-2 border-y border-white/15 sm:grid-cols-3 lg:mt-4">
                {[
            ["Duration", activeCourse.duration],
            ["Format", activeCourse.format],
            ["Practice", activeCourse.practice],
        ].map(([label, value], index) => (<div key={label} className={cn("py-4 lg:py-2.5", index > 0 && "border-l border-white/15 pl-4", index === 2 && "col-span-2 border-l-0 border-t border-white/15 pl-0 sm:col-span-1 sm:border-l sm:border-t-0 sm:pl-4")}>
                    <dt className="font-mono text-[9px] uppercase tracking-[0.17em] text-white/45">{label}</dt>
                    <dd className="mt-1.5 text-sm font-semibold">{value}</dd>
                  </div>))}
              </dl>

              <div className="mt-4 lg:mt-2">
                {activeCourse.modules.map((module, index) => (<div key={module.title} className="grid grid-cols-[30px_minmax(0,1fr)] gap-3 border-b border-white/15 py-5 lg:py-2.5">
                    <span className="pt-0.5 font-mono text-[10px] font-semibold tracking-[0.12em] text-[#ff655f]">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 className="font-bold lg:text-sm">{module.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-white/60 lg:text-xs lg:leading-4">{module.description}</p>
                    </div>
                  </div>))}
              </div>
            </div>

            <div className="relative min-h-[360px] border-t border-white/15 lg:h-full lg:min-h-0 lg:border-l lg:border-t-0">
              <Image src={activeCourse.image} alt={activeCourse.imageAlt} fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover object-center"/>
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15"/>
              <div aria-hidden="true" className="absolute inset-4 rounded-xl border border-white/20"/>
              <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4">
                <span className="rounded bg-black/60 px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">Course {activeCourse.index}</span>
                <span className="flex items-center gap-2 text-right font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff655f] shadow-[0_0_0_4px_rgba(255,101,95,.16)]"/> Live workshop practice
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/60">Training environment</p>
                <p className="mt-1 max-w-xs text-sm font-semibold">Learn on the equipment used in real workshops.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>);
}
