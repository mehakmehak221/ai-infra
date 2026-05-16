import type { Transition, Variants } from "framer-motion";

/** Smooth deceleration — no harsh snap at the end */
export const easePremium = [0.16, 1, 0.3, 1] as const;

/** Gentle in-out for looping / ambient motion */
export const easeLoop = [0.45, 0.05, 0.55, 0.95] as const;

export const springSmooth: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 26,
  mass: 1,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 65,
  damping: 22,
  mass: 1.1,
};

export const springScroll: Transition = {
  type: "spring",
  stiffness: 70,
  damping: 28,
  restDelta: 0.001,
};

export const springHover: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 0.85,
};

/** @deprecated Use springSmooth */
export const springSnappy = springSmooth;

/** @deprecated Use springGentle */
export const springSoft = springGentle;

export const loopTransition = (duration: number, delay = 0): Transition => ({
  duration,
  repeat: Infinity,
  ease: easeLoop,
  delay,
});

/** Tween-only reveals — no blur/filter, GPU-friendly transform + opacity */
export const tweenReveal = (duration = 0.7, delay = 0): Transition => ({
  type: "tween",
  duration,
  delay,
  ease: easePremium,
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: tweenReveal(0.75),
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: tweenReveal(0.65),
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: tweenReveal(0.75),
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: tweenReveal(0.75),
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: tweenReveal(0.75),
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: tweenReveal(0.65),
  },
};

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: tweenReveal(0.65),
  },
};
