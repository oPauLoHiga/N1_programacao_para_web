import { useMemo, useState } from "react";
import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { SearchBar } from "~/components/ui/SearchBar";
import { StatsGrid } from "~/components/ui/StatsGrid";
import { StatusBadge } from "~/components/ui/StatusBadge";
import { noticias } from "~/data/noticias";
import { autorSidebarNoticias } from "~/lib/autor-nav";
import { paths } from "~/lib/paths";

export default function MinhasNoticiasPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"todas" | "publicadas" | "rascunhos">("todas");

  const filtradas = useMemo(() => {
    return noticias.filter((n) => {
      const okQ = !q || n.titulo.toLowerCase().includes(q.toLowerCase());
      const okS =
        status === "todas" ||
        (status === "publicadas" && n.publicada) ||
        (status === "rascunhos" && !n.publicada);
      return okQ && okS;
    });
  }, [q, status]);

  return (
    <MainLayout>
      <Sidebar items={autorSidebarNoticias}>
        <div className="panel perfil-head" style={{ justifyContent: "space-between" }}>
          <h1 style={{ margin: 0 }}>Minhas notícias</h1>
          <Button to={paths.autorNoticiaNova}>+ Nova notícia</Button>
        </div>

        <StatsGrid
          className="stats--auto"
          items={[
            { label: "Total", value: 12 },
            { label: "Publicadas", value: 8 },
            { label: "Rascunhos", value: 4 },
            { label: "Visualizações", value: "8,6k" },
            { label: "Comentários recebidos", value: 42 },
          ]}
        />

        <div className="panel">
          <div className="form-row">
            <SearchBar
              placeholder="Buscar por título"
              value={q}
              onSearch={setQ}
              onValueChange={setQ}
            />
            <div className="field">
              <label htmlFor="st">Status</label>
              <select
                id="st"
                value={status}
                onChange={(e) => setStatus(e.target.value as typeof status)}
              >
                <option value="todas">Todas</option>
                <option value="publicadas">Publicadas</option>
                <option value="rascunhos">Rascunhos</option>
              </select>
            </div>
          </div>

          {filtradas.length === 0 ? (
            <p className="note">Você ainda não escreveu nenhuma notícia neste filtro.</p>
          ) : (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Visualizações</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filtradas.map((n) => (
                    <tr key={n.id}>
                      <td>{n.titulo}</td>
                      <td>{n.meta}</td>
                      <td>
                        <StatusBadge status={n.publicada ? "publicada" : "rascunho"} />
                      </td>
                      <td>{n.visualizacoes}</td>
                      <td className="table-actions">
                        <Link title="Ver" className="button secondary" to={paths.noticia(n.id)}>
                          👁
                        </Link>
                        <Link
                          title="Editar"
                          className="button secondary"
                          to={paths.autorNoticiaEditar(n.id)}
                        >
                          ✏
                        </Link>
                        <button title="Excluir" className="button danger" type="button">
                          🗑
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Sidebar>
    </MainLayout>
  );
}
