import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { SectionTitle } from "~/components/ui/SectionTitle";
import { StatsGrid } from "~/components/ui/StatsGrid";
import { noticias } from "~/data/noticias";
import { autorSidebarNoticias } from "~/lib/autor-nav";
import { paths } from "~/lib/paths";

export default function MinhasNoticiasPage() {
  return (
    <MainLayout>
      <Sidebar items={autorSidebarNoticias}>
        <SectionTitle note="Lista estatica a partir de src/data/noticias.ts." title="Minhas noticias" />

        <StatsGrid
          items={[
            { label: "Publicadas", value: 12 },
            { label: "Rascunhos", value: 4 },
            { label: "Em revisao", value: 2 },
            { label: "Visualizacoes", value: 860 },
          ]}
        />

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Status</th>
                <th>Acoes</th>
              </tr>
            </thead>
            <tbody>
              {noticias.map((n) => (
                <tr key={n.id}>
                  <td>{n.titulo}</td>
                  <td>
                    <span className="status">{n.publicada ? "Publicada" : "Rascunho"}</span>
                  </td>
                  <td className="table-actions">
                    <Link className="button secondary" to={paths.noticia(n.id)}>
                      Ver
                    </Link>
                    <Link className="button secondary" to={paths.autorNoticiaEditar(n.id)}>
                      Editar
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
