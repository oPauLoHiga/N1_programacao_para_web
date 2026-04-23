import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { perfis } from "~/data/perfis";
import { adminSidebar } from "~/lib/admin-nav";

export default function CrudPerfisPage() {
  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>CRUD de perfis</h1>
          <p className="note">Somente leitura dos mocks.</p>
        </section>

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descricao</th>
              </tr>
            </thead>
            <tbody>
              {perfis.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.nome}</td>
                  <td>{p.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
