import type { ReactNode } from "react";

import type { NavItem } from "~/lib/nav-types";

import { NavItemsList } from "./nav-items-list";

export function Sidebar({
  items,
  children,
}: {
  items: NavItem[];
  children: ReactNode;
}) {
  return (
    <div className="container layout">
      <aside className="sidebar">
        <NavItemsList items={items} />
      </aside>
      <section className="content">{children}</section>
    </div>
  );
}
