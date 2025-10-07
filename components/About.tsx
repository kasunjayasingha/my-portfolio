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
            <Image src="/next.svg" alt="Avatar" fill sizes="80px" className="object-contain p-3" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Your Name</h3>
            <p className="text-sm text-[var(--muted)]">Frontend Engineer</p>
          </div>
        </Card>
        <Card className="md:col-span-2">
          <p className="text-[var(--muted)]">
            I build sleek, accessible interfaces with a focus on performance and motion. I love
            turning complex ideas into simple, elegant experiences.
          </p>
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


