"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Section } from "@/components/motion/Section";
import { problem } from "@/lib/content";
import { easePremium, springGentle, staggerContainer, staggerItem } from "@/components/motion/variants";

export function Problem() {
  return (
    <Section
      id="problem"
      className="relative overflow-hidden border-t border-stone-100 bg-white py-28 md:py-36"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-red-50/60 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal-50/80 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

          {/* ── Left: Headline + stat ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: easePremium }}
            className="lg:sticky lg:top-28"
          >
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: easePremium }}
              className="mb-5 h-0.5 w-12 origin-left rounded-full bg-gradient-to-r from-teal-500 to-transparent"
            />

            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
              {problem.headline}
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.75, ease: easePremium }}
              className="mt-10 overflow-hidden rounded-2xl border border-stone-100 bg-gradient-to-br from-stone-50 to-white p-7 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="icon-box h-11 w-11 shrink-0"
                >
                  <AlertTriangle className="h-5 w-5 text-teal-600" />
                </motion.div>
                <div>
                  <p className="text-sm font-medium leading-relaxed text-stone-600">
                    {problem.closing}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Problem list ── */}
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-2.5"
          >
            {problem.points.map((point, i) => (
              <motion.li key={point} variants={staggerItem}>
                <motion.div
                  whileHover={{ x: 6, borderColor: "rgba(13,148,136,0.4)" }}
                  transition={springGentle}
                  className="group flex items-center gap-4 rounded-xl border border-stone-100 bg-stone-50 px-5 py-4 shadow-sm transition-shadow hover:bg-white hover:shadow-md"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold tabular-nums text-stone-400 shadow-sm ring-1 ring-stone-200 transition-all group-hover:bg-teal-50 group-hover:text-teal-600 group-hover:ring-teal-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium leading-snug text-stone-700">{point}</span>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </div>
    </Section>
  );
}
