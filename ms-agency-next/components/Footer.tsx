"use client";

import Link from "next/link";

const portfolioLinks = [
  { href: "/portfolio", label: "Tous les projets" },
  { href: "/portfolio#restaurant", label: "Restaurant" },
  { href: "/portfolio#dentiste", label: "Cabinet dentaire" },
  { href: "/portfolio#garage", label: "Garage automobile" },
  { href: "/portfolio#artisan", label: "Artisan" },
];

const agencyLinks = [
  { href: "/services", label: "Nos services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Devis gratuit" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-brand-logo">
                48<span className="logo-num">h</span><span className="logo-word">Agency</span>
              </div>
              <p>
                Agence web spécialisée pour les commerces locaux. Sites professionnels
                livrés en 48h, dès 990€. Référencement local Google inclus.
              </p>
            </div>

            <div className="footer-col">
              <h4>Portfolio</h4>
              <ul>
                {portfolioLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Agence</h4>
              <ul>
                {agencyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} 48hAgency. Tous droits réservés.</span>
            <span style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
              <Link href="/mentions-legales" style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", textDecoration: "underline", textUnderlineOffset: "3px" }}>Mentions légales</Link>
              <button
                onClick={() => { localStorage.removeItem("ms_cookie_consent"); window.location.reload(); }}
                style={{ background: "none", border: "none", color: "rgba(255,255,255,0.35)", fontSize: "13px", textDecoration: "underline", textUnderlineOffset: "3px", cursor: "pointer", padding: 0, fontFamily: "inherit" }}
              >
                🍪 Gérer les cookies
              </button>
              <span>Fait avec ♥ en France</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
