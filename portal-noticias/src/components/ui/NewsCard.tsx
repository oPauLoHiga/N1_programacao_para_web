import { Card, CardBody } from "./Card";
import { Button } from "./Button";

type NewsCardProps = {
  tag: string;
  title: string;
  meta?: string;
  note?: string;
  to: string;
  linkLabel: string;
};

export function NewsCard({ tag, title, meta, note, to, linkLabel }: NewsCardProps) {
  return (
    <Card>
      <CardBody>
        <div className="tag-row">
          <span className="tag">{tag}</span>
        </div>
        <h3>{title}</h3>
        {meta ? <p className="meta">{meta}</p> : null}
        {note ? <p className="note">{note}</p> : null}
        <Button to={to} variant="secondary">
          {linkLabel}
        </Button>
      </CardBody>
    </Card>
  );
}
