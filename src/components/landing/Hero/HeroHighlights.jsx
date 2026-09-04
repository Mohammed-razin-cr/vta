"use client";
import { useEffect, useState } from "react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { HERO_HIGHLIGHTS } from "@/lib/constants/landing-data";
const COUNT_DELAY = 220;
const COUNT_DURATION = 1800;
const numberFormatter = new Intl.NumberFormat("en-IN");
function parseValue(rawValue) {
    const match = rawValue.match(/^([\d,]+)(.*)$/);
    if (!match)
        return { target: 0, suffix: "", finalValue: rawValue };
    const target = Number.parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = match[2];
    return {
        target,
        suffix,
        finalValue: `${numberFormatter.format(target)}${suffix}`,
    };
}
export function HeroHighlights() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setProgress(1);
            return;
        }
        let animationFrame = 0;
        let startTime = 0;
        const delayTimer = window.setTimeout(() => {
            const tick = (now) => {
                if (startTime === 0)
                    startTime = now;
                const linearProgress = Math.min(1, (now - startTime) / COUNT_DURATION);
                const easedProgress = 1 - Math.pow(1 - linearProgress, 3);
                setProgress(easedProgress);
                if (linearProgress < 1)
                    animationFrame = window.requestAnimationFrame(tick);
            };
            animationFrame = window.requestAnimationFrame(tick);
        }, COUNT_DELAY);
        return () => {
            window.clearTimeout(delayTimer);
            window.cancelAnimationFrame(animationFrame);
        };
    }, []);
    return (<dl className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4">
      {HERO_HIGHLIGHTS.map((item, index) => {
            const { target, suffix, finalValue } = parseValue(item.value);
            const currentValue = progress >= 1 ? target : target > 0 ? Math.min(target - 1, Math.floor(target * progress)) : 0;
            const displayValue = `${numberFormatter.format(currentValue)}${suffix}`;
            return (<div key={item.label} className="reveal group grid min-h-[84px] grid-cols-[36px_minmax(0,1fr)] items-center gap-2.5 rounded-xl border border-red-100 bg-white/90 px-2.5 py-3 shadow-[0_8px_24px_-18px_rgba(31,41,55,0.35)] backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-[0_12px_28px_-16px_rgba(228,50,43,0.32)]" style={{ transitionDelay: `${300 + index * 80}ms` }}>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-100 bg-[color:var(--brand-red-soft)] transition-transform duration-300 group-hover:scale-105">
              <DynamicIcon name={item.icon} className="h-[18px] w-[18px] text-[color:var(--brand-red)]"/>
            </div>
            <div className="flex min-w-0 flex-col justify-center">
              <dt className="sr-only">{item.label}</dt>
              <dd className="whitespace-nowrap text-[19px] font-black leading-5 tracking-[-0.04em] text-[color:var(--brand-red)] tabular-nums">
                <span className="inline-grid" aria-label={finalValue}>
                  <span className="invisible col-start-1 row-start-1" aria-hidden="true">{finalValue}</span>
                  <span className="col-start-1 row-start-1" aria-hidden="true">{displayValue}</span>
                </span>
              </dd>
              <div className="mt-1 min-h-8 text-[11px] font-medium leading-4 text-gray-600">{item.label}</div>
            </div>
          </div>);
        })}
    </dl>);
}
