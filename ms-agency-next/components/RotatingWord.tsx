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
    <span
      className="hero-gradient-text"
      style={{
        display: "inline",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
    >
      {words[index]}
    </span>
  );
}
