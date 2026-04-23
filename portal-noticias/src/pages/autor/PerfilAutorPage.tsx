import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { StatsGrid } from "~/components/ui/StatsGrid";
import { autorSidebarPadrao } from "~/lib/autor-nav";

export default function PerfilAutorPage() {
  return (
    <MainLayout>
      <Sidebar items={autorSidebarPadrao}>
        <section className="panel">
          <h1>Perfil do autor</h1>
          <p className="note">Informacoes basicas (mock).</p>
          <h2>Bruno Lima</h2>
          <div className="form-grid">
            <div className="form-row">
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input defaultValue="Bruno Lima" id="nome" type="text" />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input defaultValue="bruno@email.com" id="email" type="email" />
              </div>
            </div>
            <div className="actions">
              <button className="button" type="button">
                Salvar
              </button>
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>Resumo</h2>
          <StatsGrid
            items={[
              { label: "Noticias", value: 12 },
              { label: "Rascunhos", value: 4 },
              { label: "Comentarios", value: 22 },
            ]}
          />
        </section>
      </Sidebar>
    </MainLayout>
  );
}
