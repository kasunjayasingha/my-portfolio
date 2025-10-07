import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { products } from "@/lib/data";

export default function Products() {
  return (
    <Section id="products" title="Popular Products" subtitle="Curated tools and templates">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Card key={p.title} delay={i * 0.05} className="flex flex-col">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">{p.blurb}</p>
            <ul className="mt-3 text-sm text-[var(--muted)] list-disc list-inside">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3">
              {p.price && <span className="text-sm">{p.price}</span>}
              {p.cta && <Button size="sm">{p.cta}</Button>}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}


