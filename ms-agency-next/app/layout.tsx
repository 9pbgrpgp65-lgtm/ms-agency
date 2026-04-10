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

const BASE_URL = "https://ms-agency.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
    url: BASE_URL,
    siteName: "MS Agency",
    title: "MS Agency — Agence web pour commerces locaux",
    description:
      "Site web professionnel livré en 48h dès 500€. Spécialiste des commerces de proximité.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MS Agency — Agence web pour commerces locaux",
    description: "Site web professionnel livré en 48h dès 500€.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MS Agency",
  description:
    "Agence web spécialisée pour les commerces locaux. Sites professionnels livrés en 48h, dès 500€.",
  url: BASE_URL,
  telephone: "+33783334543",
  email: "contact@ms-agency.fr",
  areaServed: "France",
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-inter, 'Inter', sans-serif)" }}>
        <CursorGlow />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
