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
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site-config";
import "@/styles/landing.css";

export const metadata = {
    title: { absolute: SITE_TITLE },
    description: SITE_DESCRIPTION,
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "/",
        siteName: SITE_NAME,
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "VTA Talent Cloud automotive workforce platform",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: ["/opengraph-image"],
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "EducationalOrganization",
            "@id": `${SITE_URL}/#organization`,
            name: "VOC Technical Academy",
            alternateName: SITE_NAME,
            url: `${SITE_URL}/`,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/assets/vta-logo.png`,
            },
            description: SITE_DESCRIPTION,
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: SITE_NAME,
            description: SITE_DESCRIPTION,
            publisher: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en-IN",
        },
        {
            "@type": "WebPage",
            "@id": `${SITE_URL}/#webpage`,
            url: `${SITE_URL}/`,
            name: SITE_TITLE,
            description: SITE_DESCRIPTION,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: `${SITE_URL}/opengraph-image`,
                width: 1200,
                height: 630,
            },
            inLanguage: "en-IN",
        },
    ],
};

export default function LandingPage() {
    return (<div className="landing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <a href="#main-content" className="sr-only z-[100] rounded-md bg-white px-4 py-3 font-semibold text-gray-950 shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
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
