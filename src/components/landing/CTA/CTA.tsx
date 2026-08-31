import Image from "next/image";
import { PremiumButton } from "@/components/common/PremiumButton";

export function CTA() {
  return (
    <section id="contact" className="final-cta"><Image src="/assets/mechanics-hero.png" alt="" fill aria-hidden="true" className="final-cta__image" /><div className="final-cta__overlay" /><div className="final-cta__content reveal"><p className="section-kicker section-kicker--light">The next shift starts here</p><h2>Ready to build the future of the automotive workforce?</h2><p>Join VTA Talent Cloud™ and be part of India&apos;s mission to create skilled, certified and employable automotive professionals.</p><div className="final-cta__actions"><PremiumButton label="Explore Platform" href="#platform" /><a href="#solutions">Hire Talent</a><a href="#contact">Become a Partner</a></div></div></section>
  );
}
