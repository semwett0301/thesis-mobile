import { RouteHistoryCard, useRoute } from "entities/route";
import React from "react";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { Route } from "shared/types/api/Route";
import { Section } from "shared/ui/layouts";

import { config } from "../../config";

interface Props {
  data: Route[];
}

export const RecentlyRoutes = ({ data }: Props) => {
  const { setRoute } = useRoute();
  const navigation = useAppNavigation();

  return (
    <Section label={config.recentlyName} first last>
      {data.map((route) => (
        <RouteHistoryCard
          onPress={() => {
            setRoute(route);
            navigation.navigate(PAGES.ROUTE_INFO);
          }}
          key={route.id}
          data={route}
        />
      ))}
    </Section>
  );
};
