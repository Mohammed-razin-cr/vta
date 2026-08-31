import { cn } from "@/lib/utils";
import { Reveal, RevealGroup } from "./Reveal";

type SectionHeaderProps = {
  /** Two-digit section index, e.g. "02". */
  index?: string;
  kicker: string;
  title: React.ReactNode;
  lede?: string;
  /** "left" stacks everything left; "split" puts lede on the right column at lg. */
  align?: "left" | "split";
  dark?: boolean;
  className?: string;
};

/**
 * The one section-header pattern used across the page:
 * mono index + kicker, then display title, optional lede.
 */
export function SectionHeader({
  index,
  kicker,
  title,
  lede,
  align = "left",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <RevealGroup className={cn("mb-10 sm:mb-12 md:mb-16", className)}>
      <Reveal>
        <div className="flex items-center gap-3">
          {index && (
            <span className={cn("spec-label", dark ? "text-ember-warm" : "text-ember")}>
              {index}
            </span>
          )}
          <span className={cn("spec-label", dark ? "text-paper/70" : "text-smoke")}>{kicker}</span>
        </div>
      </Reveal>

      <div
        className={cn(
          align === "split" && "lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16",
        )}
      >
        <Reveal>
          <h2
            className={[
              "mt-5 max-w-3xl text-balance font-display text-display-lg",
              dark ? "text-paper" : "text-ink",
            ].join(" ")}
          >
            {title}
          </h2>
        </Reveal>
        {lede && (
          <Reveal>
            <p
              className={[
                "mt-5 max-w-xl text-lg leading-relaxed",
                dark ? "text-paper/70" : "text-smoke",
                align === "split" ? "lg:mt-0" : "",
              ].join(" ")}
            >
              {lede}
            </p>
          </Reveal>
        )}
      </div>
    </RevealGroup>
  );
}
