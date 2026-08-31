import type { CSSProperties, MouseEventHandler } from "react";
import { Check, Send } from "lucide-react";

interface LoginButtonProps {
  expanded: boolean;
  controls: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function AnimatedLetters({ label }: { label: string }) {
  return (
    <span className="login-button__letters" aria-hidden="true">
      {Array.from(label).map((letter, index) => (
        <span key={`${letter}-${index}`} style={{ "--i": index } as CSSProperties}>
          {letter === " " ? "\u00a0" : letter}
        </span>
      ))}
    </span>
  );
}

export function LoginButton({ expanded, controls, onClick }: LoginButtonProps) {
  return (
    <button
      type="button"
      className="login-button"
      aria-label={expanded ? "Close login menu" : "Open login menu"}
      aria-expanded={expanded}
      aria-controls={controls}
      aria-haspopup="menu"
      onClick={onClick}
    >
      <span className="login-button__outline" aria-hidden="true" />

      <span className="login-button__state login-button__state--default" aria-hidden="true">
        <span className="login-button__icon"><Send /></span>
        <AnimatedLetters label="Login" />
      </span>

      <span className="login-button__state login-button__state--open" aria-hidden="true">
        <span className="login-button__icon"><Check /></span>
        <AnimatedLetters label="Choose" />
      </span>
    </button>
  );
}
