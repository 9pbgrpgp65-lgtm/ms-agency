"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Le site est vraiment livré en 48h ?",
    a: "Oui, garanti. Dès réception de vos informations (textes, photos, coordonnées), votre site est mis en ligne dans les 48h ouvrées. Si ce délai n'est pas respecté de notre côté, nous vous remboursons.",
  },
  {
    q: "Qui s'occupe de l'hébergement et du nom de domaine ?",
    a: "Nous gérons tout : hébergement sécurisé, certificat SSL, nom de domaine (si vous n'en avez pas). Si vous avez déjà un domaine, on peut l'utiliser. Tout est inclus dans la maintenance à 50€/mois.",
  },
  {
    q: "Je peux demander des modifications après la livraison ?",
    a: "Bien sûr. Avec la maintenance mensuelle, vous pouvez nous demander des modifications de contenu à tout moment (textes, horaires, photos…). Pour des fonctionnalités nouvelles, on établit un devis.",
  },
  {
    q: "Est-ce que je serai trouvé sur Google ?",
    a: "Chaque site est optimisé pour le SEO local : balises, vitesse de chargement, Google My Business, structure de données. La plupart de nos clients apparaissent dans les résultats locaux en 4 à 8 semaines.",
  },
  {
    q: "Je ne suis pas du tout à l'aise avec le digital — c'est un problème ?",
    a: "Pas du tout. Vous nous donnez vos infos par téléphone ou WhatsApp, on s'occupe de tout. Vous n'avez rien à faire côté technique.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "50% à la commande, 50% à la livraison. Paiement par virement ou carte bancaire. Aucun abonnement caché : le seul coût récurrent optionnel est la maintenance à 50€/mois.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
          <button
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            {faq.q}
            <span className="faq-question-icon" aria-hidden="true">+</span>
          </button>
          <div className="faq-answer" aria-hidden={openIndex !== i}>
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  );
}
