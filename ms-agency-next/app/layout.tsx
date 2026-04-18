import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieConsent from "@/components/CookieConsent";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm",
});

const BASE_URL = "https://48hagency.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ms48agency — Agence web pour commerces locaux",
    template: "%s | ms48agency",
  },
  description:
    "ms48agency crée des sites web professionnels pour les commerces locaux en 48h. SEO local, prise de RDV en ligne, maintenance incluse. Tarifs transparents dès 990€.",
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
    siteName: "ms48agency",
    title: "ms48agency — Agence web pour commerces locaux",
    description:
      "Site web professionnel livré en 48h dès 990€. Spécialiste des commerces de proximité.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ms48agency — Agence web pour commerces locaux",
    description: "Site web professionnel livré en 48h dès 990€.",
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
  name: "ms48agency",
  description:
    "Agence web spécialisée pour les commerces locaux. Sites professionnels livrés en 48h, dès 990€.",
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
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <CookieConsent />
      </body>
    </html>
  );
}
