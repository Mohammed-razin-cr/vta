"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, LogIn, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants/landing-data";
import { LoginButton } from "@/components/common/LoginButton";

type DropdownKey = "login" | "register" | null;

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownWrapperRef.current && !dropdownWrapperRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenDropdown(null);
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleDropdown = (key: Exclude<DropdownKey, null>) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="vta-nav sticky top-0 z-50 w-full">
        <div className="mx-auto max-w-[1536px] px-5 xl:px-8 h-[76px] flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="VTA Talent Cloud home">
            <Image
              src="/assets/vta-logo.png"
              alt="VTA Talent Cloud"
              width={220}
              height={80}
              className="h-[60px] w-auto"
              priority
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-4 xl:gap-6 text-[12px] xl:text-[13px] font-semibold text-gray-700">
            <Link href="/" className="relative py-1 text-[color:var(--brand-red)]" aria-current="page">
              Home
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[color:var(--brand-red)]" aria-hidden="true" />
            </Link>
            {NAV_LINKS.slice(0, 6).map((link) => (
              <a key={link.href} href={link.href} className="relative py-1 hover:text-[color:var(--brand-red)]">
                {link.label}
                {link.hasDropdown && <ChevronDown className="ml-1 inline w-3 h-3" aria-hidden="true" />}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0" ref={dropdownWrapperRef}>
            <div className="hidden sm:flex items-center gap-2">
              <div className="relative">
                <LoginButton
                  expanded={openDropdown === "login"}
                  controls="login-menu"
                  onClick={() => toggleDropdown("login")}
                />
                {openDropdown === "login" && (
                  <div id="login-menu" role="menu" className="nav-dropdown absolute right-0 mt-3 w-52 rounded-2xl border border-gray-200 bg-white shadow-2xl p-2 z-50">
                    <Link role="menuitem" href="/login" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Employee Login
                    </Link>
                    <Link role="menuitem" href="/employer/login" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Employer Login
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("register")}
                  aria-expanded={openDropdown === "register"}
                  aria-haspopup="true"
                  className="nav-register-button"
                >
                  <LogIn className="w-4 h-4" aria-hidden="true" /> Register
                </button>
                {openDropdown === "register" && (
                  <div className="nav-dropdown absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg py-1 z-50">
                    <Link href="/register" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Employee Register
                    </Link>
                    <Link href="/employer/register" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Employer Register
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="nav-menu-trigger lg:hidden inline-flex items-center justify-center rounded-full border w-11 h-11"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      <aside
        className={`vta-mobile-drawer fixed top-0 right-0 z-50 h-full w-[300px] shadow-xl p-4 transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-gray-900">Menu</span>
          <button
            type="button"
            onClick={closeMobile}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          <Link
            href="/"
            onClick={closeMobile}
            className="rounded-md px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[color:var(--brand-red)]"
          >
            Home
          </Link>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[color:var(--brand-red)]"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 border-t border-gray-100 pt-3">
            <p className="px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Login</p>
            <Link
              href="/login"
              onClick={closeMobile}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[color:var(--brand-red)]"
            >
              Employee Login
            </Link>
            <Link
              href="/employer/login"
              onClick={closeMobile}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[color:var(--brand-red)]"
            >
              Employer Login
            </Link>
          </div>
          <div className="mt-1">
            <p className="px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Register</p>
            <Link
              href="/register"
              onClick={closeMobile}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[color:var(--brand-red)]"
            >
              Employee Register
            </Link>
            <Link
              href="/employer/register"
              onClick={closeMobile}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[color:var(--brand-red)]"
            >
              Employer Register
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
