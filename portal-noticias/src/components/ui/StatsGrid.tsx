import type { StatsItem } from "~/lib/nav-types";

export function StatsGrid({
  items,
  className = "",
}: {
  items: StatsItem[];
  className?: string;
}) {
  return (
    <div className={["stats", className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <div className="stat" key={item.label}>
          <span className="note">{item.label}</span>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}
