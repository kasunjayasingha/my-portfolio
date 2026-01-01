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
    <section id={id} className={cx("py-16", className)}>
      <div className={cx("mx-auto w-full max-w-6xl px-6", containerClassName)}>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && (
              <p className="text-sm font-medium text-[var(--accent)] mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-[var(--foreground)]"
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
