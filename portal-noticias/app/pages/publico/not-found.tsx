import { Link } from "react-router";

import { PortalShell } from "~/components/layout/portal-shell";
import { paths } from "~/lib/paths";

export default function NotFoundPage() {
  return (
    <PortalShell>
      <div className="container panel">
        <h1>404</h1>
        <p className="note">A pagina solicitada nao foi encontrada.</p>
        <div className="actions">
          <Link className="button" to={paths.home}>
            Voltar ao inicio
          </Link>
        </div>
      </div>
    </PortalShell>
  );
}
