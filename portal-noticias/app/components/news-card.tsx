import { Link } from "react-router";

type NewsCardProps = {
  tag: string;
  title: string;
  meta?: string;
  note?: string;
  to: string;
  linkLabel: string;
};

export function NewsCard({
  tag,
  title,
  meta,
  note,
  to,
  linkLabel,
}: NewsCardProps) {
  return (
    <article className="card">
      <div className="card-body">
        <div className="tag-row">
          <span className="tag">{tag}</span>
        </div>
        <h3>{title}</h3>
        {meta ? <p className="meta">{meta}</p> : null}
        {note ? <p className="note">{note}</p> : null}
        <Link className="button secondary" to={to}>
          {linkLabel}
        </Link>
      </div>
    </article>
  );
}
