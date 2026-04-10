"use client";

import { useState } from "react";
import Link from "next/link";

const sectors = [
  { id: "restaurant", label: "Restaurant / Snack", isPro: false },
  { id: "garage", label: "Garage / Auto", isPro: true },
  { id: "sante", label: "Cabinet médical", isPro: true },
  { id: "artisan", label: "Artisan", isPro: true },
  { id: "autoecole", label: "Auto école", isPro: true },
  { id: "beaute", label: "Salon de beauté", isPro: false },
  { id: "autre", label: "Autre commerce", isPro: false },
];

const needs = [
  { id: "rdv", label: "Prise de RDV en ligne" },
  { id: "photos", label: "Galerie photos" },
  { id: "avis", label: "Intégration Avis Google" },
  { id: "seo", label: "SEO local avancé" },
];

type Pack = "Starter" | "Pro" | "Premium";

interface PackInfo {
  name: Pack;
  price: number;
  desc: string;
}

const packInfo: Record<Pack, PackInfo> = {
  Starter: {
    name: "Starter",
    price: 490,
    desc:
      "Site vitrine professionnel 3-5 pages, design personnalisé, mobile-first, formulaire de contact et hébergement inclus.",
  },
  Pro: {
    name: "Pro",
    price: 790,
    desc:
      "Tout le Starter + prise de RDV ou galerie, SEO local Google My Business, suivi de positionnement et rapports mensuels.",
  },
  Premium: {
    name: "Premium",
    price: 1290,
    desc:
      "Tout le Pro + fonctionnalités avancées, audit de performance, stratégie de contenu et accompagnement personnalisé.",
  },
};

function getRecommendedPack(sectorId: string | null, checkedNeeds: Set<string>): Pack {
  const selectedSector = sectors.find((s) => s.id === sectorId);
  const isPro = selectedSector?.isPro ?? false;
  const needCount = checkedNeeds.size;

  if (needCount >= 3) return "Premium";
  if (needCount >= 1 || isPro) return "Pro";
  return "Starter";
}

export default function PriceCalculator() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [checkedNeeds, setCheckedNeeds] = useState<Set<string>>(new Set());

  const toggleNeed = (id: string) => {
    setCheckedNeeds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const recommended = getRecommendedPack(selectedSector, checkedNeeds);
  const pack = packInfo[recommended];

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
            {needs.map((n) => (
              <button
                key={n.id}
                className={`calc-need-item${checkedNeeds.has(n.id) ? " checked" : ""}`}
                onClick={() => toggleNeed(n.id)}
                type="button"
                aria-pressed={checkedNeeds.has(n.id)}
              >
                <div className="calc-need-checkbox">
                  {checkedNeeds.has(n.id) && "✓"}
                </div>
                <span className="calc-need-label">{n.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: result */}
      <div className={`calc-result${recommended === "Pro" ? " featured-result" : ""}`}>
        <div className="calc-result-label">Formule recommandée</div>

        <div className="calc-result-pack">{pack.name}</div>

        <div className="calc-result-price">
          <span className="calc-result-amount">{pack.price}</span>
          <span className="calc-result-currency">€</span>
        </div>

        <div className="calc-result-desc">{pack.desc}</div>

        <Link href="/contact" className="btn-primary">
          Obtenir mon devis gratuit →
        </Link>

        <p style={{ fontSize: "12px", color: "var(--white-30)", textAlign: "center" }}>
          Estimation indicative · Devis personnalisé gratuit
        </p>
      </div>
    </div>
  );
}
