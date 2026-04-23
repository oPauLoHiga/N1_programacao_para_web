import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { usuarios } from "~/data/usuarios";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function CrudUsuariosPage() {
  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>CRUD de usuarios</h1>
        </section>

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Papel</th>
                <th>Acoes</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.nome}</td>
                  <td>{u.email}</td>
                  <td>{u.papel}</td>
                  <td className="table-actions">
                    <Link className="button secondary" to={paths.adminUsuarioEditar(u.id)}>
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
