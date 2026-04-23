import type { PerfilRegistro } from "~/types/admin";

export const perfis: PerfilRegistro[] = [
  { id: "1", nome: "Leitor", descricao: "Acesso ao feed e comentarios." },
  { id: "2", nome: "Autor", descricao: "Cria e edita proprias noticias." },
  { id: "3", nome: "Editor", descricao: "Publica e revisa noticias." },
  { id: "4", nome: "Superadmin", descricao: "Gestao global do portal." },
];
