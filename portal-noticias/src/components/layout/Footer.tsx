import { Link } from "react-router";

import { paths } from "~/lib/paths";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>Portal Fake News</strong>
          <p className="note">Projeto academico em React Router v7 (dados mock em src/data).</p>
        </div>
        <div>
          <strong>Paginas</strong>
          <p>
            <Link to={paths.buscaTag("cidade")}>Busca por tag</Link>
          </p>
          <p>
            <Link to={paths.login}>Login</Link>
          </p>
          <p>
            <Link to={paths.cadastro}>Cadastro</Link>
          </p>
        </div>
        <div>
          <strong>Areas</strong>
          <p>
            <Link to={paths.leitorPerfil}>Leitor</Link>
          </p>
          <p>
            <Link to={paths.autorNoticias}>Autor</Link>
          </p>
          <p>
            <Link to={paths.editorPainel}>Editor</Link>
          </p>
          <p>
            <Link to={paths.adminDashboard}>Admin</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
