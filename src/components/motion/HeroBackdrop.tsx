"use client";

import { motion, useReducedMotion, type MotionValue } from "framer-motion";
import Image from "next/image";
import { images, imageAlt, IMAGE_QUALITY } from "@/lib/images";
import { easeLoop, loopTransition } from "./variants";

interface HeroBackdropProps {
  imageY?: MotionValue<string>;
  imageScale?: MotionValue<number>;
}

export function HeroBackdrop({ imageY, imageScale }: HeroBackdropProps) {
  const reduced = useReducedMotion();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-[-8%]"
        style={reduced ? undefined : { y: imageY, scale: imageScale }}
      >
        <Image
          src={images.hero}
          alt={imageAlt.hero}
          fill
          className="object-cover object-center"
          priority
          quality={IMAGE_QUALITY}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/95 via-stone-950/80 to-stone-950" />
      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(13,148,136,0.35),transparent_55%)]" />
      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_60%,rgba(20,184,166,0.15),transparent)]" />
      <motion.div className="absolute inset-0 grid-pattern-dark opacity-50" />

      {!reduced && (
        <>
          <motion.div
            className="aurora-band aurora-band-1"
            animate={{ x: ["-8%", "8%", "-8%"], opacity: [0.4, 0.65, 0.4] }}
            transition={loopTransition(14)}
          />
          <motion.div
            className="aurora-band aurora-band-2"
            animate={{ x: ["8%", "-8%", "8%"], opacity: [0.3, 0.55, 0.3] }}
            transition={loopTransition(18, 2)}
          />
          {[
            { className: "left-[15%] top-[20%] h-64 w-64", delay: 0 },
            { className: "right-[10%] top-[35%] h-48 w-48", delay: 2 },
            { className: "left-[40%] bottom-[15%] h-56 w-56", delay: 4 },
          ].map((orb, i) => (
            <motion.div
              key={i}
              className={`pointer-events-none absolute rounded-full bg-teal-500/20 blur-[80px] ${orb.className}`}
              animate={{ y: [0, -18, 0], scale: [1, 1.06, 1] }}
              transition={{
                ...loopTransition(10 + i * 2, orb.delay),
                ease: easeLoop,
              }}
            />
          ))}
          <motion.div className="hero-scanline" />
        </>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(12,10,9,0.85)_100%)]" />
    </div>
  );
}
