import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import TemplatePreview from "@/components/TemplatePreview";

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
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
    desc: "Garage spécialisé multi-marques en difficulté de visibilité locale. Objectif : générer des appels entrants depuis Google Maps et dominer la recherche 'garage Lyon 6'.",
    deliverables: ["SEO local", "Google Maps", "Formulaire devis", "Page services"],
    id: "garage",
    href: "/templates/garage/index.html",
  },
  {
    sector: "Artisan plombier",
    name: "Plomberie Benali",
    city: "Bordeaux Centre",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
    desc: "Plombier indépendant sans présence en ligne. Objectif : capturer les urgences 24h/24 et remplacer le bouche-à-oreille par un flux de leads constant.",
    deliverables: ["Appel urgence direct", "WhatsApp flottant", "SEO local", "Avis clients"],
    id: "artisan",
    href: "/templates/artisan-plombier/index.html",
  },
  {
    sector: "Restaurant",
    name: "La Trattoria di Roma",
    city: "Paris 11e",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    desc: "Trattoria familiale sans site web, réservations uniquement par téléphone. Objectif : digitaliser les réservations et attirer de nouveaux clients via Google.",
    deliverables: ["Réservation en ligne", "Menu digital", "Photos plats", "SEO local"],
    id: "restaurant",
    href: "#",
  },
  {
    sector: "Cabinet dentaire",
    name: "Cabinet Dr. Moreau",
    city: "Lyon 3e",
    img: "https://images.unsplash.com/photo-1588776814546-1ffdd8b4c1e7?auto=format&fit=crop&w=600&q=80",
    desc: "Cabinet débordé par les appels de prise de RDV. Objectif : automatiser la prise de rendez-vous en ligne et réduire la charge administrative.",
    deliverables: ["Prise de RDV", "Formulaire patient", "Horaires & urgences", "Confiance"],
    id: "dentiste",
    href: "#",
  },
  {
    sector: "Auto-école",
    name: "Auto-École Liberté",
    city: "Nantes Centre",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80",
    desc: "Auto-école locale face à la concurrence des grandes franchises. Objectif : valoriser le suivi personnalisé et capter les inscriptions en ligne toute l'année.",
    deliverables: ["Inscription en ligne", "Tarifs clairs", "Témoignages élèves", "SEO local"],
    id: "autoecole",
    href: "#",
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
                <a
                  href={item.href}
                  target={item.href !== "#" ? "_blank" : undefined}
                  rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                  className="p-card"
                  id={item.id}
                  style={{ textDecoration: "none", cursor: item.href === "#" ? "default" : "pointer" }}
                >
                  <div className="p-preview">
                    {item.href !== "#" ? (
                      <TemplatePreview src={item.href} label={item.name} />
                    ) : (
                      <Image
                        src={item.img}
                        alt={`${item.sector} — ${item.name}, ${item.city}`}
                        width={600}
                        height={450}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    )}
                    <div className="p-overlay">
                      <span className="p-overlay-tag">{item.sector}</span>
                    </div>
                  </div>
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
                    {item.href !== "#" && (
                      <span className="p-link">
                        Voir le site <span>→</span>
                      </span>
                    )}
                  </div>
                </a>
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
