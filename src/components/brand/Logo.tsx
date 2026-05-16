import { LogoMark } from "./LogoMark";

type LogoVariant = "light" | "dark";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
}

/** Full logo: mark + wordmark (HTML text — always renders) */
export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={36} className="shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[13px] font-bold tracking-tight ${
            isLight ? "text-teal-50" : "text-teal-900"
          }`}
        >
          AI Infra
        </span>
        <span
          className={`mt-0.5 text-[10px] font-medium tracking-wide ${
            isLight ? "text-white/55" : "text-stone-500"
          }`}
        >
          Cost Optimizer
        </span>
      </span>
    </span>
  );
}
