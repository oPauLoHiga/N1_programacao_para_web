import {
  AuthorCrudCreatePanel,
  AuthorCrudDeletePanel,
  AuthorCrudListPanel,
  AuthorCrudShowPanel,
  AuthorCrudUpdatePanel,
} from "~/components/author/author-crud-panels";
import { PortalShell } from "~/components/layout/portal-shell";
import { SidebarLayout } from "~/components/layout/sidebar-layout";
import { authorSidebarCrud } from "~/lib/author-nav";

export default function AuthorCrudPage() {
  return (
    <PortalShell>
      <SidebarLayout items={authorSidebarCrud}>
        <AuthorCrudListPanel />
        <AuthorCrudCreatePanel />
        <AuthorCrudShowPanel />
        <AuthorCrudUpdatePanel />
        <AuthorCrudDeletePanel />
      </SidebarLayout>
    </PortalShell>
  );
}
