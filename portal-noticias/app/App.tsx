import { BrowserRouter, Route, Routes } from "react-router";

import AuthorNewsPage from "~/pages/autor/author-news";
import AuthorCrudPage from "~/pages/editor/author-crud";
import ReaderFeedPage from "~/pages/leitor/reader-feed";
import ReaderProfilePage from "~/pages/leitor/reader-profile";
import HomePage from "~/pages/publico/home";
import NotFoundPage from "~/pages/publico/not-found";
import PublicArticlePage from "~/pages/publico/public-article";
import PublicLoginPage from "~/pages/publico/public-login";
import PublicNewsPage from "~/pages/publico/public-news";
import PublicRegisterPage from "~/pages/publico/public-register";
import AdminCitiesPage from "~/pages/superadmin/admin-cities";
import AdminDashboardPage from "~/pages/superadmin/admin-dashboard";
import AdminTagsPage from "~/pages/superadmin/admin-tags";
import AdminUfsPage from "~/pages/superadmin/admin-ufs";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<PublicLoginPage />} />
        <Route path="/cadastro" element={<PublicRegisterPage />} />
        <Route path="/noticias" element={<PublicNewsPage />} />
        <Route path="/noticias/mobilidade" element={<PublicArticlePage />} />
        <Route path="/leitor/feed" element={<ReaderFeedPage />} />
        <Route path="/leitor/perfil" element={<ReaderProfilePage />} />
        <Route path="/autor/noticias" element={<AuthorNewsPage />} />
        <Route path="/autor/noticias/crud" element={<AuthorCrudPage />} />
        <Route path="/superadmin" element={<AdminDashboardPage />} />
        <Route path="/superadmin/ufs" element={<AdminUfsPage />} />
        <Route path="/superadmin/cidades" element={<AdminCitiesPage />} />
        <Route path="/superadmin/tags" element={<AdminTagsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
