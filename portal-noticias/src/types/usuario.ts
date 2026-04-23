export type Usuario = {
  id: string;
  nome: string;
  email: string;
  papel: "leitor" | "autor" | "editor" | "superadmin";
};
