import { useNavigate } from "react-router";

import { paths } from "~/lib/paths";

export function DevQuickAccess() {
  const navigate = useNavigate();

  return (
    <section className="dev-quick">
      <h2 className="dev-quick__title">Acesso Rápido (Desenvolvimento)</h2>
      <div className="dev-quick__grid">
        <button
          className="dev-quick__btn"
          type="button"
          onClick={() => navigate(paths.leitorPerfil)}
        >
          LEITOR
        </button>
        <button
          className="dev-quick__btn"
          type="button"
          onClick={() => navigate(paths.autorNoticias)}
        >
          AUTOR
        </button>
        <button
          className="dev-quick__btn"
          type="button"
          onClick={() => navigate(paths.editorPainel)}
        >
          EDITOR
        </button>
        <button
          className="dev-quick__btn"
          type="button"
          onClick={() => navigate(paths.adminDashboard)}
        >
          SUPERADMIN
        </button>
      </div>
    </section>
  );
}
