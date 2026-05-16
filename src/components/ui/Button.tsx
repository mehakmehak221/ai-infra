"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { springHover } from "@/components/motion/variants";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-stone-900 text-white hover:bg-stone-800 shadow-sm shadow-stone-900/10",
  secondary:
    "bg-white text-stone-900 border border-stone-200 hover:border-stone-300 hover:bg-stone-50",
  ghost: "text-stone-600 hover:text-stone-900 hover:bg-stone-100/80",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  href,
  onClick,
}: ButtonProps) {
  const prefersReduced = useReducedMotion();
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600";

  const classes = `${base} ${variants[variant]} ${className}`;

  const motionProps = prefersReduced
    ? {}
    : {
        whileHover: { scale: 1.02, y: -1 },
        whileTap: { scale: 0.98 },
        transition: springHover,
      };

  if (href) {
    return (
      <motion.span className="inline-flex" {...motionProps}>
        <a href={href} className={classes}>
          {children}
        </a>
      </motion.span>
    );
  }

  return (
    <motion.span className="inline-flex" {...motionProps}>
      <button type="button" className={classes} onClick={onClick}>
        {children}
      </button>
    </motion.span>
  );
}
