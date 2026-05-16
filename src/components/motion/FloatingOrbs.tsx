"use client";

import { motion, useReducedMotion } from "framer-motion";
import { loopTransition } from "./variants";

export function FloatingOrbs() {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return null;

  return (
    <motion.div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, -16, 0], scale: [1, 1.06, 1] }}
        transition={loopTransition(14)}
      />
      <motion.div
        className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-stone-300/30 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 18, 0], scale: [1, 1.04, 1] }}
        transition={loopTransition(16, 1)}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-teal-300/15 blur-3xl"
        animate={{ x: [0, 16, 0], opacity: [0.4, 0.65, 0.4] }}
        transition={loopTransition(12, 2)}
      />
    </motion.div>
  );
}
