"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BarChart3, GitBranch, Cpu, MessageSquare, Bell, Globe } from "lucide-react";
import { images, imageAlt, IMAGE_QUALITY } from "@/lib/images";
import { featureCards } from "@/lib/content";
import { Section } from "@/components/motion/Section";
import { GlowCard } from "@/components/motion/GlowCard";
import { staggerContainer, staggerItemScale } from "@/components/motion/variants";

const icons = [BarChart3, GitBranch, Cpu, MessageSquare, Bell, Globe] as const;
const imageKeys = [
  images.features.analytics,
  images.features.routing,
  images.features.gpu,
  images.features.prompts,
  images.features.alerts,
  images.features.multiCloud,
] as const;
const altKeys = [
  imageAlt.analytics,
  imageAlt.routing,
  imageAlt.gpu,
  imageAlt.prompts,
  imageAlt.alerts,
  imageAlt.multiCloud,
] as const;

export function FeatureCards() {
  return (
    <Section id="features" className="relative overflow-hidden border-y border-stone-200 bg-stone-50 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(13,148,136,0.06),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-64px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featureCards.map((feature, i) => {
            const Icon = icons[i];
            return (
              <GlowCard key={feature.title} delay={i * 0.05} className="!rounded-2xl !p-0">
                <motion.article variants={staggerItemScale} className="h-full">
                  <div className="relative h-44 overflow-hidden bg-stone-100">
                    <Image
                      src={imageKeys[i]}
                      alt={altKeys[i]}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      quality={IMAGE_QUALITY}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-stone-900/10 to-transparent transition-opacity duration-500 group-hover:from-stone-900/60" />
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-stone-950/60 backdrop-blur-md"
                    >
                      <Icon className="h-4 w-4 text-teal-400" />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-semibold text-stone-900 transition-colors group-hover:text-teal-700">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-500">{feature.description}</p>
                  </div>
                </motion.article>
              </GlowCard>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
