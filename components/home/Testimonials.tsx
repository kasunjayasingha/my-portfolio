import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <Section id="testimonials" title="What Our Clients Say" subtitle="Trusted by startups and enterprises">
      <div className="grid gap-6 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <Card key={t.author} delay={i * 0.05}>
            <p className="text-sm">“{t.quote}”</p>
            <div className="mt-3 text-sm text-[var(--muted)]">{t.author} — {t.role}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}


