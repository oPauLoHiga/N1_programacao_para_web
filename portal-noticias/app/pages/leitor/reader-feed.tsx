import { NewsCard } from "~/components/news-card";
import { PortalShell } from "~/components/layout/portal-shell";
import { SectionTitle } from "~/components/layout/section-title";
import { SidebarLayout } from "~/components/layout/sidebar-layout";
import { ReaderCommentsTable } from "~/components/reader/reader-comments-table";
import { savedNews } from "~/data/reader-feed";
import { paths } from "~/lib/paths";
import { readerSidebarFeed } from "~/lib/reader-nav";

export default function ReaderFeedPage() {
  return (
    <PortalShell>
      <SidebarLayout items={readerSidebarFeed}>
        <SectionTitle note="Noticias recentes e acessos salvos." title="Feed do leitor" />

        <div className="grid grid-2">
          {savedNews.map((item) => (
            <NewsCard
              key={item.title}
              {...item}
              linkLabel="Abrir noticia"
              to={paths.article}
            />
          ))}
        </div>

        <ReaderCommentsTable />
      </SidebarLayout>
    </PortalShell>
  );
}
