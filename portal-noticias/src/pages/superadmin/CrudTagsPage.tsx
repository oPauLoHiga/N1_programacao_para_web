import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { TagBadge } from "~/components/ui/TagBadge";
import { noticias } from "~/data/noticias";
import { tags } from "~/data/tags";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

function contarPorSlug(slug: string) {
  return noticias.filter((n) => n.tags.some((t) => t.toLowerCase() === slug.toLowerCase())).length;
}

export default function CrudTagsPage() {
  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <div className="panel perfil-head" style={{ justifyContent: "space-between" }}>
          <h1 style={{ margin: 0 }}>Tags</h1>
          <Button to={paths.adminTagNova}>+ Nova tag</Button>
        </div>

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Slug</th>
                <th>Qtd. notícias</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {tags.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>
                    <TagBadge label={t.nome} slug={t.slug} />
                  </td>
                  <td>{t.slug}</td>
                  <td>{contarPorSlug(t.slug)}</td>
                  <td className="table-actions">
                    <Link className="button secondary" to={paths.adminTagEditar(t.id)}>
                      Editar
                    </Link>
                    <button className="button danger" type="button">
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
