import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router";

import { PortalShell } from "~/components/layout/portal-shell";
import { paths } from "~/lib/paths";

export default function PublicRegisterPage() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.login);
  }

  return (
    <PortalShell>
      <div className="container">
        <section className="panel">
          <h1>Criar conta</h1>
          <p className="note">Formulario simples para cadastro do usuario leitor.</p>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input id="nome" name="nome" placeholder="Nome completo" type="text" />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" placeholder="nome@email.com" type="email" />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="senha">Senha</label>
                <input id="senha" name="senha" placeholder="Senha" type="password" />
              </div>
              <div className="field">
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" name="cidade" placeholder="Sua cidade" type="text" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="bio">Bio</label>
              <textarea id="bio" name="bio" placeholder="Fale rapidamente sobre voce" />
            </div>
            <div className="actions">
              <button className="button" type="submit">
                Cadastrar
              </button>
              <Link className="button secondary" to={paths.login}>
                Voltar para login
              </Link>
            </div>
          </form>
        </section>
      </div>
    </PortalShell>
  );
}
