/** Layout-only wrappers. GlobalTextMotion owns text entrance animation. */

export function RevealGroup({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "ol";
}) {
  return <Tag className={className}>{children}</Tag>;
}

export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "figure";
  standalone?: boolean;
}) {
  return <Tag className={className}>{children}</Tag>;
}
