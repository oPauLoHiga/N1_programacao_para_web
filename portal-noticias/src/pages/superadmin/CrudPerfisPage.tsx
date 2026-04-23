import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { getPerfilCardsComContagem } from "~/data/perfis";
import { adminSidebar } from "~/lib/admin-nav";

export default function CrudPerfisPage() {
  const cards = getPerfilCardsComContagem();

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <h1>Perfis (somente leitura)</h1>
        <p className="note">Sem criar, editar ou excluir — apenas visualização.</p>

        <div className="grid grid-3">
          {cards.map((p) => (
            <div className={`perfil-card ${p.cor}`} key={p.id}>
              <h3>{p.nome}</h3>
              <p className="note">{p.descricao}</p>
              <p>
                <strong>{p.quantidade}</strong> usuários
              </p>
            </div>
          ))}
        </div>
      </Sidebar>
    </MainLayout>
  );
}
