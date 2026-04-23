import { contarUsuariosPorPapel } from "./usuarios";

export type PerfilCard = {
  id: string;
  nome: string;
  descricao: string;
  cor: string;
  papel: "leitor" | "autor" | "editor" | "superadmin";
};

export const perfisCards: PerfilCard[] = [
  {
    id: "1",
    nome: "Leitor",
    descricao: "Acessa feed, comenta e salva noticias.",
    cor: "perfil-card--leitor",
    papel: "leitor",
  },
  {
    id: "2",
    nome: "Autor",
    descricao: "Cria e edita proprias materias.",
    cor: "perfil-card--autor",
    papel: "autor",
  },
  {
    id: "3",
    nome: "Editor",
    descricao: "Publica, revisa e modera conteudo.",
    cor: "perfil-card--editor",
    papel: "editor",
  },
  {
    id: "4",
    nome: "Superadmin",
    descricao: "Gestao completa do portal e cadastros.",
    cor: "perfil-card--admin",
    papel: "superadmin",
  },
];

export function getPerfilCardsComContagem() {
  return perfisCards.map((p) => ({
    ...p,
    quantidade: contarUsuariosPorPapel(p.papel),
  }));
}
