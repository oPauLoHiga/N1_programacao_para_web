export type Noticia = {
  id: string;
  titulo: string;
  subtitulo: string;
  slug: string;
  uf: string;
  cidadeNome: string;
  tags: string[];
  resumo: string;
  conteudo: string;
  meta: string;
  autor: string;
  autorBio: string;
  avatarAutorUrl: string;
  imagemCapa: string;
  imagemThumb: string;
  visualizacoes: number;
  publicada: boolean;
};
