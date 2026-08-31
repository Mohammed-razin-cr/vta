import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { TrustMarquee } from "@/components/trust/TrustMarquee";
import { Programs } from "@/components/programs/Programs";
import { WhyVOC } from "@/components/why/WhyVOC";
import { Journey } from "@/components/experience/Journey";
import { Facilities } from "@/components/facilities/Facilities";
import { Ecosystem } from "@/components/ecosystem/Ecosystem";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Career } from "@/components/career/Career";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "VOC Technical Academy | Learn. Perform. Earn.",
  description:
    "VOC Technical Academy trains two-wheeler technicians on real machines in multi-brand diagnostics, maintenance and EV technology, with expert trainers, modern facilities and job assurance across the VOC Automotive network.",
};

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustMarquee />
        <Programs />
        <WhyVOC />
        <Journey />
        <Facilities />
        <Ecosystem />
        <Testimonials />
        <Career />
      </main>
      <Footer />
    </>
  );
}
