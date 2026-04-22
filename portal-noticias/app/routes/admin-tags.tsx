import { PortalShell, SidebarLayout } from "../components/portal-shell";
import { paths } from "../lib/paths";

const adminSidebar = [
  { label: "Dashboard", to: paths.adminDashboard, end: true },
  { label: "UFs", to: paths.adminUfs, end: true },
  { label: "Cidades", to: paths.adminCities, end: true },
  { label: "Tags", to: paths.adminTags, end: true },
];

export default function AdminTags() {
  return (
    <PortalShell>
      <SidebarLayout items={adminSidebar}>
        <section className="panel">
          <h1>CRUD de tags</h1>
          <p className="note">Categorias usadas para organizar as materias.</p>
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
              <tr>
                <td>1</td>
                <td>Saude</td>
                <td>saude</td>
                <td className="table-actions">
                  <a className="button secondary" href="#editar">
                    Editar
                  </a>
                  <a className="button secondary" href="#apagar">
                    Excluir
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Tecnologia</td>
                <td>tecnologia</td>
                <td className="table-actions">
                  <a className="button secondary" href="#editar">
                    Editar
                  </a>
                  <a className="button secondary" href="#apagar">
                    Excluir
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="panel" id="editar">
          <h2>Salvar ou editar tag</h2>
          <form className="form-row">
            <div className="field">
              <label htmlFor="nome-tag">Nome</label>
              <input defaultValue="Politica" id="nome-tag" type="text" />
            </div>
            <div className="field">
              <label htmlFor="slug-tag">Slug</label>
              <input defaultValue="politica" id="slug-tag" type="text" />
            </div>
          </form>
          <div className="actions">
            <button className="button" type="button">
              Salvar tag
            </button>
          </div>
        </section>

        <section className="panel" id="apagar">
          <h2>Excluir tag</h2>
          <p>Registro selecionado: Tecnologia.</p>
          <button className="button danger" type="button">
            Confirmar exclusao
          </button>
        </section>
      </SidebarLayout>
    </PortalShell>
  );
}
