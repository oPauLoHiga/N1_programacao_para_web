import type { FormEvent } from "react";
import { useNavigate } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Button } from "~/components/ui/Button";
import { paths } from "~/lib/paths";

export default function LembrarSenhaPage() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.login);
  }

  return (
    <MainLayout>
      <div className="container">
        <section className="panel">
          <h1>Lembrar senha</h1>
          <p className="note">Envio simulado: ao enviar, volta para o login.</p>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" placeholder="nome@email.com" />
            </div>
            <div className="actions">
              <Button type="submit">Enviar link</Button>
              <Button to={paths.login} variant="secondary">
                Cancelar
              </Button>
            </div>
          </form>
        </section>
      </div>
    </MainLayout>
  );
}
