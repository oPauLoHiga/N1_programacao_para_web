import { Link } from "react-router";

import { PortalShell } from "~/components/layout/portal-shell";
import { SectionTitle } from "~/components/layout/section-title";
import { SidebarLayout } from "~/components/layout/sidebar-layout";
import { StatsGrid } from "~/components/layout/stats-grid";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function AdminDashboardPage() {
  return (
    <PortalShell>
      <SidebarLayout items={adminSidebar}>
        <SectionTitle
          note="Visao geral com atalhos para os cadastros principais."
          title="Dashboard do superadmin"
        />

        <StatsGrid
          items={[
            { label: "UFs", value: 27 },
            { label: "Cidades", value: 30 },
            { label: "Tags", value: 10 },
            { label: "Noticias", value: 30 },
          ]}
        />

        <div className="grid grid-3">
          <Link className="panel panel-link" to={paths.adminUfs}>
            <h3>CRUD de UFs</h3>
            <p className="note">Cadastro basico de estados.</p>
          </Link>
          <Link className="panel panel-link" to={paths.adminCities}>
            <h3>CRUD de cidades</h3>
            <p className="note">Vinculo entre cidade e UF.</p>
          </Link>
          <Link className="panel panel-link" to={paths.adminTags}>
            <h3>CRUD de tags</h3>
            <p className="note">Categorias para as noticias.</p>
          </Link>
        </div>
      </SidebarLayout>
    </PortalShell>
  );
}
