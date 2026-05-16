"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plug2, LineChart, Sparkles } from "lucide-react";
import { images, imageAlt, IMAGE_QUALITY } from "@/lib/images";
import { howItWorks } from "@/lib/content";
import { Section } from "@/components/motion/Section";
import { easePremium, springGentle, springSmooth } from "@/components/motion/variants";

const stepIcons = [Plug2, LineChart, Sparkles] as const;
const stepColors = [
  { bg: "bg-teal-50", border: "border-teal-200", text: "text-teal-600", num: "text-teal-500" },
  { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-600", num: "text-emerald-500" },
  { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-600", num: "text-cyan-500" },
] as const;

export function HowItWorks() {
  return (
    <Section className="relative overflow-hidden border-t border-stone-100 bg-white py-28 md:py-36">
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-teal-50/70 blur-[100px]" />

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
            {howItWorks.title}
          </h2>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Steps */}
          <div className="relative flex flex-col gap-0">
            {/* Connector line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: easePremium }}
              className="absolute left-[1.6rem] top-14 h-[calc(100%-6rem)] w-px origin-top bg-gradient-to-b from-teal-200 via-teal-100 to-transparent"
            />

            {howItWorks.steps.map((step, i) => {
              const Icon = stepIcons[i];
              const color = stepColors[i];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.14, duration: 0.65, ease: easePremium }}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: -5 }}
                    transition={springSmooth}
                    className={`relative z-10 flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-2xl border shadow-sm ${color.bg} ${color.border}`}
                  >
                    <Icon className={`h-5 w-5 ${color.text}`} />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={springGentle}
                    className="step-card flex-1"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs font-bold tabular-nums ${color.num}`}>
                        0{i + 1}
                      </span>
                      <h3 className="text-base font-semibold text-stone-900">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-stone-500">{step.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: easePremium }}
            className="image-frame group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="image-frame-inner relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.howItWorks}
                alt={imageAlt.howItWorks}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={IMAGE_QUALITY}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Integration badge */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute bottom-4 right-4 rounded-xl border border-teal-200/80 bg-white/95 p-3.5 shadow-lg backdrop-blur-sm"
              >
                <p className="text-[11px] font-semibold text-stone-900">Integration ready</p>
                <div className="mt-2 flex gap-1.5">
                  {["REST", "gRPC", "SDK", "K8s"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-teal-50 px-1.5 py-0.5 text-[10px] font-semibold text-teal-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
