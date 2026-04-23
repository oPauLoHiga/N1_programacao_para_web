export type UfRegistro = {
  id: string;
  sigla: string;
  nome: string;
};

export type CidadeRegistro = {
  id: string;
  nome: string;
  uf: string;
};

export type TagRegistro = {
  id: string;
  nome: string;
  slug: string;
};

export type ComentarioRegistro = {
  id: string;
  noticiaId: string;
  autor: string;
  texto: string;
  data: string;
  status: "aprovado" | "pendente" | "rejeitado";
  avatarUrl: string;
};
