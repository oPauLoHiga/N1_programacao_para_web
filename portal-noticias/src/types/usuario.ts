export type Usuario = {
  id: string;
  nome: string;
  email: string;
  papel: "leitor" | "autor" | "editor" | "superadmin";
  cidade: string;
  uf: string;
  ativo: boolean;
  avatarUrl: string;
  dataCadastro: string;
};
