"use client";
import { STATS } from "@/lib/constants/landing-data";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { useCountUp } from "@/hooks/useCountUp";
function StatCard({ stat, index }) {
    const { display, ref } = useCountUp(stat.value, stat.duration);
    return (<div className="flex items-center gap-3 reveal group p-3 rounded-xl transition-all duration-500 hover:bg-[color:var(--brand-red-soft)] hover:-translate-y-1 hover:shadow-[0_10px_25px_-12px_rgba(228,50,43,0.5)]" style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="relative w-11 h-11 rounded-xl bg-[color:var(--brand-red-soft)] flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-[color:var(--brand-red)] group-hover:rotate-6 group-hover:scale-110">
        <span className="absolute inset-0 rounded-xl ring-2 ring-[color:var(--brand-red)]/0 group-hover:ring-[color:var(--brand-red)]/40 group-hover:animate-ping" aria-hidden="true"/>
        <DynamicIcon name={stat.icon} className="w-5 h-5 text-[color:var(--brand-red)] transition-all duration-500 group-hover:text-white group-hover:scale-110"/>
      </div>
      <div className="min-w-0">
        <dt className="sr-only">{stat.label}</dt>
        <dd className="text-[22px] font-black text-[color:var(--brand-red)] leading-none transition-transform duration-300 group-hover:scale-110 origin-left inline-block">
          <span ref={ref}>{display}</span>
        </dd>
        <div className="mt-1 text-xs text-gray-600 transition-colors duration-300 group-hover:font-semibold group-hover:text-gray-900">
          {stat.label}
        </div>
      </div>
    </div>);
}
export function Stats() {
    return (<section className="bg-white border-y border-gray-100">
      <dl className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-4 py-8 min-[360px]:grid-cols-2 sm:grid-cols-3 sm:gap-6 sm:px-6 sm:py-10 lg:grid-cols-6">
        {STATS.map((stat, i) => (<StatCard key={stat.label} stat={stat} index={i}/>))}
      </dl>
    </section>);
}
