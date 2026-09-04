import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants/landing-data";
export function Testimonials() {
    return (<section id="success-stories" className="bg-[#FEF5F4]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-14 grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-8 lg:gap-10">
        <div>
          <h3 className="landing-section-title mb-6 text-gray-900 reveal">What People Say</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {TESTIMONIALS.map((testimonial, i) => (<li key={testimonial.name} className="rounded-xl p-4 bg-white/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                <figure>
                  <div className="flex items-center gap-3">
                    <Image src={testimonial.avatar} alt="" width={48} height={48} className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent hover:ring-[color:var(--brand-red)] transition-all duration-300"/>
                    <figcaption className="min-w-0">
                      <div className="text-[12px] font-bold text-gray-900 truncate">{testimonial.name}</div>
                      <div className="text-[11px] text-gray-500 truncate">{testimonial.role}</div>
                    </figcaption>
                  </div>
                  <blockquote className="mt-3 text-[12px] italic text-gray-700 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </figure>
              </li>))}
          </ul>
        </div>
        <div>
          <h3 className="landing-section-title mb-6 text-gray-900 reveal">Media &amp; Recognition</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-500">
            <div className="text-[15px] font-black">BUSINESS TODAY</div>
            <div className="text-[15px] font-black">
              ET <span className="text-[color:var(--brand-red)]">Auto</span>
            </div>
            <div className="text-[15px] font-black text-[color:var(--brand-red)]">YOURSTORY</div>
            <div className="text-[15px] font-black">
              Inc<span className="text-[color:var(--brand-red)]">42</span>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
