import type { FormEvent } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Breadcrumb } from "~/components/ui/Breadcrumb";
import { Button } from "~/components/ui/Button";
import { ComentarioItem } from "~/components/ui/ComentarioItem";
import { TagBadge } from "~/components/ui/TagBadge";
import { getComentariosPorNoticia } from "~/data/comentarios";
import { getNoticiaPorId, getNoticiasRecentes, getAllTagsUnicos, noticias } from "~/data/noticias";
import { paths } from "~/lib/paths";

export default function DetalheNoticiaPage() {
  const { id = "" } = useParams();
  const noticia = getNoticiaPorId(id);
  const [msg, setMsg] = useState<string | null>(null);

  const comentariosLista = noticia ? getComentariosPorNoticia(noticia.id) : [];
  const recentes = noticia ? getNoticiasRecentes(noticia.id, 5) : [];
  const tagsPop = getAllTagsUnicos();

  function handleComentario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMsg("Comentário enviado (simulado).");
    event.currentTarget.reset();
  }

  if (!noticia) {
    return (
      <MainLayout>
        <div className="container panel">
          <h1>Notícia não encontrada</h1>
          <p className="note">Id: {id}</p>
          <Button to={paths.home} variant="secondary">
            Início
          </Button>
        </div>
      </MainLayout>
    );
  }

  const primeiraTag = noticia.tags[0] ?? "geral";

  return (
    <MainLayout>
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Home", to: paths.home },
            { label: primeiraTag, to: paths.buscaTag(primeiraTag) },
            { label: noticia.titulo.slice(0, 48) + (noticia.titulo.length > 48 ? "…" : "") },
          ]}
        />

        <div className="noticia-layout">
          <article className="noticia-main">
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
            <div className="meta-row">
              <img
                alt=""
                className="meta-row__avatar"
                height={40}
                src={noticia.avatarAutorUrl}
                width={40}
              />
              <div>
                <strong>{noticia.autor}</strong>
                <div className="note">
                  {noticia.meta} · {noticia.visualizacoes} visualizações · {noticia.cidadeNome}/
                  {noticia.uf}
                </div>
              </div>
            </div>
            <div className="tag-cloud" style={{ margin: "16px 0" }}>
              {noticia.tags.map((t) => (
                <TagBadge key={t} slug={t} to={paths.buscaTag(t)} />
              ))}
            </div>
            {noticia.conteudo.split("\n\n").map((p) => (
              <p key={p.slice(0, 50)}>{p}</p>
            ))}

            <section className="section">
              <h2>Comentários</h2>
              {comentariosLista.map((c) => (
                <ComentarioItem key={c.id} item={c} showNoticiaLink={false} />
              ))}
              <form className="form-grid" style={{ marginTop: 16 }} onSubmit={handleComentario}>
                <div className="field">
                  <label htmlFor="novo-comentario">Novo comentário</label>
                  <textarea id="novo-comentario" required rows={4} />
                </div>
                <Button type="submit">Enviar comentário</Button>
              </form>
              {msg ? <p className="msg-success">{msg}</p> : null}
            </section>
          </article>

          <aside className="noticia-sidebar">
            <div className="widget">
              <h3>Sobre o autor</h3>
              <img
                alt=""
                className="perfil-avatar-lg"
                src={noticia.avatarAutorUrl}
                height={120}
                width={120}
              />
              <p>
                <strong>{noticia.autor}</strong>
              </p>
              <p className="note">{noticia.autorBio}</p>
              <p className="note">
                {noticias.filter((n) => n.autor === noticia.autor).length} notícias do mesmo autor (mock)
              </p>
            </div>

            <div className="widget">
              <h3>Notícias recentes</h3>
              {recentes.map((n) => (
                <Link key={n.id} className="mini-noticia" to={paths.noticia(n.id)}>
                  <img alt="" height={40} src={n.imagemThumb} width={56} />
                  <div>
                    <div style={{ fontSize: 14 }}>{n.titulo}</div>
                    <div className="note">{n.meta}</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="widget">
              <h3>Tags populares</h3>
              <div className="tag-cloud">
                {tagsPop.map((t) => (
                  <TagBadge key={t} slug={t} to={paths.buscaTag(t)} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </MainLayout>
  );
}
