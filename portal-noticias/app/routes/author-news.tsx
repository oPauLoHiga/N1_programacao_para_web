import { Link } from "react-router";

import { PortalShell, SectionTitle, SidebarLayout, StatsGrid } from "../components/portal-shell";
import { paths } from "../lib/paths";

const authorSidebar = [
  { label: "Minhas noticias", to: paths.authorNews, end: true },
  { label: "Listar", to: `${paths.authorCrud}#listar` },
  { label: "Criar", to: `${paths.authorCrud}#criar` },
  { label: "Atualizar", to: `${paths.authorCrud}#atualizar` },
  { label: "Apagar", to: `${paths.authorCrud}#apagar` },
];

export default function AuthorNews() {
  return (
    <PortalShell>
      <SidebarLayout items={authorSidebar}>
        <SectionTitle note="Resumo simples da area do autor." title="Minhas noticias" />

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
                <th>Data</th>
                <th>Acoes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Plano de mobilidade prioriza transporte publico</td>
                <td>
                  <span className="status">Publicada</span>
                </td>
                <td>18/04/2026</td>
                <td className="table-actions">
                  <Link className="button secondary" to={paths.article}>
                    Ver
                  </Link>
                  <Link className="button secondary" to={`${paths.authorCrud}#atualizar`}>
                    Editar
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Festival ocupa espacos publicos durante tres dias</td>
                <td>
                  <span className="status">Rascunho</span>
                </td>
                <td>17/04/2026</td>
                <td className="table-actions">
                  <Link className="button secondary" to={`${paths.authorCrud}#exibir`}>
                    Ver
                  </Link>
                  <Link className="button secondary" to={`${paths.authorCrud}#atualizar`}>
                    Editar
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </SidebarLayout>
    </PortalShell>
  );
}
