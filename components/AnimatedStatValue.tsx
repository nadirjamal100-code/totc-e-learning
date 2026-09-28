"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedStatValue({ value, font }: { value: string; font: string }) {
  const elementRef = useRef<HTMLDListElement>(null);
  const [count, setCount] = useState(0);
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !match) return;

    const target = Number(match[1]);
    const start = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCount(target);
        return;
      }

      const duration = 1400;
      let frame = 0;
      let startTime: number | null = null;
      const animate = (time: number) => {
        if (startTime === null) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        setCount(Math.round(target * eased));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    };

    if (!("IntersectionObserver" in window)) {
      start();
      return;
    }

    let cancelAnimation: (() => void) | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        cancelAnimation = start();
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimation?.();
    };
  }, [value]);

  if (!match) return <dd className={`stat__value stat__value--${font}`}>{value}</dd>;

  const [, numberText, suffix] = match;
  const target = Number(numberText);
  return (
    <dd ref={elementRef} className={`stat__value stat__value--${font}`} aria-label={value}>
      {count >= target ? numberText : count}{suffix}
    </dd>
  );
}
