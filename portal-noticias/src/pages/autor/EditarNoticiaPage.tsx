import { useNavigate, useParams } from "react-router";

import { AutorNoticiaForm } from "~/components/autor/AutorNoticiaForm";
import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { StatusBadge } from "~/components/ui/StatusBadge";
import { getNoticiaPorId } from "~/data/noticias";
import { autorSidebarNoticias } from "~/lib/autor-nav";
import { paths } from "~/lib/paths";

export default function EditarNoticiaPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const noticia = getNoticiaPorId(id);

  return (
    <MainLayout>
      <Sidebar items={autorSidebarNoticias}>
        <div className="panel">
          <StatusBadge status={noticia?.publicada ? "publicada" : "rascunho"} />
          <h1 style={{ marginTop: 12 }}>Editar notícia</h1>
          {!noticia ? (
            <p className="note">Notícia não encontrada.</p>
          ) : (
            <AutorNoticiaForm
              cancelTo={paths.autorNoticias}
              initial={noticia}
              onPrimary={() => navigate(paths.autorNoticias)}
            />
          )}
        </div>
      </Sidebar>
    </MainLayout>
  );
}
