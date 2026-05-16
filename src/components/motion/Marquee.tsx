"use client";

import { useReducedMotion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className = "" }: MarqueeProps) {
  const prefersReduced = useReducedMotion();
  const row = prefersReduced ? items : [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex gap-3 ${prefersReduced ? "flex-wrap justify-center" : "animate-marquee w-max"}`}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 rounded-lg border border-stone-200/80 bg-white/90 px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
