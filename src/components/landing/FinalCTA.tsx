"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";
import { images, imageAlt, IMAGE_QUALITY } from "@/lib/images";
import { CtaActions } from "@/components/lead/CtaActions";
import { finalCta } from "@/lib/content";
import { Section } from "@/components/motion/Section";
import { easeLoop, easePremium } from "@/components/motion/variants";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);
  const bgBrightness = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.8]);

  return (
    <Section className="relative overflow-hidden py-28 md:py-48">
      {/* Background */}
      <motion.div ref={ref} className="absolute inset-0 z-0" style={{ scale: bgScale }}>
        <Image
          src={images.cta}
          alt={imageAlt.cta}
          fill
          className="object-cover object-center"
          quality={IMAGE_QUALITY}
          sizes="100vw"
        />
        <motion.div
          className="absolute inset-0"
          style={{ filter: `brightness(${bgBrightness})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/85 to-stone-950/95" />
      </motion.div>

      <div className="absolute inset-0 z-0 grid-pattern-dark opacity-60" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-teal-500/15 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-teal-400/10 blur-[60px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easePremium }}
        >
          <h2 className="text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-6xl">
            {finalCta.headline}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.85, ease: easePremium }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-400"
          >
            {finalCta.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.75, ease: easePremium }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <CtaActions
              action="form"
              formContext="Final CTA — Start Free"
              className="btn-primary btn-glow relative overflow-hidden shadow-2xl shadow-teal-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                {finalCta.ctaPrimary}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: easeLoop }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </span>
            </CtaActions>
            <CtaActions
              action="calendly"
              className="glass-btn inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-stone-200"
            >
              <PhoneCall className="h-4 w-4" />
              {finalCta.ctaSecondary}
            </CtaActions>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
