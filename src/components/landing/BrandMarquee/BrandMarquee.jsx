import Image from "next/image";
import { BRANDS } from "@/lib/constants/landing-data";
function BrandChip({ brand, decorative = false }) {
    return (<div className="group flex h-[72px] w-[150px] shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white px-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-red)]/30 hover:shadow-lg sm:w-[166px] sm:px-4">
      {brand.cropStyle ? (<span role={decorative ? undefined : "img"} aria-label={decorative ? undefined : `${brand.name} logo`} aria-hidden={decorative || undefined} className={`relative block h-12 w-full overflow-hidden bg-white bg-no-repeat transition-transform duration-300 group-hover:scale-105 ${brand.cropClassName}`} style={{ backgroundImage: `url(${brand.logo})`, ...brand.cropStyle }}/>) : (<span className={`relative block max-w-full overflow-hidden ${brand.frameClassName ?? "h-12 w-full max-w-[124px]"}`}>
          <Image src={brand.logo} alt={decorative ? "" : `${brand.name} logo`} fill sizes="124px" loading="eager" className={`object-contain transition-transform duration-300 ${brand.logoClassName ?? "group-hover:scale-105"}`}/>
        </span>)}
    </div>);
}
export function BrandMarquee() {
    const loopedBrands = [...BRANDS, ...BRANDS];
    return (<section id="brand-partners" className="scroll-mt-20 border-y border-gray-100 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 sm:py-6">
        <h2 className="landing-section-title mb-4 text-center text-gray-800">
          Trusted by Leading Brands &amp; Organizations
        </h2>
        <div className="brand-marquee-viewport overflow-hidden" role="region" aria-label="Trusted brands">
          <div className="flex w-max gap-3 animate-marquee">
            {loopedBrands.map((brand, index) => (<BrandChip key={`${brand.name}-${index}`} brand={brand} decorative={index >= BRANDS.length}/>))}
          </div>
        </div>
      </div>
    </section>);
}
