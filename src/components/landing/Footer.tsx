"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { footerTaglines } from "@/lib/content";
import { easePremium } from "@/components/motion/variants";

export function Footer() {
  const taglines = [...footerTaglines, ...footerTaglines];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.85, ease: easePremium }}
      className="border-t border-stone-800 bg-stone-950"
    >
      <motion.div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-10">
        <motion.a
          href="#"
          aria-label="AI Infra Cost Optimizer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="opacity-90 transition-opacity hover:opacity-100"
        >
          <Logo variant="light" />
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="overflow-hidden border-t border-stone-800/60 py-4"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {taglines.map((t, i) => (
            <span key={i} className="px-8 text-xs font-medium tracking-wide text-stone-600">
              {t}
              <span className="ml-8 text-teal-800">·</span>
            </span>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
}
