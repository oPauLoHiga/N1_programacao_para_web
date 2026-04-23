import { MainLayout } from "~/components/layout/MainLayout";
import { Button } from "~/components/ui/Button";
import { NewsCard } from "~/components/ui/NewsCard";
import { SectionTitle } from "~/components/ui/SectionTitle";
import { noticias } from "~/data/noticias";
import { paths } from "~/lib/paths";

export default function HomePage() {
  const destaque = noticias[0];
  const cards = noticias.slice(0, 3);

  return (
    <MainLayout>
      <div className="container">
        <section className="hero">
          <div className="hero-content">
            <p className="note">Destaque principal</p>
            <h1>Portal simples para noticias, leitor, autor, editor e admin</h1>
            <p>React Router v7, dados estaticos em TypeScript, CSS manual.</p>
            <div className="actions">
              <Button to={paths.noticia(destaque.id)}>Ler noticia</Button>
              <Button to={paths.buscaTag(destaque.tags[0] ?? "cidade")} variant="secondary">
                Ver por tag
              </Button>
            </div>
          </div>
        </section>

        <section className="section">
          <SectionTitle
            note="Cards com link para detalhe por id."
            title="Noticias em destaque"
          />
          <div className="grid grid-3">
            {cards.map((n) => (
              <NewsCard
                key={n.id}
                tag={n.tags[0] ?? "geral"}
                title={n.titulo}
                meta={n.meta}
                note={n.resumo}
                linkLabel="Abrir"
                to={paths.noticia(n.id)}
              />
            ))}
          </div>
        </section>

        <section className="section">
          <SectionTitle note="Atalhos para as areas do trabalho." title="Acesso rapido" />
          <div className="grid grid-3">
            <div className="panel">
              <h3>Area publica</h3>
              <p>Login, cadastro, buscas e detalhe da noticia.</p>
              <Button to={paths.login}>Entrar</Button>
            </div>
            <div className="panel">
              <h3>Area do autor</h3>
              <p>Lista e edicao das suas materias.</p>
              <Button to={paths.autorNoticias}>Ir para autor</Button>
            </div>
            <div className="panel">
              <h3>Area admin</h3>
              <p>Painel e cadastros (UFs, cidades, tags, ...).</p>
              <Button to={paths.adminDashboard}>Ir para admin</Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
