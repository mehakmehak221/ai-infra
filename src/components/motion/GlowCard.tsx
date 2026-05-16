"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { springHover, tweenReveal } from "./variants";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlowCard({ children, className = "", delay = 0 }: GlowCardProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={tweenReveal(0.7, delay)}
      whileHover={{ y: -4, scale: 1.01, transition: springHover }}
      className={`glass-card group relative overflow-hidden ${className}`}
    >
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
        <span className="card-shine absolute inset-0" />
      </span>
      {children}
    </motion.div>
  );
}
