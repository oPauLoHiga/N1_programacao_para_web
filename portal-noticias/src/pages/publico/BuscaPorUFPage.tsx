import { useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { NewsCard } from "~/components/ui/NewsCard";
import { SectionTitle } from "~/components/ui/SectionTitle";
import { getNoticiasPorUf } from "~/data/noticias";
import { paths } from "~/lib/paths";

export default function BuscaPorUFPage() {
  const { sigla = "" } = useParams();
  const lista = getNoticiasPorUf(sigla);

  return (
    <MainLayout>
      <div className="container">
        <SectionTitle
          note={`Resultados para UF ${sigla.toUpperCase() || "?"}.`}
          title="Busca por UF"
        />
        {lista.length === 0 ? (
          <p className="note">Nenhuma noticia mockada para esta UF.</p>
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
