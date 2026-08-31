import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  UsersRound,
  Wrench,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { BRAND, CAREER, FOOTER, SOCIALS } from "@/lib/content";

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  YouTube: Youtube,
  Instagram: Instagram,
  Facebook: Facebook,
};

const NETWORK_NODES = [
  { Icon: Wrench, label: "Hands-on skills", className: "left-[10%] top-[48%]", primary: false },
  { Icon: BadgeCheck, label: "Verified certification", className: "left-[36%] top-[15%]", primary: false },
  { Icon: GraduationCap, label: "Talent Cloud", className: "left-[50%] top-[42%]", primary: true },
  { Icon: BriefcaseBusiness, label: "Career opportunities", className: "right-[8%] top-[30%]", primary: false },
  { Icon: UsersRound, label: "Industry network", className: "right-[29%] bottom-[9%]", primary: false },
] as const;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ember-deep";

export function Footer() {
  return (
    <footer className="bg-[#0b0b0c] py-8 text-paper sm:py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] rounded-[30px] bg-[#0b0b0c] p-2.5 shadow-[0_36px_90px_-36px_rgba(22,19,15,0.62)] sm:rounded-[36px] sm:p-3">
        <section
          aria-labelledby="footer-connect-title"
          className="relative isolate overflow-hidden rounded-[22px] border border-white/35 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(155deg,#ef3932_0%,#d92320_48%,#a70808_100%)] px-6 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.36)] sm:rounded-[26px] sm:px-10 sm:py-14 lg:min-h-[430px] lg:px-16 lg:py-16"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(90deg,transparent,black_55%,black)]"
          />
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="max-w-xl">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white/65">
                VTA Talent Cloud
              </p>
              <h2
                id="footer-connect-title"
                className="mt-5 text-balance font-display text-[clamp(2.7rem,4.5vw,4.6rem)] font-medium leading-[0.94] tracking-[-0.045em] text-white"
              >
                Connect.
                <span className="mt-2 block font-normal text-white/70 lg:whitespace-nowrap">
                  Learn. Perform. Earn.
                </span>
              </h2>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
                Learners, trainers, employers and partners move forward together through one
                connected automotive workforce platform.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={CAREER.ctaPrimary.href}
                  className="journey-uiverse-button"
                >
                  <span>
                    <span>
                      <span>{CAREER.ctaPrimary.label}</span>
                    </span>
                  </span>
                </Link>
                <Link
                  href={CAREER.ctaSecondary.href}
                  className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/35 bg-black/10 px-6 font-semibold text-white transition-colors hover:border-white hover:bg-white/10 ${focusRing}`}
                >
                  {CAREER.ctaSecondary.label}
                </Link>
              </div>
            </div>

            <div className="footer-network relative hidden min-h-[300px] lg:block" aria-label="VTA connected ecosystem">
              <svg aria-hidden="true" viewBox="0 0 640 330" className="absolute inset-0 h-full w-full text-white/35" fill="none">
                <g className="footer-network__base">
                  <path d="M25 190H210L278 135H396L470 84H625" stroke="currentColor" />
                  <path d="M100 276H255L320 211H454L520 250H625" stroke="currentColor" />
                  <path d="M320 22V105L365 150V306" stroke="currentColor" />
                  <path d="M58 72H158L214 127" stroke="currentColor" strokeDasharray="8 8" />
                  <path d="M434 24L476 65H582L620 30" stroke="currentColor" strokeDasharray="8 8" />
                </g>

                <g className="footer-network__signals" stroke="currentColor" strokeLinecap="round">
                  <path d="M25 190H210L278 135H396L470 84H625" pathLength="100" />
                  <path d="M100 276H255L320 211H454L520 250H625" pathLength="100" />
                  <path d="M320 22V105L365 150V306" pathLength="100" />
                  <path d="M58 72H158L214 127" pathLength="100" />
                  <path d="M434 24L476 65H582L620 30" pathLength="100" />
                </g>

                <g className="footer-network__junctions" fill="currentColor">
                  <circle cx="210" cy="190" r="4" />
                  <circle cx="396" cy="135" r="4" />
                  <circle cx="320" cy="211" r="4" />
                  <circle cx="520" cy="250" r="4" />
                </g>
              </svg>

              {NETWORK_NODES.map(({ Icon, label, className, primary }, index) => (
                <div
                  key={label}
                  aria-label={label}
                  className={`footer-network-node absolute ${className} ${
                    primary
                      ? "h-20 w-20 -translate-x-1/2 -translate-y-1/2"
                      : "h-12 w-12"
                  }`}
                >
                  <span
                    className={`footer-network-node__surface flex h-full w-full items-center justify-center rounded-xl border backdrop-blur-sm ${
                      primary
                        ? "border-black/20 bg-ink text-white shadow-[0_18px_42px_-16px_rgba(0,0,0,.8)]"
                        : "border-white/30 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.24),0_14px_28px_-18px_rgba(0,0,0,.75)]"
                    }`}
                    style={{ animationDelay: `${index * -0.72}s` }}
                  >
                    <Icon aria-hidden="true" className={primary ? "h-8 w-8" : "h-5 w-5"} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-2.5 rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,.06),transparent_28%),#151515] px-6 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] sm:rounded-[26px] sm:px-10 lg:px-12 lg:py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[0.8fr_0.8fr_0.8fr_1.25fr] lg:gap-12">
            {FOOTER.columns.map((column) => (
              <nav key={column.title} aria-label={`${column.title} footer links`}>
                <h3 className="font-display text-base font-semibold text-white">{column.title}</h3>
                <ul className="mt-4 space-y-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-11 items-center rounded-md text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <aside className="self-start rounded-2xl border border-white/15 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ember text-white shadow-[0_12px_24px_-14px_rgba(228,50,43,.9)]">
                    <GraduationCap aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">VTA Talent Cloud</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">Connected ecosystem</p>
                  </div>
                </div>
                <BadgeCheck aria-hidden="true" className="h-5 w-5 text-ember-warm" />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/60">
                Learn on real machines, prove your skills, earn verified certification and connect with employers across the VOC network.
              </p>
              <Link
                href="#talent-cloud"
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md font-semibold text-white transition-colors hover:text-ember-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                Explore Talent Cloud
              </Link>
            </aside>
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="inline-flex rounded-md bg-white p-2">
                <Image src={BRAND.logo} alt="VOC Technical Academy" width={154} height={66} className="h-9 w-auto" sizes="154px" />
              </span>
              <div>
                <p className="text-xs text-white/50">&copy; {new Date().getFullYear()} VOC Technical Academy</p>
                <a
                  href={FOOTER.website.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex min-h-11 items-center gap-1 rounded-md font-mono text-[9px] uppercase tracking-[0.16em] text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                >
                  {FOOTER.website.label}
                </a>
              </div>
            </div>

            <div className="flex gap-2">
              {SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.035] text-white/60 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                  >
                    {Icon && <Icon aria-hidden="true" className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
