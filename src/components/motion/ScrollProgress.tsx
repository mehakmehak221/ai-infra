"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { springScroll } from "./variants";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReduced = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, springScroll);

  if (prefersReduced) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-teal-500 via-teal-400 to-emerald-400"
      style={{ scaleX }}
    />
  );
}
