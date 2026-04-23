import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { getUsuarioPorId } from "~/data/usuarios";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function FormUsuarioPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const usuario = getUsuarioPorId(id);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.adminUsuarios);
  }

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>Editar usuario</h1>
          {!usuario ? (
            <p className="note">Usuario nao encontrado.</p>
          ) : (
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input defaultValue={usuario.nome} id="nome" type="text" />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input defaultValue={usuario.email} id="email" type="email" />
              </div>
              <div className="field">
                <label htmlFor="papel">Papel</label>
                <input defaultValue={usuario.papel} id="papel" type="text" />
              </div>
              <div className="actions">
                <Button type="submit">Salvar</Button>
                <Button to={paths.adminUsuarios} variant="secondary">
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
