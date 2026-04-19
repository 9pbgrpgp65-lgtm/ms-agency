"use client";
import { useEffect, useRef } from "react";

interface Step {
  icon: string;
  day: string;
  title: string;
  desc: string;
}

export default function MethodTimeline({ steps }: { steps: Step[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const wrap = wrapRef.current;
      const fill = fillRef.current;
      if (!wrap || !fill) return;

      const rect = wrap.getBoundingClientRect();
      const wh = window.innerHeight;

      // 0 → 1 as the timeline scrolls through the viewport
      const progress = Math.max(0, Math.min(1,
        (wh * 0.75 - rect.top) / rect.height
      ));

      fill.style.width = `${progress * 100}%`;

      // reveal each step when bar reaches its column
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const threshold = i / steps.length;
        if (progress >= threshold) {
          el.classList.add("method-step-visible");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [steps.length]);

  return (
    <div ref={wrapRef} className="method-timeline">
      <div className="method-line">
        <div ref={fillRef} className="method-line-fill" />
      </div>
      {steps.map((step, i) => (
        <div
          key={step.day}
          ref={(el) => { stepRefs.current[i] = el; }}
          className="method-step"
        >
          <div className="method-step-dot" />
          <div className="method-step-icon">{step.icon}</div>
          <div className="method-step-day">{step.day}</div>
          <h3 className="method-step-title">{step.title}</h3>
          <p className="method-step-desc">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
