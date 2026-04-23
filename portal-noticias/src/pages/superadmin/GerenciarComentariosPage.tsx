import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { comentarios } from "~/data/comentarios";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function GerenciarComentariosPage() {
  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <section className="panel">
          <h1>Gerenciar comentarios</h1>
          <p className="note">Lista mockada em src/data/comentarios.ts.</p>
        </section>

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Noticia</th>
                <th>Autor</th>
                <th>Comentario</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {comentarios.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>
                    <Link to={paths.noticia(c.noticiaId)}>{c.noticiaId}</Link>
                  </td>
                  <td>{c.autor}</td>
                  <td>{c.texto}</td>
                  <td>{c.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
