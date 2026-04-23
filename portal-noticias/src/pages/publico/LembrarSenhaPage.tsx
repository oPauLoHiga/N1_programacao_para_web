import type { FormEvent } from "react";
import { useState } from "react";
import { Link } from "react-router";

import { MainLayout } from "~/components/layout/MainLayout";
import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { paths } from "~/lib/paths";

export default function LembrarSenhaPage() {
  const [ok, setOk] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOk(true);
  }

  return (
    <MainLayout>
      <div className="auth-page container">
        <div className="auth-card">
          <h1 className="auth-card__logo" style={{ fontSize: 18 }}>
            Lembrar <span>senha</span>
          </h1>
          <p>Digite seu e-mail para redefinir sua senha.</p>
          {!ok ? (
            <form className="form-grid" onSubmit={handleSubmit}>
              <InputField id="email" label="E-mail" type="email" required />
              <Button block type="submit">
                Enviar
              </Button>
            </form>
          ) : (
            <p className="msg-success">E-mail enviado (simulado). Verifique sua caixa de entrada.</p>
          )}
          <div className="auth-card__links">
            <Link to={paths.login}>Voltar para Login</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
