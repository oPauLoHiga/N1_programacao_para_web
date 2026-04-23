import type { Usuario } from "~/types/usuario";

export const usuarios: Usuario[] = [
  { id: "1", nome: "Ana Souza", email: "ana@email.com", papel: "leitor" },
  { id: "2", nome: "Bruno Lima", email: "bruno@email.com", papel: "autor" },
  { id: "3", nome: "Carla Mendes", email: "carla@email.com", papel: "editor" },
  { id: "4", nome: "Davi Admin", email: "admin@email.com", papel: "superadmin" },
];

export function getUsuarioPorId(id: string): Usuario | undefined {
  return usuarios.find((u) => u.id === id);
}
