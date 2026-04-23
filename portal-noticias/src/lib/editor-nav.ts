import type { NavItem } from "./nav-types";
import { paths } from "./paths";

export const editorSidebar: NavItem[] = [
  { label: "Painel", to: paths.editorPainel, end: true },
  { label: "Perfil", to: paths.editorPerfil, end: true },
  { label: "Publicar (ex.)", to: paths.editorPublicar("1") },
  { label: "Editar noticia (ex.)", to: paths.editorNoticiaEditar("1") },
];
