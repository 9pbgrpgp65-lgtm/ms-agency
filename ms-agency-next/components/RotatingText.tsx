"use client";

import { useState, useEffect } from "react";

const words = ["restaurant", "garage", "artisan", "cabinet dentaire", "auto-école", "boulangerie"];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setPhase("in");
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`rotating-word rotating-word-${phase}`}>
      {words[index]}
    </span>
  );
}
