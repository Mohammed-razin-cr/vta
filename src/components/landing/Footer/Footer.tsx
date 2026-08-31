import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FOOTER_COLUMNS } from "@/lib/constants/landing-data";

export function Footer() {
  const year = new Date().getFullYear();
  const sectionHref: Record<string, string> = {
    Platform: "#platform",
    Solutions: "#solutions",
    Programs: "#training",
    Resources: "#success-stories",
    Support: "#contact",
  };

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
        <div className="col-span-2 lg:col-span-2">
          <div className="bg-white rounded-md p-3 inline-block">
            <Image src="/assets/vta-logo.png" alt="VTA Talent Cloud" width={160} height={56} className="h-14 w-auto" />
          </div>
          <p className="mt-4 text-[12px] text-white/70 leading-relaxed max-w-xs">
            VTA Talent Cloud™ is India&apos;s AI-Powered Automotive Workforce Platform, connecting talent, industry
            and opportunities.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.linkedin.com/company/voc-automotive-india-pvt-ltd-66/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[color:var(--brand-red)]">
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@voiceofcustomer01" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[color:var(--brand-red)]">
              <Youtube className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/voiceofcustomer_" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[color:var(--brand-red)]">
              <Instagram className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/VOCAUTOMOTIVE" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[color:var(--brand-red)]">
              <Facebook className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h4 className="text-[13px] font-bold text-white mb-3">{column.title}</h4>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link}>
                  <a href={sectionHref[column.title]} className="text-[12px] text-white/60 hover:text-[color:var(--brand-red)]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-[13px] font-bold text-white mb-3">Download App</h4>
          <div className="space-y-2">
            <a href="https://vocautomotive.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md bg-white/10 text-white px-3 py-2 hover:bg-white/20">
              <span className="text-white text-lg" aria-hidden="true">
                ▶
              </span>
              <span className="leading-tight">
                <span className="block text-[9px]">GET IT ON</span>
                <span className="block text-[12px] font-semibold">Google Play</span>
              </span>
            </a>
            <a href="https://vocautomotive.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md bg-white/10 text-white px-3 py-2 hover:bg-white/20">
              <span className="leading-tight">
                <span className="block text-[9px]">Download on the</span>
                <span className="block text-[12px] font-semibold">App Store</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 py-4 text-center text-[11px] text-white/50">
          © {year} VOC Technical Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
