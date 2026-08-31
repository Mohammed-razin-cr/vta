"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Eye, EyeOff } from "lucide-react";

type PortalLoginProps = {
  audience: "Learner" | "Employer";
};

type FieldErrors = {
  email?: string;
  password?: string;
};

const WHATSAPP_SUPPORT =
  "https://wa.me/919606749096?text=Hello%20VOC%20Technical%20Academy%2C%20I%20need%20help%20with%20portal%20access.";

function VocAutomotiveMark({ wall = false }: { wall?: boolean }) {
  return (
    <div aria-label="VOC Automotive" className="text-center">
      <div
        aria-hidden="true"
        className={`${wall ? "text-[clamp(4rem,8vw,8rem)]" : "text-[clamp(3rem,5vw,4.5rem)]"} bg-gradient-to-b from-[#ff493f] via-[#ed151f] to-[#8d060c] bg-clip-text font-display font-black italic leading-[0.72] tracking-[-0.12em] text-transparent drop-shadow-[0_0_22px_rgba(245,20,30,.32)]`}
      >
        VOC
      </div>
      <div className={`${wall ? "mt-5 text-[clamp(.72rem,1vw,1rem)]" : "mt-3 text-[10px] sm:text-xs"} font-bold uppercase tracking-[0.42em] text-white`}>
        Automotive
      </div>
    </div>
  );
}

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-6 w-6 shrink-0">
      <path fill="#FFC107" d="M43.6 20H24v8h11.3A12 12 0 1 1 32 15.1l6-6A20 20 0 1 0 44 24c0-1.4-.1-2.7-.4-4Z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8A12 12 0 0 1 32 15.1l6-6A20 20 0 0 0 6.3 14.7Z" />
      <path fill="#4CAF50" d="M24 44c5.3 0 10.1-2 13.7-5.2l-6.3-5.3A12 12 0 0 1 12.9 28.6l-6.5 5A20 20 0 0 0 24 44Z" />
      <path fill="#1976D2" d="M43.6 20H24v8h11.3a12 12 0 0 1-3.9 5.5l6.3 5.3C41.6 35.2 44 30 44 24c0-1.4-.1-2.7-.4-4Z" />
    </svg>
  );
}

export function PortalLogin({ audience }: PortalLoginProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [noticeVisible, setNoticeVisible] = useState(false);

  const registerHref = audience === "Learner" ? "/register" : "/employer/register";

  function validateField(name: "email" | "password", value: string) {
    const next = { ...errors };

    if (name === "email") {
      if (!value.trim()) next.email = "Enter your email address.";
      else if (!/^\S+@\S+\.\S+$/.test(value)) next.email = "Enter a valid email address.";
      else delete next.email;
    }

    if (name === "password") {
      if (!value) next.password = "Enter your password.";
      else if (value.length < 6) next.password = "Password must be at least 6 characters.";
      else delete next.password;
    }

    setErrors(next);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    const password = String(data.get("password") ?? "");
    const nextErrors: FieldErrors = {};

    if (!email.trim()) nextErrors.email = "Enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!password) nextErrors.password = "Enter your password.";
    else if (password.length < 6) nextErrors.password = "Password must be at least 6 characters.";

    setErrors(nextErrors);
    setNoticeVisible(Object.keys(nextErrors).length === 0);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = event.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']");
      requestAnimationFrame(() => firstInvalid?.focus());
    }
  }

  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-black font-display text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[100dvh] overflow-hidden lg:inset-0 lg:h-auto">
        <Image src="/assets/mobile-bg.png" alt="" fill sizes="100vw" className="object-cover object-center lg:hidden" priority />
        <Image src="/assets/desktop-bg.png" alt="" fill sizes="100vw" className="hidden object-cover object-center lg:block" priority />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.48)_0%,transparent_20%,transparent_68%,rgba(0,0,0,.90)_100%)] lg:bg-[linear-gradient(180deg,rgba(0,0,0,.46)_0%,transparent_28%,transparent_68%,rgba(0,0,0,.88)_100%)]" />

        <Image
          src="/assets/mobile-bike.png"
          alt="Black and red VOC Automotive sport motorcycle"
          width={1086}
          height={1448}
          sizes="108vw"
          className="pointer-events-none absolute left-1/2 top-[-3%] z-[3] h-auto w-[108vw] max-w-none -translate-x-1/2 object-contain opacity-90 sm:top-[-8%] sm:w-[92vw] lg:hidden"
          priority
        />

        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[1920px] -translate-x-1/2 lg:block">
          <div className="absolute left-[68%] top-[25%] z-[2] -translate-x-1/2">
            <VocAutomotiveMark wall />
          </div>
          <Image
            src="/assets/desktop-bike.png"
            alt="Black and red VOC Automotive sport motorcycle"
            width={1536}
            height={1024}
            sizes="(max-width: 1279px) 51vw, (max-width: 1535px) 60vw, 1180px"
            className="absolute bottom-[4.5%] right-[clamp(-1rem,0.5vw,1rem)] z-[4] h-auto w-[51vw] object-contain xl:w-[60vw] 2xl:w-[min(64vw,1180px)]"
            priority
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto flex min-h-[100dvh] w-full max-w-[1920px] items-start justify-center px-3 pb-5 pt-[44dvh] sm:px-6 sm:pb-8 sm:pt-[46dvh] lg:items-center lg:justify-start lg:px-[clamp(2.75rem,4.2vw,5rem)] lg:py-6 xl:py-8">
        <section className="w-full max-w-[452px] rounded-[16px] border border-white/20 bg-black/[0.92] px-5 py-6 shadow-[0_30px_80px_rgba(0,0,0,.72),inset_0_1px_0_rgba(255,255,255,.04)] backdrop-blur-md sm:px-8 sm:py-8 lg:px-9 lg:py-8">
          <VocAutomotiveMark />

          <div className="mt-8 text-center">
            <h1 className="text-[clamp(1.35rem,2vw,1.7rem)] font-bold uppercase tracking-[-0.02em]">Welcome back</h1>
            <p className="mt-2 text-sm text-white/58 sm:text-base">Sign in to continue to your account</p>
          </div>

          <form className="mt-6 space-y-4" noValidate onSubmit={handleSubmit}>
            <div>
              <label htmlFor="portal-email" className="mb-2.5 block text-sm font-medium text-white/80">Email Address</label>
              <input
                id="portal-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "portal-email-error" : undefined}
                onBlur={(event) => validateField("email", event.currentTarget.value)}
                className="min-h-[52px] w-full rounded-[7px] border border-white/[0.035] bg-[#1c1c1f]/95 px-4 text-base text-white placeholder:text-white/32 transition focus-visible:border-[#ef1b25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef1b25]/45 aria-[invalid=true]:border-[#ef1b25]"
              />
              {errors.email ? <p id="portal-email-error" className="mt-2 text-xs font-medium text-red-400">{errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="portal-password" className="mb-2.5 block text-sm font-medium text-white/80">Password</label>
              <div className="relative">
                <input
                  id="portal-password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? "portal-password-error" : undefined}
                  onBlur={(event) => validateField("password", event.currentTarget.value)}
                  className="min-h-[52px] w-full rounded-[7px] border border-white/[0.035] bg-[#1c1c1f]/95 px-4 pr-12 text-base text-white placeholder:text-white/32 transition focus-visible:border-[#ef1b25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef1b25]/45 aria-[invalid=true]:border-[#ef1b25]"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible((visible) => !visible)}
                  aria-label={passwordVisible ? "Hide password" : "Show password"}
                  className="absolute right-1 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md text-white/55 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef1b25]"
                >
                  {passwordVisible ? <EyeOff aria-hidden="true" className="h-5 w-5" /> : <Eye aria-hidden="true" className="h-5 w-5" />}
                </button>
              </div>
              {errors.password ? <p id="portal-password-error" className="mt-2 text-xs font-medium text-red-400">{errors.password}</p> : null}
              <div className="mt-1 flex justify-end">
                <a href={WHATSAPP_SUPPORT} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-sm font-medium text-[#ff222d] transition hover:text-[#ff5961] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef1b25]">
                  Forgot Password?
                </a>
              </div>
            </div>

            <button type="submit" className="inline-flex min-h-[52px] w-full items-center justify-center rounded-[7px] bg-[#f10f1e] px-5 text-base font-bold uppercase tracking-wide text-white shadow-[0_14px_35px_rgba(241,15,30,.23)] transition hover:bg-[#ff2634] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black active:bg-[#d70b18]">
              Sign in
            </button>

            {noticeVisible ? (
              <div id="portal-connection-note" role="status" className="flex gap-2 rounded-[7px] border border-red-400/25 bg-red-500/10 p-3 text-xs leading-relaxed text-white/78">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                <p>Portal authentication is being connected. Your details were not sent.</p>
              </div>
            ) : null}
          </form>

          <div className="my-5 flex items-center gap-4 text-xs font-medium uppercase text-white/48 before:h-px before:flex-1 before:bg-white/18 after:h-px after:flex-1 after:bg-white/18">or</div>

          <button
            type="button"
            onClick={() => setNoticeVisible(true)}
            aria-describedby={noticeVisible ? "portal-connection-note" : undefined}
            className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-[7px] border border-white/45 bg-black/45 px-4 text-sm font-bold uppercase tracking-[0.03em] text-white transition hover:border-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef1b25]"
          >
            <GoogleMark />
            Continue with Google
          </button>

          <p className="mt-5 text-center text-sm text-white/58">
            Don&apos;t have an account?{" "}
            <Link href={registerHref} className="inline-flex min-h-11 items-center font-medium text-[#ff222d] transition hover:text-[#ff5961] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef1b25]">
              Sign up
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
