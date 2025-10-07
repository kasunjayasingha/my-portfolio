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
    title: "Affiniti Collect Plus System (2024 – Present)",
    description:
      "Debt collection and recovery platform automating receivables lifecycle: credit dashboards, notifications, SLA escalations, case management, reporting.",
    tech: ["Java", "Spring Boot", "REST APIs", "Hibernate/JPA"],
  },
  {
    title: "Affiniti CRM (2024 – Present)",
    description:
      "CRM integrating sales and service to enhance customer interactions.",
    tech: ["Microservices", "Spring Boot", "React", "JSP", "MySQL"],
  },
  {
    title: "Tea Value Chain Management System (2023 – 2024)",
    description:
      "Lifecycle tracking system for Sri Lanka Tea Board across production stages.",
    tech: ["Microservices", "Spring Boot", "Angular", "MySQL"],
  },
];

export const skills: { label: string; icon: string }[] = [
  { label: "Java", icon: "SiJava" },
  { label: "Spring Boot", icon: "SiSpringboot" },
  { label: "React", icon: "SiReact" },
  { label: "Next.js", icon: "SiNextdotjs" },
  { label: "Angular", icon: "SiAngular" },
  { label: "TypeScript", icon: "SiTypescript" },
  { label: "Python", icon: "SiPython" },
  { label: "MySQL", icon: "SiMysql" },
  { label: "MongoDB", icon: "SiMongodb" },
  { label: "Docker", icon: "SiDocker" },
  { label: "Kafka", icon: "SiApachekafka" },
  { label: "RabbitMQ", icon: "SiRabbitmq" },
  { label: "Keycloak", icon: "SiKeycloak" },
];

export const services: Service[] = [
  {
    title: "Backend & Microservices",
    blurb: "Java/Spring Boot services with security, observability, and reliability.",
    features: ["RESTful APIs", "JPA/Hibernate", "OAuth2/JWT/Keycloak"],
  },
  {
    title: "Frontend Development",
    blurb: "Modern SPAs with React and Angular, optimized for UX and performance.",
    features: ["React + Redux", "Angular Forms & Routing", "Responsive UI"],
  },
  {
    title: "DevOps & Delivery",
    blurb: "Containerization and CI/CD for scalable deployments.",
    features: ["Docker & Compose", "CI/CD Pipelines", "Best Practices"],
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
  { title: "Security & Auth", description: "Implemented OAuth2, JWT, and Keycloak across services." },
  { title: "Microservices Delivery", description: "Built and deployed production services with Spring Cloud." },
  { title: "CI/CD & Containers", description: "Containerized apps and automated pipelines with Docker & CI/CD." },
  { title: "Advanced JPA", description: "Wrote complex queries, AOP aspects, and custom annotations." },
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


