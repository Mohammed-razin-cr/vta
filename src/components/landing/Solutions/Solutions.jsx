"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SOLUTIONS } from "@/lib/constants/landing-data";
import { DynamicIcon } from "@/components/common/DynamicIcon";
export function Solutions() {
    const toggleCard = (card) => {
        const shouldActivate = !card.classList.contains("is-active");
        card.parentElement?.querySelectorAll(".stakeholder-card").forEach((item) => {
            item.classList.remove("is-active");
            item.setAttribute("aria-pressed", "false");
        });
        if (shouldActivate) {
            card.classList.add("is-active");
            card.setAttribute("aria-pressed", "true");
        }
    };
    return (<section id="solutions" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="landing-section-title mx-auto max-w-[1180px] text-balance text-center text-[#151310] reveal">
          One Platform. <span className="text-[color:var(--brand-red)]">Four Stakeholders.</span> Infinite Opportunities.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 min-[1160px]:grid-cols-4">
          {SOLUTIONS.map((card, i) => (<article key={card.title} id={card.title.toLowerCase()} role="button" tabIndex={0} aria-pressed="false" aria-label={`Explore ${card.title}`} onClick={(event) => toggleCard(event.currentTarget)} onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleCard(event.currentTarget);
                }
            }} className="landing-card stakeholder-card scroll-mt-28 relative h-[320px] cursor-pointer overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-red)] focus-visible:ring-offset-4 min-[1160px]:h-[280px] reveal group" style={{ "--reveal-delay": `${i * 30}ms` }}>
              <div className="stakeholder-card__content relative z-[1] flex h-full flex-col overflow-hidden p-5 pb-0">
                <div className="flex items-center gap-2">
                  <DynamicIcon name={card.icon} className="w-5 h-5 text-gray-800 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"/>
                  <h3 className="text-[17px] font-bold text-gray-900">{card.title}</h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-[13px] text-gray-700">
                  {card.bullets.map((bullet) => (<li key={bullet} className="flex gap-2">
                      <span className="text-gray-400">•</span>
                      {bullet}
                    </li>))}
                </ul>
                <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[color:var(--brand-red)]">
                  Know More <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"/>
                </span>
                <Image src={card.image} alt="" width={220} height={220} className="pointer-events-none absolute bottom-0 right-0 h-[42%] w-auto object-contain object-bottom transition-transform duration-300 group-hover:scale-105 min-[1160px]:h-[55%]"/>
              </div>
            </article>))}
        </div>
      </div>
    </section>);
}
