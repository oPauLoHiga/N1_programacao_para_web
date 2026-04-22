import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router";

import { PortalShell } from "../components/portal-shell";
import { paths } from "../lib/paths";

export default function PublicLogin() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.readerFeed);
  }

  return (
    <PortalShell>
      <div className="container">
        <div className="grid grid-2">
          <section className="panel">
            <h1>Entrar no portal</h1>
            <p className="note">Fluxo simples de login para seguir para a area do leitor.</p>
            <div className="actions">
              <Link className="button secondary" to={paths.register}>
                Criar conta
              </Link>
              <Link className="button secondary" to={paths.news}>
                Ver noticias
              </Link>
            </div>
          </section>

          <form className="panel form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" placeholder="nome@email.com" type="email" />
            </div>
            <div className="field">
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                name="senha"
                placeholder="Digite sua senha"
                type="password"
              />
            </div>
            <div className="actions">
              <button className="button" type="submit">
                Entrar
              </button>
              <Link className="button secondary" to={paths.register}>
                Cadastro
              </Link>
            </div>
          </form>
        </div>
      </div>
    </PortalShell>
  );
}
