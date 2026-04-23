import { Link } from "react-router";

import { PortalShell } from "~/components/layout/portal-shell";
import { paths } from "~/lib/paths";

export default function PublicArticlePage() {
  return (
    <PortalShell>
      <div className="container">
        <section className="panel">
          <p className="note">Inicio / Noticias / Mobilidade</p>
          <h1>Plano de mobilidade prioriza transporte publico nos bairros centrais</h1>
          <p className="meta">Brasilia - 18/04/2026 - Autor: Redacao</p>
          <div className="tag-row">
            <span className="tag">Cidade</span>
            <span className="tag">Mobilidade</span>
          </div>
          <p>
            A prefeitura apresentou um plano com novas rotas de onibus, travessias e
            ajustes em vias de maior circulacao. O foco da proposta e reduzir tempo de
            deslocamento e melhorar a integracao entre bairros.
          </p>
          <p>
            Segundo a equipe tecnica, a primeira fase vai atender corredores com maior
            fluxo diario. As proximas etapas incluem consulta publica, calendario de obras
            e revisao dos pontos de parada.
          </p>
          <p>
            O projeto tambem preve ciclovias de conexao e melhorias em pontos de acesso
            para pedestres. A administracao afirma que os resultados serao avaliados por
            indicadores mensais.
          </p>
          <div className="actions">
            <Link className="button" to={paths.readerFeed}>
              Comentar como leitor
            </Link>
            <Link className="button secondary" to={paths.news}>
              Voltar para noticias
            </Link>
          </div>
        </section>
      </div>
    </PortalShell>
  );
}
