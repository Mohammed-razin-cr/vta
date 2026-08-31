import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { GlobalTextMotion } from "@/components/common/GlobalTextMotion";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "VOC Technical Academy | Learn. Perform. Earn.",
  description:
    "VOC Technical Academy trains two-wheeler technicians on real machines in diagnostics, maintenance and EV technology, with expert trainers, modern facilities and job assurance across the VOC Automotive network.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-paper text-ink`}>
        <GlobalTextMotion />
        {children}
      </body>
    </html>
  );
}
