import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

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
    default: "48hAgency — Agence web pour commerces locaux",
    template: "%s | 48hAgency",
  },
  description:
    "48hAgency crée des sites web professionnels pour les commerces locaux en 48h. SEO local, prise de RDV en ligne, maintenance incluse. Tarifs transparents dès 990€.",
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
    siteName: "48hAgency",
    title: "48hAgency — Agence web pour commerces locaux",
    description:
      "Site web professionnel livré en 48h dès 990€. Spécialiste des commerces de proximité.",
  },
  twitter: {
    card: "summary_large_image",
    title: "48hAgency — Agence web pour commerces locaux",
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
  name: "48hAgency",
  description:
    "Agence web spécialisée pour les commerces locaux. Sites professionnels livrés en 48h, dès 990€.",
  url: BASE_URL,
  telephone: "+33783334543",
  email: "contact@48hagency.com",
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
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
