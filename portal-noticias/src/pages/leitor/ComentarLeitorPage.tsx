import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { getNoticiaPorId } from "~/data/noticias";
import { leitorSidebarCompleto } from "~/lib/leitor-nav";
import { paths } from "~/lib/paths";

export default function ComentarLeitorPage() {
  const { noticiaId = "" } = useParams();
  const navigate = useNavigate();
  const noticia = getNoticiaPorId(noticiaId);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.leitorPerfil);
  }

  return (
    <MainLayout>
      <Sidebar items={leitorSidebarCompleto}>
        <section className="panel">
          <h1>Comentar como leitor</h1>
          <p className="note">
            Noticia:{" "}
            {noticia ? (
              <strong>{noticia.titulo}</strong>
            ) : (
              <span>(id {noticiaId} nao encontrado nos mocks)</span>
            )}
          </p>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="texto">Comentario</label>
              <textarea id="texto" placeholder="Escreva seu comentario" required />
            </div>
            <div className="actions">
              <Button type="submit">Enviar</Button>
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
