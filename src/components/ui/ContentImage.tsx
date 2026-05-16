"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

interface ContentImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  aspectClass?: string;
  sizes?: string;
  parallax?: boolean;
  quality?: number;
}

export function ContentImage({
  src,
  alt,
  priority = false,
  className = "",
  aspectClass = "relative aspect-[16/10] w-full overflow-hidden",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px",
  parallax = true,
  quality = 95,
}: ContentImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.1, 1.06]);

  return (
    <div ref={ref} className={aspectClass}>
      <motion.div
        className="relative h-[112%] w-full -translate-y-[6%]"
        style={prefersReduced || !parallax ? undefined : { y, scale }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          sizes={sizes}
          className={`object-cover ${className}`}
        />
      </motion.div>
    </div>
  );
}
