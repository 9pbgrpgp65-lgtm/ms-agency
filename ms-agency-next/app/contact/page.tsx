import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import ContactForm from "@/components/ContactForm";
import AvailabilityBadge from "@/components/AvailabilityBadge";

export const metadata: Metadata = {
  title: "Contact — Devis gratuit",
  description:
    "Contactez 48hAgency pour un devis gratuit. Réponse sous 24h. Créez votre site professionnel en 48h dès 990€.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <div className="container">
          <RevealOnScroll>
            <span className="label">Contact</span>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <h1 className="title" style={{ marginTop: "12px", marginBottom: "16px" }}>
              Parlons de votre projet
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <p className="sub">
              Devis gratuit sous 24h. On vous rappelle pour comprendre votre projet
              et vous proposer la meilleure solution.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Contact section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrap">
            {/* Left */}
            <RevealOnScroll delay={1}>
              <div className="contact-left">
                <h2>On est là pour vous aider</h2>
                <p>
                  Que vous ayez un projet précis ou simplement des questions sur nos
                  services, n&apos;hésitez pas à nous contacter. Notre équipe vous répond
                  sous 24h, souvent bien moins.
                </p>

                <div className="contact-links">
                  <a href="tel:+33780830898" className="contact-link">
                    <div className="contact-link-icon">📞</div>
                    <span>+33 7 80 83 08 98</span>
                  </a>
                  <a href="mailto:contact@48hagency.com" className="contact-link">
                    <div className="contact-link-icon">✉️</div>
                    <span>contact@48hagency.com</span>
                  </a>
                  <div className="contact-link">
                    <div className="contact-link-icon">📍</div>
                    <span>France — Intervention nationale</span>
                  </div>
                </div>

                <div
                  style={{
                    background: "var(--black-3)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--white-30)",
                    }}
                  >
                    Disponibilités
                  </div>
                  <div style={{ fontSize: "15px", color: "var(--white-70)" }}>
                    7j/7, 24h/24
                  </div>
                  <AvailabilityBadge />
                </div>
              </div>
            </RevealOnScroll>

            {/* Right — form */}
            <RevealOnScroll delay={2}>
              <div className="contact-right">
                <ContactForm />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
