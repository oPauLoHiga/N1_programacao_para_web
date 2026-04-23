import type { NavItem } from "./nav-types";
import { paths } from "./paths";

export const editorSidebar: NavItem[] = [
  { label: "Painel", to: paths.editorPainel, end: true },
  { label: "Perfil", to: paths.editorPerfil, end: true },
];
