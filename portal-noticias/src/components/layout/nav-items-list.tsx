import { NavLink } from "react-router";

import type { NavItem } from "~/lib/nav-types";

function NavItemLink({ item }: { item: NavItem }) {
  if (item.to.startsWith("#")) {
    return (
      <a className={item.current ? "active" : undefined} href={item.to}>
        {item.label}
      </a>
    );
  }

  return (
    <NavLink
      className={({ isActive }) => (isActive ? "active" : undefined)}
      end={item.end}
      to={item.to}
    >
      {item.label}
    </NavLink>
  );
}

export function NavItemsList({ items }: { items: NavItem[] }) {
  return items.map((item) => <NavItemLink key={item.label} item={item} />);
}
