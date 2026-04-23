import { Link } from "react-router";

import { paths } from "~/lib/paths";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-legal">
        <p className="footer-copy">
          © {year} Portal Fake News. Projeto academico — dados estaticos.
        </p>
        <div className="footer-links">
          <Link to={paths.sobre}>Sobre</Link>
          <Link to={paths.contato}>Contato</Link>
          <Link to={paths.termos}>Termos</Link>
        </div>
      </div>
    </footer>
  );
}
