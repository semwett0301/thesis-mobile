import { useIsFocused } from "@react-navigation/core";
import { AuthChecker } from "entities/auth";
import { RecentlyRoutes, SavedRoutes } from "features/route-history";
import { useEffect, useState } from "react";
import { Route } from "shared/types/api/Route";
import { LoaderOverlay } from "shared/ui/atoms/LoaderOverlay/LoaderOverlay";

import { getRoutes } from "../../api";

export const Routes = () => {
  const isFocused = useIsFocused();

  const [recentlyRoutes, setRecentlyRoutes] = useState<Route[]>([]);
  const [savedRoutes, setSavedRoutes] = useState<Route[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRoutes = async () => {
      const {
        data: { recently_routes, saved_routes },
      } = await getRoutes();

      setRecentlyRoutes(recently_routes);
      setSavedRoutes(saved_routes);
      setIsLoading(false);
    };

    if (isFocused) fetchRoutes().catch((e) => console.error(e));
  }, [isFocused]);

  return (
    <AuthChecker mode="auth">
      {!!recentlyRoutes.length && <RecentlyRoutes data={recentlyRoutes} />}
      <SavedRoutes data={savedRoutes} />
      <LoaderOverlay isVisible={isLoading} />
    </AuthChecker>
  );
};
