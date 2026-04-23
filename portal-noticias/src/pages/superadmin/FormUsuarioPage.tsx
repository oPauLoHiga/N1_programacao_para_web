import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { getCidadesPorUf } from "~/data/cidades";
import { getUsuarioPorId } from "~/data/usuarios";
import { ufs } from "~/data/ufs";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function FormUsuarioPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const usuario = getUsuarioPorId(id);
  const cidades = usuario ? getCidadesPorUf(usuario.uf) : [];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.adminUsuarios);
  }

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>Editar usuário</h1>
          {!usuario ? (
            <p className="note">Usuário não encontrado.</p>
          ) : (
            <form className="form-grid" onSubmit={handleSubmit}>
              <InputField defaultValue={usuario.nome} id="nome" label="Nome" />
              <InputField defaultValue={usuario.email} id="email" label="E-mail" readOnly />
              <div className="field">
                <label htmlFor="papel">Perfil</label>
                <select defaultValue={usuario.papel} id="papel" name="papel">
                  <option value="leitor">Leitor</option>
                  <option value="autor">Autor</option>
                  <option value="editor">Editor</option>
                  <option value="superadmin">Superadmin</option>
                </select>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="uf">UF</label>
                  <select defaultValue={usuario.uf} id="uf" name="uf">
                    {ufs.map((u) => (
                      <option key={u.id} value={u.sigla}>
                        {u.sigla}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="cidade">Cidade</label>
                  <select defaultValue={usuario.cidade} id="cidade" name="cidade">
                    {cidades.map((c) => (
                      <option key={c.id} value={c.nome}>
                        {c.nome}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <InputField id="bio" label="Bio" multiline defaultValue="Bio do usuário (mock)." />
              <label className="checkbox-row">
                <input defaultChecked={usuario.ativo} name="ativo" type="checkbox" /> Ativo
              </label>
              <div className="actions">
                <Button type="submit">Salvar</Button>
                <Button to={paths.adminUsuarios} variant="secondary">
                  Cancelar
                </Button>
              </div>
            </form>
          )}
        </section>
      </Sidebar>
    </MainLayout>
  );
}
