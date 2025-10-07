"use client";

import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Demo only: simulate send
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  return (
    <Section id="contact" title="Contact" subtitle="Let's Connect">
      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="glass rounded-2xl p-6">
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm">
              <span>Name</span>
              <input
                required
                name="name"
                className="rounded-xl bg-transparent border border-[var(--card-border)] px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span>Email</span>
              <input
                required
                type="email"
                name="email"
                className="rounded-xl bg-transparent border border-[var(--card-border)] px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span>Message</span>
              <textarea
                required
                name="message"
                rows={5}
                className="rounded-xl bg-transparent border border-[var(--card-border)] px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder="Tell me about your project..."
              />
            </label>
            <div>
              <Button disabled={status !== "idle"}>
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent" : "Send Message"}
              </Button>
            </div>
          </div>
        </form>

        <div className="grid gap-4 content-start">
          <a href="mailto:you@example.com" className="flex items-center gap-3 p-4 glass rounded-2xl">
            <FaEnvelope className="text-[var(--accent)]" />
            you@example.com
          </a>
          <a href="https://github.com/your" target="_blank" className="flex items-center gap-3 p-4 glass rounded-2xl">
            <FaGithub className="text-[var(--accent)]" />
            github.com/your
          </a>
          <a href="https://linkedin.com/in/your" target="_blank" className="flex items-center gap-3 p-4 glass rounded-2xl">
            <FaLinkedin className="text-[var(--accent)]" />
            linkedin.com/in/your
          </a>
        </div>
      </div>
    </Section>
  );
}


