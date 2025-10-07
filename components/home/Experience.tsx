"use client";

import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Associate Software Engineer",
    company: "Epic Lanka (Pvt) Ltd",
    period: "Jun 2024 – Present",
    bullets: [
      "Built REST APIs using Spring Boot, JPA, Hibernate; centralized exception handling.",
      "Secured apps with Spring Security, OAuth2, JWT; validated inputs.",
      "Containerized services with Docker & Compose; implemented CI/CD workflows.",
      "Developed UIs with Angular (forms, routing, pipes) and React (hooks, Redux).",
      "Implemented microservices with Eureka, Config Server, Spring Cloud Gateway.",
      "Integrated RabbitMQ and Kafka for async processing; advanced JPA queries; AOP.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Epic Lanka (Pvt) Ltd",
    period: "Aug 2023 – May 2024",
    bullets: [
      "Contributed to microservices-based solutions for enterprise clients.",
      "Built features in Angular and React; supported MySQL database design.",
      "Collaborated in Agile teams using Jira; practiced Git branching workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience" subtitle="Professional Journey">
      <div className="grid gap-6">
        {experience.map((item) => (
          <Card key={item.role + item.company} className="p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-sm text-[var(--muted)]">{item.company}</p>
              </div>
              <p className="text-sm text-[var(--muted)]">{item.period}</p>
            </div>
            <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
              {item.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}


