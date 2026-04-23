import { useMemo, useState } from "react";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { ComentarioItem } from "~/components/ui/ComentarioItem";
import { SearchBar } from "~/components/ui/SearchBar";
import { comentarios } from "~/data/comentarios";
import { adminSidebar } from "~/lib/admin-nav";

export default function GerenciarComentariosPage() {
  const [q, setQ] = useState("");
  const [filtro, setFiltro] = useState<"todos" | "aprovado" | "pendente">("todos");
  const [sel, setSel] = useState<Record<string, boolean>>({});

  const lista = useMemo(() => {
    return comentarios.filter((c) => {
      const okQ =
        !q ||
        c.texto.toLowerCase().includes(q.toLowerCase()) ||
        c.autor.toLowerCase().includes(q.toLowerCase());
      const okS = filtro === "todos" || c.status === filtro;
      return okQ && okS;
    });
  }, [q, filtro]);

  const selecionados = lista.filter((c) => sel[c.id]);

  function toggle(id: string) {
    setSel((s) => ({ ...s, [id]: !s[id] }));
  }

  function toggleAll(checked: boolean) {
    const next: Record<string, boolean> = {};
    for (const c of lista) next[c.id] = checked;
    setSel(next);
  }

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <h1>Comentários</h1>

        <div className="panel form-row">
          <SearchBar placeholder="Buscar texto ou autor" value={q} onSearch={setQ} onValueChange={setQ} />
          <div className="field">
            <label htmlFor="fs">Status</label>
            <select
              id="fs"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value as typeof filtro)}
            >
              <option value="todos">Todos</option>
              <option value="aprovado">Aprovados</option>
              <option value="pendente">Pendentes</option>
            </select>
          </div>
        </div>

        <div className="panel actions">
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={lista.length > 0 && lista.every((c) => sel[c.id])}
              onChange={(e) => toggleAll(e.target.checked)}
            />
            Selecionar página
          </label>
          <Button type="button" variant="success" onClick={() => undefined}>
            Aprovar selecionados ({selecionados.length})
          </Button>
          <Button type="button" variant="danger" onClick={() => undefined}>
            Excluir selecionados
          </Button>
        </div>

        <section className="panel">
          {lista.map((c) => (
            <div className="comentario-moderacao" key={c.id}>
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={!!sel[c.id]}
                  onChange={() => toggle(c.id)}
                />
              </label>
              <ComentarioItem
                item={c}
                showStatus
                actions={
                  <>
                    <Button variant="success" type="button" onClick={() => undefined}>
                      Aprovar
                    </Button>
                    <Button variant="danger" type="button" onClick={() => undefined}>
                      Rejeitar
                    </Button>
                    <button className="button danger" type="button">
                      Excluir
                    </button>
                  </>
                }
              />
            </div>
          ))}
        </section>
      </Sidebar>
    </MainLayout>
  );
}
