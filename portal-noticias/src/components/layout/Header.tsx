import { useState } from "react";
import { Link, NavLink } from "react-router";

import { paths } from "~/lib/paths";

const extraLinks = [
  { label: "Leitor", to: paths.leitorPerfil },
  { label: "Autor", to: paths.autorNoticias },
  { label: "Editor", to: paths.editorPainel },
  { label: "Admin", to: paths.adminDashboard },
  { label: "Busca DF", to: paths.buscaUf("DF") },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container topbar">
        <Link className="brand" to={paths.home} onClick={() => setOpen(false)}>
          Portal <span>Fake News</span>
        </Link>

        <button
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="nav-toggle"
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav nav--primary ${open ? "nav--open" : ""}`}>
          <NavLink className={navClass} end to={paths.home}>
            Home
          </NavLink>
          <NavLink className={navClass} end to={paths.login}>
            Login
          </NavLink>
          <NavLink className={navClass} end to={paths.cadastro}>
            Cadastro
          </NavLink>
          <div className="nav__extra">
            {extraLinks.map((l) => (
              <NavLink
                key={l.to}
                className={navClass}
                end={l.to === paths.leitorPerfil}
                to={l.to}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? "active" : undefined;
}
