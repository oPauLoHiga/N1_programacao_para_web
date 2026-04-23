import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { tags } from "~/data/tags";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function CrudTagsPage() {
  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>CRUD de tags</h1>
          <p className="note">
            <Link className="button" to={paths.adminTagNova}>
              Nova tag
            </Link>
          </p>
        </section>

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Slug</th>
                <th>Acoes</th>
              </tr>
            </thead>
            <tbody>
              {tags.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.nome}</td>
                  <td>{t.slug}</td>
                  <td className="table-actions">
                    <Link className="button secondary" to={paths.adminTagEditar(t.id)}>
                      Editar
                    </Link>
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
