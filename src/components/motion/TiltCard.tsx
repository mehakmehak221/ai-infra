"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { type MouseEvent, type ReactNode } from "react";
import { springGentle } from "./variants";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export function TiltCard({ children, className = "", glow = true }: TiltCardProps) {
  const prefersReduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 100, damping: 26, mass: 1 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 26, mass: 1 });

  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mx}px ${my}px, rgba(13,148,136,0.14), transparent 42%)`;

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    mx.set(px);
    my.set(py);
    rotateX.set(((py - rect.height / 2) / (rect.height / 2)) * -6);
    rotateY.set(((px - rect.width / 2) / (rect.width / 2)) * 6);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`group relative ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      transition={springGentle}
    >
      {glow && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
          style={{ background: spotlight }}
        />
      )}
      <motion.div style={{ transform: "translateZ(0)" }}>{children}</motion.div>
    </motion.div>
  );
}
