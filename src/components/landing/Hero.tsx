"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { hero } from "@/lib/content";
import { loopTransition, springHover, tweenReveal } from "@/components/motion/variants";
import { HeroBackdrop } from "@/components/motion/HeroBackdrop";

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.22 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: tweenReveal(0.7),
  },
};

const headlineWords = ["Stop", "Burning", "Money", "on"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 48]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-stone-950 pt-20"
    >
      <HeroBackdrop imageY={imageY} imageScale={imageScale} />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 md:py-32"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="show"
          className="text-center text-4xl font-bold leading-[1.08] tracking-tight text-stone-50 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headlineWords.map((word) => (
            <motion.span key={word} variants={wordItem} className="mr-[0.25em] inline-block">
              {word}
            </motion.span>
          ))}
          <motion.span
            variants={wordItem}
            className="text-gradient-animated inline-block"
          >
            {hero.headlineHighlight}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={tweenReveal(0.75, 0.48)}
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-stone-400 md:text-xl"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={tweenReveal(0.85, 0.62)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={springHover}
            className="btn-primary btn-glow relative overflow-hidden shadow-xl shadow-teal-500/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              {hero.ctaPrimary}
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={loopTransition(2.2)}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </span>
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03, y: -3, borderColor: "rgba(45,212,191,0.6)" }}
            whileTap={{ scale: 0.98 }}
            transition={springHover}
            className="glass-btn inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-stone-200"
          >
            <Play className="h-4 w-4 fill-current" />
            {hero.ctaSecondary}
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={tweenReveal(0.75, 0.78)}
          className="mt-8 text-center text-xs leading-relaxed text-stone-500"
        >
          {hero.trust}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={tweenReveal(0.9, 1.05)}
          className="pointer-events-none absolute -left-4 top-1/3 hidden h-24 w-24 rounded-2xl border border-teal-500/20 bg-teal-500/5 blur-sm lg:block"
          aria-hidden
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={tweenReveal(0.9, 1.25)}
          className="pointer-events-none absolute -right-4 bottom-1/4 hidden h-20 w-20 rounded-full border border-teal-400/20 bg-teal-400/5 lg:block"
          aria-hidden
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={tweenReveal(0.8, 1.45)}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={loopTransition(2.8)}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-widest text-stone-600">
            Scroll
          </span>
          <div className="h-8 w-5 rounded-full border border-stone-600/60 p-1">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0.4, 1] }}
              transition={loopTransition(2.8)}
              className="mx-auto h-1.5 w-1 rounded-full bg-teal-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
