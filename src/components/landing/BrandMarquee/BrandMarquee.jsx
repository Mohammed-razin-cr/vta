import Image from "next/image";
import { BRANDS } from "@/lib/constants/landing-data";
function BrandChip({ brand }) {
    return (<div className="group flex h-[72px] min-w-0 items-center justify-center rounded-xl border border-gray-200 bg-white px-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-red)]/30 hover:shadow-lg sm:px-4">
      <span className={`relative block max-w-full overflow-hidden ${brand.frameClassName ?? "h-12 w-full max-w-[124px]"}`}>
        <Image src={brand.logo} alt={`${brand.name} logo`} fill sizes="(max-width: 479px) 100px, 124px" loading="eager" className={`object-contain transition-transform duration-300 ${brand.logoClassName ?? "group-hover:scale-105"}`}/>
      </span>
    </div>);
}
export function BrandMarquee() {
    return (<section id="brand-partners" className="scroll-mt-20 border-y border-gray-100 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 sm:py-6">
        <h2 className="landing-section-title mb-4 text-center text-gray-800">
          Trusted by Leading Brands &amp; Organizations
        </h2>
        <div className="grid grid-cols-2 gap-2.5 min-[480px]:grid-cols-3 sm:grid-cols-4 sm:gap-3 lg:grid-cols-5">
          {BRANDS.map((brand) => (<BrandChip key={brand.name} brand={brand}/>))}
        </div>
      </div>
    </section>);
}
