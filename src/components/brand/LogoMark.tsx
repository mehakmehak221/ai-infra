/** Inline logo mark — cost trend + AI lightning on teal gradient */
export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  const id = "lm";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f3d39" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
        <linearGradient id={`${id}-ic`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a7f3d0" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#${id}-bg)`} />
      <g opacity="0.12" stroke="#5eead4" strokeWidth="0.5">
        <line x1="12" y1="0" x2="12" y2="48" />
        <line x1="24" y1="0" x2="24" y2="48" />
        <line x1="36" y1="0" x2="36" y2="48" />
        <line x1="0" y1="12" x2="48" y2="12" />
        <line x1="0" y1="24" x2="48" y2="24" />
        <line x1="0" y1="36" x2="48" y2="36" />
      </g>
      <polyline
        points="10,30 18,18 26,24 38,11"
        fill="none"
        stroke={`url(#${id}-ic)`}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="33,10 38,11 37,16"
        fill="none"
        stroke={`url(#${id}-ic)`}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 8 L18 24 H23 L17 40 L31 20 H26 L30 8 Z"
        fill={`url(#${id}-ic)`}
        opacity="0.25"
      />
      <circle cx="10" cy="30" r="2.2" fill="#2dd4bf" />
      <circle cx="18" cy="18" r="2.2" fill="#2dd4bf" />
      <circle cx="26" cy="24" r="2.2" fill="#2dd4bf" />
      <circle cx="38" cy="11" r="2.8" fill="#a7f3d0" />
      <rect width="48" height="48" rx="12" fill="none" stroke="rgba(94,234,212,0.22)" strokeWidth="1" />
    </svg>
  );
}
