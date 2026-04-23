import type { FormEvent } from "react";
import { useNavigate } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Button } from "~/components/ui/Button";
import { paths } from "~/lib/paths";

export default function LoginPage() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.leitorPerfil);
  }

  return (
    <MainLayout>
      <div className="container">
        <div className="grid grid-2">
          <section className="panel">
            <h1>Entrar no portal</h1>
            <p className="note">Fluxo simples de login (mock) para a area do leitor.</p>
            <div className="actions">
              <Button to={paths.cadastro} variant="secondary">
                Criar conta
              </Button>
              <Button to={paths.buscaUf("DF")} variant="secondary">
                Busca por UF
              </Button>
            </div>
          </section>

          <form className="panel form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" placeholder="nome@email.com" type="email" />
            </div>
            <div className="field">
              <label htmlFor="senha">Senha</label>
              <input id="senha" name="senha" placeholder="Senha" type="password" />
            </div>
            <div className="actions">
              <Button type="submit">Entrar</Button>
              <Button to={paths.lembrarSenha} variant="secondary">
                Esqueci a senha
              </Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
