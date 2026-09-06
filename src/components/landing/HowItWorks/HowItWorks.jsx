import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { STEPS } from "@/lib/constants/landing-data";
export function HowItWorks() {
    return (<section id="platform" className="scroll-mt-24 border-y border-[#d9d6cf] bg-[#f1efe9] py-12 sm:py-16">
      <h2 className="landing-section-title px-4 text-center text-gray-950 sm:px-6">
        How VTA Talent Cloud™ Works
      </h2>
      <ol className="mx-auto mt-8 grid max-w-[1536px] grid-cols-1 gap-4 px-4 sm:mt-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-6 xl:px-8">
        {STEPS.map((step, i) => (<li key={step.title} className="landing-card group reveal flex min-h-[300px] flex-col overflow-hidden sm:min-h-[350px]" style={{ "--reveal-delay": `${Math.min(i * 30, 120)}ms` }}>
            <div className="relative h-[150px] shrink-0 overflow-hidden bg-gray-900 sm:h-[170px]">
              <Image src={step.image} alt={step.imageAlt} fill sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] ${i >= 3 ? "object-[center_22%]" : "object-center"}`}/>
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"/>
              <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-full bg-[color:var(--brand-red)] font-mono text-[11px] font-bold text-white shadow-lg">
                {String(i + 1).padStart(2, "0")}
              </span>
              {i === 0 && (<span className="absolute bottom-5 right-4 rounded bg-black/70 px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  Start here
                </span>)}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="max-w-[13ch] text-lg font-black uppercase leading-[1.12] tracking-[-0.025em] text-gray-950">
                  {step.title.replace(/^\d+\.\s*/, "")}
                </h3>
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-red)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"/>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">{step.desc}.</p>
            </div>
          </li>))}
      </ol>
    </section>);
}
