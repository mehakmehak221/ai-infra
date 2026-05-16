"use client";

import Image, { type ImageProps } from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { IMAGE_DIMENSIONS } from "@/lib/images";
import { loopTransition, springHover } from "./variants";

type PremiumImageProps = ImageProps & {
  containerClassName?: string;
  float?: boolean;
  fallback?: React.ReactNode;
};

export function PremiumImage({
  containerClassName = "",
  float = false,
  className = "",
  priority,
  alt,
  fill,
  fallback,
  ...props
}: PremiumImageProps) {
  const prefersReduced = useReducedMotion();
  const [error, setError] = useState(false);

  const wrapperClass = `relative overflow-hidden ${containerClassName}`;

  if (error && fallback) {
    return <motion.div className={wrapperClass}>{fallback}</motion.div>;
  }

  const image = (
    <Image
      {...props}
      alt={alt}
      fill={fill ?? true}
      width={fill ? undefined : (props.width ?? IMAGE_DIMENSIONS.width)}
      height={fill ? undefined : (props.height ?? IMAGE_DIMENSIONS.height)}
      quality={props.quality ?? 90}
      priority={priority}
      onError={() => setError(true)}
      className={`object-cover ${className}`}
      sizes={
        props.sizes ??
        "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px"
      }
    />
  );

  if (prefersReduced) {
    return <motion.div className={wrapperClass}>{image}</motion.div>;
  }

  return (
    <motion.div
      className={wrapperClass}
      whileHover={{ scale: 1.008 }}
      transition={springHover}
    >
      <motion.div
        className="relative h-full min-h-full w-full"
        animate={float ? { y: [0, -5, 0] } : undefined}
        transition={float ? loopTransition(9) : undefined}
      >
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.02 }}
          transition={springHover}
        >
          {image}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
