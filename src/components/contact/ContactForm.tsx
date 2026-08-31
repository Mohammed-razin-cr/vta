"use client";

import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "919606749096";

type ContactFormProps = {
  defaultAudience?: "Learner" | "Employer" | "Trainer" | "Partner";
  compact?: boolean;
  dark?: boolean;
};

type FormErrors = Partial<Record<"name" | "phone" | "audience" | "consent", string>>;

const fieldBase =
  "min-h-12 w-full rounded-btn border px-3.5 text-base transition-colors placeholder:text-smoke-light focus-visible:border-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/20";

export function ContactForm({
  defaultAudience = "Learner",
  compact = false,
  dark = false,
}: ContactFormProps) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const surface = dark
    ? "border-line-dark bg-white/[0.045] text-paper"
    : "border-line bg-white text-ink";
  const field = cn(
    fieldBase,
    dark
      ? "border-line-dark bg-white/[0.06] text-paper placeholder:text-paper/35"
      : "border-line-strong bg-paper text-ink",
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\s+/g, "");
    const audience = String(data.get("audience") ?? "");
    const consent = data.get("consent") === "on";
    const nextErrors: FormErrors = {};

    if (name.length < 2) nextErrors.name = "Enter your full name.";
    if (!/^[+]?[0-9]{10,13}$/.test(phone)) {
      nextErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!audience) nextErrors.audience = "Choose how you want to join VTA.";
    if (!consent) nextErrors.consent = "Please allow VTA to contact you about this enquiry.";

    setErrors(nextErrors);
    setSubmitted(false);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = form.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    const details = [
      "Hello VOC Technical Academy, I would like to enquire.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `I am a/an: ${audience}`,
      `City: ${String(data.get("city") ?? "Not provided").trim() || "Not provided"}`,
      `Interest: ${String(data.get("interest") ?? "General enquiry")}`,
      `Email: ${String(data.get("email") ?? "Not provided").trim() || "Not provided"}`,
    ];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(details.join("\n"))}`;
    setSubmitted(true);
    const whatsappWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (!whatsappWindow) window.location.href = url;
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn("rounded-media border p-5 sm:p-6", surface, compact ? "shadow-lift-sm" : "")}
      aria-label="VTA enquiry form"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={cn("spec-label", dark ? "text-ember-warm" : "text-ember")}>Admissions enquiry</p>
          <h3 className="mt-2 font-display text-2xl font-bold">Tell us where you want to begin.</h3>
        </div>
        <span className={cn("hidden h-11 w-11 shrink-0 items-center justify-center rounded-full sm:flex", dark ? "bg-paper text-ink" : "bg-ink text-paper")}> 
          <MessageCircle aria-hidden="true" className="h-5 w-5" />
        </span>
      </div>

      <div className={cn("mt-5 grid gap-4", compact ? "sm:grid-cols-2" : "sm:grid-cols-2")}>
        <label className="block">
          <span className="text-sm font-semibold">Full name <span aria-hidden="true" className="text-ember-warm">*</span></span>
          <input
            name="name"
            required
            autoComplete="name"
            className={cn("mt-2", field)}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <span id="name-error" className="mt-1.5 block text-sm text-ember-warm">{errors.name}</span>}
        </label>

        <label className="block">
          <span className="text-sm font-semibold">Phone number <span aria-hidden="true" className="text-ember-warm">*</span></span>
          <input
            name="phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={cn("mt-2", field)}
            placeholder="10-digit mobile number"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && <span id="phone-error" className="mt-1.5 block text-sm text-ember-warm">{errors.phone}</span>}
        </label>

        <label className="block">
          <span className="text-sm font-semibold">I want to join as <span aria-hidden="true" className="text-ember-warm">*</span></span>
          <select
            name="audience"
            required
            defaultValue={defaultAudience}
            className={cn("vta-contact-select mt-2", field)}
            aria-invalid={Boolean(errors.audience)}
            aria-describedby={errors.audience ? "audience-error" : undefined}
          >
            <option value="Learner">Learner</option>
            <option value="Employer">Employer</option>
            <option value="Trainer">Trainer</option>
            <option value="Partner">Partner</option>
          </select>
          {errors.audience && <span id="audience-error" className="mt-1.5 block text-sm text-ember-warm">{errors.audience}</span>}
        </label>

        <label className="block">
          <span className="text-sm font-semibold">City</span>
          <input name="city" autoComplete="address-level2" className={cn("mt-2", field)} placeholder="Your city" />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold">What are you interested in?</span>
          <select name="interest" defaultValue="Bronze Level Course" className={cn("vta-contact-select mt-2", field)}>
            <option>Bronze Level Course</option>
            <option>Silver Level Course</option>
            <option>Gold Level Course</option>
            <option>Platinum Level Course</option>
            <option>Technical training</option>
            <option>Hiring certified talent</option>
            <option>Trainer opportunities</option>
            <option>Partnership / CSR</option>
            <option>General enquiry</option>
          </select>
        </label>

        {!compact && (
          <label className="block sm:col-span-2">
            <span className="text-sm font-semibold">Email <span className={dark ? "text-paper/45" : "text-smoke"}>(optional)</span></span>
            <input name="email" type="email" autoComplete="email" className={cn("mt-2", field)} placeholder="you@example.com" />
          </label>
        )}
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 shrink-0 accent-[#e4322b]"
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <span className={cn("text-sm leading-relaxed", dark ? "text-paper/65" : "text-smoke")}>I agree that VOC Technical Academy may contact me about this enquiry.</span>
      </label>
      {errors.consent && <span id="consent-error" className="mt-1.5 block text-sm text-ember-warm">{errors.consent}</span>}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-btn bg-ember px-6 font-semibold text-white transition-colors hover:bg-ember-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-warm focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5" />
          Continue on WhatsApp
        </button>
        <p className={cn("text-xs leading-relaxed", dark ? "text-paper/45" : "text-smoke")}>Opens a pre-filled message to VOC customer care.</p>
      </div>

      {submitted && (
        <p role="status" className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#46c97b]">
          <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
          Your enquiry is ready in WhatsApp.
        </p>
      )}
    </form>
  );
}
