import { BRANDS } from "@/lib/constants/landing-data";

export function BrandMarquee() {
  const loopedBrands = [...BRANDS, ...BRANDS];
  return (
    <section className="brand-rail" aria-label="Trusted brands and organizations">
      <div className="brand-rail__label"><span>Industry network</span><strong>Trusted by leading brands &amp; organizations</strong></div>
      <div className="brand-rail__viewport">
        <div className="brand-rail__track animate-marquee" aria-hidden="true">
          {loopedBrands.map((brand, index) => <div className="brand-rail__item" key={`${brand.name}-${index}`}><span>{String((index % BRANDS.length) + 1).padStart(2, "0")}</span><strong>{brand.name}</strong></div>)}
        </div>
        <span className="sr-only">{BRANDS.map((brand) => brand.name).join(", ")}</span>
      </div>
    </section>
  );
}
