"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const COOKIE_KEY = "ms_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Petit délai pour ne pas gêner le chargement
      setTimeout(() => setVisible(true), 800);
    } else if (stored === "accepted") {
      setAccepted(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setAccepted(true);
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  return (
    <>
      {/* GA4 — uniquement si accepté */}
      {accepted && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-LKR2EH4900"
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LKR2EH4900');
          `}</Script>
        </>
      )}

      {/* Bandeau cookies */}
      {visible && (
        <div style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 99999,
          background: "#0f0f0f",
          borderTop: "1px solid rgba(255,255,255,0.10)",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          boxShadow: "0 -4px 32px rgba(0,0,0,0.60)",
        }}>
          <p style={{
            margin: 0,
            fontSize: "14px",
            color: "rgba(255,255,255,0.70)",
            lineHeight: 1.5,
            maxWidth: "640px",
          }}>
            🍪 Ce site utilise Google Analytics pour mesurer l'audience et améliorer votre expérience.
            Vos données restent anonymes.{" "}
            <a href="/mentions-legales" style={{ color: "#4d9eff", textDecoration: "underline" }}>
              En savoir plus
            </a>
          </p>
          <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
            <button
              onClick={decline}
              style={{
                padding: "10px 20px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.20)",
                background: "transparent",
                color: "rgba(255,255,255,0.60)",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all .2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.50)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)")}
            >
              Refuser
            </button>
            <button
              onClick={accept}
              style={{
                padding: "10px 20px",
                borderRadius: "999px",
                border: "none",
                background: "#2563eb",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "background .2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1d4ed8")}
              onMouseLeave={e => (e.currentTarget.style.background = "#2563eb")}
            >
              Accepter
            </button>
          </div>
        </div>
      )}
    </>
  );
}
