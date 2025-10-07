import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <Section id="achievements" title="Key Achievements" subtitle="Proven track record">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a, i) => (
          <Card key={a.title} delay={i * 0.05}>
            <h3 className="font-semibold">{a.title}</h3>
            <p className="text-sm text-[var(--muted)] mt-1">{a.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}


