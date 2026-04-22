import type { ReactNode } from "react";
import { Link, NavLink } from "react-router";

import { paths } from "../lib/paths";

type NavItem = {
  label: string;
  to: string;
  end?: boolean;
  current?: boolean;
};

type StatsItem = {
  label: string;
  value: number | string;
};

const mainNav: NavItem[] = [
  { label: "Inicio", to: paths.home, end: true },
  { label: "Noticias", to: paths.news },
  { label: "Login", to: paths.login, end: true },
  { label: "Cadastro", to: paths.register, end: true },
  { label: "Leitor", to: paths.readerFeed },
  { label: "Autor", to: paths.authorNews },
  { label: "Superadmin", to: paths.adminDashboard },
];

function renderItem(item: NavItem) {
  if (item.to.startsWith("#")) {
    return (
      <a key={item.label} className={item.current ? "active" : undefined} href={item.to}>
        {item.label}
      </a>
    );
  }

  return (
    <NavLink
      key={item.label}
      className={({ isActive }) => (isActive ? "active" : undefined)}
      end={item.end}
      to={item.to}
    >
      {item.label}
    </NavLink>
  );
}

export function PortalShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="site-header">
        <div className="container topbar">
          <Link className="brand" to={paths.home}>
            Portal <span>Fake News</span>
          </Link>
          <nav className="nav">{mainNav.map(renderItem)}</nav>
        </div>
      </header>

      <main className="page">{children}</main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <strong>Portal Fake News</strong>
            <p className="note">Projeto academico em React Router.</p>
          </div>
          <div>
            <strong>Paginas</strong>
            <p>
              <Link to={paths.news}>Noticias</Link>
            </p>
            <p>
              <Link to={paths.login}>Login</Link>
            </p>
            <p>
              <Link to={paths.register}>Cadastro</Link>
            </p>
          </div>
          <div>
            <strong>Areas</strong>
            <p>
              <Link to={paths.readerFeed}>Leitor</Link>
            </p>
            <p>
              <Link to={paths.authorNews}>Autor</Link>
            </p>
            <p>
              <Link to={paths.adminDashboard}>Superadmin</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export function SidebarLayout({
  children,
  items,
}: {
  children: ReactNode;
  items: NavItem[];
}) {
  return (
    <div className="container layout">
      <aside className="sidebar">{items.map(renderItem)}</aside>
      <section className="content">{children}</section>
    </div>
  );
}

export function SectionTitle({
  title,
  note,
  level = "h1",
}: {
  title: string;
  note: string;
  level?: "h1" | "h2";
}) {
  const Heading = level;

  return (
    <div className="section-title">
      <Heading>{title}</Heading>
      <p className="note">{note}</p>
    </div>
  );
}

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
