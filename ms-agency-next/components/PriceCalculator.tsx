"use client";

import { useState } from "react";
import Link from "next/link";

const sectors = [
  { id: "restaurant", label: "Restaurant / Snack" },
  { id: "garage", label: "Garage / Auto" },
  { id: "sante", label: "Cabinet médical" },
  { id: "artisan", label: "Artisan" },
  { id: "autoecole", label: "Auto école" },
  { id: "beaute", label: "Salon de beauté" },
  { id: "autre", label: "Autre commerce" },
];

const addons = [
  { id: "rdv", label: "Prise de RDV en ligne", price: 0 },
  { id: "photos", label: "Galerie photos", price: 0 },
  { id: "avis", label: "Intégration Avis Google", price: 0 },
  { id: "seo", label: "SEO local avancé", price: 0 },
];

export default function PriceCalculator() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [checkedAddons, setCheckedAddons] = useState<Set<string>>(new Set());

  const toggleAddon = (id: string) => {
    setCheckedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="calc-wrap">
      {/* Left: inputs */}
      <div className="calc-left">
        <div className="calc-block">
          <div className="calc-block-label">Votre secteur d&apos;activité</div>
          <div className="calc-sectors">
            {sectors.map((s) => (
              <button
                key={s.id}
                className={`calc-btn${selectedSector === s.id ? " selected" : ""}`}
                onClick={() => setSelectedSector(selectedSector === s.id ? null : s.id)}
                type="button"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="calc-block">
          <div className="calc-block-label">Fonctionnalités souhaitées</div>
          <div className="calc-needs">
            {addons.map((n) => (
              <button
                key={n.id}
                className={`calc-need-item${checkedAddons.has(n.id) ? " checked" : ""}`}
                onClick={() => toggleAddon(n.id)}
                type="button"
                aria-pressed={checkedAddons.has(n.id)}
              >
                <div className="calc-need-checkbox">
                  {checkedAddons.has(n.id) && "✓"}
                </div>
                <span className="calc-need-label">{n.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: result — always 500€ */}
      <div className="calc-result featured-result">
        <div className="calc-result-label">Votre site vitrine</div>

        <div className="calc-result-pack">Offre unique</div>

        <div className="calc-result-price">
          <span className="calc-result-amount">500</span>
          <span className="calc-result-currency">€</span>
        </div>

        <div className="calc-result-desc">
          Design personnalisé pour votre secteur, mobile-first, SEO local, formulaire de contact, hébergement 1 an. Tout inclus. Livraison garantie en 48h.
        </div>

        <Link href="/contact" className="btn-primary">
          Demander mon site →
        </Link>

        <p style={{ fontSize: "12px", color: "var(--white-30)", textAlign: "center" }}>
          Prix fixe · Aucun frais caché · Devis gratuit sous 24h
        </p>
      </div>
    </div>
  );
}
