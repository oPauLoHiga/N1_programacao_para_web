import type { Usuario } from "~/types/usuario";

export const usuarios: Usuario[] = [
  {
    id: "1",
    nome: "Ana Souza",
    email: "ana@email.com",
    papel: "leitor",
    cidade: "Brasilia",
    uf: "DF",
    ativo: true,
    avatarUrl: "https://i.pravatar.cc/64?img=1",
    dataCadastro: "10/01/2025",
  },
  {
    id: "2",
    nome: "Bruno Lima",
    email: "bruno@email.com",
    papel: "autor",
    cidade: "Vitoria",
    uf: "ES",
    ativo: true,
    avatarUrl: "https://i.pravatar.cc/64?img=2",
    dataCadastro: "02/03/2025",
  },
  {
    id: "3",
    nome: "Carla Mendes",
    email: "carla@email.com",
    papel: "editor",
    cidade: "Campinas",
    uf: "SP",
    ativo: true,
    avatarUrl: "https://i.pravatar.cc/64?img=5",
    dataCadastro: "18/06/2024",
  },
  {
    id: "4",
    nome: "Davi Admin",
    email: "admin@email.com",
    papel: "superadmin",
    cidade: "Brasilia",
    uf: "DF",
    ativo: true,
    avatarUrl: "https://i.pravatar.cc/64?img=3",
    dataCadastro: "01/01/2024",
  },
];

export function getUsuarioPorId(id: string): Usuario | undefined {
  return usuarios.find((u) => u.id === id);
}

export function contarUsuariosPorPapel(papel: Usuario["papel"]): number {
  return usuarios.filter((u) => u.papel === papel).length;
}
