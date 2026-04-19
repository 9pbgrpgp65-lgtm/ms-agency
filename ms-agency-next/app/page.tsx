import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import MethodTimeline from "@/components/MethodTimeline";

export const metadata: Metadata = {
  title: "48hAgency — Agence web pour commerces locaux",
  description:
    "Site web professionnel livré en 48h dès 990€. 48hAgency spécialisée commerces de proximité : restaurants, garages, artisans, cabinets médicaux.",
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

const methodSteps = [
  {
    icon: "🎨",
    day: "Jour 0",
    title: "Votre site déjà prêt",
    desc: "On identifie votre commerce et on prépare votre site avant même de vous contacter. Vous voyez le résultat concret dès le premier échange.",
  },
  {
    icon: "✅",
    day: "Jour 1",
    title: "Validation & personnalisation",
    desc: "Vous validez le design, on intègre vos vraies informations : textes, photos, coordonnées, horaires. Aucun effort de votre côté.",
  },
  {
    icon: "⚙️",
    day: "Jours 1–2",
    title: "Développement & optimisation",
    desc: "Intégration complète, mobile-first, SEO local, formulaires, WhatsApp, Calendly. Chaque page est testée sur tous les appareils.",
  },
  {
    icon: "🚀",
    day: "Jour 2",
    title: "Mise en ligne",
    desc: "Déploiement sur votre nom de domaine, SSL configuré, Google My Business mis à jour. Votre site est live en 48h.",
  },
];

const portfolioItems = [
  {
    sector: "Artisan plombier",
    name: "Plomberie Benali",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    tag: "Urgence 24h/24",
    href: "/portfolio#artisan",
  },
  {
    sector: "Garage automobile",
    name: "Garage Moretti",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    tag: "SEO local",
    href: "/portfolio#garage",
  },
  {
    sector: "Restaurant",
    name: "La Trattoria di Roma",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    tag: "Réservation en ligne",
    href: "/portfolio#restaurant",
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
            et conçus pour convertir. Dès 990€, tout inclus.
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
            Livré en 48h garanti — ou remboursé
          </div>

          <div className="hero-proof">
            <div className="hero-proof-item">
              <div className="hero-proof-val blue">48H</div>
              <div className="hero-proof-label">Délai livraison</div>
            </div>
            <div className="hero-proof-item">
              <div className="hero-proof-val">990€</div>
              <div className="hero-proof-label">À partir de</div>
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
                num: "01",
                title: "Site vitrine 48h",
                desc: "Design premium, mobile-first, rapide à charger. Votre présence en ligne en moins de 2 jours.",
              },
              {
                num: "02",
                title: "SEO local Google",
                desc: "Apparaissez en tête sur Google Maps et dans les recherches locales de votre ville.",
              },
              {
                num: "03",
                title: "Hébergement + maintenance",
                desc: "Hébergement sécurisé, certificat SSL, sauvegardes automatiques et mises à jour inclus.",
              },
              {
                num: "04",
                title: "Visible sur ChatGPT et les IA",
                desc: "Vos clients cherchent aussi sur les intelligences artificielles. On optimise votre présence pour apparaître dans leurs réponses.",
              },
            ].map((card, i) => (
              <RevealOnScroll key={card.title} delay={i + 1}>
                <div className="s-card">
                  <div className="s-card-num">{card.num}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MÉTHODE ===================== */}
      <section className="method-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <RevealOnScroll>
              <span className="label">Notre méthode</span>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="title" style={{ marginTop: "12px" }}>
                De zéro à en ligne<br />en 48 heures
              </h2>
            </RevealOnScroll>
          </div>

          <MethodTimeline steps={methodSteps} />
        </div>
      </section>

      {/* ===================== PORTFOLIO TEASER ===================== */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <div className="section-header-left">
              <RevealOnScroll>
                <span className="label">Nos modèles</span>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <h2 className="title">Des bases de travail par secteur</h2>
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
                <Link href={item.href} className="p-card">
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

      {/* ===================== PROMISES ===================== */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-header-left">
              <RevealOnScroll>
                <span className="label">Notre engagement</span>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <h2 className="title">Ce qu&apos;on vous promet</h2>
              </RevealOnScroll>
            </div>
          </div>

          <div className="testimonials-grid">
            {[
              {
                title: "On commence par comprendre votre commerce",
                text: "Un appel de 15 minutes suffit. On note vos points forts, votre concurrence, ce qui vous rend unique. Tout ce qu'on apprend sert à rédiger vos textes. Pas un mot copié d'un autre client.",
              },
              {
                title: "On s'occupe de tout, vraiment",
                text: "Domaine, hébergement, Google My Business, tests mobile : tout est configuré. Dès qu'un client vous contacte via le site, vous recevez une notification instantanée sur votre téléphone.",
              },
              {
                title: "Vous validez, on met en ligne",
                text: "On vous envoie le lien de votre site avant la mise en ligne. Vous regardez, vous nous dites si quelque chose ne vous convient pas. On ajuste et on déploie. Votre site est en ligne en 48h.",
              },
            ].map((p, i) => (
              <RevealOnScroll key={p.title} delay={i + 1}>
                <div className="testimonial-card">
                  <h3 style={{ marginBottom: "12px", fontSize: "18px" }}>{p.title}</h3>
                  <p className="testimonial-quote" style={{ fontStyle: "normal" }}>{p.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="faq-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "0" }}>
            <RevealOnScroll>
              <span className="label">FAQ</span>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="title" style={{ marginTop: "12px" }}>
                Questions fréquentes
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={2}>
            <FAQ />
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
                <AnimatedCounter to={990} suffix="€" />
              </div>
              <div className="stat-label">À partir de</div>
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
