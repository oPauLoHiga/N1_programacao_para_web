import { Link } from "react-router";

import type { Noticia } from "~/types/noticia";

import { paths } from "~/lib/paths";

type HeroProps = {
  noticia: Noticia;
};

export function Hero({ noticia }: HeroProps) {
  return (
    <section className="hero-banner">
      <img alt="" className="hero-banner__bg" height={300} src={noticia.imagemCapa} width={1200} />
      <div className="hero-banner__overlay" />
      <div className="hero-banner__content container">
        <p className="hero-banner__kicker">Noticia em destaque</p>
        <h1 className="hero-banner__title">{noticia.titulo}</h1>
        <Link className="button hero-banner__cta" to={paths.noticia(noticia.id)}>
          Ler mais
        </Link>
      </div>
    </section>
  );
}
