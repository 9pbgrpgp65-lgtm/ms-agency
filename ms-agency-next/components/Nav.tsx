"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="nav" role="navigation" aria-label="Navigation principale">
      <div className={`nav-pill${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="nav-logo">
          ms48<span>agency</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links" role="list">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href || pathname.startsWith(link.href + "/") ? " active" : ""}`}
              role="listitem"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link href="/contact" className="btn-primary nav-cta">
          Devis gratuit
        </Link>

        {/* Mobile burger */}
        <button
          className={`nav-burger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile drawer */}
        <div className={`nav-drawer${menuOpen ? " open" : ""}`} role="dialog" aria-modal="true">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
            Devis gratuit
          </Link>
        </div>
      </div>
    </nav>
  );
}
