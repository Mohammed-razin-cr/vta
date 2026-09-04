import { Inter, JetBrains_Mono } from "next/font/google";
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
    title: "VTA Talent Cloud™",
    description: "India's AI-Powered Automotive Workforce Platform",
};
export default function RootLayout({ children }) {
    return (<html lang="en">
      <body className={`${inter.className} ${jetBrainsMono.variable} min-h-screen bg-white antialiased`}>{children}</body>
    </html>);
}
