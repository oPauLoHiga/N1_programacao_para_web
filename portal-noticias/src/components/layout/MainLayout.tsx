import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="page">{children}</main>
      <Footer />
    </>
  );
}
