"use client";

import { motion } from "framer-motion";
import { Rocket, Package, Building2, Server } from "lucide-react";
import { useCases } from "@/lib/content";
import { Section } from "@/components/motion/Section";
import { easePremium, springSmooth, staggerContainer, staggerItemScale } from "@/components/motion/variants";

const icons = [Rocket, Package, Building2, Server] as const;

const cardGradients = [
  "from-teal-500/10 to-teal-600/5",
  "from-emerald-500/10 to-emerald-600/5",
  "from-cyan-500/10 to-cyan-600/5",
  "from-sky-500/10 to-sky-600/5",
] as const;

const iconBg = [
  "border-teal-200 bg-teal-50 text-teal-600",
  "border-emerald-200 bg-emerald-50 text-emerald-600",
  "border-cyan-200 bg-cyan-50 text-cyan-600",
  "border-sky-200 bg-sky-50 text-sky-600",
] as const;

export function UseCases() {
  return (
    <Section className="relative overflow-hidden border-t border-stone-100 bg-stone-50 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(13,148,136,0.06),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easePremium }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: easePremium }}
            className="mx-auto mb-5 h-0.5 w-12 origin-left rounded-full bg-gradient-to-r from-teal-500 to-transparent"
          />
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            {useCases.title}
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {useCases.items.map((c, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={c.title}
                variants={staggerItemScale}
                whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(13,148,136,0.12)" }}
                transition={springSmooth}
                className={`group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-7 transition-border-color duration-300 hover:border-teal-200`}
              >
                {/* gradient fill on hover */}
                <motion.div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cardGradients[i]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={springSmooth}
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${iconBg[i]}`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <h3 className="text-base font-semibold text-stone-900 transition-colors group-hover:text-teal-700">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">{c.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
