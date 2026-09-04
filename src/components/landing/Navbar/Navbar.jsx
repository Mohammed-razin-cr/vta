"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogIn, Menu, UserRound, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants/landing-data";
import { cn } from "@/lib/utils";
export function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [authAnimationTick, setAuthAnimationTick] = useState({
        login: 0,
        register: 0,
    });
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("/");
    const dropdownWrapperRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownWrapperRef.current && !dropdownWrapperRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);
    useEffect(() => {
        const syncActiveNav = () => setActiveNav(window.location.hash || "/");
        syncActiveNav();
        window.addEventListener("hashchange", syncActiveNav);
        return () => window.removeEventListener("hashchange", syncActiveNav);
    }, []);
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);
    const toggleDropdown = (key) => {
        setAuthAnimationTick((current) => ({ ...current, [key]: current[key] + 1 }));
        setOpenDropdown((prev) => (prev === key ? null : key));
    };
    const closeMobile = () => setMobileOpen(false);
    return (<>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 h-20 sm:h-24 flex items-center justify-between gap-4 sm:gap-6">
          <Link href="/" className="relative flex shrink-0 items-center gap-3" aria-label="VTA Talent Cloud home">
            <Image src="/assets/vta-logo.png" alt="VTA Talent Cloud" width={220} height={80} className="h-20 w-auto" style={{ width: "auto" }} priority/>
            <span className="absolute left-[14px] top-[7px] grid h-[68px] w-[68px] place-items-center bg-white" aria-hidden="true">
              <Image src="/assets/vta-gear.png" alt="" width={66} height={66} className="navbar-logo-gear h-[66px] w-[66px] object-contain" priority/>
              <span className="absolute grid h-[38px] w-[38px] place-items-center rounded-full border border-gray-950 bg-white shadow-[inset_0_0_0_3px_white,inset_0_0_0_4px_#111827]">
                <span className="font-serif text-[13px] font-bold tracking-[-0.06em] text-gray-950">
                  VTA
                </span>
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="nav-tech hidden items-center gap-4 whitespace-nowrap text-[13px] font-semibold text-gray-800 min-[1160px]:flex">
            <Link href="/" onClick={() => setActiveNav("/")} className="nav-underline-link relative py-2" data-active={activeNav === "/"} aria-current={activeNav === "/" ? "page" : undefined}>
              Home
            </Link>
            {NAV_LINKS.map((link) => (<a key={link.href} href={link.href} onClick={() => setActiveNav(link.href)} className="nav-underline-link relative py-2" data-active={activeNav === link.href} aria-current={activeNav === link.href ? "location" : undefined}>
                {link.label}
              </a>))}
          </nav>

          <div className="flex items-center gap-2 shrink-0" ref={dropdownWrapperRef}>
            <div className="hidden sm:flex items-center gap-2">
              <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true" focusable="false">
                <defs>
                  <filter id="navbar-auth-goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur"/>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"/>
                    <feBlend in="SourceGraphic" in2="goo"/>
                  </filter>
                </defs>
              </svg>
              <div className="relative">
                <button type="button" onClick={() => toggleDropdown("login")} aria-expanded={openDropdown === "login"} aria-haspopup="true" className="nav-auth-goo nav-auth-goo--login inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-2 text-[13px] font-medium text-gray-800">
                  <span className="nav-auth-goo__content">
                    <UserRound className="h-4 w-4" aria-hidden="true"/> Login
                  </span>
                  <span key={`login-goo-${authAnimationTick.login}`} className={cn("nav-auth-goo__blobs", authAnimationTick.login > 0 && "nav-auth-goo__blobs--clicked")} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
                {openDropdown === "login" && (<div className="absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg py-1 z-50">
                    <Link href="/login" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Employee Login
                    </Link>
                    <Link href="/employer/login" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Employer Login
                    </Link>
                  </div>)}
              </div>

              <div className="relative">
                <button type="button" onClick={() => toggleDropdown("register")} aria-expanded={openDropdown === "register"} aria-haspopup="true" className="nav-auth-goo nav-auth-goo--register inline-flex items-center gap-1.5 rounded-md bg-[color:var(--brand-red)] px-3 py-2 text-[13px] font-medium text-white">
                  <span className="nav-auth-goo__content">
                    <LogIn className="h-4 w-4" aria-hidden="true"/> Register
                  </span>
                  <span key={`register-goo-${authAnimationTick.register}`} className={cn("nav-auth-goo__blobs", authAnimationTick.register > 0 && "nav-auth-goo__blobs--clicked")} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
                {openDropdown === "register" && (<div className="absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg py-1 z-50">
                    <Link href="/register" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Employee Register
                    </Link>
                    <Link href="/employer/register" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Employer Register
                    </Link>
                  </div>)}
              </div>
            </div>

            <button type="button" onClick={() => setMobileOpen(true)} className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-white transition-colors hover:border-[color:var(--brand-red)] hover:text-[color:var(--brand-red)] min-[1160px]:hidden" aria-label="Open menu">
              <Menu className="w-5 h-5" aria-hidden="true"/>
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={closeMobile} aria-hidden="true"/>

      <aside className={`fixed right-0 top-0 z-50 h-dvh w-[min(300px,calc(100vw-1rem))] max-w-full overflow-y-auto overscroll-contain bg-white px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] shadow-xl transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`} aria-hidden={!mobileOpen} inert={!mobileOpen}>
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-gray-900">Menu</span>
          <button type="button" onClick={closeMobile} className="flex h-11 w-11 items-center justify-center rounded-md hover:bg-gray-100" aria-label="Close menu">
            <X className="w-5 h-5" aria-hidden="true"/>
          </button>
        </div>
        <nav aria-label="Mobile" className="nav-tech flex flex-col gap-1 text-sm font-semibold">
          <Link href="/" onClick={() => { setActiveNav("/"); closeMobile(); }} aria-current={activeNav === "/" ? "page" : undefined} className={cn("rounded-md border-l-2 px-3 py-3.5 text-gray-800 transition-colors", activeNav === "/" ? "border-[color:var(--brand-red)] bg-red-50 text-[color:var(--brand-red)]" : "border-transparent hover:bg-gray-50 hover:text-[color:var(--brand-red)]")}>
            Home
          </Link>
          {NAV_LINKS.map((link) => (<a key={link.href} href={link.href} onClick={() => { setActiveNav(link.href); closeMobile(); }} aria-current={activeNav === link.href ? "location" : undefined} className={cn("rounded-md border-l-2 px-3 py-3.5 text-gray-800 transition-colors", activeNav === link.href ? "border-[color:var(--brand-red)] bg-red-50 text-[color:var(--brand-red)]" : "border-transparent hover:bg-gray-50 hover:text-[color:var(--brand-red)]")}>
              {link.label}
            </a>))}
          <div className="mt-3 border-t border-gray-100 pt-3">
            <p className="px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Login</p>
            <Link href="/login" onClick={closeMobile} className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[color:var(--brand-red)]">
              Employee Login
            </Link>
            <Link href="/employer/login" onClick={closeMobile} className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[color:var(--brand-red)]">
              Employer Login
            </Link>
          </div>
          <div className="mt-1">
            <p className="px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Register</p>
            <Link href="/register" onClick={closeMobile} className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[color:var(--brand-red)]">
              Employee Register
            </Link>
            <Link href="/employer/register" onClick={closeMobile} className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[color:var(--brand-red)]">
              Employer Register
            </Link>
          </div>
        </nav>
      </aside>
    </>);
}
