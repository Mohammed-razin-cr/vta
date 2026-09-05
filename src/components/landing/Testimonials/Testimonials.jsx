import Image from "next/image";
import { Newspaper } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants/landing-data";

const MEDIA_OUTLETS = [
    {
        name: "Business Today",
        category: "Business",
        wordmark: (<><span>BUSINESS</span> <span className="text-[#27354b]">TODAY</span></>),
    },
    {
        name: "ET Auto",
        category: "Automotive",
        wordmark: (<>ET <span className="text-[color:var(--brand-red)]">Auto</span></>),
    },
    {
        name: "YourStory",
        category: "Startup",
        wordmark: (<span className="text-[color:var(--brand-red)]">YOURSTORY</span>),
    },
    {
        name: "Inc42",
        category: "Technology",
        wordmark: (<>Inc<span className="text-[color:var(--brand-red)]">42</span></>),
    },
];

export function Testimonials() {
    return (<section id="success-stories" className="bg-[#FEF5F4]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-14 grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-8 lg:gap-10">
        <div>
          <h2 className="landing-section-title mb-6 text-gray-900 reveal">What People Say</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {TESTIMONIALS.map((testimonial, i) => (<li key={testimonial.name} className="rounded-xl p-4 bg-white/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                <figure>
                  <div className="flex items-center gap-3">
                    <Image src={testimonial.avatar} alt={`${testimonial.name.replace(/^–\s*/, "")} portrait`} width={48} height={48} className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent hover:ring-[color:var(--brand-red)] transition-all duration-300"/>
                    <figcaption className="min-w-0">
                      <div className="truncate text-sm font-bold text-gray-900">{testimonial.name}</div>
                      <div className="truncate text-xs text-gray-600">{testimonial.role}</div>
                    </figcaption>
                  </div>
                  <blockquote className="mt-3 text-sm italic leading-6 text-gray-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </figure>
              </li>))}
          </ul>
        </div>
        <aside className="media-recognition-panel reveal lg:self-start" aria-labelledby="media-recognition-title">
          <div className="media-recognition-panel__header">
            <span className="media-recognition-panel__icon" aria-hidden="true">
              <Newspaper size={21} strokeWidth={1.9}/>
            </span>
            <div>
              <p className="media-recognition-panel__eyebrow">In the spotlight</p>
              <h2 id="media-recognition-title" className="landing-section-title text-gray-900">
                Media &amp; Recognition
              </h2>
            </div>
          </div>

          <p className="media-recognition-panel__intro">
            Featured across leading business, automotive and startup publications.
          </p>

          <ul className="media-recognition-grid" aria-label="Publications featuring VTA">
            {MEDIA_OUTLETS.map((outlet) => (<li key={outlet.name} className="media-recognition-card">
                <span className="media-recognition-card__mark">{outlet.wordmark}</span>
                <span className="media-recognition-card__category">{outlet.category}</span>
              </li>))}
          </ul>

          <div className="media-recognition-panel__footer">
            <span className="media-recognition-panel__pulse" aria-hidden="true"/>
            Building trust across India&apos;s automotive ecosystem
          </div>
        </aside>
      </div>
    </section>);
}
