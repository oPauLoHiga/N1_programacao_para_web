import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Sidebar } from "~/components/layout/Sidebar";
import { Button } from "~/components/ui/Button";
import { ComentarioItem } from "~/components/ui/ComentarioItem";
import { StatusBadge } from "~/components/ui/StatusBadge";
import { getComentariosPendentes } from "~/data/comentarios";
import { contarNoticiasPorMesMock, contarNoticiasPorTag, noticias } from "~/data/noticias";
import { usuarios } from "~/data/usuarios";
import { adminSidebar } from "~/lib/admin-nav";
import { paths } from "~/lib/paths";

export default function DashboardPage() {
  const pendentes = noticias.filter((n) => !n.publicada).slice(0, 4);
  const comentariosMod = getComentariosPendentes();
  const porTag = contarNoticiasPorTag();
  const maxTag = Math.max(1, ...porTag.map((x) => x.count));
  const meses = contarNoticiasPorMesMock();
  const maxMes = Math.max(1, ...meses.map((m) => m.count));

  return (
    <MainLayout>
      <Sidebar items={adminSidebar}>
        <h1>Dashboard</h1>

        <div className="grid grid-3 admin-dash-cards">
          <div className="panel">
            <h3>Usuários</h3>
            <strong className="dash-big">{usuarios.length}</strong>
          </div>
          <div className="panel">
            <h3>Notícias publicadas</h3>
            <strong className="dash-big">{noticias.filter((n) => n.publicada).length}</strong>
          </div>
          <div className="panel">
            <h3>Rascunhos</h3>
            <strong className="dash-big">{noticias.filter((n) => !n.publicada).length}</strong>
          </div>
          <div className="panel">
            <h3>Comentários</h3>
            <strong className="dash-big">{comentariosMod.length}</strong>
          </div>
          <div className="panel">
            <h3>UFs</h3>
            <strong className="dash-big">3</strong>
          </div>
          <div className="panel">
            <h3>Tags</h3>
            <strong className="dash-big">3</strong>
          </div>
        </div>

        <section className="panel">
          <h2>Notícias pendentes</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Autor</th>
                  <th>Data</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {pendentes.map((n) => (
                  <tr key={n.id}>
                    <td>{n.titulo}</td>
                    <td>{n.autor}</td>
                    <td>{n.meta}</td>
                    <td className="table-actions">
                      <Button variant="success" type="button" onClick={() => undefined}>
                        Publicar
                      </Button>
                      <Button variant="danger" type="button" onClick={() => undefined}>
                        Rejeitar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel">
          <h2>Comentários para moderar</h2>
          {comentariosMod.map((c) => (
            <ComentarioItem
              key={c.id}
              item={c}
              showNoticiaLink
              showStatus
              actions={
                <>
                  <Button variant="success" type="button" onClick={() => undefined}>
                    Aprovar
                  </Button>
                  <Button variant="danger" type="button" onClick={() => undefined}>
                    Rejeitar
                  </Button>
                </>
              }
            />
          ))}
        </section>

        <section className="panel">
          <h2>Notícias por tag</h2>
          <div className="bar-chart">
            {porTag.map((row) => (
              <div className="bar-chart__row" key={row.tag}>
                <span>{row.tag}</span>
                <div className="bar-chart__track">
                  <div
                    className="bar-chart__fill"
                    style={{ width: `${(row.count / maxTag) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Notícias por mês</h2>
          <div className="bar-chart-v">
            {meses.map((m) => (
              <div className="bar-chart-v__col" key={m.mes}>
                <div
                  className="bar-chart-v__bar"
                  style={{ height: `${(m.count / maxMes) * 120}px` }}
                />
                <span className="note">{m.mes}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Últimos usuários</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Perfil</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.slice(0, 5).map((u) => (
                  <tr key={u.id}>
                    <td>
                      <img alt="" height={32} src={u.avatarUrl} width={32} />
                    </td>
                    <td>{u.nome}</td>
                    <td>{u.email}</td>
                    <td>{u.papel}</td>
                    <td>{u.dataCadastro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel">
          <h2>Últimas notícias</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Autor</th>
                  <th>Status</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {noticias.slice(0, 5).map((n) => (
                  <tr key={n.id}>
                    <td>
                      <Link to={paths.noticia(n.id)}>{n.titulo}</Link>
                    </td>
                    <td>{n.autor}</td>
                    <td>
                      <StatusBadge status={n.publicada ? "publicada" : "rascunho"} />
                    </td>
                    <td>{n.meta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Sidebar>
    </MainLayout>
  );
}
