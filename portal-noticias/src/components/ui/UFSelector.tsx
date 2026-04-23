import type { UfRegistro } from "~/types/admin";

type UFSelectorProps = {
  ufs: UfRegistro[];
  value: string;
  onChange: (sigla: string) => void;
  label?: string;
  id?: string;
};

export function UFSelector({
  ufs,
  value,
  onChange,
  label = "Filtrar por UF",
  id = "uf-selector",
}: UFSelectorProps) {
  return (
    <div className="field uf-selector">
      <label htmlFor={id}>{label}</label>
      <select
        className="uf-selector__select"
        id={id}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        <option value="">Todas</option>
        {ufs.map((u) => (
          <option key={u.id} value={u.sigla}>
            {u.sigla} — {u.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
