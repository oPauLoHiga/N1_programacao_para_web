import { UfsCrudContent } from "~/components/admin/ufs-crud-content";
import { PortalShell } from "~/components/layout/portal-shell";
import { SidebarLayout } from "~/components/layout/sidebar-layout";
import { adminSidebar } from "~/lib/admin-nav";

export default function AdminUfsPage() {
  return (
    <PortalShell>
      <SidebarLayout items={adminSidebar}>
        <UfsCrudContent />
      </SidebarLayout>
    </PortalShell>
  );
}
