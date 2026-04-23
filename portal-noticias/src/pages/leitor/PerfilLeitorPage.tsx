import { useState } from "react";
import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { StatsGrid } from "~/components/ui/StatsGrid";
import { meusComentariosLeitor } from "~/data/meus-comentarios";
import { leitorSidebarPerfil } from "~/lib/leitor-nav";
import { paths } from "~/lib/paths";

export default function PerfilLeitorPage() {
  const [editando, setEditando] = useState(false);

  return (
    <MainLayout>
      <Sidebar items={leitorSidebarPerfil}>
        <section className="panel">
          <div className="perfil-head">
            <img
              alt=""
              className="perfil-avatar-lg"
              height={120}
              src="https://i.pravatar.cc/120?img=1"
              width={120}
            />
            <div>
              <h1>Ana Souza</h1>
              <p className="note">ana@email.com</p>
              <p className="note">
                Brasília / DF — cadastro em 10/01/2025
              </p>
              <p>Leitora interessada em cidade, saúde e tecnologia.</p>
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
              <InputField defaultValue="Ana Souza" id="nome" label="Nome" type="text" />
              <InputField defaultValue="ana@email.com" id="email" label="E-mail" type="email" />
              <InputField id="bio" label="Bio" multiline defaultValue="Leitora interessada em cidade, saude e tecnologia." />
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
          <h2>Resumo</h2>
          <StatsGrid
            items={[
              { label: "Comentários", value: 8 },
              { label: "Notícias salvas", value: 5 },
              { label: "Categorias", value: 4 },
              { label: "Último acesso", value: "Hoje" },
            ]}
          />
        </section>
      </Sidebar>
    </MainLayout>
  );
}
