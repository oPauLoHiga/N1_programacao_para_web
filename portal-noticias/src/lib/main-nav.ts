import type { NavItem } from "./nav-types";
import { paths } from "./paths";

export const mainNav: NavItem[] = [
  { label: "Inicio", to: paths.home, end: true },
  { label: "Noticias", to: paths.buscaTag("cidade") },
  { label: "Login", to: paths.login, end: true },
  { label: "Cadastro", to: paths.cadastro, end: true },
  { label: "Leitor", to: paths.leitorPerfil },
  { label: "Autor", to: paths.autorNoticias },
  { label: "Editor", to: paths.editorPainel },
  { label: "Admin", to: paths.adminDashboard },
];
