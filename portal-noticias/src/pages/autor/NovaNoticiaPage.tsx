import { useNavigate } from "react-router";

import { AutorNoticiaForm } from "~/components/autor/AutorNoticiaForm";
import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { StatusBadge } from "~/components/ui/StatusBadge";
import { autorSidebarNoticias } from "~/lib/autor-nav";
import { paths } from "~/lib/paths";

export default function NovaNoticiaPage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Sidebar items={autorSidebarNoticias}>
        <div className="panel">
          <StatusBadge label="Novo rascunho" status="rascunho" />
          <h1 style={{ marginTop: 12 }}>Nova notícia</h1>
          <AutorNoticiaForm
            cancelTo={paths.autorNoticias}
            onPrimary={() => navigate(paths.autorNoticias)}
          />
        </div>
      </Sidebar>
    </MainLayout>
  );
}
