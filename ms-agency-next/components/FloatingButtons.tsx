"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Calendly?: any;
  }
}

const WA_NUMBER = "33783334543";

const categories = [
  {
    label: "🌐 Créer mon site web",
    text: "Bonjour 48hAgency, je souhaite créer un site web pour mon commerce. Pouvez-vous me donner plus d'informations ?",
  },
  {
    label: "📍 Améliorer mon référencement Google",
    text: "Bonjour 48hAgency, je souhaite améliorer ma visibilité sur Google (SEO local / Google My Business). Pouvez-vous m'aider ?",
  },
  {
    label: "📢 Lancer une campagne Google Ads",
    text: "Bonjour 48hAgency, je suis intéressé par la publicité Google Ads pour mon commerce. Pouvez-vous me présenter vos offres ?",
  },
  {
    label: "🔧 Maintenance & mise à jour",
    text: "Bonjour 48hAgency, j'ai besoin d'aide pour la maintenance ou une mise à jour de mon site web.",
  },
  {
    label: "💰 Demander un devis gratuit",
    text: "Bonjour 48hAgency, je souhaite obtenir un devis gratuit pour mes besoins web. Pouvez-vous me contacter ?",
  },
];

export default function FloatingButtons() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.startsWith("/demo")) return null;

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/theorie-lof_2n/30min",
      });
    } else {
      window.open("https://calendly.com/theorie-lof_2n/30min", "_blank");
    }
  };

  const handleCategory = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, "_blank");
    setOpen(false);
  };

  return (
    <>
      <style>{`
        .float-group {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-end;
        }

        /* ── Chat popup ── */
        .wa-popup {
          width: 300px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0,0,0,.18);
          overflow: hidden;
          animation: popIn .2s ease;
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(.92) translateY(8px); }
          to   { opacity: 1; transform: scale(1)  translateY(0); }
        }
        .wa-popup-header {
          background: #25D366;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .wa-popup-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .wa-popup-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        .wa-popup-name {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
        }
        .wa-popup-status {
          font-size: 12px;
          color: rgba(255,255,255,.85);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .wa-status-dot {
          width: 7px;
          height: 7px;
          background: #fff;
          border-radius: 50%;
        }
        .wa-close {
          background: none;
          border: none;
          color: rgba(255,255,255,.8);
          font-size: 20px;
          cursor: pointer;
          line-height: 1;
          padding: 0;
        }
        .wa-close:hover { color: #fff; }
        .wa-popup-body {
          padding: 14px 14px 6px;
          background: #ece5dd;
        }
        .wa-bubble {
          background: #fff;
          border-radius: 0 10px 10px 10px;
          padding: 10px 13px;
          font-size: 13.5px;
          color: #111;
          line-height: 1.5;
          display: inline-block;
          box-shadow: 0 1px 2px rgba(0,0,0,.1);
          margin-bottom: 10px;
          max-width: 90%;
        }
        .wa-categories {
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding-bottom: 14px;
        }
        .wa-cat-btn {
          background: #fff;
          border: 1.5px solid #25D366;
          border-radius: 10px;
          padding: 9px 14px;
          font-size: 13px;
          font-weight: 600;
          color: #075E54;
          cursor: pointer;
          text-align: left;
          transition: background .15s;
          line-height: 1.3;
        }
        .wa-cat-btn:hover {
          background: #f0fdf4;
        }

        /* ── Buttons ── */
        .float-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: transform .2s, box-shadow .2s;
          text-decoration: none;
          color: #fff;
          flex-shrink: 0;
        }
        .float-btn:hover { transform: scale(1.10); }
        .float-btn--calendly {
          background: #0069FF;
          box-shadow: 0 4px 20px rgba(0,105,255,0.40);
        }
        .float-btn--calendly:hover { box-shadow: 0 6px 28px rgba(0,105,255,0.55); }
        .float-btn--whatsapp {
          background: #25D366;
          box-shadow: 0 4px 20px rgba(37,211,102,0.40);
        }
        .float-btn--whatsapp:hover { box-shadow: 0 6px 28px rgba(37,211,102,0.55); }
      `}</style>

      <div className="float-group">
        {/* WhatsApp chat popup */}
        {open && (
          <div className="wa-popup">
            <div className="wa-popup-header">
              <div className="wa-popup-header-left">
                <div className="wa-popup-avatar">🚀</div>
                <div>
                  <div className="wa-popup-name">48hAgency</div>
                  <div className="wa-popup-status">
                    <span className="wa-status-dot" />
                    En ligne
                  </div>
                </div>
              </div>
              <button className="wa-close" onClick={() => setOpen(false)} aria-label="Fermer">✕</button>
            </div>
            <div className="wa-popup-body">
              <div className="wa-bubble">
                👋 Bonjour ! Comment puis-je vous aider aujourd&apos;hui ?
              </div>
              <div className="wa-categories">
                {categories.map((cat) => (
                  <button
                    key={cat.label}
                    className="wa-cat-btn"
                    onClick={() => handleCategory(cat.text)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Calendly */}
        <button
          className="float-btn float-btn--calendly"
          onClick={openCalendly}
          aria-label="Prendre rendez-vous"
          title="Prendre rendez-vous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </button>

        {/* WhatsApp trigger */}
        <button
          className="float-btn float-btn--whatsapp"
          onClick={() => setOpen((v) => !v)}
          aria-label="Nous contacter sur WhatsApp"
          title="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </button>
      </div>
    </>
  );
}
