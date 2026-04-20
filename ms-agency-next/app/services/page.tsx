import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import MethodTimeline from "@/components/MethodTimeline";
import { methodSteps } from "@/lib/methodSteps";

export const metadata: Metadata = {
  title: "Services — Création de site web 48h",
  description:
    "Site vitrine 48h, SEO local Google, formulaires de prise de RDV, hébergement sécurisé et maintenance. Tout ce dont votre commerce a besoin.",
};

const services = [
  {
    icon: "⚡",
    title: "Site vitrine livré en 48h",
    desc: "Design premium entièrement personnalisé à votre image, mobile-first, optimisé pour la performance. 3 à 6 pages clés, formulaire de contact, carte Google Maps intégrée. Votre site est en ligne avant la fin de la semaine.",
    tag: "Livraison 48h",
    wide: true,
  },
  {
    icon: "📍",
    title: "SEO local Google",
    desc: "Stratégie de référencement local complète : optimisation Google My Business, balises locales, citations web et suivi de positionnement mensuel.",
    tag: "Visible sur Google Maps",
    wide: false,
  },
  {
    icon: "📅",
    title: "Formulaires & prise de RDV",
    desc: "Intégration de formulaires de contact avancés et de systèmes de prise de rendez-vous en ligne. Idéal pour les cabinets médicaux, salons et auto écoles.",
    tag: "Sur mesure",
    wide: false,
  },
  {
    icon: "🔒",
    title: "Hébergement sécurisé",
    desc: "Hébergement haute performance, certificat SSL inclus, sauvegardes automatiques quotidiennes et uptime garanti 99,9%.",
    tag: "99,9% uptime",
    wide: false,
  },
  {
    icon: "🔧",
    title: "Maintenance & mises à jour",
    desc: "Votre site évolue avec votre commerce. Mises à jour de contenu, corrections, améliorations — nous nous occupons de tout.",
    tag: "Suivi mensuel",
    wide: false,
  },
  {
    icon: "📈",
    title: "SEO local mensuel",
    desc: "Optimisation continue de votre présence Google : posts Google My Business, gestion des avis, contenu local, rapport mensuel de positionnement.",
    tag: "Dès 300€/mois",
    wide: false,
  },
  {
    icon: "📊",
    title: "Gestion Google My Business",
    desc: "On s'occupe de votre fiche Google chaque mois : 4 posts publiés, réponses aux avis, photos mises à jour. Vous restez visible sans rien faire.",
    tag: "99€/mois",
    wide: false,
  },
  {
    icon: "✦",
    title: "Visibilité sur les IA",
    desc: "Vos clients cherchent maintenant sur ChatGPT et Google AI. On optimise votre présence pour apparaître dans ces nouvelles recherches — là où vos concurrents sont encore invisibles.",
    tag: "149€ — option",
    wide: false,
  },
  {
    icon: "🎯",
    title: "Publicité Google Ads locale",
    desc: "Campagnes Google Ads ciblées sur votre ville et votre secteur. On gère tout, vous recevez les appels.",
    tag: "200€/mois de gestion",
    wide: false,
  },
];


export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <div className="container">
          <RevealOnScroll>
            <span className="label">Nos services</span>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <h1 className="title" style={{ marginTop: "12px", marginBottom: "16px" }}>
              Ce qu&apos;on fait pour vous
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <p className="sub">
              Des solutions web complètes, adaptées aux commerces locaux. Sans jargon,
              sans mauvaise surprise — juste des résultats.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Bento grid */}
      <section style={{ paddingBottom: "var(--section-gap)" }}>
        <div className="container">
          <div className="bento">
            {services.map((s, i) => (
              <RevealOnScroll key={s.title} delay={(i % 3) + 1} className={s.wide ? "bento-card wide" : "bento-card"} as="div">
                <div className="bento-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="bento-tag">{s.tag}</div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / méthode */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <div className="section-header-left">
              <RevealOnScroll>
                <span className="label">Notre méthode</span>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <h2 className="title">De zéro à en ligne<br />en 48 heures</h2>
              </RevealOnScroll>
            </div>
          </div>

          <MethodTimeline steps={methodSteps} />
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="container">
          <RevealOnScroll>
            <div className="cta-strip-inner">
              <h2>Prêt à démarrer ?</h2>
              <p>
                Devis gratuit en 24h. Aucun engagement, aucune surprise sur la facture.
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
