export function SectionTitle({
  title,
  note,
  level = "h1",
}: {
  title: string;
  note: string;
  level?: "h1" | "h2";
}) {
  const Heading = level;

  return (
    <div className="section-title">
      <Heading>{title}</Heading>
      <p className="note">{note}</p>
    </div>
  );
}
