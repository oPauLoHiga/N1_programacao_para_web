import { useMemo, useState } from "react";
import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { SearchBar } from "~/components/ui/SearchBar";
import { StatusBadge } from "~/components/ui/StatusBadge";
import { noticias } from "~/data/noticias";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function CrudNoticiasPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"todas" | "pub" | "rasc">("todas");
  const [uf, setUf] = useState("");
  const [autor, setAutor] = useState("");

  const lista = useMemo(() => {
    return noticias.filter((n) => {
      const okQ = !q || n.titulo.toLowerCase().includes(q.toLowerCase());
      const okS =
        status === "todas" ||
        (status === "pub" && n.publicada) ||
        (status === "rasc" && !n.publicada);
      const okUf = !uf || n.uf === uf;
      const okA = !autor || n.autor === autor;
      return okQ && okS && okUf && okA;
    });
  }, [q, status, uf, autor]);

  const autores = [...new Set(noticias.map((n) => n.autor))];

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <h1>Notícias</h1>

        <div className="panel form-grid">
          <SearchBar placeholder="Buscar título" value={q} onSearch={setQ} onValueChange={setQ} />
          <div className="form-row">
            <div className="field">
              <label htmlFor="st">Status</label>
              <select
                id="st"
                value={status}
                onChange={(e) => setStatus(e.target.value as typeof status)}
              >
                <option value="todas">Todas</option>
                <option value="pub">Publicadas</option>
                <option value="rasc">Rascunhos</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="uf">UF</label>
              <select id="uf" value={uf} onChange={(e) => setUf(e.target.value)}>
                <option value="">Todas</option>
                {[...new Set(noticias.map((n) => n.uf))].map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="aut">Autor</label>
              <select id="aut" value={autor} onChange={(e) => setAutor(e.target.value)}>
                <option value="">Todos</option>
                {autores.map((a) => (
                  <option key={a} value={a}>
                    {a}
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
                <th>ID</th>
                <th>Título</th>
                <th>Autor</th>
                <th>UF</th>
                <th>Status</th>
                <th>Data</th>
                <th>Views</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((n) => (
                <tr key={n.id}>
                  <td>{n.id}</td>
                  <td>{n.titulo}</td>
                  <td>{n.autor}</td>
                  <td>{n.uf}</td>
                  <td>
                    <StatusBadge status={n.publicada ? "publicada" : "rascunho"} />
                  </td>
                  <td>{n.meta}</td>
                  <td>{n.visualizacoes}</td>
                  <td className="table-actions">
                    <Link className="button secondary" to={paths.noticia(n.id)}>
                      Ver
                    </Link>
                    <Link className="button secondary" to={paths.adminNoticiaEditar(n.id)}>
                      Editar
                    </Link>
                    <Button type="button" variant="secondary" onClick={() => undefined}>
                      {n.publicada ? "Despublicar" : "Publicar"}
                    </Button>
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
