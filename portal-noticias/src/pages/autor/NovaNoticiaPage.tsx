import type { FormEvent } from "react";
import { useNavigate } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { autorSidebarNoticias } from "~/lib/autor-nav";
import { paths } from "~/lib/paths";

export default function NovaNoticiaPage() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.autorNoticias);
  }

  return (
    <MainLayout>
      <Sidebar items={autorSidebarNoticias}>
        <section className="panel">
          <h1>Nova noticia</h1>
          <p className="note">Formulario estatico (sem persistencia).</p>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="titulo">Titulo</label>
              <input id="titulo" required type="text" />
            </div>
            <div className="field">
              <label htmlFor="resumo">Resumo</label>
              <textarea id="resumo" required />
            </div>
            <div className="actions">
              <Button type="submit">Salvar rascunho</Button>
              <Button to={paths.autorNoticias} variant="secondary">
                Cancelar
              </Button>
            </div>
          </form>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
