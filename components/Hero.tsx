"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-[var(--accent)] mb-4"
            >
              Full Stack Developer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--foreground)] mb-6"
            >
              Building digital experiences that matter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-[var(--muted)] mb-8 max-w-xl"
            >
              I'm Kasun Jayasinghe, a results-oriented Full Stack Developer with nearly 2 years of experience. 
              I specialize in backend development with Java/Spring Boot and frontend with React & Angular.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#projects">
                <Button size="lg">View My Work</Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="ghost">Get in Touch</Button>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square w-full max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent rounded-2xl" />
              <Image
                src="/profile.jpg"
                alt="Kasun Jayasinghe"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
