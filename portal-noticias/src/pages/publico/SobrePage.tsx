import { MainLayout } from "~/components/layout/MainLayout";

export default function SobrePage() {
  return (
    <MainLayout>
      <div className="container panel">
        <h1>Sobre</h1>
        <p>Portal acadêmico com dados estáticos em TypeScript.</p>
      </div>
    </MainLayout>
  );
}
