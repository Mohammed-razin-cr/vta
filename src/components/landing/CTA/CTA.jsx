import Image from "next/image";
import { ArrowRight } from "lucide-react";
export function CTA() {
    return (<section id="contact" className="relative overflow-hidden bg-[color:var(--brand-red)]">
      <Image src="/assets/mechanics-hero.png" alt="" fill aria-hidden="true" className="pointer-events-none absolute inset-0 object-cover object-right opacity-40" style={{ mixBlendMode: "multiply" }}/>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[color:var(--brand-red-dark)] via-[color:var(--brand-red)]/90 to-transparent" aria-hidden="true"/>
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-6 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-2">
        <div>
          <h2 className="landing-section-title text-white reveal">
            Ready to Build the Future of Automotive Workforce?
          </h2>
          <p className="mt-3 text-[13px] text-white/90 max-w-lg">
            Join VTA Talent Cloud™ and be part of India&apos;s mission to create skilled, certified and employable
            automotive professionals.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
          <button className="inline-flex min-h-11 w-full items-center justify-between gap-2 rounded-md bg-white px-5 py-2.5 text-[13px] font-semibold text-gray-900 hover:bg-gray-100 sm:w-auto sm:justify-center">
            Explore Platform <ArrowRight className="w-4 h-4 text-[color:var(--brand-red)]" aria-hidden="true"/>
          </button>
          <button className="inline-flex min-h-11 w-full items-center justify-between gap-2 rounded-md border border-white/60 bg-transparent px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-white/10 sm:w-auto sm:justify-center">
            Hire Talent <ArrowRight className="w-4 h-4" aria-hidden="true"/>
          </button>
          <button className="inline-flex min-h-11 w-full items-center justify-between gap-2 rounded-md border border-white/60 bg-transparent px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-white/10 sm:w-auto sm:justify-center">
            Become a Partner <ArrowRight className="w-4 h-4" aria-hidden="true"/>
          </button>
        </div>
      </div>
    </section>);
}
