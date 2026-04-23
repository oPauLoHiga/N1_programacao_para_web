import { useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { NewsCard } from "~/components/ui/NewsCard";
import { SectionTitle } from "~/components/ui/SectionTitle";
import { getNoticiasPorTagSlug } from "~/data/noticias";
import { paths } from "~/lib/paths";

export default function BuscaPorTagPage() {
  const { slug = "" } = useParams();
  const lista = getNoticiasPorTagSlug(slug);

  return (
    <MainLayout>
      <div className="container">
        <SectionTitle
          note={`Tag: ${slug || "?"}. Dados estaticos em src/data/noticias.ts.`}
          title="Busca por tag"
        />
        {lista.length === 0 ? (
          <p className="note">Nenhuma noticia com essa tag.</p>
        ) : (
          <div className="grid grid-3">
            {lista.map((n) => (
              <NewsCard
                key={n.id}
                tag={n.tags[0] ?? "geral"}
                title={n.titulo}
                meta={n.meta}
                note={n.resumo}
                linkLabel="Ler"
                to={paths.noticia(n.id)}
              />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
