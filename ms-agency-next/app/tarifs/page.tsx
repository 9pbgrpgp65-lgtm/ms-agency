import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Tarifs — Site vitrine 500€, tout inclus",
  description:
    "Un prix clair, fixe, sans surprise. Site vitrine professionnel à 500€ tout inclus, livré en 48h. Maintenance optionnelle à 50€/mois.",
};

const included = [
  "Design sur mesure adapté à votre secteur",
  "Mobile-first, rapide, moderne",
  "3 à 5 pages (accueil, services, contact...)",
  "Formulaire de contact",
  "Carte Google Maps intégrée",
  "SEO local de base (balises, mots-clés)",
  "Certificat SSL (HTTPS)",
  "Hébergement 1 an inclus",
  "Livraison garantie en 48h",
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
              Un prix. Tout inclus.
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <p className="sub">
              Pas de paliers, pas de surprise. Un seul tarif clair pour votre site vitrine professionnel, livré en 48h.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Main offer */}
      <section className="tarifs-section">
        <div className="container">
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <RevealOnScroll>
              <div className="t-card featured" style={{ textAlign: "center" }}>
                <div className="t-card-name">Site vitrine professionnel</div>

                <div className="t-card-price" style={{ justifyContent: "center", margin: "24px 0" }}>
                  <span className="t-card-amount">500</span>
                  <span className="t-card-currency">€</span>
                </div>

                <p className="t-card-desc" style={{ marginBottom: "28px" }}>
                  Paiement unique. Prix fixe. Aucun frais caché.
                </p>

                <div className="t-features" style={{ textAlign: "left", marginBottom: "32px" }}>
                  {included.map((f) => (
                    <div key={f} className="t-feature">
                      <div className="t-feature-check">✓</div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Demander mon site →
                </Link>
              </div>
            </RevealOnScroll>

            {/* Maintenance add-on */}
            <RevealOnScroll delay={1}>
              <div className="maintenance-strip" style={{ marginTop: "24px" }}>
                <div className="maintenance-strip-left">
                  <h3>Maintenance mensuelle</h3>
                  <p>
                    Mises à jour de contenu, sauvegardes, surveillance de sécurité, support technique. Sans engagement.
                  </p>
                </div>
                <div>
                  <div className="maintenance-price">50€<span style={{ fontSize: "16px", color: "var(--white-50)" }}>/mois</span></div>
                </div>
                <Link href="/contact" className="btn-secondary">
                  En savoir plus
                </Link>
              </div>
            </RevealOnScroll>
          </div>
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
                    <AnimatedCounter to={500} suffix="€" />
                  </div>
                  <div className="pourquoi-stat-label">Prix unique</div>
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
