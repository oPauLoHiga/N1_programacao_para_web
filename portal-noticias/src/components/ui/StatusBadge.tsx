type Status =
  | "publicada"
  | "rascunho"
  | "pendente"
  | "aprovado"
  | "rejeitado"
  | "ativo"
  | "inativo";

const map: Record<Status, string> = {
  publicada: "status-badge status-badge--ok",
  rascunho: "status-badge status-badge--muted",
  pendente: "status-badge status-badge--warn",
  aprovado: "status-badge status-badge--ok",
  rejeitado: "status-badge status-badge--bad",
  ativo: "status-badge status-badge--ok",
  inativo: "status-badge status-badge--muted",
};

export function StatusBadge({ status, label }: { status: Status; label?: string }) {
  const cls = map[status];
  const text =
    label ??
    (status === "publicada"
      ? "Publicada"
      : status === "rascunho"
        ? "Rascunho"
        : status === "pendente"
          ? "Pendente"
          : status === "aprovado"
            ? "Aprovado"
            : status === "ativo"
              ? "Ativo"
              : status === "inativo"
                ? "Inativo"
                : "Rejeitado");

  return <span className={cls}>{text}</span>;
}
