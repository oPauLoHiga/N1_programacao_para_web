import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { SectionTitle } from "~/components/ui/SectionTitle";
import { StatsGrid } from "~/components/ui/StatsGrid";
import { noticias } from "~/data/noticias";
import { editorSidebar } from "~/lib/editor-nav";
import { paths } from "~/lib/paths";

export default function PainelEditorPage() {
  return (
    <MainLayout>
      <Sidebar items={editorSidebar}>
        <SectionTitle note="Visao editorial (dados mock)." title="Painel do editor" />

        <StatsGrid
          items={[
            { label: "Em revisao", value: 3 },
            { label: "Publicadas hoje", value: 2 },
            { label: "Fila", value: 5 },
            { label: "Autores", value: 8 },
          ]}
        />

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>UF</th>
                <th>Status</th>
                <th>Acoes</th>
              </tr>
            </thead>
            <tbody>
              {noticias.map((n) => (
                <tr key={n.id}>
                  <td>{n.titulo}</td>
                  <td>{n.uf}</td>
                  <td>
                    <span className="status">{n.publicada ? "Publicada" : "Rascunho"}</span>
                  </td>
                  <td className="table-actions">
                    <Link className="button secondary" to={paths.editorNoticiaEditar(n.id)}>
                      Editar
                    </Link>
                    <Link className="button secondary" to={paths.editorPublicar(n.id)}>
                      Publicar
                    </Link>
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
