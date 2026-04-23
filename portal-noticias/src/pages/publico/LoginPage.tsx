import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router";

import { DevQuickAccess } from "~/components/auth/DevQuickAccess";
import { MainLayout } from "~/components/layout/MainLayout";
import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { paths } from "~/lib/paths";

export default function LoginPage() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.leitorPerfil);
  }

  return (
    <MainLayout>
      <div className="auth-page container">
        <div className="auth-card">
          <div className="auth-card__logo">
            Portal <span>Fake News</span>
          </div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <InputField id="email" label="E-mail" name="email" type="email" required />
            <InputField id="senha" label="Senha" name="senha" type="password" required />
            <label className="checkbox-row">
              <input name="lembrar" type="checkbox" /> Lembrar-me
            </label>
            <Button block type="submit">
              Entrar
            </Button>
          </form>
          <div className="auth-card__links">
            <Link to={paths.lembrarSenha}>Esqueci minha senha</Link>
            <span>
              Não tem conta? <Link to={paths.cadastro}>Cadastre-se</Link>
            </span>
          </div>
        </div>
        <DevQuickAccess />
      </div>
    </MainLayout>
  );
}
