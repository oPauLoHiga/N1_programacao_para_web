import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { TagBadge } from "~/components/ui/TagBadge";
import { getTagPorId } from "~/data/tags";
import { adminSidebar } from "~/lib/admin-nav";
import { slugify } from "~/lib/slugify";
import { paths } from "~/lib/paths";

export default function FormTagPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const registro = id ? getTagPorId(id) : undefined;
  const [nome, setNome] = useState(registro?.nome ?? "");

  const slugPreview = useMemo(() => slugify(nome), [nome]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.adminTags);
  }

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>{id ? "Editar tag" : "Nova tag"}</h1>
          <form className="form-grid form-tag-row" onSubmit={handleSubmit}>
            <div>
              <InputField id="nome" label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
              <p className="note">
                Slug gerado: <strong>{slugPreview || "—"}</strong>
              </p>
              <div className="actions">
                <Button type="submit">Salvar</Button>
                <Button to={paths.adminTags} variant="secondary">
                  Cancelar
                </Button>
              </div>
            </div>
            <div>
              <p className="note">Preview</p>
              <TagBadge label={nome || "Nome"} slug={slugPreview || "slug"} />
            </div>
          </form>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
