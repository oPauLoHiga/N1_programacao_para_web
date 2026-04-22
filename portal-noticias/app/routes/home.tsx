import { Link } from "react-router";

import { NewsCard } from "../components/news-card";
import { PortalShell, SectionTitle } from "../components/portal-shell";
import { paths } from "../lib/paths";

const featuredNews = [
  {
    tag: "Saude",
    title: "Unidades ampliam atendimento no fim de semana",
    meta: "Brasilia - 18/04/2026",
    note: "Postos vao atender em horario estendido em varias regioes.",
  },
  {
    tag: "Tecnologia",
    title: "Laboratorio abre oficinas digitais para a comunidade",
    meta: "Vitoria - 17/04/2026",
    note: "Programacao, seguranca e edicao em uma grade introdutoria.",
  },
  {
    tag: "Cultura",
    title: "Festival ocupa pracas e centros culturais da cidade",
    meta: "Vila Velha - 16/04/2026",
    note: "Programacao gratuita com musica, teatro e gastronomia.",
  },
];

export default function Home() {
  return (
    <PortalShell>
      <div className="container">
        <section className="hero">
          <div className="hero-content">
            <p className="note">Destaque principal</p>
            <h1>Portal simples para noticias, leitor, autor e superadmin</h1>
            <p>Projeto em React Router com visual basico, limpo e sem imagens.</p>
            <div className="actions">
              <Link className="button" to={paths.article}>
                Ler noticia
              </Link>
              <Link className="button secondary" to={paths.news}>
                Ver todas
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <SectionTitle
            note="Cards simples com resumo, data e link."
            title="Noticias em destaque"
          />
          <div className="grid grid-3">
            {featuredNews.map((item) => (
              <NewsCard key={item.title} {...item} linkLabel="Abrir" to={paths.article} />
            ))}
          </div>
        </section>

        <section className="section">
          <SectionTitle note="Atalhos para as areas do trabalho." title="Acesso rapido" />
          <div className="grid grid-3">
            <div className="panel">
              <h3>Area publica</h3>
              <p>Login, cadastro, listagem e detalhe da noticia.</p>
              <Link className="button" to={paths.login}>
                Entrar
              </Link>
            </div>
            <div className="panel">
              <h3>Area do autor</h3>
              <p>Lista de noticias e pagina de CRUD simples.</p>
              <Link className="button" to={paths.authorNews}>
                Ir para autor
              </Link>
            </div>
            <div className="panel">
              <h3>Area do superadmin</h3>
              <p>Painel geral e paginas de UFs, cidades e tags.</p>
              <Link className="button" to={paths.adminDashboard}>
                Ir para painel
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PortalShell>
  );
}
