import { Link } from "react-router";

import { tagBadgeClassFor } from "~/lib/tag-badge-class";

type TagBadgeProps = {
  slug: string;
  label?: string;
  size?: "md" | "lg";
  to?: string;
};

export function TagBadge({ slug, label, size = "md", to }: TagBadgeProps) {
  const text = label ?? slug;
  const cls = ["tag-badge", tagBadgeClassFor(slug), size === "lg" ? "tag-badge--lg" : ""]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link className={cls} to={to}>
        {text}
      </Link>
    );
  }

  return <span className={cls}>{text}</span>;
}
