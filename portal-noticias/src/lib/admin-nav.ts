import type { NavItem } from "./nav-types";
import { paths } from "./paths";

export const adminSidebar: NavItem[] = [
  { label: "Dashboard", to: paths.adminDashboard, end: true },
  { label: "UFs", to: paths.adminUfs, end: true },
  { label: "Cidades", to: paths.adminCidades, end: true },
  { label: "Tags", to: paths.adminTags, end: true },
  { label: "Perfis", to: paths.adminPerfis, end: true },
  { label: "Noticias", to: paths.adminNoticias, end: true },
  { label: "Usuarios", to: paths.adminUsuarios, end: true },
  { label: "Comentarios", to: paths.adminComentarios, end: true },
];
