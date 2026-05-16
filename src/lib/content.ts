/** Landing page copy — do not change without updating the product spec. */
export const site = {
  name: "AI Infra Cost Optimizer",
} as const;

export const hero = {
  headline: "Stop Burning Money on",
  headlineHighlight: "AI Infrastructure",
  subheadline:
    "Track, analyze, and reduce your LLM, GPU, cloud, and inference costs across providers in real time.",
  ctaPrimary: "Start Free Audit",
  ctaSecondary: "Book a call",
  trust:
    "Works with OpenAI, Anthropic, Groq, AWS, GCP, Azure, RunPod, Together AI, Ollama, and custom GPU clusters.",
} as const;

export const problem = {
  headline: "AI teams are overspending without realizing it",
  points: [
    "GPU instances running idle 24/7",
    "Massive token waste from bad prompts",
    "Duplicate inference requests",
    "Expensive model routing decisions",
    "No visibility into per-user or per-feature AI costs",
    "Multi-provider billing chaos",
  ],
  closing:
    "Most AI startups waste 20 to 50% of infra spend before they even scale.",
} as const;

export const solution = {
  headline: "One dashboard for your entire AI stack",
  description:
    "AI Infra Cost Optimizer continuously monitors your AI infrastructure and automatically identifies cost leaks, inefficient workloads, and optimization opportunities.",
  features: [
    "Real-time AI spend tracking",
    "Token-level analytics",
    "GPU utilization monitoring",
    "Smart model routing suggestions",
    "Cost anomaly detection",
    "Team and project wise breakdowns",
    "Auto alerts for overspending",
    "Multi-cloud support",
  ],
} as const;

export const featureCards = [
  {
    title: "Live Cost Analytics",
    description:
      "See exactly where every dollar goes across models, APIs, GPUs, and workloads.",
  },
  {
    title: "Smart Model Routing",
    description:
      "Automatically recommend cheaper models for similar output quality.",
  },
  {
    title: "GPU Efficiency Tracking",
    description:
      "Detect idle GPUs, underutilized machines, and expensive workloads instantly.",
  },
  {
    title: "Prompt Optimization",
    description:
      "Find prompts wasting tokens and reduce inference costs automatically.",
  },
  {
    title: "Budget Alerts",
    description: "Get notified before costs spike unexpectedly.",
  },
  {
    title: "Multi-Provider Visibility",
    description:
      "Monitor OpenAI, Anthropic, local GPUs, and cloud providers from one place.",
  },
] as const;

export const howItWorks = {
  title: "How It Works",
  steps: [
    {
      title: "Connect Your Stack",
      description:
        "Integrate APIs, cloud providers, Kubernetes clusters, or inference endpoints.",
    },
    {
      title: "Analyze Usage",
      description:
        "We track token usage, latency, GPU load, and request patterns.",
    },
    {
      title: "Optimize Automatically",
      description:
        "Receive actionable recommendations that reduce cost without hurting performance.",
    },
  ],
} as const;

export const metrics = [
  "Reduce AI costs by up to 43%",
  "Detect infra waste in minutes",
  "Monitor millions of inference requests",
  "Real-time observability across your stack",
] as const;

export const developer = {
  headline: "Built for modern AI engineering teams",
  points: [
    "API-first architecture",
    "Kubernetes native",
    "Works with self-hosted GPUs",
    "OpenTelemetry compatible",
    "Real-time dashboards",
    "Enterprise ready security",
  ],
} as const;

export const useCases = {
  title: "Use Cases",
  items: [
    {
      title: "AI Startups",
      description: "Control burn rate while scaling inference.",
    },
    {
      title: "SaaS Products",
      description: "Track AI cost per feature and per customer.",
    },
    {
      title: "Enterprise AI Teams",
      description: "Centralize AI spend across departments.",
    },
    {
      title: "GPU Cloud Platforms",
      description: "Improve infrastructure utilization and margins.",
    },
  ],
} as const;

export const testimonials = [
  "Saved us thousands in unused GPU costs within the first week.",
  "Finally gave our AI team visibility into actual inference economics.",
  "We reduced token spend by 31% after optimizing prompts.",
] as const;

export const pricing = {
  title: "Pricing",
  plans: [
    {
      name: "Starter",
      tagline: "For indie hackers and early startups",
      features: ["Basic analytics", "Up to 1M tokens tracked", "Email alerts"],
    },
    {
      name: "Growth",
      tagline: "For scaling AI products",
      features: [
        "Advanced optimization",
        "Multi-provider support",
        "Team analytics",
        "Custom alerts",
      ],
    },
    {
      name: "Enterprise",
      tagline: "For large-scale AI infrastructure",
      features: [
        "Dedicated deployment",
        "SSO and RBAC",
        "Custom integrations",
        "SLA support",
      ],
    },
  ],
} as const;

export const finalCta = {
  headline: "Your AI infrastructure should scale intelligently",
  subheadline:
    "Optimize costs, improve efficiency, and gain complete visibility into your AI stack.",
  ctaPrimary: "Start Free",
  ctaSecondary: "Book consultation",
} as const;

export const footerTaglines = [
  "Built for AI-native companies",
  "Real-time AI observability",
  "Smarter inference economics",
  "Reduce spend without reducing performance",
] as const;
