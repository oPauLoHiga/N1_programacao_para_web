import { useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Breadcrumb } from "~/components/ui/Breadcrumb";
import { NoticiaCard } from "~/components/ui/NoticiaCard";
import { TagBadge } from "~/components/ui/TagBadge";
import { getNoticiasPorTagSlug, getAllTagsUnicos } from "~/data/noticias";
import { paths } from "~/lib/paths";

export default function BuscaPorTagPage() {
  const { slug = "" } = useParams();
  const lista = getNoticiasPorTagSlug(slug);
  const todas = getAllTagsUnicos();
  const relacionadas = todas.filter((t) => t.toLowerCase() !== slug.toLowerCase());

  return (
    <MainLayout>
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Home", to: paths.home },
            { label: slug || "Tag" },
          ]}
        />

        <div style={{ marginBottom: 20 }}>
          <TagBadge label={slug} size="lg" slug={slug} />
        </div>

        {lista.length === 0 ? (
          <p className="note">Nenhuma notícia com essa tag.</p>
        ) : (
          <div className="grid grid-3">
            {lista.map((n) => (
              <NoticiaCard key={n.id} noticia={n} />
            ))}
          </div>
        )}

        <section className="section">
          <h2>Tags relacionadas</h2>
          <div className="tag-cloud">
            {relacionadas.map((t) => (
              <TagBadge key={t} slug={t} to={paths.buscaTag(t)} />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
