import { useState } from "react";
import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { StatsGrid } from "~/components/ui/StatsGrid";
import { meusComentariosLeitor } from "~/data/meus-comentarios";
import { autorSidebarPadrao } from "~/lib/autor-nav";
import { paths } from "~/lib/paths";

export default function PerfilAutorPage() {
  const [editando, setEditando] = useState(false);

  return (
    <MainLayout>
      <Sidebar items={autorSidebarPadrao}>
        <section className="panel">
          <div className="perfil-head">
            <img
              alt=""
              className="perfil-avatar-lg"
              height={120}
              src="https://i.pravatar.cc/120?img=2"
              width={120}
            />
            <div>
              <h1>Bruno Lima</h1>
              <p className="note">bruno@email.com</p>
              <p className="note">Vitória / ES — cadastro em 02/03/2025</p>
              <p>Autor de cidade e cultura.</p>
            </div>
          </div>

          {!editando ? (
            <Button type="button" onClick={() => setEditando(true)}>
              Editar perfil
            </Button>
          ) : (
            <form
              className="form-grid"
              onSubmit={(e) => {
                e.preventDefault();
                setEditando(false);
              }}
            >
              <InputField defaultValue="Bruno Lima" id="nome" label="Nome" type="text" />
              <InputField defaultValue="bruno@email.com" id="email" label="E-mail" type="email" />
              <InputField id="bio" label="Bio" multiline defaultValue="Autor de cidade e cultura." />
              <div className="actions">
                <Button type="submit">Salvar</Button>
                <Button type="button" variant="secondary" onClick={() => setEditando(false)}>
                  Cancelar
                </Button>
              </div>
            </form>
          )}
        </section>

        <section className="panel">
          <h2>Meus comentários</h2>
          <ul className="lista-comentarios-perfil">
            {meusComentariosLeitor.map((c) => (
              <li key={c.id}>
                <p className="note">“{c.trecho}”</p>
                <p>
                  <Link to={paths.noticia(c.noticiaId)}>{c.tituloNoticia}</Link> — {c.data}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <h2>Estatísticas do autor</h2>
          <StatsGrid
            className="stats--auto"
            items={[
              { label: "Notícias", value: 12 },
              { label: "Publicadas", value: 8 },
              { label: "Rascunhos", value: 4 },
              { label: "Visualizações", value: "8,6k" },
              { label: "Comentários recebidos", value: 42 },
            ]}
          />
        </section>
      </Sidebar>
    </MainLayout>
  );
}
