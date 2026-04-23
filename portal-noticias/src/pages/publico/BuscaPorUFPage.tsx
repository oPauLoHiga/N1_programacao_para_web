import { Link, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Breadcrumb } from "~/components/ui/Breadcrumb";
import { NoticiaCard } from "~/components/ui/NoticiaCard";
import { getNoticiasPorUf } from "~/data/noticias";
import { ufs } from "~/data/ufs";
import { paths } from "~/lib/paths";

export default function BuscaPorUFPage() {
  const { sigla = "" } = useParams();
  const lista = getNoticiasPorUf(sigla);
  const ufNome = ufs.find((u) => u.sigla.toUpperCase() === sigla.toUpperCase())?.nome ?? sigla;

  return (
    <MainLayout>
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Home", to: paths.home },
            { label: "Busca por UF" },
            { label: ufNome },
          ]}
        />

        <div className="busca-uf-layout">
          <div>
            <h1>
              {ufNome} <span className="note">({lista.length} notícias)</span>
            </h1>
            {lista.length === 0 ? (
              <p className="note">Nenhuma notícia mockada para esta UF.</p>
            ) : (
              <div className="grid grid-3">
                {lista.map((n) => (
                  <NoticiaCard key={n.id} noticia={n} />
                ))}
              </div>
            )}
          </div>

          <aside className="busca-uf-sidebar">
            <h3>UFs</h3>
            {ufs.map((u) => (
              <Link
                key={u.id}
                className={u.sigla.toUpperCase() === sigla.toUpperCase() ? "is-active" : ""}
                to={paths.buscaUf(u.sigla)}
              >
                {u.sigla} — {u.nome}
              </Link>
            ))}
          </aside>
        </div>
      </div>
    </MainLayout>
  );
}
