"use client";

import Image from "next/image";
import { Section } from "./ui/Section";
import { skills } from "@/lib/data";
import { Card } from "./ui/Card";
import * as Icons from "react-icons/si";

export default function About() {
  return (
    <Section id="about" className="section-alt">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">About Me</h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          <div>
            <p className="text-[var(--muted)] mb-6 leading-relaxed">
              I'm a results-oriented Full Stack Developer with nearly 2 years of professional experience. 
              I specialize in backend development with Spring Boot and frontend development with Angular and React.
            </p>
            <p className="text-[var(--muted)] mb-6 leading-relaxed">
              My expertise includes building microservices, securing applications with OAuth2, JWT, and Keycloak, 
              and deploying scalable solutions with Docker and CI/CD pipelines.
            </p>
            <a href="/Kasun_Jayasinghe_CV.pdf" target="_blank" className="inline-block">
              <span className="card px-6 py-3 hover-lift cursor-pointer">
                Download CV
              </span>
            </a>
          </div>
          <div className="relative w-full max-w-sm mx-auto">
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image 
                src="/profile.jpg" 
                alt="Kasun Jayasinghe" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[var(--foreground)] mb-6 text-center">Technologies I Work With</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {skills.map((s, i) => {
              const Icon = (Icons as any)[s.icon] ?? Icons.SiReact;
              return (
                <div key={s.label} className="card p-4 text-center hover-lift">
                  <Icon className="text-[var(--accent)] text-2xl mx-auto mb-2" />
                  <span className="text-sm font-medium">{s.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
