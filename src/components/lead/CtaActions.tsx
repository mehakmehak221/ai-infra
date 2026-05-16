"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { CALENDLY_URL } from "@/lib/urls";
import { springHover } from "@/components/motion/variants";
import { useLeadForm } from "./LeadFormProvider";

type CtaAction = "form" | "calendly";

type CtaActionsProps = {
  action: CtaAction;
  formContext?: string;
  className?: string;
  children: ReactNode;
};

export function CtaActions({
  action,
  formContext,
  className = "",
  children,
}: CtaActionsProps) {
  const { openForm } = useLeadForm();
  const reduced = useReducedMotion();

  const motionProps = reduced
    ? {}
    : {
        whileHover: { scale: 1.03, y: -3 },
        whileTap: { scale: 0.98 },
        transition: springHover,
      };

  if (action === "calendly") {
    return (
      <motion.a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={className}
      onClick={() => openForm(formContext)}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
