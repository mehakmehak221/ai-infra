"use client";

import { motion, useReducedMotion } from "framer-motion";
import { tweenReveal } from "./variants";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  as = "span",
}: TextRevealProps) {
  const prefersReduced = useReducedMotion();
  const Tag = motion[as];
  const words = text.split(" ");

  if (prefersReduced) {
    const Static = as;
    return <Static className={className}>{text}</Static>;
  }

  return (
    <Tag className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={tweenReveal(0.6, delay + i * 0.06)}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
