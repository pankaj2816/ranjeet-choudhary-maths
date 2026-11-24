import type { Metadata } from "next";
import { Instrument_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import { ToastProvider } from "@/context/ToastContext";
import { LanguageProvider } from "@/context/LanguageContext";

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-deva",
  display: "swap",
});

const isPages = process.env.GITHUB_ACTIONS === 'true';

export const metadata: Metadata = {
  referrer: 'strict-origin-when-cross-origin',
  metadataBase: new URL(isPages ? 'https://pankaj2816.github.io' : 'http://localhost:3000'),
  title: "Ranjeet Choudhary Sir | Maths Teacher | Class 10, 11 & 12",
  description: "Official website of Ranjeet Choudhary Sir, Mathematics teacher (B.Sc., B.Ed., M.Sc. Maths) with 8+ years of experience teaching Class 10, 11 and 12. Free study material, question papers, worked solutions and notice board updates.",
  keywords: [
    "Ranjeet Choudhary Sir Maths",
    "Ranjeet Sir Maths",
    "Maths Teacher",
    "CBSE Class 10 Maths",
    "CBSE Class 11 Maths",
    "CBSE Class 12 Maths",
    "JEE Main Maths",
    "Maths Notes",
    "Maths Question Papers",
    "Calculus",
    "Trigonometry"
  ],
  authors: [{ name: "Ranjeet Choudhary Sir" }],
  creator: "Ranjeet Choudhary Sir",
  openGraph: {
    title: "Ranjeet Choudhary Sir | Mathematics Teacher",
    description: "Learn Maths with Ranjeet Choudhary Sir, 8+ years of teaching Class 10, 11 and 12. Free notes, question papers and worked solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Ranjeet Choudhary Sir Maths"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${devanagari.variable} font-sans`}>
      <body className="min-h-screen flex flex-col bg-paper text-ink">
        <LanguageProvider>
          <ToastProvider>
            <AnnouncementBanner />
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
