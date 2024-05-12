import { RouteHistoryCard, useRoute } from "entities/route";
import React from "react";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { RouteResponse } from "shared/types/api/response/RouteResponse";
import { Section } from "shared/ui/layouts";

import { config } from "../../config";

// const routes: RouteResponse[] = [
//   {
//     accommodation_price: 5000,
//     end_city: { id: 1, title: "Москва" },
//     end_date: addDays(new Date(), 1).toISOString(),
//     id: 1,
//     route_points: [],
//     start_city: { id: 2, title: "Санкт-Петербург" },
//     start_date: new Date().toISOString(),
//     transport_price: 5000,
//   },
//   {
//     accommodation_price: 5000,
//     end_city: { id: 1, title: "Москва" },
//     end_date: addDays(new Date(), 1).toISOString(),
//     id: 2,
//     route_points: [],
//     start_city: { id: 2, title: "Санкт-Петербург" },
//     start_date: new Date().toISOString(),
//     transport_price: 5000,
//   },
//   {
//     accommodation_price: 5000,
//     end_city: { id: 1, title: "Москва" },
//     end_date: addDays(new Date(), 1).toISOString(),
//     id: 3,
//     route_points: [],
//     start_city: { id: 2, title: "Санкт-Петербург" },
//     start_date: new Date().toISOString(),
//     transport_price: 5000,
//   },
// ];

interface Props {
  data: RouteResponse[];
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
