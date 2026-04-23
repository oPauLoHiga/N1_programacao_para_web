import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { cidades } from "~/data/cidades";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function CrudCidadesPage() {
  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>CRUD de cidades</h1>
          <p className="note">
            <Link className="button" to={paths.adminCidadeNova}>
              Nova cidade
            </Link>
          </p>
        </section>

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cidade</th>
                <th>UF</th>
                <th>Acoes</th>
              </tr>
            </thead>
            <tbody>
              {cidades.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.nome}</td>
                  <td>{c.uf}</td>
                  <td className="table-actions">
                    <Link className="button secondary" to={paths.adminCidadeEditar(c.id)}>
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
