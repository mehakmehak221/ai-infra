interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p
        className={`section-eyebrow ${align === "center" ? "justify-center" : ""} ${dark ? "text-teal-400" : "text-teal-600"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-stone-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? "text-stone-400" : "text-stone-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
