import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { ufs } from "~/data/ufs";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function CrudUFPage() {
  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>CRUD de UFs</h1>
          <p className="note">
            <Link className="button" to={paths.adminUfNova}>
              Nova UF
            </Link>
          </p>
        </section>

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Sigla</th>
                <th>Nome</th>
                <th>Acoes</th>
              </tr>
            </thead>
            <tbody>
              {ufs.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.sigla}</td>
                  <td>{u.nome}</td>
                  <td className="table-actions">
                    <Link className="button secondary" to={paths.adminUfEditar(u.id)}>
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
