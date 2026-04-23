import { Link } from "react-router";

import { mainNav } from "~/lib/main-nav";
import { paths } from "~/lib/paths";

import { NavItemsList } from "./nav-items-list";

export function Header() {
  return (
    <header className="site-header">
      <div className="container topbar">
        <Link className="brand" to={paths.home}>
          Portal <span>Fake News</span>
        </Link>
        <nav className="nav">
          <NavItemsList items={mainNav} />
        </nav>
      </div>
    </header>
  );
}
