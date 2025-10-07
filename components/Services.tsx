"use client";

import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { services } from "@/lib/data";
import { useLikes } from "@/hooks/useLikes";
import { motion } from "framer-motion";
import { FaHeart, FaCheck } from "react-icons/fa";

export default function Services() {
  const { ready, isLiked, toggleLike } = useLikes();
  return (
    <Section id="services" title="Services" subtitle="What I Offer">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Card key={s.title} delay={i * 0.05} className="flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{s.blurb}</p>
              </div>
              <motion.button
                type="button"
                aria-label="Like service"
                className="neon-ring rounded-full p-2 border border-[var(--card-border)] hover:bg-white/5"
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleLike(s.title)}
                disabled={!ready}
              >
                <FaHeart className={isLiked(s.title) ? "text-[var(--accent)]" : "text-[var(--muted)]"} />
              </motion.button>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <FaCheck className="text-[var(--accent)]" />
                  {f}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}


