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
  const orbRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const wrap = wrapRef.current;
      const fill = fillRef.current;
      const orb = orbRef.current;
      if (!wrap || !fill || !orb) return;

      const rect = wrap.getBoundingClientRect();
      const wh = window.innerHeight;

      const progress = Math.max(0, Math.min(1,
        (wh * 0.75 - rect.top) / rect.height
      ));

      fill.style.width = `${progress * 100}%`;

      // show orb only while progress is moving
      orb.style.opacity = progress > 0 && progress < 1 ? "1" : "0";

      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const threshold = (i / steps.length) + 0.05;
        if (progress >= threshold) {
          el.classList.add("method-step-active");
        } else {
          el.classList.remove("method-step-active");
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
        <div ref={fillRef} className="method-line-fill">
          <div ref={orbRef} className="method-line-orb" />
        </div>
      </div>

      {steps.map((step, i) => (
        <div
          key={step.day}
          ref={(el) => { stepRefs.current[i] = el; }}
          className="method-step"
        >
          <div className="method-step-dot">
            <div className="method-step-dot-ring" />
          </div>
          <div className="method-step-card">
            <div className="method-step-icon">{step.icon}</div>
            <div className="method-step-day">{step.day}</div>
            <h3 className="method-step-title">{step.title}</h3>
            <p className="method-step-desc">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
