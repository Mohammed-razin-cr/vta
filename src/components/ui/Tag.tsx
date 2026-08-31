import { cn } from "@/lib/utils";

/** Tiny mono tag chip for technologies, capabilities, meta. */
export function Tag({
  children,
  dark = false,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs border px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em]",
        dark ? "border-line-dark text-paper/70" : "border-line text-smoke",
        className,
      )}
    >
      {children}
    </span>
  );
}
