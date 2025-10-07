"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: string;
}>;

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Section({
  id,
  className,
  containerClassName,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cx("section", className)}>
      <div className={cx("mx-auto w-full max-w-6xl px-5", containerClassName)}>
        {(title || subtitle) && (
          <div className="mb-8">
            {subtitle && (
              <p className="text-xs tracking-[0.2em] text-[var(--muted)] uppercase">
                {subtitle}
              </p>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold"
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}


