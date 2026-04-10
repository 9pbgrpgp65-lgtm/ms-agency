"use client";

import { useRef, useEffect, useState } from "react";

export default function TemplatePreview({ src, label }: { src: string; label: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.93);

  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / 390);
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="tpl-clip">
      <div className="tpl-inner" style={{ transform: `scale(${scale})` }}>
        <iframe
          src={src}
          title={label}
          scrolling="no"
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>
      <div className="tpl-fade-bottom" />
    </div>
  );
}
