import { Link, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Button } from "~/components/ui/Button";
import { getNoticiaPorId } from "~/data/noticias";
import { paths } from "~/lib/paths";

export default function DetalheNoticiaPage() {
  const { id = "" } = useParams();
  const noticia = getNoticiaPorId(id);

  if (!noticia) {
    return (
      <MainLayout>
        <div className="container panel">
          <h1>Noticia nao encontrada</h1>
          <p className="note">Id: {id}</p>
          <Button to={paths.home} variant="secondary">
            Inicio
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container">
        <section className="panel">
          <p className="note">
            <Link className="button secondary" to={paths.buscaUf(noticia.uf)}>
              UF {noticia.uf}
            </Link>{" "}
            {noticia.tags.map((t) => (
              <span key={t}>
                <Link className="button secondary" to={paths.buscaTag(t)}>
                  {t}
                </Link>{" "}
              </span>
            ))}
          </p>
          <h1>{noticia.titulo}</h1>
          <p className="meta">
            {noticia.meta} - Autor: {noticia.autor}
          </p>
          <div className="tag-row">
            {noticia.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          {noticia.conteudo.split("\n\n").map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <div className="actions">
            <Button to={paths.leitorComentar(noticia.id)}>Comentar como leitor</Button>
            <Button to={paths.buscaTag(noticia.tags[0] ?? "cidade")} variant="secondary">
              Voltar a busca
            </Button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
