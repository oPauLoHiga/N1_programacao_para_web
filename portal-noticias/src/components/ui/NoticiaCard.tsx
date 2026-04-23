import { Link } from "react-router";

import type { Noticia } from "~/types/noticia";

import { TagBadge } from "./TagBadge";

type NoticiaCardProps = {
  noticia: Noticia;
  preview?: boolean;
};

export function NoticiaCard({ noticia, preview = false }: NoticiaCardProps) {
  const body = (
    <>
      <div className="noticia-card__img-wrap">
        <img
          alt=""
          className="noticia-card__img"
          height={140}
          src={noticia.imagemThumb}
          width={200}
        />
      </div>
      <div className="noticia-card__body">
        <h3 className="noticia-card__title">{noticia.titulo}</h3>
        <p className="noticia-card__sub">{noticia.subtitulo}</p>
        <p className="noticia-card__meta">
          <span>{noticia.autor}</span>
          <span> · </span>
          <span>{noticia.meta}</span>
        </p>
        <div className="noticia-card__tags">
          {noticia.tags.map((t) => (
            <TagBadge key={t} slug={t} />
          ))}
        </div>
      </div>
    </>
  );

  if (preview) {
    return (
      <div className="noticia-card">
        {body}
      </div>
    );
  }

  return (
    <Link className="noticia-card" to={`/noticia/${noticia.id}`}>
      {body}
    </Link>
  );
}
