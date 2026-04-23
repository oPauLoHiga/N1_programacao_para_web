import type { Noticia } from "~/types/noticia";

function capa(id: string) {
  return `https://picsum.photos/seed/capa${id}/960/540`;
}

function thumb(id: string) {
  return `https://picsum.photos/seed/thumb${id}/200/140`;
}

function avatar(seed: number) {
  return `https://i.pravatar.cc/80?img=${seed}`;
}

export const noticias: Noticia[] = [
  {
    id: "1",
    titulo: "Plano de mobilidade prioriza transporte publico nos bairros centrais",
    subtitulo: "Corredores prioritarios e integracao entre modais",
    slug: "mobilidade",
    uf: "DF",
    cidadeNome: "Brasilia",
    tags: ["cidade", "mobilidade"],
    resumo:
      "A prefeitura apresentou um plano com novas rotas de onibus e ajustes em vias de maior circulacao.",
    conteudo: `A prefeitura apresentou um plano com novas rotas de onibus, travessias e ajustes em vias de maior circulacao. O foco da proposta e reduzir tempo de deslocamento e melhorar a integracao entre bairros.

Segundo a equipe tecnica, a primeira fase vai atender corredores com maior fluxo diario. As proximas etapas incluem consulta publica, calendario de obras e revisao dos pontos de parada.

O projeto tambem preve ciclovias de conexao e melhorias em pontos de acesso para pedestres.`,
    meta: "18/04/2026",
    autor: "Redacao",
    autorBio: "Equipe editorial do portal com foco em politicas urbanas.",
    avatarAutorUrl: avatar(12),
    imagemCapa: capa("1"),
    imagemThumb: thumb("1"),
    visualizacoes: 1240,
    publicada: true,
  },
  {
    id: "2",
    titulo: "Unidades ampliam o horario de atendimento",
    subtitulo: "Fins de semana com plantao estendido",
    slug: "saude-atendimento",
    uf: "GO",
    cidadeNome: "Goiania",
    tags: ["saude"],
    resumo: "Postos vao atender em horario estendido em varias regioes.",
    conteudo:
      "As unidades de saude ampliam o atendimento aos finais de semana para reduzir filas e melhorar o acesso.",
    meta: "17/04/2026",
    autor: "Marina Costa",
    autorBio: "Jornalista de saude publica.",
    avatarAutorUrl: avatar(5),
    imagemCapa: capa("2"),
    imagemThumb: thumb("2"),
    visualizacoes: 890,
    publicada: true,
  },
  {
    id: "3",
    titulo: "Festival ocupa espacos publicos durante tres dias",
    subtitulo: "Musica, teatro e gastronomia gratuitos",
    slug: "festival-cultura",
    uf: "ES",
    cidadeNome: "Vila Velha",
    tags: ["cultura", "cidade"],
    resumo: "Programacao gratuita com musica, teatro e gastronomia.",
    conteudo:
      "O festival ocupa pracas e centros culturais com programacao gratuita para toda a familia.",
    meta: "15/04/2026",
    autor: "Joao Alves",
    autorBio: "Cobertura de cultura e eventos.",
    avatarAutorUrl: avatar(8),
    imagemCapa: capa("3"),
    imagemThumb: thumb("3"),
    visualizacoes: 430,
    publicada: false,
  },
  {
    id: "4",
    titulo: "Oficinas digitais comecam na proxima semana",
    subtitulo: "Vagas para iniciantes em programacao",
    slug: "oficinas-digitais",
    uf: "ES",
    cidadeNome: "Vitoria",
    tags: ["tecnologia"],
    resumo: "Programacao, seguranca e edicao em uma grade introdutoria.",
    conteudo:
      "Laboratorio abre oficinas digitais para a comunidade com foco em programacao e seguranca.",
    meta: "16/04/2026",
    autor: "Equipe Tech",
    autorBio: "Conteudo de tecnologia e inovacao.",
    avatarAutorUrl: avatar(3),
    imagemCapa: capa("4"),
    imagemThumb: thumb("4"),
    visualizacoes: 2100,
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

export function getNoticiasRecentes(excluirId?: string, limite = 5): Noticia[] {
  return noticias.filter((n) => n.id !== excluirId).slice(0, limite);
}

export function contarNoticiasPorTag(): { tag: string; count: number }[] {
  const map = new Map<string, number>();
  for (const n of noticias) {
    for (const t of n.tags) {
      map.set(t, (map.get(t) ?? 0) + 1);
    }
  }
  return [...map.entries()].map(([tag, count]) => ({ tag, count }));
}

export function contarNoticiasPorMesMock(): { mes: string; count: number }[] {
  return [
    { mes: "Nov", count: 4 },
    { mes: "Dez", count: 7 },
    { mes: "Jan", count: 5 },
    { mes: "Fev", count: 8 },
    { mes: "Mar", count: 6 },
    { mes: "Abr", count: 9 },
  ];
}

export function getAllTagsUnicos(): string[] {
  const s = new Set<string>();
  for (const n of noticias) {
    for (const t of n.tags) s.add(t);
  }
  return [...s].sort();
}

export function contarNoticiasPorCidade(nome: string): number {
  return noticias.filter((n) => n.cidadeNome === nome).length;
}
