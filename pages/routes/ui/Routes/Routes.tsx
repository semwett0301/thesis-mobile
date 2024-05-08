import { RecentlyRoutes, SavedRoutes } from "features/route-history";
import { Page } from "shared/ui/layouts";

export const Routes = () => {
  return (
    <Page>
      <RecentlyRoutes />
      <SavedRoutes />
    </Page>
  );
};
