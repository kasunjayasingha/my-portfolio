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
          <a href="mailto:kasunharitha55@gmail.com" className="flex items-center gap-3 p-4 glass rounded-2xl">
            <FaEnvelope className="text-[var(--accent)]" />
            kasunharitha55@gmail.com
          </a>
          <a href="tel:+94766988963" className="flex items-center gap-3 p-4 glass rounded-2xl">
            <span className="text-[var(--accent)]">📞</span>
            +94 766988963
          </a>
          <a href="https://github.com/kasunjayasingha" target="_blank" className="flex items-center gap-3 p-4 glass rounded-2xl">
            <FaGithub className="text-[var(--accent)]" />
            github.com/kasunjayasingha
          </a>
          <a href="https://www.linkedin.com/in/kasun-jayasinghe-7800271bb/" target="_blank" className="flex items-center gap-3 p-4 glass rounded-2xl">
            <FaLinkedin className="text-[var(--accent)]" />
            linkedin.com/kasun-jayasinghe
          </a>
        </div>
      </div>
    </Section>
  );
}


