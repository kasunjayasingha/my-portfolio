"use client";

import { Section } from "./ui/Section";
import { skills } from "@/lib/data";
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
        
        <div className="grid gap-8 lg:grid-cols-2 items-stretch mb-12">
          <div className="card p-6 flex flex-col">
            <div className="font-mono text-sm flex-1">
              <div className="text-[var(--foreground)]">&#123;</div>
              <div className="ml-4">
                <div><span className="text-[var(--accent)]">"name"</span>: <span className="text-[var(--muted)]">"Kasun Jayasinghe"</span>,</div>
                <div><span className="text-[var(--accent)]">"role"</span>: <span className="text-[var(--muted)]">"Full Stack Developer"</span>,</div>
                <div><span className="text-[var(--accent)]">"experience"</span>: <span className="text-orange-500">2</span>,</div>
                <div><span className="text-[var(--accent)]">"location"</span>: <span className="text-[var(--muted)]">"Galle, Sri Lanka"</span>,</div>
                <div><span className="text-[var(--accent)]">"specialization"</span>: [</div>
                <div className="ml-4">
                  <div><span className="text-[var(--muted)]">"Backend: Java/Spring Boot"</span>,</div>
                  <div><span className="text-[var(--muted)]">"Frontend: React/Angular"</span>,</div>
                  <div><span className="text-[var(--muted)]">"DevOps: Docker/CI-CD"</span></div>
                </div>
                <div>],</div>
                <div><span className="text-[var(--accent)]">"passion"</span>: <span className="text-[var(--muted)]">"Building scalable solutions"</span></div>
              </div>
              <div className="text-[var(--foreground)]">&#125;</div>
            </div>
            
            <div className="mt-6">
              <a 
                href="/Kasun_Jayasinghe_CV.pdf" 
                target="_blank" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
          
          <div className="card p-6 flex flex-col">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--accent)]">2+</div>
                <div className="text-sm text-[var(--muted)]">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--accent)]">10+</div>
                <div className="text-sm text-[var(--muted)]">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--accent)]">5+</div>
                <div className="text-sm text-[var(--muted)]">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--accent)]">100%</div>
                <div className="text-sm text-[var(--muted)]">Success Rate</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[var(--section-bg)] rounded-lg">
              <div className="text-sm text-[var(--muted)] mb-2">Currently Learning:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded text-xs">Microservices</span>
                <span className="px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded text-xs">Cloud Architecture</span>
                <span className="px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded text-xs">System Design</span>
              </div>
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
