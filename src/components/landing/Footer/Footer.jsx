import Image from "next/image";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { FOOTER_COLUMNS } from "@/lib/constants/landing-data";
export function Footer() {
    const year = new Date().getFullYear();
    return (<footer className="bg-black text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-7 px-4 py-10 sm:gap-8 sm:px-6 sm:py-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        <div id="about" className="col-span-2 scroll-mt-28 md:col-span-3 lg:col-span-2 xl:col-span-2">
          <div className="bg-white rounded-md p-3 inline-block">
            <Image src="/assets/vta-logo.png" alt="VTA Talent Cloud" width={160} height={56} className="h-14 w-auto" style={{ width: "auto" }}/>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            VTA Talent Cloud™ is India&apos;s AI-Powered Automotive Workforce Platform, connecting talent, industry
            and opportunities.
          </p>
          <a href="#contact" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--brand-red)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            Contact VTA <ArrowUpRight className="h-4 w-4" aria-hidden="true"/>
          </a>
        </div>

        {FOOTER_COLUMNS.map((column) => (<div key={column.title}>
            <h2 className="mb-3 text-sm font-bold text-white">{column.title}</h2>
            <ul className="space-y-2">
              {column.links.map((link) => (<li key={`${column.title}-${link.label}`}>
                  <a href={link.href} className="inline-flex min-h-8 items-center text-sm text-white/65 transition-colors hover:text-[color:var(--brand-red)]">
                    {link.label}
                  </a>
                </li>))}
            </ul>
          </div>))}

        <div>
          <h2 className="mb-3 text-sm font-bold text-white">Mobile App</h2>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/70">
            <Smartphone className="h-5 w-5 text-[color:var(--brand-red)]" aria-hidden="true"/>
            <p className="mt-2 text-sm font-semibold text-white">Coming soon</p>
            <p className="mt-1 text-xs leading-5">Learn and track your progress on the go.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 py-4 text-center text-xs text-white/55">
          © {year} VOC Technical Academy. All rights reserved.
        </div>
      </div>
    </footer>);
}
