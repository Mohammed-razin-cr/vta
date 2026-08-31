"use client";
import { STATS } from "@/lib/constants/landing-data";
import { useCountUp } from "@/hooks/useCountUp";
import type { StatItem } from "@/types/landing";

function Stat({ stat, index }: { stat: StatItem; index: number }) {
  const { display, ref } = useCountUp(stat.value, stat.duration);
  return <div className="impact-stat reveal"><span>0{index + 1}</span><dt className="sr-only">{stat.label}</dt><dd ref={ref}>{display}</dd><p>{stat.label}</p></div>;
}
export function Stats() { return <section className="impact-strip"><div className="impact-strip__intro"><span>VTA impact</span><strong>Numbers that move the industry.</strong></div><dl className="impact-strip__grid">{STATS.map((stat, index) => <Stat key={stat.label} stat={stat} index={index} />)}</dl></section>; }
