import type { FormEvent } from "react";
import { useNavigate } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Button } from "~/components/ui/Button";
import { paths } from "~/lib/paths";

export default function CadastroPage() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.login);
  }

  return (
    <MainLayout>
      <div className="container">
        <section className="panel">
          <h1>Criar conta</h1>
          <p className="note">Cadastro estatico (sem backend).</p>
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
                <input id="senha" name="senha" type="password" />
              </div>
              <div className="field">
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" name="cidade" type="text" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="bio">Bio</label>
              <textarea id="bio" name="bio" placeholder="Sobre voce" />
            </div>
            <div className="actions">
              <Button type="submit">Cadastrar</Button>
              <Button to={paths.login} variant="secondary">
                Voltar ao login
              </Button>
            </div>
          </form>
        </section>
      </div>
    </MainLayout>
  );
}
