import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-sm border-t border-[var(--card-border)]">
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--muted)]">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#home" className="hover:text-[var(--foreground)]">Home</Link>
          <Link href="#projects" className="hover:text-[var(--foreground)]">Projects</Link>
          <Link href="#contact" className="hover:text-[var(--foreground)]">Contact</Link>
        </div>
      </div>
    </footer>
  );
}


