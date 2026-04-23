import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { getNoticiaPorId, noticias } from "~/data/noticias";
import { usuarios } from "~/data/usuarios";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function FormNoticiaAdminPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const noticia = getNoticiaPorId(id);
  const autores = [...new Set([...usuarios.map((u) => u.nome), ...noticias.map((n) => n.autor)])];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.adminNoticias);
  }

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>Editar notícia (admin)</h1>
          {!noticia ? (
            <p className="note">Notícia não encontrada.</p>
          ) : (
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="autor">Autor (reatribuir)</label>
                <select defaultValue={noticia.autor} id="autor" name="autor">
                  {autores.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
              <InputField defaultValue={noticia.titulo} id="titulo" label="Título" />
              <InputField id="conteudo" label="Conteúdo" multiline defaultValue={noticia.conteudo} />
              <div className="actions">
                <Button type="submit">Salvar</Button>
                <Button to={paths.adminNoticias} variant="secondary">
                  Cancelar
                </Button>
              </div>
            </form>
          )}
        </section>
      </Sidebar>
    </MainLayout>
  );
}
