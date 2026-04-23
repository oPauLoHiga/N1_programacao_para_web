import type { NavItem } from "./nav-types";
import { paths } from "./paths";

export const leitorSidebarCompleto: NavItem[] = [
  { label: "Meu perfil", to: paths.leitorPerfil, end: true },
  {
    label: "Comentar (ex.)",
    to: paths.leitorComentar("1"),
  },
  { label: "Busca DF", to: paths.buscaUf("DF") },
  { label: "Login", to: paths.login, end: true },
];

export const leitorSidebarPerfil: NavItem[] = [
  { label: "Meu perfil", to: paths.leitorPerfil, end: true },
  { label: "Comentar", to: paths.leitorComentar("1") },
];
