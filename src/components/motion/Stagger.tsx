"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { staggerContainer, staggerItem, staggerItemScale } from "./variants";

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export function Stagger({ children, className }: StaggerProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-64px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  scale = false,
}: {
  children: ReactNode;
  className?: string;
  scale?: boolean;
}) {
  const item = scale ? staggerItemScale : staggerItem;

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
