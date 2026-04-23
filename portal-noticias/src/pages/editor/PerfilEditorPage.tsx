import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { editorSidebar } from "~/lib/editor-nav";

export default function PerfilEditorPage() {
  return (
    <MainLayout>
      <Sidebar items={editorSidebar}>
        <section className="panel">
          <h1>Perfil do editor</h1>
          <p className="note">Carla Mendes — revisao e publicacao.</p>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="nome">Nome</label>
              <input defaultValue="Carla Mendes" id="nome" type="text" />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input defaultValue="carla@email.com" id="email" type="email" />
            </div>
            <div className="actions">
              <button className="button" type="button">
                Salvar
              </button>
            </div>
          </div>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
