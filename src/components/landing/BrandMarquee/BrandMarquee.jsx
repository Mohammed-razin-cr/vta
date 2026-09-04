import Image from "next/image";
import { BRANDS } from "@/lib/constants/landing-data";
function BrandChip({ brand }) {
    return (<div className="shrink-0 mx-4 h-16 flex items-center justify-center px-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[color:var(--brand-red)]/30 transition-all duration-300 group" style={{ minWidth: 140 }}>
      <span className="relative block h-10 w-[112px] overflow-hidden">
        <Image src={brand.logo} alt="" fill sizes="112px" className={`object-contain transition-transform duration-300 ${brand.logoClassName ?? "group-hover:scale-105"}`}/>
      </span>
    </div>);
}
export function BrandMarquee() {
    const loopedBrands = [...BRANDS, ...BRANDS];
    return (<section id="brand-partners" className="scroll-mt-20 border-y border-gray-100 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 sm:py-10">
        <h3 className="landing-section-title mb-6 text-center text-gray-800 reveal">
          Trusted by Leading Brands &amp; Organizations
        </h3>
        <div className="relative reveal" style={{
            maskImage: "linear-gradient(to right,transparent,black 8%,black 92%,transparent)",
            WebkitMaskImage: "linear-gradient(to right,transparent,black 8%,black 92%,transparent)",
        }}>
          <div className="flex w-max animate-marquee" aria-hidden="true">
            {loopedBrands.map((brand, i) => (<BrandChip key={`${brand.name}-${i}`} brand={brand}/>))}
          </div>
          <span className="sr-only">
            Partner brands include KTM, HONDA, TVS, HERO, ROYAL ENFIELD, GULF, VEEDOL, SKILL INDIA, NSDC, BAJAJ.
          </span>
        </div>
      </div>
    </section>);
}
