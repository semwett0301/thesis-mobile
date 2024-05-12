import { AuthChecker } from "entities/auth";
import { RecentlyRoutes, SavedRoutes } from "features/route-history";
import { LoaderOverlay } from "shared/ui/atoms/LoaderOverlay/LoaderOverlay";

export const Routes = () => {
  return (
    <AuthChecker mode="auth">
      <RecentlyRoutes data={[]} />
      <SavedRoutes data={[]} />
      <LoaderOverlay isVisible={false} />
    </AuthChecker>
  );
};
