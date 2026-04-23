import { useMemo, useState } from "react";
import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { SearchBar } from "~/components/ui/SearchBar";
import { cidades } from "~/data/cidades";
import { contarNoticiasPorCidade } from "~/data/noticias";
import { ufs } from "~/data/ufs";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function CrudCidadesPage() {
  const [q, setQ] = useState("");
  const [ufFiltro, setUfFiltro] = useState("");

  const lista = useMemo(() => {
    return cidades.filter((c) => {
      const okQ = !q || c.nome.toLowerCase().includes(q.toLowerCase());
      const okUf = !ufFiltro || c.uf === ufFiltro;
      return okQ && okUf;
    });
  }, [q, ufFiltro]);

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <div className="panel perfil-head" style={{ justifyContent: "space-between" }}>
          <h1 style={{ margin: 0 }}>Cidades</h1>
          <Button to={paths.adminCidadeNova}>+ Nova cidade</Button>
        </div>

        <div className="panel form-row">
          <SearchBar placeholder="Buscar cidade" value={q} onSearch={setQ} onValueChange={setQ} />
          <div className="field">
            <label htmlFor="uf-f">UF</label>
            <select id="uf-f" value={ufFiltro} onChange={(e) => setUfFiltro(e.target.value)}>
              <option value="">Todas</option>
              {ufs.map((u) => (
                <option key={u.id} value={u.sigla}>
                  {u.sigla}
                </option>
              ))}
            </select>
          </div>
        </div>

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>UF</th>
                <th>Qtd. notícias</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.nome}</td>
                  <td>{c.uf}</td>
                  <td>{contarNoticiasPorCidade(c.nome)}</td>
                  <td className="table-actions">
                    <Link className="button secondary" to={paths.adminCidadeEditar(c.id)}>
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
