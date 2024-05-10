import { AuthChecker } from "entities/auth";
import { RecentlyRoutes, SavedRoutes } from "features/route-history";

export const Routes = () => {
  return (
    <AuthChecker mode="auth">
      <RecentlyRoutes />
      <SavedRoutes />
    </AuthChecker>
  );
};
