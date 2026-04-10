"use client";

import { useEffect, useRef, ElementType } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const props = {
    ref,
    className: `reveal${className ? ` ${className}` : ""}`,
    "data-delay": delay > 0 ? delay : undefined,
  };

  return <Tag {...props}>{children}</Tag>;
}
