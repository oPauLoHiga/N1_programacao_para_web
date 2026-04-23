import type { TagRegistro } from "~/types/admin";

export const tags: TagRegistro[] = [
  { id: "1", nome: "Saude", slug: "saude" },
  { id: "2", nome: "Tecnologia", slug: "tecnologia" },
  { id: "3", nome: "Politica", slug: "politica" },
];

export function getTagPorId(id: string): TagRegistro | undefined {
  return tags.find((t) => t.id === id);
}
