import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "MS Agency — Agence web pour commerces locaux",
  description:
    "Site web professionnel livré en 48h dès 490€. MS Agency spécialisée commerces de proximité : restaurants, garages, artisans, cabinets médicaux.",
};

const marqueeSectors = [
  "Restaurant",
  "Garage automobile",
  "Cabinet dentaire",
  "Artisan plombier",
  "Auto école",
  "Salon de coiffure",
  "Fromagerie",
  "Pressing",
  "Opticien",
  "Boulangerie",
  "Pharmacie",
  "Ostéopathe",
];

const portfolioItems = [
  {
    sector: "Restaurant",
    name: "Le Comptoir",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    tag: "Site vitrine",
  },
  {
    sector: "Cabinet dentaire",
    name: "Dr. Moreau",
    img: "https://images.unsplash.com/photo-1588776814546-1ffdd8b4c1e7?auto=format&fit=crop&w=600&q=80",
    tag: "Prise de RDV",
  },
  {
    sector: "Garage",
    name: "Auto Renfort",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
    tag: "SEO local",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Agence web — France
          </div>

          <h1>
            Votre commerce local{" "}
            <span className="hero-dim-text">mérite</span>
            <br />
            <span className="hero-gradient-text">mieux qu&apos;un site moyen</span>
          </h1>

          <p className="hero-sub">
            Des sites web professionnels livrés en 48h, optimisés pour le SEO local
            et conçus pour convertir. Dès 490€, tout inclus.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Devis gratuit →
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              Voir nos sites
            </Link>
          </div>

          <div className="hero-guarantee">
            <span className="hero-guarantee-dot" />
            Livré en 48h garanti
          </div>

          <div className="hero-proof">
            <div className="hero-proof-item">
              <div className="hero-proof-val blue">48H</div>
              <div className="hero-proof-label">Délai livraison</div>
            </div>
            <div className="hero-proof-item">
              <div className="hero-proof-val">490€</div>
              <div className="hero-proof-label">À partir de</div>
            </div>
            <div className="hero-proof-item">
              <div className="hero-proof-val">5+</div>
              <div className="hero-proof-label">Secteurs couverts</div>
            </div>
            <div className="hero-proof-item">
              <div className="hero-proof-val blue">100%</div>
              <div className="hero-proof-label">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <div className="marquee-inner">
            {marqueeSectors.map((s) => (
              <div key={s} className="marquee-item">
                <span className="marquee-dot" />
                {s}
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="marquee-inner" aria-hidden="true">
            {marqueeSectors.map((s) => (
              <div key={`${s}-dup`} className="marquee-item">
                <span className="marquee-dot" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== SERVICES TEASER ===================== */}
      <section className="services-teaser">
        <div className="container">
          <div className="section-header">
            <div className="section-header-left">
              <RevealOnScroll>
                <span className="label">Ce qu&apos;on fait</span>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <h2 className="title">Tout ce dont votre<br />commerce a besoin</h2>
              </RevealOnScroll>
            </div>
            <RevealOnScroll delay={2}>
              <Link href="/services" className="see-all">
                Tous nos services →
              </Link>
            </RevealOnScroll>
          </div>

          <div className="services-cards">
            {[
              {
                icon: "⚡",
                title: "Site vitrine 48h",
                desc: "Design premium, mobile-first, rapide à charger. Votre présence en ligne en moins de 2 jours.",
              },
              {
                icon: "📍",
                title: "SEO local Google",
                desc: "Apparaissez en tête sur Google Maps et dans les recherches locales de votre ville.",
              },
              {
                icon: "🔧",
                title: "Hébergement + maintenance",
                desc: "Hébergement sécurisé, certificat SSL, sauvegardes automatiques et mises à jour inclus.",
              },
            ].map((card, i) => (
              <RevealOnScroll key={card.title} delay={i + 1}>
                <div className="s-card">
                  <div className="s-card-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PORTFOLIO TEASER ===================== */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <div className="section-header-left">
              <RevealOnScroll>
                <span className="label">Nos réalisations</span>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <h2 className="title">Ils nous ont fait confiance</h2>
              </RevealOnScroll>
            </div>
            <RevealOnScroll delay={2}>
              <Link href="/portfolio" className="see-all">
                Tout voir →
              </Link>
            </RevealOnScroll>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map((item, i) => (
              <RevealOnScroll key={item.name} delay={i + 1}>
                <Link href="/portfolio" className="p-card">
                  <div className="p-preview">
                    <Image
                      src={item.img}
                      alt={`${item.sector} — ${item.name}`}
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
                    <h3>{item.name}</h3>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CASE STUDY ===================== */}
      <section className="case-study">
        <div className="container">
          <RevealOnScroll>
            <div className="cs-wrap">
              <div className="cs-inner">
                <div className="cs-left">
                  <div className="cs-sector">Étude de cas · Garage automobile</div>
                  <h2>
                    De invisible sur Google à{" "}
                    <span style={{ color: "var(--blue)" }}>+40% d&apos;appels</span> en plus
                  </h2>

                  <div className="cs-items">
                    <div className="cs-item">
                      <div className="cs-item-icon before">❌</div>
                      <div className="cs-item-text">
                        <strong>Avant</strong>
                        <span>Aucune présence en ligne, pas de site web</span>
                      </div>
                    </div>
                    <div className="cs-item">
                      <div className="cs-item-icon before">❌</div>
                      <div className="cs-item-text">
                        <strong>Avant</strong>
                        <span>Introuvable sur Google Maps Argenteuil</span>
                      </div>
                    </div>
                    <div className="cs-item">
                      <div className="cs-item-icon after">✅</div>
                      <div className="cs-item-text">
                        <strong>Après</strong>
                        <span>Site livré en 48h avec SEO local optimisé</span>
                      </div>
                    </div>
                    <div className="cs-item">
                      <div className="cs-item-icon after">✅</div>
                      <div className="cs-item-text">
                        <strong>Après</strong>
                        <span>Top 3 Google pour &quot;garage Argenteuil&quot;</span>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary">
                    Même résultat pour moi →
                  </Link>
                </div>

                <div className="cs-right">
                  <h3>Résultats à 3 mois</h3>
                  <div className="cs-stats">
                    <div className="cs-stat">
                      <div className="cs-stat-val">48H</div>
                      <div className="cs-stat-label">Délai de livraison</div>
                    </div>
                    <div className="cs-stat">
                      <div className="cs-stat-val">+40%</div>
                      <div className="cs-stat-label">Appels entrants</div>
                    </div>
                    <div className="cs-stat">
                      <div className="cs-stat-val">Top 3</div>
                      <div className="cs-stat-label">Google local</div>
                    </div>
                    <div className="cs-stat">
                      <div className="cs-stat-val">790€</div>
                      <div className="cs-stat-label">Investissement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===================== STATS BAND ===================== */}
      <div className="stats-band">
        <div className="container">
          <div className="stats-inner">
            <div className="stat-item">
              <div className="stat-val blue">
                <AnimatedCounter to={48} suffix="H" />
              </div>
              <div className="stat-label">Délai de livraison</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">
                <AnimatedCounter to={490} suffix="€" />
              </div>
              <div className="stat-label">À partir de</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">
                <AnimatedCounter to={5} suffix="+" />
              </div>
              <div className="stat-label">Secteurs couverts</div>
            </div>
            <div className="stat-item">
              <div className="stat-val blue">
                <AnimatedCounter to={100} suffix="%" />
              </div>
              <div className="stat-label">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== CTA STRIP ===================== */}
      <section className="cta-strip">
        <div className="container">
          <RevealOnScroll>
            <div className="cta-strip-inner">
              <h2>Prêt à vous lancer ?</h2>
              <p>
                Obtenez votre site professionnel en 48h. Devis gratuit, sans engagement,
                réponse sous 24h.
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
