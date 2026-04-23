import type { NavItem } from "./nav-types";
import { paths } from "./paths";

export const autorSidebarNoticias: NavItem[] = [
  { label: "Perfil", to: paths.autorPerfil, end: true },
  { label: "Minhas noticias", to: paths.autorNoticias, end: true },
  { label: "Nova noticia", to: paths.autorNoticiaNova, end: true },
  { label: "Editar (ex.)", to: paths.autorNoticiaEditar("1") },
  { label: "Comentar (ex.)", to: paths.autorComentar("1") },
];

export const autorSidebarPadrao: NavItem[] = [
  { label: "Perfil", to: paths.autorPerfil, end: true },
  { label: "Minhas noticias", to: paths.autorNoticias, end: true },
];
