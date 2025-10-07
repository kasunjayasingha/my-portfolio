import { Button } from "../ui/Button";

export default function CTA() {
  return (
    <section className="section text-center">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold">
          Ready to Build Something <span className="text-[var(--accent)]">Extraordinary</span>?
        </h2>
        <p className="text-[var(--muted)] mt-3">
          Let's collaborate to transform your vision into a polished, performant experience.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#contact"><Button size="lg">Start Your Project</Button></a>
          <a href="#projects"><Button size="lg" variant="ghost">View Portfolio</Button></a>
        </div>
      </div>
    </section>
  );
}


