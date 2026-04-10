import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import PriceCalculator from "@/components/PriceCalculator";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Tarifs — Prix clairs dès 490€",
  description:
    "Des tarifs transparents sans surprise. Starter 490€, Pro 790€, Premium 1290€. Calculez votre budget en ligne.",
};

const plans = [
  {
    name: "Starter",
    price: 490,
    desc: "L'essentiel pour une présence professionnelle en ligne.",
    features: [
      "Site vitrine 3–5 pages",
      "Design personnalisé",
      "Mobile-first responsive",
      "Formulaire de contact",
      "Carte Google Maps",
      "Hébergement 1 an inclus",
      "Certificat SSL",
    ],
    cta: "Commencer",
    featured: false,
  },
  {
    name: "Pro",
    price: 790,
    desc: "La solution complète pour attirer plus de clients locaux.",
    features: [
      "Tout le Starter +",
      "SEO local avancé",
      "Google My Business optimisé",
      "Prise de RDV ou galerie photos",
      "Intégration avis Google",
      "Rapport mensuel de positionnement",
      "Support prioritaire",
    ],
    cta: "Choisir Pro",
    featured: true,
  },
  {
    name: "Premium",
    price: 1290,
    desc: "Accompagnement complet pour dominer votre marché local.",
    features: [
      "Tout le Pro +",
      "Pages illimitées",
      "Stratégie de contenu",
      "Audit de performance mensuel",
      "Campagne Google Ads locale",
      "Formation à l'administration",
      "Accompagnement personnalisé 6 mois",
    ],
    cta: "Choisir Premium",
    featured: false,
  },
];

export default function TarifsPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <div className="container">
          <RevealOnScroll>
            <span className="label">Tarifs</span>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <h1 className="title" style={{ marginTop: "12px", marginBottom: "16px" }}>
              Des prix clairs, sans surprise
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <p className="sub">
              Paiement unique, pas d&apos;abonnement caché. Le prix affiché est le prix payé.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Calculator */}
      <section className="calculator-section">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header" style={{ marginBottom: "32px" }}>
              <div className="section-header-left">
                <span className="label">Simulateur de prix</span>
                <h2 className="title" style={{ fontSize: "clamp(26px, 3.5vw, 38px)", marginTop: "8px" }}>
                  Trouvez la formule<br />qui vous correspond
                </h2>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <PriceCalculator />
          </RevealOnScroll>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="tarifs-section">
        <div className="container">
          <RevealOnScroll>
            <h2 className="title" style={{ textAlign: "center", marginBottom: "48px" }}>
              Nos formules
            </h2>
          </RevealOnScroll>

          <div className="tarifs-grid">
            {plans.map((plan, i) => (
              <RevealOnScroll key={plan.name} delay={i + 1}>
                <div className={`t-card${plan.featured ? " featured" : ""}`}>
                  <div className="t-card-name">{plan.name}</div>

                  <div className="t-card-price">
                    <span className="t-card-amount">{plan.price}</span>
                    <span className="t-card-currency">€</span>
                  </div>

                  <p className="t-card-desc">{plan.desc}</p>

                  <div className="t-features">
                    {plan.features.map((f) => (
                      <div key={f} className="t-feature">
                        <div className="t-feature-check">✓</div>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={plan.featured ? "btn-primary" : "btn-secondary"}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Maintenance add-on */}
          <RevealOnScroll delay={1}>
            <div className="maintenance-strip">
              <div className="maintenance-strip-left">
                <h3>Maintenance mensuelle</h3>
                <p>
                  Mises à jour de contenu, sauvegardes, surveillance de sécurité et support
                  technique inclus. Optionnel, sans engagement.
                </p>
              </div>
              <div>
                <div className="maintenance-price">49€<span style={{ fontSize: "16px", color: "var(--white-50)" }}>/mois</span></div>
              </div>
              <Link href="/contact" className="btn-secondary">
                En savoir plus
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pourquoi section */}
      <section className="pourquoi-section">
        <div className="container">
          <div className="pourquoi-grid">
            <RevealOnScroll delay={1}>
              <div className="pourquoi-stats">
                <div className="pourquoi-stat">
                  <div className="pourquoi-stat-val">
                    <AnimatedCounter to={48} suffix="H" />
                  </div>
                  <div className="pourquoi-stat-label">Délai de livraison</div>
                </div>
                <div className="pourquoi-stat">
                  <div className="pourquoi-stat-val">
                    <AnimatedCounter to={100} suffix="%" />
                  </div>
                  <div className="pourquoi-stat-label">Clients satisfaits</div>
                </div>
                <div className="pourquoi-stat">
                  <div className="pourquoi-stat-val">
                    <AnimatedCounter to={490} suffix="€" />
                  </div>
                  <div className="pourquoi-stat-label">À partir de</div>
                </div>
                <div className="pourquoi-stat">
                  <div className="pourquoi-stat-val">
                    <AnimatedCounter to={0} suffix="€" />
                  </div>
                  <div className="pourquoi-stat-label">Frais cachés</div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div className="pourquoi-text">
                <h2>Pourquoi choisir MS Agency ?</h2>
                <div className="pourquoi-items">
                  {[
                    { icon: "⚡", text: "Livraison garantie en 48h ou remboursement" },
                    { icon: "💰", text: "Prix fixe tout inclus — pas de coûts cachés" },
                    { icon: "📍", text: "Spécialisés commerces locaux, on comprend votre marché" },
                    { icon: "🎯", text: "SEO local dès le lancement pour être trouvé sur Google" },
                    { icon: "🔧", text: "Support réactif et accompagnement continu" },
                    { icon: "📱", text: "Design 100% mobile-first et moderne" },
                  ].map((item) => (
                    <div key={item.text} className="pourquoi-item">
                      <span className="pourquoi-item-icon">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip" style={{ paddingTop: "0" }}>
        <div className="container">
          <RevealOnScroll>
            <div className="cta-strip-inner">
              <h2>Une question sur les tarifs ?</h2>
              <p>
                Contactez-nous pour un devis personnalisé gratuit. Réponse garantie sous 24h.
              </p>
              <div className="cta-strip-actions">
                <Link href="/contact" className="btn-primary">
                  Devis gratuit →
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
