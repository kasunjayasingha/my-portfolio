"use client";

import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { projects } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/Button";
import { useLikes } from "@/hooks/useLikes";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Projects() {
  const { ready, isLiked, toggleLike } = useLikes();
  return (
    <Section id="projects" title="Projects" subtitle="Selected Work">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Card key={p.title} delay={i * 0.05} className="flex flex-col min-h-56">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-full border border-[var(--card-border)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 justify-between">
              <div className="flex gap-2">
              {p.liveUrl && (
                <Link href={p.liveUrl} target="_blank">
                  <Button size="sm">Live</Button>
                </Link>
              )}
              {p.repoUrl && (
                <Link href={p.repoUrl} target="_blank">
                  <Button size="sm" variant="ghost">GitHub</Button>
                </Link>
              )}
              </div>
              <motion.button
                type="button"
                aria-label="Like project"
                className="neon-ring rounded-full p-2 border border-[var(--card-border)] hover:bg-white/5"
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleLike(p.title)}
                disabled={!ready}
              >
                <FaHeart className={isLiked(p.title) ? "text-[var(--accent)]" : "text-[var(--muted)]"} />
              </motion.button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}


