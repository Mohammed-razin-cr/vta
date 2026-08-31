import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/content";
import { ContactForm } from "@/components/contact/ContactForm";

type PortalEntryProps = {
  audience: "Learner" | "Employer";
  mode: "login" | "register";
};

const WHATSAPP_SUPPORT = "https://wa.me/919606749096?text=Hello%20VOC%20Technical%20Academy%2C%20I%20need%20help%20with%20portal%20access.";

export function PortalEntry({ audience, mode }: PortalEntryProps) {
  const registering = mode === "register";
  const title = registering
    ? `${audience} registration starts here.`
    : `${audience} portal access.`;

  return (
    <main className="min-h-screen bg-paper px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-32px)] max-w-[1280px] overflow-hidden rounded-media border border-line bg-white shadow-lift lg:grid-cols-[0.78fr_1.22fr]">
        <section className="relative flex flex-col justify-between overflow-hidden bg-ink p-6 text-paper sm:p-10 lg:p-12">
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[52px] border-ember/20" />
          <Link href="/" className="relative z-10 inline-flex w-fit rounded-xs bg-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember">
            <Image src={BRAND.logo} alt="VOC Technical Academy home" width={210} height={90} className="h-12 w-auto" priority />
          </Link>

          <div className="relative z-10 my-14 max-w-xl">
            <p className="spec-label text-ember-warm">VTA Talent Cloud / {audience}</p>
            <h1 className="mt-5 text-balance font-display text-[clamp(2.4rem,7vw,5rem)] font-black leading-[0.95] tracking-[-0.04em]">{title}</h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/70 sm:text-lg">
              {registering
                ? "Share your details and the VTA team will help you choose the right next step."
                : "The account portal is being connected to this public academy experience. Existing users can request access help directly from VOC customer care."}
            </p>
          </div>

          <Link href="/" className="relative z-10 inline-flex min-h-11 w-fit items-center rounded-btn border border-line-dark-strong px-4 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember">
            Back to the academy
          </Link>
        </section>

        <section className="flex items-center p-5 sm:p-8 lg:p-12">
          {registering ? (
            <div className="w-full">
              <ContactForm defaultAudience={audience} compact />
            </div>
          ) : (
            <div className="mx-auto w-full max-w-xl rounded-media border border-line bg-paper p-6 sm:p-9">
              <p className="spec-label text-ember">Portal status</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink">Need help signing in?</h2>
              <p className="mt-4 text-base leading-relaxed text-smoke">There is no active login service in this website build yet. Contact VOC customer care and the team will help you reach the correct account system.</p>
              <a
                href={WHATSAPP_SUPPORT}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-btn bg-ember px-6 font-semibold text-white transition-colors hover:bg-ember-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
              >
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
                Ask for portal help
              </a>
              <p className="mt-4 text-sm text-smoke">Verified VOC customer care: +91 96067 49096</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
