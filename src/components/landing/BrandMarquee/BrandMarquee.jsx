import Image from "next/image";
import { BRANDS } from "@/lib/constants/landing-data";
function BrandChip({ brand, decorative = false }) {
    return (<div className="group mx-2 flex h-[72px] min-w-[142px] shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-red)]/30 hover:shadow-lg sm:mx-3 sm:min-w-[150px] sm:px-5">
      <span className="relative block h-12 w-[124px] overflow-hidden">
        <Image src={brand.logo} alt={decorative ? "" : `${brand.name} logo`} fill sizes="124px" loading="eager" className={`object-contain transition-transform duration-300 ${brand.logoClassName ?? "group-hover:scale-105"}`}/>
      </span>
    </div>);
}
export function BrandMarquee() {
    const loopedBrands = [...BRANDS, ...BRANDS];
    return (<section id="brand-partners" className="scroll-mt-20 border-y border-gray-100 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 sm:py-6">
        <h2 className="landing-section-title mb-4 text-center text-gray-800">
          Trusted by Leading Brands &amp; Organizations
        </h2>
        <div className="relative" style={{
            maskImage: "linear-gradient(to right,transparent,black 8%,black 92%,transparent)",
            WebkitMaskImage: "linear-gradient(to right,transparent,black 8%,black 92%,transparent)",
        }}>
          <div className="flex w-max animate-marquee">
            {loopedBrands.map((brand, i) => (<BrandChip key={`${brand.name}-${i}`} brand={brand} decorative={i >= BRANDS.length}/>))}
          </div>
        </div>
      </div>
    </section>);
}
