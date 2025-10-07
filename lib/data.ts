export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type Service = {
  title: string;
  blurb: string;
  features: string[];
};

export type Product = {
  title: string;
  blurb: string;
  price?: string;
  cta?: string;
  url?: string;
  highlights: string[];
};

export type Testimonial = {
  author: string;
  role: string;
  quote: string;
  rating?: number;
};

export type Achievement = { title: string; description: string };
export type Reason = { title: string; description: string };
export type Commitment = { title: string };

export const projects: Project[] = [
  {
    title: "NeonFlow Dashboard",
    description:
      "Real-time analytics dashboard with glassmorphism UI and motion transitions.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/you/neonflow",
  },
  {
    title: "AI Portfolio Generator",
    description:
      "Generates sleek personal sites with content prompts and themed presets.",
    tech: ["Next.js", "OpenAI", "Supabase"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/you/ai-portfolio",
  },
  {
    title: "Edge Image Optimizer",
    description:
      "On-the-fly transforms and caching for hero imagery on the edge.",
    tech: ["Next.js", "Edge Runtime", "WASM"],
    repoUrl: "https://github.com/you/edge-image-optimizer",
  },
  {
    title: "Rukshan FDO News",
    description:
      "External reference link as requested. Opens the news site in a new tab.",
    tech: ["External"],
    liveUrl:
      "https://www.rukshanfdo.news/?fbclid=IwZXh0bgNhZW0CMTEAAR6H_CtIOCmdQfnSpVoTfEpc9XbpkM_djeW-mx96_TyfD8f2SjkZR5DRVrhcLw_aem_QnUlHNjkISxKO7B4bXTcEw",
  },
];

export const skills: { label: string; icon: string }[] = [
  { label: "Next.js", icon: "SiNextdotjs" },
  { label: "TypeScript", icon: "SiTypescript" },
  { label: "Tailwind CSS", icon: "SiTailwindcss" },
  { label: "Framer Motion", icon: "SiFramer" },
  { label: "React", icon: "SiReact" },
  { label: "Node.js", icon: "SiNodedotjs" },
];

export const services: Service[] = [
  {
    title: "Frontend Engineering",
    blurb: "Accessible, performant UIs with modern stacks and design systems.",
    features: ["Next.js + TypeScript", "Design System Setup", "A11y & Performance"],
  },
  {
    title: "Motion & Microinteractions",
    blurb: "Subtle animations that guide without distracting.",
    features: ["Framer Motion", "Interaction Design", "Delightful Feedback"],
  },
  {
    title: "Landing Pages",
    blurb: "Sharp, conversion-focused pages with clean storytelling.",
    features: ["Hero & Sections", "SEO & Analytics", "A/B Friendly"],
  },
];

export const products: Product[] = [
  {
    title: "LaunchKit — Landing Page System",
    blurb: "Ready-to-ship landing pages with modern sections and analytics hooks.",
    price: "$299",
    cta: "View Details",
    highlights: ["Hero + Pricing + FAQ", "A/B Ready", "SEO Optimized"],
  },
  {
    title: "Pulse — SaaS Admin UI",
    blurb: "Clean dashboard foundations with auth, tables, and charts.",
    price: "$499",
    cta: "View Details",
    highlights: ["Auth Scaffolding", "Charts", "Dark Mode"],
  },
  {
    title: "Motion Pack",
    blurb: "Curated microinteractions and transitions for product UIs.",
    price: "$149",
    cta: "Preview",
    highlights: ["Page Transitions", "Cards & Buttons", "Onboarding"],
  },
];

export const testimonials: Testimonial[] = [
  { author: "Client A", role: "Founder, StartupX", quote: "Delivered beyond expectations with stunning polish.", rating: 5 },
  { author: "Client B", role: "PM, FinTech Co.", quote: "Clear communication and pixel-perfect execution.", rating: 5 },
];

export const achievements: Achievement[] = [
  { title: "Performance Optimization", description: "Cut LCP by 45% across key pages." },
  { title: "Team Leadership", description: "Mentored devs and drove design systems adoption." },
  { title: "Quality Assurance", description: "Introduced robust linting and visual regression." },
  { title: "Innovation Focus", description: "Shipped complex motion without hurting performance." },
];

export const reasons: Reason[] = [
  { title: "Lightning Fast", description: "Edge-ready apps and measured UX improvements." },
  { title: "Collaborative", description: "Transparent process, async updates, and clear roadmaps." },
  { title: "Quality Obsessed", description: "Accessibility, testing, and maintainability first." },
];

export const commitments: Commitment[] = [
  { title: "On-time delivery" },
  { title: "Clear weekly updates" },
  { title: "Measurable outcomes" },
];


