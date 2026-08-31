"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BRAND, NAV, ROUTES } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("programs");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((item) => document.querySelector(item.href)).filter(
      (section): section is Element => Boolean(section),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-25% 0px -62%", threshold: [0, 0.15, 0.35] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    const main = document.getElementById("main");
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    header?.setAttribute("inert", "");
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = Array.from(
        mobilePanelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      header?.removeAttribute("inert");
      document.removeEventListener("keydown", onKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-3 z-[70] -translate-y-20 rounded-btn bg-ink px-4 py-3 text-sm font-semibold text-paper transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <header
        data-site-header
        className={cn(
          "sticky top-0 z-50 border-b transition-colors duration-200",
          scrolled
            ? "border-line bg-paper/95 shadow-lift-sm backdrop-blur-md"
            : "border-transparent bg-paper",
        )}
      >
        <div className="container-shell flex h-[76px] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="VOC Technical Academy home"
            className="shrink-0 rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <Image
              src={BRAND.logo}
              alt="VOC Technical Academy"
              width={320}
              height={137}
              priority
              style={{ width: "auto" }}
              className="h-[50px] w-auto"
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-0 min-[1180px]:flex xl:gap-1"
          >
            {NAV.map((item) => {
              const id = item.href.slice(1);
              const active = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "location" : undefined}
                  className={cn(
                    "relative inline-flex min-h-11 items-center rounded-btn px-2.5 py-2 text-xs font-semibold transition-colors duration-200 xl:px-3 xl:text-[13px]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
                    active ? "text-ink" : "text-smoke hover:text-ink",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-2.5 -bottom-[19px] h-0.5 bg-ember transition-transform duration-200 xl:inset-x-3",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={ROUTES.login}
              className="hidden h-11 items-center rounded-btn px-3 text-sm font-semibold text-smoke transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:inline-flex"
            >
              Sign in
            </Link>
            <Link
              href={ROUTES.register}
              className="hidden h-11 items-center rounded-btn bg-ember px-5 text-sm font-semibold text-white transition-colors hover:bg-ember-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:inline-flex"
            >
              Start training
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label="Open navigation"
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-btn border border-line-strong text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-paper min-[1180px]:hidden"
            >
              <Menu aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={cn(
          "fixed inset-0 z-[55] bg-ink/60 transition-opacity duration-300 min-[1180px]:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <aside
        ref={mobilePanelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal={mobileOpen ? "true" : undefined}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        style={{ transform: mobileOpen ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)" }}
        className="fixed inset-y-0 right-0 z-[60] flex w-[min(90vw,400px)] flex-col bg-paper p-5 shadow-lift transition-transform duration-300 ease-expo-out min-[1180px]:hidden"
      >
        <div className="flex items-center justify-between border-b border-line pb-5">
          <span className="spec-label text-smoke">Navigate / VTA</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-btn border border-line-strong text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 py-5" aria-label="Mobile primary navigation">
          {NAV.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              tabIndex={mobileOpen ? 0 : -1}
              className="group flex min-h-12 items-center justify-between border-b border-line py-3 font-display text-xl font-bold text-ink focus-visible:outline-none focus-visible:text-ember"
            >
              <span>{item.label}</span>
              <span className="font-mono text-[11px] tracking-[0.18em] text-smoke-light group-hover:text-ember">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </nav>

        <div className="grid gap-2 border-t border-line pt-5 sm:grid-cols-2">
          <Link
            href={ROUTES.login}
            onClick={closeMenu}
            tabIndex={mobileOpen ? 0 : -1}
            className="inline-flex h-12 items-center justify-center rounded-btn border border-line-strong font-semibold text-ink"
          >
            Sign in
          </Link>
          <Link
            href={ROUTES.register}
            onClick={closeMenu}
            tabIndex={mobileOpen ? 0 : -1}
            className="inline-flex h-12 items-center justify-center rounded-btn bg-ember font-semibold text-white"
          >
            Start training
          </Link>
        </div>
      </aside>
    </>
  );
}
