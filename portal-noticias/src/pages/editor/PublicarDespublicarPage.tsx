import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { TagBadge } from "~/components/ui/TagBadge";
import { getNoticiaPorId } from "~/data/noticias";
import { editorSidebar } from "~/lib/editor-nav";
import { paths } from "~/lib/paths";

export default function PublicarDespublicarPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const noticia = getNoticiaPorId(id);

  if (!noticia) {
    return (
      <MainLayout>
        <Sidebar items={editorSidebar}>
          <p className="note">Notícia não encontrada.</p>
        </Sidebar>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Sidebar items={editorSidebar}>
        <div className="banner-warn">Você está editando uma notícia de {noticia.autor}</div>
        <section className="panel">
          <img
            alt=""
            className="noticia-detalhe__cover"
            src={noticia.imagemCapa}
            height={540}
            width={960}
          />
          <h1>{noticia.titulo}</h1>
          <h2 className="note" style={{ fontWeight: 400 }}>
            {noticia.subtitulo}
          </h2>
          <p className="meta">
            {noticia.meta} · {noticia.visualizacoes} visualizações
          </p>
          <div className="tag-cloud">
            {noticia.tags.map((t) => (
              <TagBadge key={t} slug={t} to={paths.buscaTag(t)} />
            ))}
          </div>
          {noticia.conteudo.split("\n\n").map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <div className="actions" style={{ marginTop: 20 }}>
            <Button type="button" onClick={() => navigate(paths.editorPainel)}>
              Publicar
            </Button>
            <Button type="button" variant="secondary" onClick={() => navigate(paths.editorPainel)}>
              Despublicar
            </Button>
          </div>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
