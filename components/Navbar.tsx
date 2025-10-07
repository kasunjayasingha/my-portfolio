"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cx(
        "fixed top-0 inset-x-0 z-50",
        scrolled && "backdrop-blur-md border-b border-[var(--card-border)] bg-black/20"
      )}
    >
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link href="#home" className="font-[var(--font-display)] text-lg">
          <span className="text-[var(--accent)]">&lt;/&gt;</span> Kasun Jayasinghe
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          {[
            { href: "#about", label: "About" },
            // { href: "#impact", label: "Impact" },
            // { href: "#featured", label: "Featured" },
            // { href: "#products", label: "Products" },
            // { href: "#services", label: "Services" },
            { href: "#projects", label: "Projects" },
            { href: "#experience", label: "Experience" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link href="https://github.com/kasunjayasingha" target="_blank" aria-label="GitHub" className="p-2 rounded-full hover:bg-white/5">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/kasun-jayasinghe-7800271bb/" target="_blank" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-white/5">
            <FaLinkedin />
          </Link>
          <Link href="#contact" className="hidden sm:block">
            <Button size="sm" variant="ghost">Contact</Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}


