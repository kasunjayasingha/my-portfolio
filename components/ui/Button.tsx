"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
};

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const base = "neon-ring rounded-full font-medium focus:outline-none";
    const sizes = {
      sm: "text-sm px-4 h-9",
      md: "text-sm sm:text-base px-6 h-11",
      lg: "text-base px-7 h-12",
    } as const;
    const variants = {
      primary:
        "bg-[var(--accent)] text-black hover:opacity-95 active:opacity-90",
      ghost:
        "bg-transparent text-[var(--foreground)] border border-[var(--card-border)] hover:bg-white/5",
    } as const;

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={cx(base, sizes[size], variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";


