import { PortalShell } from "~/components/layout/portal-shell";
import { SectionTitle } from "~/components/layout/section-title";
import { SidebarLayout } from "~/components/layout/sidebar-layout";
import { StatsGrid } from "~/components/layout/stats-grid";
import { AuthorNewsTable } from "~/components/author/author-news-table";
import { authorSidebarNews } from "~/lib/author-nav";

export default function AuthorNewsPage() {
  return (
    <PortalShell>
      <SidebarLayout items={authorSidebarNews}>
        <SectionTitle note="Resumo simples da area do autor." title="Minhas noticias" />

        <StatsGrid
          items={[
            { label: "Publicadas", value: 12 },
            { label: "Rascunhos", value: 4 },
            { label: "Em revisao", value: 2 },
            { label: "Visualizacoes", value: 860 },
          ]}
        />

        <AuthorNewsTable />
      </SidebarLayout>
    </PortalShell>
  );
}
