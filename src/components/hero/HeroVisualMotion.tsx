import { cn } from "@/lib/utils";

/** Static media frame. The video supplies its own internal mechanical motion. */
export function HeroVisualMotion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div data-hero-visual className={cn(className)}>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
