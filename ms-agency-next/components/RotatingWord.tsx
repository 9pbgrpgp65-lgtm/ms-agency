"use client";

import { useEffect, useState } from "react";

const words = [
  "restaurant",
  "garage",
  "boulangerie",
  "coiffeur",
  "artisan",
  "dentiste",
  "auto-école",
  "pharmacie",
  "ostéopathe",
  "pressing",
];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 250);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .rw {
          display: inline-block;
          position: relative;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .rw-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .rw-hidden {
          opacity: 0;
          transform: translateY(-10px);
        }
      `}</style>
      <span className={`rw hero-gradient-text ${visible ? "rw-visible" : "rw-hidden"}`}>
        {words[index]}
      </span>
    </>
  );
}
