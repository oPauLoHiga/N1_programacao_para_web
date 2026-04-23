import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { getCidadePorId } from "~/data/cidades";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function FormCidadePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const registro = id ? getCidadePorId(id) : undefined;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.adminCidades);
  }

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>{id ? "Editar cidade" : "Nova cidade"}</h1>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="nome">Cidade</label>
                <input defaultValue={registro?.nome ?? ""} id="nome" type="text" />
              </div>
              <div className="field">
                <label htmlFor="uf">UF</label>
                <input defaultValue={registro?.uf ?? ""} id="uf" type="text" />
              </div>
            </div>
            <div className="actions">
              <Button type="submit">Salvar</Button>
              <Button to={paths.adminCidades} variant="secondary">
                Voltar
              </Button>
            </div>
          </form>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
