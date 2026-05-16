import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function GlassCard({
  children,
  className = "",
  dark = false,
}: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border backdrop-blur-sm ${
        dark
          ? "border-stone-700/60 bg-stone-800/40"
          : "border-stone-200/80 bg-white/80 shadow-sm shadow-stone-900/[0.03]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
