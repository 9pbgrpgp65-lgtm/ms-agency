"use client";

import { useState, useEffect } from "react";

const templates = [
  { url: "/templates/artisan-plombier/index.html", label: "Artisan plombier" },
  { url: "/templates/garage/index.html", label: "Garage automobile" },
];

export default function PhoneMockup() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((i) => (i + 1) % templates.length);
        setFading(false);
      }, 400);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="phone-wrap">
      {/* Glow behind the phone */}
      <div className="phone-glow" />

      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-side-button left" />
        <div className="phone-side-button right top" />
        <div className="phone-side-button right bottom" />
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

      {/* Template label */}
      <div className="phone-label-row">
        <span className="phone-label-text">{templates[active].label}</span>
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
    </div>
  );
}
