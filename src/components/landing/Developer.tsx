"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, Layers, HardDrive, Wifi, Monitor, ShieldCheck } from "lucide-react";
import { images, imageAlt, IMAGE_QUALITY } from "@/lib/images";
import { developer } from "@/lib/content";
import { Section } from "@/components/motion/Section";
import { easeLoop, easePremium, springGentle, staggerContainer, staggerItem } from "@/components/motion/variants";

const icons = [Terminal, Layers, HardDrive, Wifi, Monitor, ShieldCheck] as const;

export function Developer() {
  return (
    <Section className="relative overflow-hidden border-t border-stone-100 bg-white py-28 md:py-36">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-teal-50/60 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easePremium }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: easePremium }}
              className="mb-5 h-0.5 w-12 origin-left rounded-full bg-gradient-to-r from-teal-500 to-transparent"
            />

            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
              {developer.headline}
            </h2>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 flex flex-col gap-2.5"
            >
              {developer.points.map((label, i) => {
                const Icon = icons[i];
                return (
                  <motion.li key={label} variants={staggerItem}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={springGentle}
                      className="group flex items-center gap-4 rounded-xl border border-stone-100 bg-stone-50 px-5 py-3.5 transition-colors hover:border-teal-200 hover:bg-white hover:shadow-sm"
                    >
                      <motion.div
                        whileHover={{ rotate: -8, scale: 1.1 }}
                        className="icon-box h-8 w-8 shrink-0"
                      >
                        <Icon className="h-4 w-4 text-teal-600" />
                      </motion.div>
                      <span className="text-sm font-medium text-stone-700">{label}</span>
                    </motion.div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: easePremium }}
            className="image-frame group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="image-frame-inner relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.developer}
                alt={imageAlt.developer}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                quality={IMAGE_QUALITY}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent" />
              {/* Terminal card */}
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", damping: 20 }}
                className="absolute bottom-4 left-4 right-4 rounded-xl border border-teal-500/30 bg-stone-950/95 p-4 font-mono backdrop-blur-md sm:right-auto sm:max-w-xs"
              >
                <p className="text-[11px] text-stone-500"># Quick start</p>
                <p className="mt-1 text-sm text-teal-400">pip install aiinfra</p>
                <p className="mt-0.5 text-sm text-stone-200">aiinfra connect --auto</p>
                <motion.div
                  className="mt-1.5 inline-flex items-center gap-1.5"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: easeLoop }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  <span className="text-[11px] text-teal-400/80">Connected</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
