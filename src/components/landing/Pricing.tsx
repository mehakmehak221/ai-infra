"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricing } from "@/lib/content";
import { Section } from "@/components/motion/Section";
import { GlowCard } from "@/components/motion/GlowCard";
import { staggerContainer, staggerItemScale } from "@/components/motion/variants";

export function Pricing() {
  return (
    <Section id="pricing" className="border-t border-stone-200 bg-stone-50 py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl"
        >
          {pricing.title}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-3 lg:items-stretch"
        >
          {pricing.plans.map((plan, i) => (
            <GlowCard key={plan.name} delay={i * 0.08} className="flex flex-col !p-8">
              <motion.div variants={staggerItemScale} className="flex h-full flex-col">
                <p className="text-sm font-semibold text-teal-600">{plan.name}</p>
                <p className="mt-1 text-xs text-stone-500">{plan.tagline}</p>
                <div className="mt-8 h-px bg-stone-100" />
                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                      <span className="text-sm text-stone-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </GlowCard>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
