/**
 * Full HD tech images (1920×1080) from Pexels — dashboards, code, servers, teams.
 * Regenerate: node scripts/download-images.mjs
 */
export const images = {
  hero: "/images/hero-main.jpg",
  solution: "/images/solution.jpg",
  howItWorks: "/images/how-it-works.jpg",
  developer: "/images/developer-tech.jpg",
  cta: "/images/cta.jpg",
  features: {
    analytics: "/images/feature-analytics.jpg",
    routing: "/images/feature-routing.jpg",
    gpu: "/images/feature-gpu.jpg",
    prompts: "/images/feature-prompts.jpg",
    alerts: "/images/feature-alerts.jpg",
    multiCloud: "/images/feature-cloud.jpg",
  },
} as const;

export const IMAGE_DIMENSIONS = { width: 1920, height: 1080 } as const;
export const IMAGE_QUALITY = 90;

export const imageAlt = {
  hero: "Abstract AI neural network and data infrastructure visualization",
  solution: "Team reviewing AI infrastructure data on multiple monitors",
  howItWorks: "Developer coding AI integrations on laptop",
  developer: "AI engineering team collaborating with laptops in office",
  cta: "GPU server room and cloud data center infrastructure",
  analytics: "Live AI cost analytics dashboard with model and API spend breakdown",
  routing: "AI model routing and neural network optimization",
  gpu: "Server hardware and GPU cluster infrastructure",
  prompts: "Developer optimizing AI prompts in code editor",
  alerts: "Business analytics dashboard with cost monitoring",
  multiCloud: "Global multi-cloud network infrastructure",
} as const;
