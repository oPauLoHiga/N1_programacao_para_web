import type { StatsItem } from "~/lib/nav-types";

export function StatsGrid({ items }: { items: StatsItem[] }) {
  return (
    <div className="stats">
      {items.map((item) => (
        <div className="stat" key={item.label}>
          <span className="note">{item.label}</span>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}
