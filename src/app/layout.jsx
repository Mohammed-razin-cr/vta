import { Inter, JetBrains_Mono } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site-config";
import "./globals.css";
/**
 * STANDALONE PREVIEW ONLY.
 *
 * If you're dropping this into an existing Next.js project that already
 * has a root layout, do NOT copy this file over it — your existing
 * layout stays untouched per the migration brief. Just make sure Inter
 * (weights 400–900) is loaded somewhere in your real root layout, since
 * the original design used it throughout.
 */
const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    display: "swap",
});
const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    display: "swap",
    variable: "--font-nav-tech",
});
export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
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
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: "/assets/vta-gear.png",
        apple: "/assets/vta-gear.png",
    },
};
export default function RootLayout({ children }) {
    return (<html lang="en">
      <body className={`${inter.className} ${jetBrainsMono.variable} min-h-screen bg-white antialiased`}>{children}</body>
    </html>);
}
