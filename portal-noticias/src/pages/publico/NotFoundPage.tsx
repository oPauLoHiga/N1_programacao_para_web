import { MainLayout } from "~/components/layout/MainLayout";
import { Button } from "~/components/ui/Button";
import { paths } from "~/lib/paths";

export default function NotFoundPage() {
  return (
    <MainLayout>
      <div className="container panel">
        <h1>404</h1>
        <p className="note">A pagina solicitada nao existe neste mapa de rotas.</p>
        <Button to={paths.home}>Voltar ao inicio</Button>
      </div>
    </MainLayout>
  );
}
