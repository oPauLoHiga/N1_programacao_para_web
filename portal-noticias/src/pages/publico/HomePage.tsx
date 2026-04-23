import { useNavigate } from "react-router";

import { Hero } from "~/components/home/Hero";
import { MainLayout } from "~/components/layout/MainLayout";
import { SectionTitle } from "~/components/ui/SectionTitle";
import { SearchBar } from "~/components/ui/SearchBar";
import { UFSelector } from "~/components/ui/UFSelector";
import { NoticiaCard } from "~/components/ui/NoticiaCard";
import { TagBadge } from "~/components/ui/TagBadge";
import { noticias, getAllTagsUnicos } from "~/data/noticias";
import { ufs } from "~/data/ufs";
import { paths } from "~/lib/paths";
import { slugify } from "~/lib/slugify";

export default function HomePage() {
  const navigate = useNavigate();
  const destaque = noticias[0];
  const tagsPopulares = getAllTagsUnicos();

  return (
    <MainLayout>
      <Hero noticia={destaque} />

      <div className="container">
        <SearchBar
          onSearch={(q) => {
            const slug = slugify(q || "cidade");
            navigate(paths.buscaTag(slug));
          }}
          placeholder="Buscar por palavra-chave (vira slug de tag)"
        />

        <UFSelector
          ufs={ufs}
          value=""
          label="Filtrar destaques por UF"
          onChange={(sigla) => {
            if (sigla) navigate(paths.buscaUf(sigla));
          }}
        />

        <section className="section">
          <SectionTitle note="Tags clicáveis para busca." title="Tags em destaque" />
          <div className="tag-cloud">
            {tagsPopulares.map((t) => (
              <TagBadge key={t} size="lg" slug={t} to={paths.buscaTag(t)} />
            ))}
          </div>
        </section>

        <section className="section">
          <SectionTitle
            note="Grid 3 colunas no desktop, 1 no mobile."
            title="Últimas notícias"
          />
          <div className="grid grid-3">
            {noticias.map((n) => (
              <NoticiaCard key={n.id} noticia={n} />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
