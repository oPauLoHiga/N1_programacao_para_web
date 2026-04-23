import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { noticias } from "~/data/noticias";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function CrudNoticiasPage() {
  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>CRUD de noticias (admin)</h1>
        </section>

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>UF</th>
                <th>Publicada</th>
                <th>Acoes</th>
              </tr>
            </thead>
            <tbody>
              {noticias.map((n) => (
                <tr key={n.id}>
                  <td>{n.id}</td>
                  <td>{n.titulo}</td>
                  <td>{n.uf}</td>
                  <td>{n.publicada ? "Sim" : "Nao"}</td>
                  <td className="table-actions">
                    <Link className="button secondary" to={paths.adminNoticiaEditar(n.id)}>
                      Editar
                    </Link>
                    <Link className="button secondary" to={paths.noticia(n.id)}>
                      Ver publico
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
