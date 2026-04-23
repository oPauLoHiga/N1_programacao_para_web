import type { FormEvent } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { getNoticiaPorId } from "~/data/noticias";
import { leitorSidebarCompleto } from "~/lib/leitor-nav";
import { paths } from "~/lib/paths";

const max = 500;

export default function ComentarLeitorPage() {
  const { noticiaId = "" } = useParams();
  const noticia = getNoticiaPorId(noticiaId);
  const [texto, setTexto] = useState("");
  const [ok, setOk] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOk(true);
  }

  return (
    <MainLayout>
      <Sidebar items={leitorSidebarCompleto}>
        <section className="panel">
          <h1>Comentar como leitor</h1>
          {noticia ? (
            <div className="resumo-comentario">
              <img alt="" height={80} src={noticia.imagemThumb} width={120} />
              <div>
                <h2 style={{ fontSize: 18, margin: 0 }}>{noticia.titulo}</h2>
                <p className="note">{noticia.autor}</p>
              </div>
            </div>
          ) : (
            <p className="note">Notícia não encontrada nos mocks.</p>
          )}

          {!ok ? (
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="texto">Comentário (máx. {max} caracteres)</label>
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
              <p className="msg-success">Comentário enviado com sucesso (simulado).</p>
              <Link className="button secondary" to={paths.noticia(noticiaId)}>
                Voltar para a notícia
              </Link>
            </div>
          )}
        </section>
      </Sidebar>
    </MainLayout>
  );
}
