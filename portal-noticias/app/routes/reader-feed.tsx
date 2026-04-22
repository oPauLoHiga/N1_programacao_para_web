import { NewsCard } from "../components/news-card";
import { PortalShell, SectionTitle, SidebarLayout } from "../components/portal-shell";
import { paths } from "../lib/paths";

const readerSidebar = [
  { label: "Meu feed", to: paths.readerFeed, end: true },
  { label: "Meu perfil", to: paths.readerProfile, end: true },
  { label: "Noticias publicas", to: paths.news },
  { label: "Sair", to: paths.login, end: true },
];

const savedNews = [
  {
    tag: "Saude",
    title: "Atendimento ampliado em unidades de referencia",
    meta: "Salva para leitura posterior",
  },
  {
    tag: "Tecnologia",
    title: "Oficinas digitais tem novas vagas disponiveis",
    meta: "Tema acompanhado pelo leitor",
  },
];

export default function ReaderFeed() {
  return (
    <PortalShell>
      <SidebarLayout items={readerSidebar}>
        <SectionTitle note="Noticias recentes e acessos salvos." title="Feed do leitor" />

        <div className="grid grid-2">
          {savedNews.map((item) => (
            <NewsCard
              key={item.title}
              {...item}
              linkLabel="Abrir noticia"
              to={paths.article}
            />
          ))}
        </div>

        <section className="panel">
          <h2>Comentarios recentes</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Noticia</th>
                  <th>Comentario</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Plano de mobilidade prioriza transporte publico</td>
                  <td>Gostei do resumo e quero acompanhar as proximas etapas.</td>
                  <td>18/04/2026</td>
                </tr>
                <tr>
                  <td>Festival ocupa espacos publicos</td>
                  <td>Seria bom ver mais detalhes por bairro.</td>
                  <td>17/04/2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </SidebarLayout>
    </PortalShell>
  );
}
