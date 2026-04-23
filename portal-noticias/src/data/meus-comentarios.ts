export type MeuComentario = {
  id: string;
  trecho: string;
  noticiaId: string;
  tituloNoticia: string;
  data: string;
};

export const meusComentariosLeitor: MeuComentario[] = [
  {
    id: "1",
    trecho: "Gostei do resumo e quero acompanhar...",
    noticiaId: "1",
    tituloNoticia: "Plano de mobilidade prioriza transporte publico",
    data: "18/04/2026",
  },
  {
    id: "2",
    trecho: "Seria bom ver mais detalhes por bairro.",
    noticiaId: "3",
    tituloNoticia: "Festival ocupa espacos publicos",
    data: "17/04/2026",
  },
];
