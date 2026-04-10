import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "MS Agency — Agence web pour commerces locaux",
    template: "%s | MS Agency",
  },
  description:
    "MS Agency crée des sites web professionnels pour les commerces locaux en 48h. SEO local, prise de RDV en ligne, maintenance incluse. Tarifs transparents dès 500€.",
  keywords: [
    "agence web",
    "site web commerce local",
    "création site internet",
    "SEO local",
    "site vitrine",
    "France",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "MS Agency",
    title: "MS Agency — Agence web pour commerces locaux",
    description:
      "Site web professionnel livré en 48h dès 500€. Spécialiste des commerces de proximité.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter, 'Inter', sans-serif)" }}>
        <CursorGlow />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
