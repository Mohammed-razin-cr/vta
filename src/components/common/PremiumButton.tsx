import type { CSSProperties, MouseEventHandler } from "react";
import Link from "next/link";
import { LogIn } from "lucide-react";

interface PremiumButtonProps {
  label: string;
  href?: string;
  compact?: boolean;
  icon?: "arrow" | "login";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ariaExpanded?: boolean;
  ariaControls?: string;
}

export function PremiumButton({
  label,
  href,
  compact = false,
  icon = "arrow",
  className = "",
  onClick,
  ariaExpanded,
  ariaControls,
}: PremiumButtonProps) {
  const content = (
    <>
      <span className="vta-button__outline" aria-hidden="true" />
      <span className="vta-button__state" aria-hidden="true">
        {icon === "login" && (
          <span className="vta-button__icon">
            <LogIn size={compact ? 16 : 19} strokeWidth={2.2} />
          </span>
        )}
        <span className="vta-button__letters">
          {Array.from(label).map((letter, index) => (
            <span key={`${letter}-${index}`} style={{ "--i": index } as CSSProperties}>
              {letter === " " ? "\u00a0" : letter}
            </span>
          ))}
        </span>
      </span>
    </>
  );

  const classes = `vta-button ${compact ? "vta-button--compact" : ""} ${className}`;

  if (!href) {
    return (
      <button
        type="button"
        className={classes}
        aria-label={label}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        aria-haspopup="menu"
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      aria-label={label}
    >
      {content}
    </Link>
  );
}
