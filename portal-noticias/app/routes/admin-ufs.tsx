import { PortalShell, SidebarLayout } from "../components/portal-shell";
import { paths } from "../lib/paths";

const adminSidebar = [
  { label: "Dashboard", to: paths.adminDashboard, end: true },
  { label: "UFs", to: paths.adminUfs, end: true },
  { label: "Cidades", to: paths.adminCities, end: true },
  { label: "Tags", to: paths.adminTags, end: true },
];

export default function AdminUfs() {
  return (
    <PortalShell>
      <SidebarLayout items={adminSidebar}>
        <section className="panel">
          <h1>CRUD de UFs</h1>
          <p className="note">Pagina unica com listagem e formulario simples.</p>
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
              <tr>
                <td>1</td>
                <td>DF</td>
                <td>Distrito Federal</td>
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
                <td>ES</td>
                <td>Espirito Santo</td>
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
          <h2>Salvar ou editar UF</h2>
          <form className="form-row">
            <div className="field">
              <label htmlFor="sigla">Sigla</label>
              <input defaultValue="SP" id="sigla" type="text" />
            </div>
            <div className="field">
              <label htmlFor="nome">Nome</label>
              <input defaultValue="Sao Paulo" id="nome" type="text" />
            </div>
          </form>
          <div className="actions">
            <button className="button" type="button">
              Salvar UF
            </button>
          </div>
        </section>

        <section className="panel" id="apagar">
          <h2>Excluir UF</h2>
          <p>Registro selecionado: ES - Espirito Santo.</p>
          <button className="button danger" type="button">
            Confirmar exclusao
          </button>
        </section>
      </SidebarLayout>
    </PortalShell>
  );
}
