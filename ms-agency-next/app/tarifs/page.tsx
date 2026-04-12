import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Tarifs — Site vitrine à partir de 990€ tout inclus",
  description:
    "Tarifs clairs et sans surprise. Site vitrine 990€, Pack visibilité 1 490€, maintenance 50€/mois. Livraison en 48h garantie.",
};

const vitrineFeatures = [
  "Design sur mesure adapté à votre secteur",
  "Version mobile (responsive)",
  "5 pages complètes",
  "Formulaire de contact avec notification instantanée par message",
  "Bouton WhatsApp intégré",
  "Prise de rendez-vous en ligne (Calendly)",
  "Google Maps intégré",
  "SEO local de base",
  "Hébergement 1 an inclus",
  "Certificat SSL (HTTPS)",
  "Conforme RGPD (bandeau cookies inclus)",
  "Livraison garantie en 48h",
];

const packFeatures = [
  "Tout le pack site vitrine",
  "Google My Business optimisé",
  "5 fiches annuaires locaux créées",
];

const maintenanceFeatures = [
  "Renouvellement domaine et hébergement",
  "Mises à jour sécurité",
  "Modifications de contenu incluses (sous 48h)",
  "Support réactif",
];

const gmbFeatures = [
  "4 posts Google My Business par mois",
  "Réponse à tous vos avis Google",
  "Photos mises à jour",
  "Rapport mensuel de visibilité",
];

const seoFeatures = [
  "Audit complet présence en ligne",
  "Google My Business optimisé à 100%",
  "Contenu local rédigé et publié",
  "Gestion des avis Google",
  "5 fiches annuaires créées",
  "Rapport de positionnement mensuel",
];

const adsFeatures = [
  "Création des campagnes locales",
  "Ciblage précis par ville et secteur",
  "Optimisation mensuelle",
  "Rapport de performance",
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
              Des tarifs clairs. Aucune surprise.
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <p className="sub">
              Paiement unique, prix fixe, livraison en 48h. Choisissez l&apos;offre adaptée à vos besoins.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Pricing grid */}
      <section className="tarifs-section">
        <div className="container">
          <div className="tarifs-grid">

            {/* Site vitrine */}
            <RevealOnScroll delay={1}>
              <div className="t-card">
                <div className="t-card-name">Site vitrine</div>
                <div className="t-card-price">
                  <span className="t-card-amount">990</span>
                  <span className="t-card-currency">€</span>
                </div>
                <p className="t-card-desc">Paiement unique. Prix fixe. Aucun frais caché.</p>
                <div className="t-features">
                  {vitrineFeatures.map((f) => (
                    <div key={f} className="t-feature">
                      <div className="t-feature-check">✓</div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-secondary" style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}>
                  Démarrer →
                </Link>
              </div>
            </RevealOnScroll>

            {/* Pack visibilité */}
            <RevealOnScroll delay={2}>
              <div className="t-card featured">
                <div className="t-card-name">Pack visibilité</div>
                <div className="t-card-price">
                  <span className="t-card-amount">1 490</span>
                  <span className="t-card-currency">€</span>
                </div>
                <p className="t-card-desc">Site + présence locale complète sur Google.</p>
                <div className="t-features">
                  {packFeatures.map((f) => (
                    <div key={f} className="t-feature">
                      <div className="t-feature-check">✓</div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}>
                  Démarrer →
                </Link>
              </div>
            </RevealOnScroll>

            {/* Maintenance */}
            <RevealOnScroll delay={3}>
              <div className="t-card">
                <div className="t-card-name">Maintenance</div>
                <div className="t-card-price">
                  <span className="t-card-amount">50</span>
                  <span className="t-card-currency">€<span style={{ fontSize: "16px", fontWeight: 400, color: "var(--white-50)" }}>/mois</span></span>
                </div>
                <p className="t-card-desc">Sans engagement. Annulable à tout moment.</p>
                <div className="t-features">
                  {maintenanceFeatures.map((f) => (
                    <div key={f} className="t-feature">
                      <div className="t-feature-check">✓</div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-secondary" style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}>
                  En savoir plus →
                </Link>
              </div>
            </RevealOnScroll>

          </div>

          {/* Séparateur services récurrents */}
          <div style={{ textAlign: "center", margin: "64px 0 48px" }}>
            <RevealOnScroll>
              <span className="label">Services récurrents</span>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="title" style={{ marginTop: "12px" }}>Boostez votre visibilité</h2>
            </RevealOnScroll>
          </div>

          <div className="tarifs-grid">

            {/* GMB mensuel */}
            <RevealOnScroll delay={1}>
              <div className="t-card">
                <div className="t-card-name">Gestion Google My Business</div>
                <div className="t-card-price">
                  <span className="t-card-amount">99</span>
                  <span className="t-card-currency">€<span style={{ fontSize: "16px", fontWeight: 400, color: "var(--white-50)" }}>/mois</span></span>
                </div>
                <p className="t-card-desc">Sans engagement. Annulable à tout moment.</p>
                <div className="t-features">
                  {gmbFeatures.map((f) => (
                    <div key={f} className="t-feature">
                      <div className="t-feature-check">✓</div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-secondary" style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}>
                  Démarrer →
                </Link>
              </div>
            </RevealOnScroll>

            {/* SEO local */}
            <RevealOnScroll delay={2}>
              <div className="t-card featured">
                <div className="t-card-name">SEO Local</div>
                <div className="t-card-price">
                  <span className="t-card-amount">300</span>
                  <span className="t-card-currency">€<span style={{ fontSize: "16px", fontWeight: 400, color: "var(--white-50)" }}>/mois</span></span>
                </div>
                <p className="t-card-desc">Engagement 3 mois minimum.</p>
                <div className="t-features">
                  {seoFeatures.map((f) => (
                    <div key={f} className="t-feature">
                      <div className="t-feature-check">✓</div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}>
                  Démarrer →
                </Link>
              </div>
            </RevealOnScroll>

            {/* Google Ads */}
            <RevealOnScroll delay={3}>
              <div className="t-card">
                <div className="t-card-name">Publicité Google Ads</div>
                <div className="t-card-price">
                  <span className="t-card-amount">200</span>
                  <span className="t-card-currency">€<span style={{ fontSize: "16px", fontWeight: 400, color: "var(--white-50)" }}>/mois</span></span>
                </div>
                <p className="t-card-desc">Budget publicitaire non inclus (300–500€/mois conseillé).</p>
                <div className="t-features">
                  {adsFeatures.map((f) => (
                    <div key={f} className="t-feature">
                      <div className="t-feature-check">✓</div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-secondary" style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}>
                  Démarrer →
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
                    <AnimatedCounter to={990} suffix="€" />
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
                    { icon: "✓", text: "Livraison garantie en 48h ou remboursement" },
                    { icon: "✓", text: "Prix fixe tout inclus — pas de coûts cachés" },
                    { icon: "✓", text: "Spécialisés commerces locaux, on comprend votre marché" },
                    { icon: "✓", text: "SEO local dès le lancement pour être trouvé sur Google" },
                    { icon: "✓", text: "Support réactif et accompagnement continu" },
                    { icon: "✓", text: "Design 100% mobile-first et moderne" },
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
