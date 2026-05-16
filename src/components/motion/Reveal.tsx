"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { type ReactNode } from "react";
import { tweenReveal } from "./variants";

type Direction = "up" | "down" | "left" | "right" | "none";

const directionOffset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  variants?: Variants;
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  variants,
  once = true,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const offset = directionOffset[direction];

  const customVariants: Variants = variants ?? {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: prefersReduced
        ? { duration: 0.01 }
        : tweenReveal(0.9, delay),
    },
  };

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-72px" }}
      variants={customVariants}
    >
      {children}
    </motion.div>
  );
}

export function RevealHero({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: tweenReveal(0.75, delay),
        },
      }}
    >
      {children}
    </motion.div>
  );
}
