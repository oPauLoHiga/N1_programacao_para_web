import { PortalShell, SidebarLayout } from "../components/portal-shell";
import { paths } from "../lib/paths";

const adminSidebar = [
  { label: "Dashboard", to: paths.adminDashboard, end: true },
  { label: "UFs", to: paths.adminUfs, end: true },
  { label: "Cidades", to: paths.adminCities, end: true },
  { label: "Tags", to: paths.adminTags, end: true },
];

export default function AdminCities() {
  return (
    <PortalShell>
      <SidebarLayout items={adminSidebar}>
        <section className="panel">
          <h1>CRUD de cidades</h1>
          <p className="note">Cadastro simples com nome da cidade e UF.</p>
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
              <tr>
                <td>1</td>
                <td>Brasilia</td>
                <td>DF</td>
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
                <td>Vitoria</td>
                <td>ES</td>
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
          <h2>Salvar ou editar cidade</h2>
          <form className="form-row">
            <div className="field">
              <label htmlFor="cidade">Cidade</label>
              <input defaultValue="Campinas" id="cidade" type="text" />
            </div>
            <div className="field">
              <label htmlFor="uf">UF</label>
              <input defaultValue="SP" id="uf" type="text" />
            </div>
          </form>
          <div className="actions">
            <button className="button" type="button">
              Salvar cidade
            </button>
          </div>
        </section>

        <section className="panel" id="apagar">
          <h2>Excluir cidade</h2>
          <p>Registro selecionado: Vitoria - ES.</p>
          <button className="button danger" type="button">
            Confirmar exclusao
          </button>
        </section>
      </SidebarLayout>
    </PortalShell>
  );
}
