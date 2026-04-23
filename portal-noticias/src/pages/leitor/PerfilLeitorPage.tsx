import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { StatsGrid } from "~/components/ui/StatsGrid";
import { leitorSidebarPerfil } from "~/lib/leitor-nav";

export default function PerfilLeitorPage() {
  return (
    <MainLayout>
      <Sidebar items={leitorSidebarPerfil}>
        <section className="panel">
          <h1>Perfil do leitor</h1>
          <p className="note">Dados mockados (sem backend).</p>
          <h2>Ana Souza</h2>
          <div className="form-grid">
            <div className="form-row">
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input defaultValue="Ana Souza" id="nome" type="text" />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input defaultValue="ana@email.com" id="email" type="email" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="bio">Bio</label>
              <textarea
                defaultValue="Leitora interessada em cidade, saude e tecnologia."
                id="bio"
              />
            </div>
            <div className="actions">
              <button className="button" type="button">
                Salvar
              </button>
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>Interacoes</h2>
          <StatsGrid
            items={[
              { label: "Comentarios", value: 8 },
              { label: "Noticias salvas", value: 5 },
              { label: "Categorias", value: 4 },
              { label: "Ultimo acesso", value: "Hoje" },
            ]}
          />
        </section>
      </Sidebar>
    </MainLayout>
  );
}
