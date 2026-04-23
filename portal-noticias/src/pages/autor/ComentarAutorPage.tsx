import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { getNoticiaPorId } from "~/data/noticias";
import { autorSidebarPadrao } from "~/lib/autor-nav";
import { paths } from "~/lib/paths";

export default function ComentarAutorPage() {
  const { noticiaId = "" } = useParams();
  const navigate = useNavigate();
  const noticia = getNoticiaPorId(noticiaId);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.autorNoticias);
  }

  return (
    <MainLayout>
      <Sidebar items={autorSidebarPadrao}>
        <section className="panel">
          <h1>Comentar como autor</h1>
          <p className="note">
            Noticia:{" "}
            {noticia ? <strong>{noticia.titulo}</strong> : <span>id {noticiaId}</span>}
          </p>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="texto">Comentario tecnico</label>
              <textarea id="texto" required />
            </div>
            <div className="actions">
              <Button type="submit">Publicar comentario</Button>
              <Button to={paths.noticia(noticiaId)} variant="secondary">
                Ver noticia
              </Button>
            </div>
          </form>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
