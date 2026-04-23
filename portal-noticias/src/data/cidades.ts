import type { CidadeRegistro } from "~/types/admin";

export const cidades: CidadeRegistro[] = [
  { id: "1", nome: "Brasilia", uf: "DF" },
  { id: "2", nome: "Vitoria", uf: "ES" },
  { id: "3", nome: "Campinas", uf: "SP" },
];

export function getCidadePorId(id: string): CidadeRegistro | undefined {
  return cidades.find((c) => c.id === id);
}

export function contarCidadesPorUf(sigla: string): number {
  return cidades.filter((c) => c.uf.toUpperCase() === sigla.toUpperCase()).length;
}

export function getCidadesPorUf(sigla: string): CidadeRegistro[] {
  return cidades.filter((c) => c.uf.toUpperCase() === sigla.toUpperCase());
}
