"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "@/hooks/useTheme";

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
        "fixed top-0 inset-x-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm",
        scrolled && "border-b border-[var(--card-border)] shadow-sm"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="#home" className="font-bold text-xl text-[var(--foreground)]">
          Kasun Jayasinghe
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#about", label: "About" },
            { href: "#projects", label: "Work" },
            { href: "#experience", label: "Experience" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-[var(--card)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <HiMoon className="w-4 h-4" /> : <HiSun className="w-4 h-4" />}
          </button>
          <Link 
            href="https://github.com/kasunjayasingha" 
            target="_blank" 
            aria-label="GitHub" 
            className="p-2 rounded-lg hover:bg-[var(--card)] transition-colors"
          >
            <FaGithub className="w-4 h-4" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/kasun-jayasinghe-7800271bb/" 
            target="_blank" 
            aria-label="LinkedIn" 
            className="p-2 rounded-lg hover:bg-[var(--card)] transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
          </Link>
          <Link href="#contact" className="hidden sm:block">
            <Button size="sm">Get in touch</Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
