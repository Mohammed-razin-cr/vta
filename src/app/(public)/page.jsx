import { Navbar } from "@/components/landing/Navbar/Navbar";
import { Hero } from "@/components/landing/Hero/Hero";
import { BrandMarquee } from "@/components/landing/BrandMarquee/BrandMarquee";
import { Solutions } from "@/components/landing/Solutions/Solutions";
import { Programs } from "@/components/landing/Programs/Programs";
import { HowItWorks } from "@/components/landing/HowItWorks/HowItWorks";
import { Features } from "@/components/landing/Features/Features";
import { Stats } from "@/components/landing/Stats/Stats";
import { Testimonials } from "@/components/landing/Testimonials/Testimonials";
import { Facilities } from "@/components/landing/Facilities/Facilities";
import { CTA } from "@/components/landing/CTA/CTA";
import { Footer } from "@/components/landing/Footer/Footer";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import "@/styles/landing.css";
export const metadata = {
    title: "VTA Talent Cloud™ | AI-Powered Automotive Workforce Platform",
    description: "India's AI-powered automotive talent platform connecting learners, mechanics, trainers, employers, OEMs and CSR partners for learning, certification, hiring and career growth.",
};
export default function LandingPage() {
    return (<div className="landing-page">
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <Solutions />
        <Programs />
        <HowItWorks />
        <Features />
        <Stats />
        <Testimonials />
        <Facilities />
        <CTA />
      </main>
      <Footer />
      <ScrollReveal />
    </div>);
}
