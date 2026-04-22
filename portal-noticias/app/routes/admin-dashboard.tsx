import { Link } from "react-router";

import { PortalShell, SectionTitle, SidebarLayout, StatsGrid } from "../components/portal-shell";
import { paths } from "../lib/paths";

const adminSidebar = [
  { label: "Dashboard", to: paths.adminDashboard, end: true },
  { label: "UFs", to: paths.adminUfs, end: true },
  { label: "Cidades", to: paths.adminCities, end: true },
  { label: "Tags", to: paths.adminTags, end: true },
];

export default function AdminDashboard() {
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
