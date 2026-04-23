import type { FormEvent } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { getNoticiaPorId } from "~/data/noticias";
import { autorSidebarPadrao } from "~/lib/autor-nav";
import { paths } from "~/lib/paths";

const max = 500;

export default function ComentarAutorPage() {
  const { noticiaId = "" } = useParams();
  const navigate = useNavigate();
  const noticia = getNoticiaPorId(noticiaId);
  const [texto, setTexto] = useState("");
  const [ok, setOk] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOk(true);
  }

  return (
    <MainLayout>
      <Sidebar items={autorSidebarPadrao}>
        <section className="panel">
          <h1>Comentar como autor</h1>
          {noticia ? (
            <div className="resumo-comentario">
              <img alt="" height={80} src={noticia.imagemThumb} width={120} />
              <div>
                <h2 style={{ fontSize: 18, margin: 0 }}>{noticia.titulo}</h2>
                <p className="note">{noticia.autor}</p>
              </div>
            </div>
          ) : (
            <p className="note">Notícia não encontrada.</p>
          )}

          {!ok ? (
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="texto">Comentário técnico (máx. {max})</label>
                <textarea
                  id="texto"
                  maxLength={max}
                  required
                  rows={5}
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                />
                <span className="note">
                  {texto.length}/{max}
                </span>
              </div>
              <Button type="submit">Enviar comentário</Button>
            </form>
          ) : (
            <div>
              <p className="msg-success">Comentário registrado (simulado).</p>
              <Button variant="secondary" onClick={() => navigate(paths.noticia(noticiaId))}>
                Voltar para a notícia
              </Button>
            </div>
          )}
        </section>
      </Sidebar>
    </MainLayout>
  );
}
