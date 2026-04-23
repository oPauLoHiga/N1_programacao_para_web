import { HomeFeaturedNews } from "~/components/home/home-featured-news";
import { HomeHero } from "~/components/home/home-hero";
import { HomeQuickAccess } from "~/components/home/home-quick-access";
import { PortalShell } from "~/components/layout/portal-shell";

export default function HomePage() {
  return (
    <PortalShell>
      <div className="container">
        <HomeHero />
        <HomeFeaturedNews />
        <HomeQuickAccess />
      </div>
    </PortalShell>
  );
}
