import { FEATURES } from "@/lib/constants/landing-data";
import { DynamicIcon } from "@/components/common/DynamicIcon";
export function Features() {
    return (<section id="training" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="rounded-2xl bg-[#0E0E10] p-6 sm:p-10">
          <h2 className="landing-section-title text-center text-white reveal">
            Powerful <span className="text-[color:var(--brand-red)]">Platform.</span> Endless Possibilities.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 min-[360px]:grid-cols-2 sm:mt-10 sm:grid-cols-4 lg:grid-cols-8">
            {FEATURES.map((feature, i) => (<div key={feature.title} className="text-center text-white group reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="mx-auto w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[color:var(--brand-red)]/20 group-hover:border-[color:var(--brand-red)] group-hover:-translate-y-1 group-hover:shadow-[0_10px_25px_-10px_rgba(228,50,43,0.8)]">
                  <DynamicIcon name={feature.icon} className="w-6 h-6 text-[color:var(--brand-red)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"/>
                </div>
                <div className="mt-3 text-[13px] font-bold leading-tight">{feature.title}</div>
                <div className="mt-1 text-xs leading-5 text-white/65">{feature.desc}</div>
              </div>))}
          </div>
        </div>
      </div>
    </section>);
}
