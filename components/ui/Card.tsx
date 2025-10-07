"use client";

import { motion, Variants } from "framer-motion";
import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
};

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Card({ className, children, delay = 0 }: CardProps) {
  return (
    <motion.div
      className={cx("glass rounded-2xl p-6", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      custom={delay}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}


