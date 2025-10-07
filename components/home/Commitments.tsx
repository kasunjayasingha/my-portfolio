import { commitments } from "@/lib/data";

export default function Commitments() {
  return (
    <div className="section-sm glass mx-5 rounded-2xl">
      <div className="mx-auto max-w-6xl px-5 grid gap-3 sm:grid-cols-3 text-sm">
        {commitments.map((c) => (
          <div key={c.title} className="flex items-center gap-2">
            <span className="text-[var(--accent)]">✓</span>
            {c.title}
          </div>
        ))}
      </div>
    </div>
  );
}


