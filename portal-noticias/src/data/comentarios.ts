import type { ComentarioRegistro } from "~/types/admin";

function av(i: number) {
  return `https://i.pravatar.cc/48?img=${i}`;
}

export const comentarios: ComentarioRegistro[] = [
  {
    id: "1",
    noticiaId: "1",
    autor: "Ana Souza",
    texto: "Gostei do resumo e quero acompanhar as proximas etapas.",
    data: "18/04/2026",
    status: "aprovado",
    avatarUrl: av(1),
  },
  {
    id: "2",
    noticiaId: "3",
    autor: "Bruno Lima",
    texto: "Seria bom ver mais detalhes por bairro.",
    data: "17/04/2026",
    status: "pendente",
    avatarUrl: av(2),
  },
  {
    id: "3",
    noticiaId: "1",
    autor: "Carla Dias",
    texto: "Excelente materia, muito clara.",
    data: "17/04/2026",
    status: "pendente",
    avatarUrl: av(9),
  },
  {
    id: "4",
    noticiaId: "4",
    autor: "Diego Mota",
    texto: "Quando abrem novas vagas?",
    data: "16/04/2026",
    status: "aprovado",
    avatarUrl: av(11),
  },
];

export function getComentariosPorNoticia(noticiaId: string): ComentarioRegistro[] {
  return comentarios.filter((c) => c.noticiaId === noticiaId);
}

export function getComentariosPendentes(): ComentarioRegistro[] {
  return comentarios.filter((c) => c.status === "pendente");
}
