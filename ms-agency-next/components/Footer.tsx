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
                MS <span>Agency</span>
              </div>
              <p>
                Agence web spécialisée pour les commerces locaux. Sites professionnels
                livrés en 48h, dès 490€. Référencement local Google inclus.
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
            <span>© {new Date().getFullYear()} MS Agency. Tous droits réservés.</span>
            <span>Fait avec ♥ en France</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
