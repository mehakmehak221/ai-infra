"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/motion/Section";
import { metrics } from "@/lib/content";
import { easeLoop, staggerContainer, staggerItemScale } from "@/components/motion/variants";

export function Metrics() {
  return (
    <Section className="relative overflow-hidden bg-stone-950 py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern-dark" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-stone-900/60 to-stone-950"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: easeLoop }}
      />
      <motion.div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((text) => (
            <motion.div
              key={text}
              variants={staggerItemScale}
              whileHover={{ y: -6, scale: 1.02 }}
              className="stat-card group relative overflow-hidden p-8 text-center transition-colors hover:border-teal-500/40"
            >
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="relative text-lg font-bold leading-snug tracking-tight text-teal-400 md:text-xl">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
