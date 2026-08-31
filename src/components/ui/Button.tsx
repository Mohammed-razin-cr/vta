import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  /** Invert secondary/ghost colors for dark surfaces. */
  dark?: boolean;
  withArrow?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  dark = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const base = cn(
    "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-btn font-semibold",
    "transition-colors duration-200 ease-expo-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2",
    dark ? "focus-visible:ring-offset-ink" : "focus-visible:ring-offset-paper",
    size === "lg" ? "h-[52px] px-7 text-base" : "h-11 px-5 text-[15px]",
  );

  const variants = {
    primary: "bg-ember text-white hover:bg-ember-deep",
    secondary: dark
      ? "border border-line-dark-strong text-paper hover:border-paper hover:bg-paper hover:text-ink"
      : "border border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-paper",
    ghost: dark
      ? "text-paper hover:text-ember-warm px-2"
      : "text-ink hover:text-ember px-2",
  } as const;

  const content = <span>{children}</span>;

  const classes = cn(base, variants[variant], className);

  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
