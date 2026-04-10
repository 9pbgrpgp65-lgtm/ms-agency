"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function AnimatedCounter({
  to,
  suffix = "",
  prefix = "",
  duration = 1800,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(Math.round(eased * to));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [hasStarted, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
