import Link from "next/link";

interface ExploreButtonProps {
  href: string;
  label?: string;
}

export function ExploreButton({ href, label = "Explore Platform" }: ExploreButtonProps) {
  return (
    <Link href={href} className="explore-button" aria-label={label}>
      <span className="explore-button__edge" aria-hidden="true">
        <span className="explore-button__face">
          <span className="explore-button__content">
            <span>{label}</span>
          </span>
        </span>
      </span>
    </Link>
  );
}
