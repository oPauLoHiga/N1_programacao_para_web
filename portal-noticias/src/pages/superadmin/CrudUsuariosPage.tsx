import { useMemo, useState } from "react";
import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { SearchBar } from "~/components/ui/SearchBar";
import { StatusBadge } from "~/components/ui/StatusBadge";
import { usuarios } from "~/data/usuarios";
import type { Usuario } from "~/types/usuario";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function CrudUsuariosPage() {
  const [q, setQ] = useState("");
  const [perfil, setPerfil] = useState("");
  const [ativo, setAtivo] = useState<"todos" | "on" | "off">("todos");
  const [uf, setUf] = useState("");

  const lista = useMemo(() => {
    return usuarios.filter((u) => {
      const okQ =
        !q ||
        u.nome.toLowerCase().includes(q.toLowerCase()) ||
        u.email.toLowerCase().includes(q.toLowerCase());
      const okP = !perfil || u.papel === perfil;
      const okA =
        ativo === "todos" || (ativo === "on" && u.ativo) || (ativo === "off" && !u.ativo);
      const okUf = !uf || u.uf === uf;
      return okQ && okP && okA && okUf;
    });
  }, [q, perfil, ativo, uf]);

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <h1>Usuários</h1>

        <div className="panel form-grid">
          <SearchBar placeholder="Nome ou e-mail" value={q} onSearch={setQ} onValueChange={setQ} />
          <div className="form-row">
            <div className="field">
              <label htmlFor="pf">Perfil</label>
              <select id="pf" value={perfil} onChange={(e) => setPerfil(e.target.value)}>
                <option value="">Todos</option>
                <option value="leitor">Leitor</option>
                <option value="autor">Autor</option>
                <option value="editor">Editor</option>
                <option value="superadmin">Superadmin</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="atv">Status</label>
              <select
                id="atv"
                value={ativo}
                onChange={(e) => setAtivo(e.target.value as typeof ativo)}
              >
                <option value="todos">Todos</option>
                <option value="on">Ativos</option>
                <option value="off">Inativos</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="ufu">UF</label>
              <select id="ufu" value={uf} onChange={(e) => setUf(e.target.value)}>
                <option value="">Todas</option>
                {[...new Set(usuarios.map((u) => u.uf))].map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Perfil</th>
                <th>Cidade/UF</th>
                <th>Status</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((u: Usuario) => (
                <tr key={u.id}>
                  <td>
                    <img alt="" height={36} src={u.avatarUrl} width={36} />
                  </td>
                  <td>{u.nome}</td>
                  <td>{u.email}</td>
                  <td>{u.papel}</td>
                  <td>
                    {u.cidade}/{u.uf}
                  </td>
                  <td>
                    <StatusBadge status={u.ativo ? "ativo" : "inativo"} />
                  </td>
                  <td>{u.dataCadastro}</td>
                  <td className="table-actions">
                    <Link className="button secondary" to={paths.adminUsuarioEditar(u.id)}>
                      Editar
                    </Link>
                    <button className="button secondary" type="button">
                      Ativar/Desativar
                    </button>
                    <button className="button danger" type="button">
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
