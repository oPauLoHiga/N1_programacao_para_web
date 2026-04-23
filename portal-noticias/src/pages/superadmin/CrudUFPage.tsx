import { useMemo, useState } from "react";
import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { SearchBar } from "~/components/ui/SearchBar";
import { contarCidadesPorUf } from "~/data/cidades";
import { ufs } from "~/data/ufs";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function CrudUFPage() {
  const [q, setQ] = useState("");

  const lista = useMemo(() => {
    return ufs.filter(
      (u) =>
        !q ||
        u.nome.toLowerCase().includes(q.toLowerCase()) ||
        u.sigla.toLowerCase().includes(q.toLowerCase()),
    );
  }, [q]);

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <div className="panel perfil-head" style={{ justifyContent: "space-between" }}>
          <h1 style={{ margin: 0 }}>Unidades federativas</h1>
          <Button to={paths.adminUfNova}>+ Nova UF</Button>
        </div>

        <div className="panel">
          <SearchBar placeholder="Buscar UF ou nome" value={q} onSearch={setQ} onValueChange={setQ} />
        </div>

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Sigla</th>
                <th>Nome</th>
                <th>Qtd. cidades</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.sigla}</td>
                  <td>{u.nome}</td>
                  <td>{contarCidadesPorUf(u.sigla)}</td>
                  <td className="table-actions">
                    <Link className="button secondary" to={paths.adminUfEditar(u.id)}>
                      Editar
                    </Link>
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
