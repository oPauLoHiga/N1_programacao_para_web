import type { Noticia } from "~/types/noticia";

export const noticias: Noticia[] = [
  {
    id: "1",
    titulo: "Plano de mobilidade prioriza transporte publico nos bairros centrais",
    slug: "mobilidade",
    uf: "DF",
    tags: ["cidade", "mobilidade"],
    resumo:
      "A prefeitura apresentou um plano com novas rotas de onibus e ajustes em vias de maior circulacao.",
    conteudo: `A prefeitura apresentou um plano com novas rotas de onibus, travessias e ajustes em vias de maior circulacao. O foco da proposta e reduzir tempo de deslocamento e melhorar a integracao entre bairros.

Segundo a equipe tecnica, a primeira fase vai atender corredores com maior fluxo diario. As proximas etapas incluem consulta publica, calendario de obras e revisao dos pontos de parada.

O projeto tambem preve ciclovias de conexao e melhorias em pontos de acesso para pedestres.`,
    meta: "Brasilia - 18/04/2026",
    autor: "Redacao",
    publicada: true,
  },
  {
    id: "2",
    titulo: "Unidades ampliam o horario de atendimento",
    slug: "saude-atendimento",
    uf: "GO",
    tags: ["saude"],
    resumo: "Postos vao atender em horario estendido em varias regioes.",
    conteudo:
      "As unidades de saude ampliam o atendimento aos finais de semana para reduzir filas e melhorar o acesso.",
    meta: "Goiania - 17/04/2026",
    autor: "Redacao",
    publicada: true,
  },
  {
    id: "3",
    titulo: "Festival ocupa espacos publicos durante tres dias",
    slug: "festival-cultura",
    uf: "ES",
    tags: ["cultura", "cidade"],
    resumo: "Programacao gratuita com musica, teatro e gastronomia.",
    conteudo:
      "O festival ocupa pracas e centros culturais com programacao gratuita para toda a familia.",
    meta: "Vila Velha - 15/04/2026",
    autor: "Redacao",
    publicada: false,
  },
  {
    id: "4",
    titulo: "Oficinas digitais comecam na proxima semana",
    slug: "oficinas-digitais",
    uf: "ES",
    tags: ["tecnologia"],
    resumo: "Programacao, seguranca e edicao em uma grade introdutoria.",
    conteudo:
      "Laboratorio abre oficinas digitais para a comunidade com foco em programacao e seguranca.",
    meta: "Vitoria - 16/04/2026",
    autor: "Redacao",
    publicada: true,
  },
];

export function getNoticiaPorId(id: string): Noticia | undefined {
  return noticias.find((n) => n.id === id);
}

export function getNoticiasPorUf(sigla: string): Noticia[] {
  return noticias.filter((n) => n.uf.toUpperCase() === sigla.toUpperCase());
}

export function getNoticiasPorTagSlug(slug: string): Noticia[] {
  return noticias.filter((n) =>
    n.tags.some((t) => t.toLowerCase() === slug.toLowerCase()),
  );
}
