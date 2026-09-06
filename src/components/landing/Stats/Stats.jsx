"use client";
import { STATS } from "@/lib/constants/landing-data";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { useCountUp } from "@/hooks/useCountUp";
function StatCard({ stat, index }) {
    const { display, ref } = useCountUp(stat.value, stat.duration);
    return (<div className="landing-card flex items-center gap-3 reveal p-4" style={{ "--reveal-delay": `${index * 30}ms` }}>
      <div className="w-11 h-11 rounded-xl bg-[color:var(--brand-red-soft)] flex items-center justify-center shrink-0">
        <DynamicIcon name={stat.icon} className="w-5 h-5 text-[color:var(--brand-red)]"/>
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
    return (<section aria-label="Training expertise and reach" className="bg-white border-y border-gray-100">
      <dl className="mx-auto grid max-w-[800px] grid-cols-1 gap-4 px-4 py-6 min-[480px]:grid-cols-2 sm:px-6 sm:py-8">
        {STATS.map((stat, i) => (<StatCard key={stat.label} stat={stat} index={i}/>))}
      </dl>
    </section>);
}
