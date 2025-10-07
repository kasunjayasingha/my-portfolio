"use client";

import Image from "next/image";
import { Section } from "./ui/Section";
import { skills } from "@/lib/data";
import { Card } from "./ui/Card";
import * as Icons from "react-icons/si";

export default function About() {
  return (
    <Section id="about" title="About" subtitle="Who I Am">
      <div className="grid gap-8 md:grid-cols-3 items-start">
        <Card className="md:col-span-1 flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden">
            <Image src="/profile.jpg" alt="Kasun Jayasinghe" fill sizes="80px" className="object-cover" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Kasun Jayasinghe</h3>
            <p className="text-sm text-[var(--muted)]">Full Stack Developer — React | Next.js</p>
          </div>
        </Card>
        <Card className="md:col-span-2">
          <p className="text-[var(--muted)]">
            Results-oriented Full Stack Developer with nearly 2 years of professional experience. Specialized in backend
            development with Spring Boot and frontend development with Angular and React. Proficient in building
            microservices, securing applications (OAuth2, JWT, Keycloak), and deploying scalable solutions with Docker and
            CI/CD. Strong team player with leadership experience and a proven track record of delivering high-quality
            software solutions.
          </p>
          <div className="mt-4">
            <a href="/Kasun_Jayasinghe_CV.pdf" target="_blank" className="inline-block">
              <span className="inline-flex items-center justify-center rounded-xl border border-[var(--card-border)] px-4 py-2 hover:bg-white/5">
                Download CV
              </span>
            </a>
          </div>
        </Card>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {skills.map((s, i) => {
          const Icon = (Icons as any)[s.icon] ?? Icons.SiReact;
          return (
            <Card key={s.label} delay={i * 0.03} className="flex items-center gap-3">
              <Icon className="text-[var(--accent)]" />
              <span>{s.label}</span>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}


