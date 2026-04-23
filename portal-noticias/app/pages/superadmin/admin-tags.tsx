import { TagsCrudContent } from "~/components/admin/tags-crud-content";
import { PortalShell } from "~/components/layout/portal-shell";
import { SidebarLayout } from "~/components/layout/sidebar-layout";
import { adminSidebar } from "~/lib/admin-nav";

export default function AdminTagsPage() {
  return (
    <PortalShell>
      <SidebarLayout items={adminSidebar}>
        <TagsCrudContent />
      </SidebarLayout>
    </PortalShell>
  );
}
