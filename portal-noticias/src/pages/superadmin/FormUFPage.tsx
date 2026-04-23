import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
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
          <h1>
            {isNova ? "Nova UF" : `Editar UF — ${registro?.sigla ?? ""}`}
          </h1>
          <form className="form-grid" onSubmit={handleSubmit}>
            <InputField defaultValue={registro?.sigla ?? ""} id="sigla" label="Sigla" />
            <InputField defaultValue={registro?.nome ?? ""} id="nome" label="Nome" />
            <div className="actions">
              <Button type="submit">Salvar</Button>
              <Button to={paths.adminUfs} variant="secondary">
                Cancelar
              </Button>
            </div>
          </form>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
