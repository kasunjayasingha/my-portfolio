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
    const base = "rounded-lg font-medium focus:outline-none transition-all duration-200";
    const sizes = {
      sm: "text-sm px-4 py-2",
      md: "text-sm px-6 py-3",
      lg: "text-base px-8 py-3",
    } as const;
    const variants = {
      primary:
        "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-sm hover:shadow-md",
      ghost:
        "bg-transparent text-[var(--foreground)] border border-[var(--card-border)] hover:bg-gray-50",
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
