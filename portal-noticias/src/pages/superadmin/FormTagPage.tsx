import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { getTagPorId } from "~/data/tags";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function FormTagPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const registro = id ? getTagPorId(id) : undefined;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.adminTags);
  }

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>{id ? "Editar tag" : "Nova tag"}</h1>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input defaultValue={registro?.nome ?? ""} id="nome" type="text" />
              </div>
              <div className="field">
                <label htmlFor="slug">Slug</label>
                <input defaultValue={registro?.slug ?? ""} id="slug" type="text" />
              </div>
            </div>
            <div className="actions">
              <Button type="submit">Salvar</Button>
              <Button to={paths.adminTags} variant="secondary">
                Voltar
              </Button>
            </div>
          </form>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
