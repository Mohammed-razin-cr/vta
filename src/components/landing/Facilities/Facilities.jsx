"use client";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useCallback, useRef, useState } from "react";
const FACILITIES = [
    {
        title: "Classroom",
        image: "/assets/vta-classroom.webp",
        alt: "Classroom at VOC Technical Academy",
    },
    {
        title: "Electrical Circuit Area",
        image: "/assets/vta-eca-image.webp",
        alt: "Electrical Circuit Area at VOC Technical Academy",
    },
    {
        title: "Engine Area",
        image: "/assets/vta-engine-image.webp",
        alt: "Engine Area at VOC Technical Academy",
    },
    {
        title: "Service Area",
        image: "/assets/vta-service-area-image.webp",
        alt: "Service Area at VOC Technical Academy",
    },
    {
        title: "Technical Area",
        image: "/assets/vta-technicalarea.webp",
        alt: "Technical Area at VOC Technical Academy",
    },
];
export function Facilities() {
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollToCard = useCallback((index) => {
        const track = trackRef.current;
        if (!track)
            return;
        const wrappedIndex = (index + FACILITIES.length) % FACILITIES.length;
        const card = track.querySelector(`[data-facility-index="${wrappedIndex}"]`);
        if (!card)
            return;
        track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
        setActiveIndex(wrappedIndex);
    }, []);
    const syncActiveCard = () => {
        const track = trackRef.current;
        if (!track)
            return;
        const cards = Array.from(track.querySelectorAll("[data-facility-index]"));
        const closestCard = cards.reduce((closest, card, index) => {
            const distance = Math.abs(card.offsetLeft - track.scrollLeft);
            return distance < closest.distance ? { index, distance } : closest;
        }, { index: 0, distance: Number.POSITIVE_INFINITY });
        setActiveIndex(closestCard.index);
    };
    return (<section id="facilities" className="scroll-mt-24 overflow-hidden border-t border-[#d9d6cf] bg-[#f7f5f1] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="flex items-end justify-between gap-8">
          <div>
            <h2 className="landing-section-title max-w-[850px] text-[#151310]">
              Built like the workshops
              <span className="mt-2 block text-[color:var(--brand-red)]">you&apos;ll work in.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Classrooms, circuit benches, engine bays and live service areas.
              <span className="block">Training happens where the work happens.</span>
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-2 pb-1 md:flex">
            <button type="button" onClick={() => scrollToCard(activeIndex - 1)} aria-label="Previous facility" className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-[#151310] bg-[#151310] text-white transition-colors duration-200 hover:bg-[color:var(--brand-red)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f1]">
              <ArrowLeft className="h-4 w-4" aria-hidden="true"/>
            </button>
            <button type="button" onClick={() => scrollToCard(activeIndex + 1)} aria-label="Next facility" className="inline-flex h-11 cursor-pointer items-center justify-center rounded-md border border-gray-400 bg-transparent px-4 text-sm font-semibold text-[#151310] transition-colors duration-200 hover:border-[#151310] hover:bg-[#151310] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f1]">
              Next
            </button>
          </div>
        </div>

        <div className="mt-8 sm:mt-12">
          <div className="mb-4 flex items-center justify-between md:hidden">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">Swipe to explore</span>
            <span aria-live="polite" className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-red)]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(FACILITIES.length).padStart(2, "0")}
            </span>
          </div>

          <div ref={trackRef} role="region" aria-label="Academy facilities" tabIndex={0} onScroll={syncActiveCard} className="facilities-track touch-pan-x snap-x snap-mandatory overflow-x-auto pb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f1]">
            <div className="flex w-max gap-5 md:gap-6">
              {FACILITIES.map((facility, index) => (<figure key={facility.title} data-facility-index={index} className="group w-[78vw] shrink-0 snap-start overflow-hidden rounded-[20px] border border-[#d9d6cf] bg-white transition-[border-color,box-shadow] duration-300 hover:border-gray-400 hover:shadow-[0_24px_45px_-32px_rgba(20,20,20,.45)] sm:w-[380px] lg:w-[420px]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={facility.image} alt={facility.alt} fill sizes="(max-width: 640px) 78vw, (max-width: 1023px) 380px, 420px" className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"/>
                  </div>
                  <figcaption className="flex min-h-14 items-center justify-between gap-4 border-t border-[#d9d6cf] px-5 py-4">
                    <span className="font-semibold text-[#151310]">{facility.title}</span>
                    <span className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                      {String(index + 1).padStart(2, "0")} / {String(FACILITIES.length).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>))}
            </div>
          </div>
        </div>
      </div>
    </section>);
}
