import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { reasons } from "@/lib/data";

export default function Reasons() {
  return (
    <Section id="reasons" title="Why Choose Me?" subtitle="Consistently high-impact results">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <Card key={r.title} delay={i * 0.05}>
            <h3 className="font-semibold">{r.title}</h3>
            <p className="text-sm text-[var(--muted)] mt-1">{r.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}


