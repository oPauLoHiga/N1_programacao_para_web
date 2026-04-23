import type { UfRegistro } from "~/types/admin";

export const ufs: UfRegistro[] = [
  { id: "1", sigla: "DF", nome: "Distrito Federal" },
  { id: "2", sigla: "ES", nome: "Espirito Santo" },
  { id: "3", sigla: "SP", nome: "Sao Paulo" },
];

export function getUfPorId(id: string): UfRegistro | undefined {
  return ufs.find((u) => u.id === id);
}
