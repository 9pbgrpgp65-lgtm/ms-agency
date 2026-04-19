import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Portfolio — Nos réalisations",
  description:
    "Découvrez nos créations web pour les commerces locaux : restaurants, cabinets dentaires, garages, artisans et auto-écoles.",
};

const projects = [
  {
    sector: "Garage automobile",
    name: "Garage Moretti",
    city: "Lyon 6ème",
    img: "https://b730616.smushcdn.com/730616/wp-content/uploads/service-resize-1030x687.jpg?lossy=2&strip=1&webp=1",
    desc: "Modèle de démonstration — votre site sera entièrement personnalisé pour votre commerce.",
    deliverables: ["SEO local", "Google Maps", "Formulaire devis", "Page services"],
    id: "garage",
    href: "/templates/garage/index.html",
  },
  {
    sector: "Artisan plombier",
    name: "Plomberie Benali",
    city: "Bordeaux Centre",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    desc: "Modèle de démonstration — votre site sera entièrement personnalisé pour votre commerce.",
    deliverables: ["Appel urgence direct", "WhatsApp flottant", "SEO local", "Avis clients"],
    id: "artisan",
    href: "/templates/artisan-plombier/index.html",
  },
  {
    sector: "Restaurant",
    name: "La Trattoria di Roma",
    city: "Paris 11e",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    desc: "Modèle de démonstration — votre site sera entièrement personnalisé pour votre commerce.",
    deliverables: ["Réservation en ligne", "Menu digital", "Photos plats", "SEO local"],
    id: "restaurant",
    href: "/templates/restaurant-italien/index.html",
  },
  {
    sector: "Cabinet dentaire",
    name: "Cabinet Dr. Moreau",
    city: "Lyon 3e",
    img: "https://www.premiercap.fr/wp-content/uploads/2021/06/dentiste.jpg",
    desc: "Modèle de démonstration — votre site sera entièrement personnalisé pour votre commerce.",
    deliverables: ["Prise de RDV", "Formulaire patient", "Horaires & urgences", "Confiance"],
    id: "dentiste",
    href: "/templates/cabinet-dentaire/index.html",
  },
  {
    sector: "Auto-école",
    name: "Auto-École Liberté",
    city: "Nantes Centre",
    img: "https://www.cd-sport.com/wp-content/uploads/2020/12/B9719446957Z.1_20190502133740_000GKDDGVF8C.1-0.jpg",
    desc: "Modèle de démonstration — votre site sera entièrement personnalisé pour votre commerce.",
    deliverables: ["Inscription en ligne", "Tarifs clairs", "Témoignages élèves", "SEO local"],
    id: "autoecole",
    href: "/templates/auto-ecole/index.html",
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
              Nos modèles par secteur
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <p className="sub">
              Des exemples de ce qu&apos;on crée pour chaque secteur.
              Votre site sera personnalisé avec vos textes, vos couleurs et vos photos.
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
                  {/* Image — cliquable */}
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="p-preview p-preview-link">
                      <Image
                        src={item.img}
                        alt={`${item.sector} — ${item.name}, ${item.city}`}
                        width={600}
                        height={450}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div className="p-overlay">
                        <span className="p-overlay-tag">{item.sector}</span>
                        <span className="p-overlay-open">Ouvrir le site ↗</span>
                      </div>
                    </a>
                  ) : (
                    <Link href="/contact" className="p-preview p-preview-link">
                      <Image
                        src={item.img}
                        alt={`${item.sector} — ${item.name}, ${item.city}`}
                        width={600}
                        height={450}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div className="p-overlay">
                        <span className="p-overlay-tag">{item.sector}</span>
                        <span className="p-overlay-open">Projet similaire ↗</span>
                      </div>
                    </Link>
                  )}

                  {/* Info */}
                  <div className="p-info">
                    <div className="p-sector">{item.sector}</div>
                    <h3 style={{ marginBottom: "4px" }}>{item.name}</h3>
                    <div className="p-city">{item.city}</div>
                    <p className="p-desc">{item.desc}</p>
                    <div className="p-deliverables">
                      {item.deliverables.map((d) => (
                        <span key={d} className="p-tag">{d}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="p-actions">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-btn-live"
                        >
                          Voir le site →
                        </a>
                      ) : (
                        <Link href="/contact" className="p-btn-live">
                          Voir le site →
                        </Link>
                      )}
                    </div>
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
