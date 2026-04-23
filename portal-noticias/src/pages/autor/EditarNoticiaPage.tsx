import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { getNoticiaPorId } from "~/data/noticias";
import { autorSidebarNoticias } from "~/lib/autor-nav";
import { paths } from "~/lib/paths";

export default function EditarNoticiaPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const noticia = getNoticiaPorId(id);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.autorNoticias);
  }

  return (
    <MainLayout>
      <Sidebar items={autorSidebarNoticias}>
        <section className="panel">
          <h1>Editar minha noticia</h1>
          {!noticia ? (
            <p className="note">Noticia {id} nao encontrada nos mocks.</p>
          ) : (
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="titulo">Titulo</label>
                <input defaultValue={noticia.titulo} id="titulo" type="text" />
              </div>
              <div className="field">
                <label htmlFor="resumo">Resumo</label>
                <textarea defaultValue={noticia.resumo} id="resumo" />
              </div>
              <div className="actions">
                <Button type="submit">Salvar</Button>
                <Button to={paths.autorNoticias} variant="secondary">
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
