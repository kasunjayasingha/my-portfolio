import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { projects } from "@/lib/data";
import Link from "next/link";
import { Button } from "../ui/Button";

export default function Featured() {
  const featured = projects.slice(0, 3);
  return (
    <Section id="featured" title="Featured Work" subtitle="Selected case studies">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Card key={p.title} delay={i * 0.05} className="flex flex-col min-h-56">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{p.description}</p>
            </div>
            <div className="mt-4 flex gap-2">
              {p.liveUrl && (
                <Link href={p.liveUrl} target="_blank">
                  <Button size="sm">View</Button>
                </Link>
              )}
              {p.repoUrl && (
                <Link href={p.repoUrl} target="_blank">
                  <Button size="sm" variant="ghost">GitHub</Button>
                </Link>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}


