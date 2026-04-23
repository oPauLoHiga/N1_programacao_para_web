import { useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { getNoticiaPorId } from "~/data/noticias";
import { editorSidebar } from "~/lib/editor-nav";
import { paths } from "~/lib/paths";

export default function PublicarDespublicarPage() {
  const { id = "" } = useParams();
  const noticia = getNoticiaPorId(id);

  return (
    <MainLayout>
      <Sidebar items={editorSidebar}>
        <section className="panel">
          <h1>Publicar / despublicar</h1>
          {noticia ? (
            <>
              <p className="note">{noticia.titulo}</p>
              <p>
                Estado atual:{" "}
                <span className="status">{noticia.publicada ? "Publicada" : "Rascunho"}</span>
              </p>
              <div className="actions">
                <Button type="button" onClick={() => undefined}>
                  Alternar (mock)
                </Button>
                <Button to={paths.editorPainel} variant="secondary">
                  Voltar ao painel
                </Button>
              </div>
            </>
          ) : (
            <p className="note">Noticia {id} nao encontrada.</p>
          )}
        </section>
      </Sidebar>
    </MainLayout>
  );
}
