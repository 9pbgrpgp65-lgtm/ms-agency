"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let rafId: number | null = null;
    let pendingX = -999;
    let pendingY = -999;
    let dirty = false;

    const handleMouseMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (!dirty) {
        dirty = true;
        rafId = requestAnimationFrame(update);
      }
    };

    const update = () => {
      el.style.left = `${pendingX}px`;
      el.style.top = `${pendingY}px`;
      dirty = false;
      rafId = null;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
