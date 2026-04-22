import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/public-login.tsx"),
  route("cadastro", "routes/public-register.tsx"),
  route("noticias", "routes/public-news.tsx"),
  route("noticias/mobilidade", "routes/public-article.tsx"),
  route("leitor/feed", "routes/reader-feed.tsx"),
  route("leitor/perfil", "routes/reader-profile.tsx"),
  route("autor/noticias", "routes/author-news.tsx"),
  route("autor/noticias/crud", "routes/author-crud.tsx"),
  route("superadmin", "routes/admin-dashboard.tsx"),
  route("superadmin/ufs", "routes/admin-ufs.tsx"),
  route("superadmin/cidades", "routes/admin-cities.tsx"),
  route("superadmin/tags", "routes/admin-tags.tsx"),
] satisfies RouteConfig;
