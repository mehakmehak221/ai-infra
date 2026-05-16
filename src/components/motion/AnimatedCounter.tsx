"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { springGentle } from "./variants";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  const match = value.match(/^(\D*)(\d+)(.*)$/);

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, springGentle);

  useEffect(() => {
    if (inView && match) motionVal.set(parseInt(match[2], 10));
  }, [inView, match, motionVal]);

  const display = useTransform(spring, (v) =>
    match ? `${match[1]}${Math.round(v)}${match[3]}` : value,
  );

  if (!match || reduced) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
