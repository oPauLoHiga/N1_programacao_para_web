import { CitiesCrudContent } from "~/components/admin/cities-crud-content";
import { PortalShell } from "~/components/layout/portal-shell";
import { SidebarLayout } from "~/components/layout/sidebar-layout";
import { adminSidebar } from "~/lib/admin-nav";

export default function AdminCitiesPage() {
  return (
    <PortalShell>
      <SidebarLayout items={adminSidebar}>
        <CitiesCrudContent />
      </SidebarLayout>
    </PortalShell>
  );
}
