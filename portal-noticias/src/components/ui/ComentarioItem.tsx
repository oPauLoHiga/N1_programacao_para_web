import type { ReactNode } from "react";
import { Link } from "react-router";

import type { ComentarioRegistro } from "~/types/admin";

import { paths } from "~/lib/paths";

import { StatusBadge } from "./StatusBadge";

type ComentarioItemProps = {
  item: ComentarioRegistro;
  showNoticiaLink?: boolean;
  showStatus?: boolean;
  actions?: ReactNode;
};

export function ComentarioItem({
  item,
  showNoticiaLink = true,
  showStatus = false,
  actions,
}: ComentarioItemProps) {
  const statusMap = {
    aprovado: "aprovado",
    pendente: "pendente",
    rejeitado: "rejeitado",
  } as const;

  return (
    <article className="comentario-item">
      <img alt="" className="comentario-item__avatar" height={48} src={item.avatarUrl} width={48} />
      <div className="comentario-item__main">
        <div className="comentario-item__head">
          <strong>{item.autor}</strong>
          <span className="comentario-item__date">{item.data}</span>
          {showStatus ? (
            <StatusBadge label={item.status} status={statusMap[item.status]} />
          ) : null}
        </div>
        <p className="comentario-item__text">{item.texto}</p>
        {showNoticiaLink ? (
          <p className="note">
            Noticia:{" "}
            <Link to={paths.noticia(item.noticiaId)}>#{item.noticiaId}</Link>
          </p>
        ) : null}
        {actions ? <div className="comentario-item__actions">{actions}</div> : null}
      </div>
    </article>
  );
}
