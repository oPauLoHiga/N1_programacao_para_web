import { useNavigate, useParams } from "react-router";

import { AutorNoticiaForm } from "~/components/autor/AutorNoticiaForm";
import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { getNoticiaPorId } from "~/data/noticias";
import { editorSidebar } from "~/lib/editor-nav";
import { paths } from "~/lib/paths";

export default function EditarQualquerNoticiaPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const noticia = getNoticiaPorId(id);

  return (
    <MainLayout>
      <Sidebar items={editorSidebar}>
        <div className="panel">
          {!noticia ? (
            <p className="note">Notícia não encontrada.</p>
          ) : (
            <AutorNoticiaForm
              banner={`Você está editando uma notícia de ${noticia.autor}`}
              cancelTo={paths.editorPainel}
              initial={noticia}
              onPrimary={() => navigate(paths.editorPainel)}
            />
          )}
        </div>
      </Sidebar>
    </MainLayout>
  );
}
