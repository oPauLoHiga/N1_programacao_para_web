import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { SectionTitle } from "~/components/ui/SectionTitle";
import { StatsGrid } from "~/components/ui/StatsGrid";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function DashboardPage() {
  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <SectionTitle note="Atalhos para cadastros administrativos." title="Dashboard admin" />

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
            <h3>UFs</h3>
            <p className="note">Listagem e formularios.</p>
          </Link>
          <Link className="panel panel-link" to={paths.adminCidades}>
            <h3>Cidades</h3>
            <p className="note">Vinculo cidade e UF.</p>
          </Link>
          <Link className="panel panel-link" to={paths.adminTags}>
            <h3>Tags</h3>
            <p className="note">Categorias.</p>
          </Link>
          <Link className="panel panel-link" to={paths.adminPerfis}>
            <h3>Perfis</h3>
            <p className="note">Papeis de acesso.</p>
          </Link>
          <Link className="panel panel-link" to={paths.adminNoticias}>
            <h3>Noticias</h3>
            <p className="note">Gestao global.</p>
          </Link>
          <Link className="panel panel-link" to={paths.adminUsuarios}>
            <h3>Usuarios</h3>
            <p className="note">Contas.</p>
          </Link>
          <Link className="panel panel-link" to={paths.adminComentarios}>
            <h3>Comentarios</h3>
            <p className="note">Moderacao.</p>
          </Link>
        </div>
      </Sidebar>
    </MainLayout>
  );
}
