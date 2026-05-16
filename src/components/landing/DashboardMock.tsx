"use client";

import { motion } from "framer-motion";
import { easePremium, loopTransition, tweenReveal } from "@/components/motion/variants";

/** Premium CSS dashboard mock — always renders, no external image dependency */
export function DashboardMock({ variant = "hero" }: { variant?: "hero" | "dev" }) {
  const bars = variant === "hero" ? [68, 45, 82, 55, 72, 38] : [55, 70, 48, 90, 62, 40];

  return (
    <motion.div
      className="relative h-full w-full overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-teal-950 p-6 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={tweenReveal(0.95)}
    >
      <motion.div
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.48, 0.3] }}
        transition={loopTransition(10)}
      />
      <motion.div
        className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-teal-400/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={loopTransition(12, 1.5)}
      />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-teal-400/80" />
          </div>
          <span className="text-xs font-medium text-stone-400">cost-optimizer.app</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Token spend", value: "$12.4k", delta: "↓ 31%" },
            { label: "GPU util.", value: "67%", delta: "↑ 12%" },
            { label: "Requests", value: "2.1M", delta: "live" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={tweenReveal(0.75, 0.25 + i * 0.12)}
            >
              <p className="text-[10px] uppercase tracking-wider text-stone-500">{stat.label}</p>
              <p className="mt-1 text-lg font-semibold text-white">{stat.value}</p>
              <p className="text-xs text-teal-400">{stat.delta}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={tweenReveal(0.8, 0.55)}
        >
          <div className="mb-3 flex items-end justify-between gap-2">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-teal-600 to-teal-400"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ ...tweenReveal(0.95, 0.65 + i * 0.1), ease: easePremium }}
                style={{ maxHeight: 80, minHeight: 24 }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-stone-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>
        </motion.div>

        <div className="space-y-2">
          {["GPT-4o routing", "Idle GPU cluster", "Prompt optimization"].map((row, i) => (
            <motion.div
              key={row}
              className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={tweenReveal(0.7, 0.95 + i * 0.12)}
            >
              <span className="text-xs text-stone-300">{row}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
