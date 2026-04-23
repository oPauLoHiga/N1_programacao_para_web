import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { getNoticiaPorId } from "~/data/noticias";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function FormNoticiaAdminPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const noticia = getNoticiaPorId(id);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.adminNoticias);
  }

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>Editar noticia (admin)</h1>
          {!noticia ? (
            <p className="note">Noticia nao encontrada.</p>
          ) : (
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="titulo">Titulo</label>
                <input defaultValue={noticia.titulo} id="titulo" type="text" />
              </div>
              <div className="field">
                <label htmlFor="conteudo">Conteudo</label>
                <textarea defaultValue={noticia.conteudo} id="conteudo" />
              </div>
              <div className="actions">
                <Button type="submit">Salvar</Button>
                <Button to={paths.adminNoticias} variant="secondary">
                  Voltar
                </Button>
              </div>
            </form>
          )}
        </section>
      </Sidebar>
    </MainLayout>
  );
}
