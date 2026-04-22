import { NewsCard } from "../components/news-card";
import { PortalShell, SectionTitle } from "../components/portal-shell";
import { paths } from "../lib/paths";

const newsList = [
  {
    tag: "Cidade",
    title: "Plano de mobilidade prioriza transporte publico",
    meta: "Brasilia - 18/04/2026",
  },
  {
    tag: "Saude",
    title: "Unidades ampliam o horario de atendimento",
    meta: "Goiania - 17/04/2026",
  },
  {
    tag: "Tecnologia",
    title: "Oficinas digitais comecam na proxima semana",
    meta: "Vitoria - 16/04/2026",
  },
  {
    tag: "Cultura",
    title: "Festival ocupa espacos publicos durante tres dias",
    meta: "Vila Velha - 15/04/2026",
  },
];

export default function PublicNews() {
  return (
    <PortalShell>
      <div className="container">
        <SectionTitle
          note="Lista basica de materias com cards e links para leitura."
          title="Noticias publicas"
        />

        <section className="grid grid-3">
          {newsList.map((item) => (
            <NewsCard
              key={item.title}
              {...item}
              linkLabel="Ler noticia"
              to={paths.article}
            />
          ))}
        </section>
      </div>
    </PortalShell>
  );
}
