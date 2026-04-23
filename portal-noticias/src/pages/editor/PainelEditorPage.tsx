import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { SectionTitle } from "~/components/ui/SectionTitle";
import { StatsGrid } from "~/components/ui/StatsGrid";
import { StatusBadge } from "~/components/ui/StatusBadge";
import { noticias } from "~/data/noticias";
import { editorSidebar } from "~/lib/editor-nav";
import { paths } from "~/lib/paths";

export default function PainelEditorPage() {
  return (
    <MainLayout>
      <Sidebar items={editorSidebar}>
        <SectionTitle note="Fila editorial (mock)." title="Painel do editor" />

        <StatsGrid
          className="stats--auto"
          items={[
            { label: "Em revisão", value: 3 },
            { label: "Publicadas hoje", value: 2 },
            { label: "Fila", value: 5 },
            { label: "Autores", value: 8 },
          ]}
        />

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>UF</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {noticias.map((n) => (
                <tr key={n.id}>
                  <td>{n.titulo}</td>
                  <td>{n.uf}</td>
                  <td>
                    <StatusBadge status={n.publicada ? "publicada" : "rascunho"} />
                  </td>
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
        </section>
      </Sidebar>
    </MainLayout>
  );
}
