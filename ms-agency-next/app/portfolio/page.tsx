import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Portfolio — Nos réalisations",
  description:
    "Découvrez nos créations web pour les commerces locaux : restaurants, cabinets dentaires, garages, artisans et auto écoles.",
};

const projects = [
  {
    sector: "Restaurant",
    name: "Le Comptoir",
    city: "Paris 11e",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    tag: "Site vitrine",
    id: "restaurant",
  },
  {
    sector: "Cabinet dentaire",
    name: "Dr. Moreau",
    city: "Lyon",
    img: "https://images.unsplash.com/photo-1588776814546-1ffdd8b4c1e7?auto=format&fit=crop&w=600&q=80",
    tag: "Prise de RDV",
    id: "dentiste",
  },
  {
    sector: "Garage automobile",
    name: "Auto Renfort",
    city: "Argenteuil",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
    tag: "SEO local",
    id: "garage",
  },
  {
    sector: "Artisan",
    name: "Plomberie Dubois",
    city: "Bordeaux",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
    tag: "Site vitrine",
    id: "artisan",
  },
  {
    sector: "Auto école",
    name: "Drive School",
    city: "Marseille",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80",
    tag: "Inscription en ligne",
    id: "autoecole",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <div className="container">
          <RevealOnScroll>
            <span className="label">Portfolio</span>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <h1 className="title" style={{ marginTop: "12px", marginBottom: "16px" }}>
              Nos réalisations
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <p className="sub">
              Des sites web qui fonctionnent vraiment — pour de vrais commerces locaux
              partout en France.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Portfolio grid */}
      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((item, i) => (
              <RevealOnScroll key={item.id} delay={(i % 3) + 1}>
                <div className="p-card" id={item.id}>
                  <div className="p-preview">
                    <Image
                      src={item.img}
                      alt={`${item.sector} — ${item.name}, ${item.city}`}
                      width={600}
                      height={450}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div className="p-overlay">
                      <span className="p-overlay-tag">{item.tag}</span>
                    </div>
                  </div>
                  <div className="p-info">
                    <div className="p-sector">{item.sector}</div>
                    <h3>
                      {item.name}
                      <span style={{ fontWeight: 400, color: "var(--white-50)", marginLeft: "8px", fontSize: "14px" }}>
                        {item.city}
                      </span>
                    </h3>
                  </div>
                </div>
              </RevealOnScroll>
            ))}

            {/* CTA card */}
            <RevealOnScroll delay={3}>
              <Link href="/contact" className="p-card-cta">
                <div style={{ fontSize: "40px" }}>✨</div>
                <h3>Votre commerce ici</h3>
                <p>Rejoignez nos clients satisfaits</p>
                <span className="btn-primary" style={{ pointerEvents: "none" }}>
                  Démarrer mon projet
                </span>
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="container">
          <RevealOnScroll>
            <div className="cta-strip-inner">
              <h2>Votre site dans ce portfolio ?</h2>
              <p>
                Demandez votre devis gratuit aujourd&apos;hui. Livraison garantie en 48h.
              </p>
              <div className="cta-strip-actions">
                <Link href="/contact" className="btn-primary">
                  Devis gratuit →
                </Link>
                <Link href="/tarifs" className="btn-secondary">
                  Voir les tarifs
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
