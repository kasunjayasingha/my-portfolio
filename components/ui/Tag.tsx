import { PropsWithChildren } from "react";

type TagProps = PropsWithChildren<{ className?: string }>;

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Tag({ className, children }: TagProps) {
  return (
    <span className={cx("text-xs px-2 py-1 rounded-full border border-[var(--card-border)] bg-white/5", className)}>
      {children}
    </span>
  );
}


