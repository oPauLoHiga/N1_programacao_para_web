import { NewsCard } from "~/components/news-card";
import { PortalShell } from "~/components/layout/portal-shell";
import { SectionTitle } from "~/components/layout/section-title";
import { newsList } from "~/data/news";
import { paths } from "~/lib/paths";

export default function PublicNewsPage() {
  return (
    <PortalShell>
      <div className="container">
        <SectionTitle
          note="Lista basica de materias com cards e links para leitura."
          title="Noticias publicas"
        />

        <section className="grid grid-3">
          {newsList.map((item) => (
            <NewsCard
              key={item.title}
              {...item}
              linkLabel="Ler noticia"
              to={paths.article}
            />
          ))}
        </section>
      </div>
    </PortalShell>
  );
}
