"use client";

import { useState, useEffect } from "react";

const templates = [
  { url: "/templates/artisan-plombier/index.html", label: "Artisan plombier", color: "#E63946" },
  { url: "/templates/garage/index.html", label: "Garage automobile", color: "#E63000" },
];

export default function PhoneMockup() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((i) => (i + 1) % templates.length);
        setFading(false);
      }, 400);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  if (!mounted) return null;

  return (
    <div className="showcase-wrap">
      {/* Glow */}
      <div className="showcase-glow" style={{ background: `radial-gradient(circle, ${templates[active].color}33 0%, transparent 70%)` }} />

      {/* Floating stat cards */}
      <div className="showcase-badge badge-top-left">
        <span className="badge-icon">⚡</span>
        <div>
          <div className="badge-val">48H</div>
          <div className="badge-sub">Livraison</div>
        </div>
      </div>

      <div className="showcase-badge badge-top-right">
        <span className="badge-icon">📍</span>
        <div>
          <div className="badge-val">Top 3</div>
          <div className="badge-sub">Google local</div>
        </div>
      </div>

      <div className="showcase-badge badge-bottom-left">
        <span className="badge-icon">⭐</span>
        <div>
          <div className="badge-val">5/5</div>
          <div className="badge-sub">Satisfaction</div>
        </div>
      </div>

      {/* Phone frame */}
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-side-btn left" />
        <div className="phone-side-btn right t" />
        <div className="phone-side-btn right b" />
        <div className={`phone-screen ${fading ? "phone-fading" : ""}`}>
          <iframe
            key={templates[active].url}
            src={templates[active].url}
            title={templates[active].label}
            scrolling="no"
            tabIndex={-1}
            aria-hidden="true"
          />
        </div>
        <div className="phone-home-bar" />
      </div>

      {/* Dot nav */}
      <div className="phone-dots">
        {templates.map((t, i) => (
          <button
            key={i}
            className={`phone-dot ${i === active ? "active" : ""}`}
            onClick={() => { setActive(i); setFading(false); }}
            aria-label={t.label}
          />
        ))}
      </div>
    </div>
  );
}
