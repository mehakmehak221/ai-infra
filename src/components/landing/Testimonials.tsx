"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Section } from "@/components/motion/Section";
import { easePremium, springSmooth, staggerContainer, staggerItemScale } from "@/components/motion/variants";

export function Testimonials() {
  return (
    <Section className="relative overflow-hidden border-t border-stone-100 bg-white py-28 md:py-36">
      {/* Decorative quote mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none text-[200px] font-bold leading-none text-stone-100"
      >
        "
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((quote, i) => (
            <motion.blockquote
              key={quote}
              variants={staggerItemScale}
              whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(13,148,136,0.1)" }}
              transition={springSmooth}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 p-8 transition-colors hover:border-teal-200 hover:bg-white"
            >
              {/* top teal accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.65, ease: easePremium }}
                className="absolute left-0 top-0 h-0.5 w-full origin-left rounded-full bg-gradient-to-r from-teal-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={springSmooth}
                className="mb-5 inline-flex"
              >
                <Quote className="h-8 w-8 text-teal-400/60" />
              </motion.div>

              <p className="flex-1 text-base leading-relaxed text-stone-600">
                &ldquo;{quote}&rdquo;
              </p>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
