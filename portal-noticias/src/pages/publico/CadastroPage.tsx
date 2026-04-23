import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useMemo, useState } from "react";

import { MainLayout } from "~/components/layout/MainLayout";
import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { getCidadesPorUf } from "~/data/cidades";
import { ufs } from "~/data/ufs";
import { paths } from "~/lib/paths";

export default function CadastroPage() {
  const navigate = useNavigate();
  const [ufSel, setUfSel] = useState(ufs[0]?.sigla ?? "DF");

  const cidadesFiltradas = useMemo(() => getCidadesPorUf(ufSel), [ufSel]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(paths.login);
  }

  return (
    <MainLayout>
      <div className="auth-page container">
        <div className="auth-card" style={{ maxWidth: 480 }}>
          <div className="auth-card__logo">
            Criar <span>conta</span>
          </div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <InputField id="nome" label="Nome completo" name="nome" type="text" required />
            <InputField id="email" label="E-mail" name="email" type="email" required />
            <InputField id="senha" label="Senha" name="senha" type="password" required />
            <InputField
              id="senha2"
              label="Confirmar senha"
              name="senha2"
              type="password"
              required
            />
            <div className="field">
              <label htmlFor="uf">UF</label>
              <select
                id="uf"
                name="uf"
                value={ufSel}
                onChange={(e) => setUfSel(e.target.value)}
              >
                {ufs.map((u) => (
                  <option key={u.id} value={u.sigla}>
                    {u.sigla} — {u.nome}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="cidade">Cidade</label>
              <select id="cidade" name="cidade" required>
                {cidadesFiltradas.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nome}
                  </option>
                ))}
              </select>
            </div>
            <InputField id="bio" label="Bio (opcional)" multiline name="bio" rows={4} />
            <Button block type="submit">
              Criar conta
            </Button>
          </form>
          <div className="auth-card__links">
            <span>
              Já tem conta? <Link to={paths.login}>Faça login</Link>
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
