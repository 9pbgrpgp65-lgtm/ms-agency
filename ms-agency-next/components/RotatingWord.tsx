"use client";

import { useEffect, useState } from "react";

const words = [
  "restaurant",
  "garage",
  "boulangerie",
  "salon",
  "cabinet",
  "auto-école",
  "pharmacie",
  "pressing",
  "atelier",
  "épicerie",
  "commerce",
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
        .rw-wrap {
          display: block;
          overflow: hidden;
        }
        .rw {
          display: block;
          transition: opacity 0.25s ease, transform 0.25s ease;
          will-change: opacity, transform;
        }
        .rw-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .rw-hidden {
          opacity: 0;
          transform: translateY(8px);
        }
      `}</style>
      <span className="rw-wrap">
        <span className={`rw hero-gradient-text ${visible ? "rw-visible" : "rw-hidden"}`}>
          {words[index]}
        </span>
      </span>
    </>
  );
}
