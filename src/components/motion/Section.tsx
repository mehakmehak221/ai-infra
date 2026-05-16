"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { tweenReveal } from "./variants";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/** Fade wrapper for page sections on scroll — opacity + translate only */
export function Section({ children, className, id }: SectionProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px", amount: 0.12 }}
      transition={tweenReveal(0.75)}
    >
      {children}
    </motion.section>
  );
}
