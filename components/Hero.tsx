"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section id="home" className="section bg-grid-radial">
      <div className="mx-auto max-w-6xl px-5 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] text-[var(--muted)] uppercase"
          >
            Full Stack Developer — Galle, Sri Lanka
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mt-3"
          >
            Hi, I'm <span className="text-[var(--accent)]">Kasun Jayasinghe</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-[var(--muted)] max-w-prose"
          >
            Results-oriented Full Stack Developer with nearly 2 years of experience. Specializing in
            backend with Java/Spring Boot and frontend with React & Angular. I build secure microservices
            and scalable UIs, with CI/CD, Docker, and robust testing.
          </motion.p>

          <div className="mt-8 flex items-center gap-3">
            <a href="#projects">
              <Button size="lg">View My Work</Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="ghost">Contact Me</Button>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-square md:aspect-[4/3] w-full"
        >
          <div className="absolute inset-0 rounded-3xl glass border border-[var(--card-border)]" />
          <div className="absolute inset-0 rounded-3xl" style={{
            background:
              "radial-gradient(120px 120px at 20% 30%, rgba(0,229,255,0.25), transparent), radial-gradient(200px 200px at 80% 60%, rgba(102,240,255,0.18), transparent)",
            filter: "blur(0.5px)",
          }} />
        </motion.div>
      </div>
    </section>
  );
}


