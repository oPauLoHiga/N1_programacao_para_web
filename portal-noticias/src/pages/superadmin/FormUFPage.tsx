import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { getUfPorId } from "~/data/ufs";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function FormUFPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const registro = id ? getUfPorId(id) : undefined;
  const isNova = !id;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.adminUfs);
  }

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>{isNova ? "Nova UF" : "Editar UF"}</h1>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="sigla">Sigla</label>
                <input defaultValue={registro?.sigla ?? ""} id="sigla" type="text" />
              </div>
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input defaultValue={registro?.nome ?? ""} id="nome" type="text" />
              </div>
            </div>
            <div className="actions">
              <Button type="submit">Salvar</Button>
              <Button to={paths.adminUfs} variant="secondary">
                Voltar
              </Button>
            </div>
          </form>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
