"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { images, imageAlt, IMAGE_QUALITY } from "@/lib/images";
import { solution } from "@/lib/content";
import { Section } from "@/components/motion/Section";
import { easePremium, staggerContainer, staggerItem } from "@/components/motion/variants";

export function Solution() {
  return (
    <Section
      id="solution"
      className="relative overflow-hidden bg-stone-50 py-28 md:py-36"
    >
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-teal-400/6 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easePremium }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: easePremium }}
            className="mx-auto mb-5 h-0.5 w-12 origin-left rounded-full bg-gradient-to-r from-teal-500 to-transparent"
          />
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
            {solution.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-500">
            {solution.description}
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: easePremium }}
            className="image-frame group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="image-frame-inner relative aspect-[16/10] overflow-hidden">
              <Image
                src={images.solution}
                alt={imageAlt.solution}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={IMAGE_QUALITY}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Live indicator */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-teal-500/30 bg-stone-950/70 px-3 py-1.5 backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
                </span>
                <span className="text-xs font-medium text-stone-200">Live monitoring</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-2.5 sm:grid-cols-2"
          >
            {solution.features.map((f) => (
              <motion.div
                key={f}
                variants={staggerItem}
                whileHover={{ x: 4, boxShadow: "0 8px 24px rgba(13,148,136,0.1)" }}
                className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3.5 transition-colors hover:border-teal-300"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" />
                <span className="text-sm font-medium text-stone-700">{f}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
