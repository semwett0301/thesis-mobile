import { addDays } from "date-fns";
import { RouteHistoryCard, useRoute } from "entities/route";
import React from "react";
import { RouteResponse } from "shared/types/api/response/RouteResponse";
import { Section } from "shared/ui/layouts";

import { useAppNavigation } from "../../../../shared/router/hooks/useAppNavigation";
import { PAGES } from "../../../../shared/router/types/pages";
import { config } from "../../config";

const routes: RouteResponse[] = [
  {
    accommodation_price: 5000,
    end_city: { id: 1, title: "Москва" },
    end_date: addDays(new Date(), 1).toISOString(),
    id: 1,
    route_points: [
      {
        coords: {
          latitude: 59.940396,
          longitude: 30.313804,
        },
        date: new Date().toISOString(),
        description: "dasdsa",
        end_time: "das",
        id: 1,
        name: "das",
        start_time: "dsa",
        url: "http://vk.com",
      },
      {
        coords: {
          latitude: 59.931017,
          longitude: 30.361476,
        },
        date: new Date().toISOString(),
        description: "dasdsa",
        end_time: "das",
        id: 2,
        name: "das",
        start_time: "dsa",
        url: "http://vk.com",
      },
      {
        coords: {
          latitude: 59.937445,
          longitude: 30.331723,
        },
        date: new Date().toISOString(),
        description: "dasdsa",
        end_time: "das",
        id: 3,
        name: "das",
        start_time: "dsa",
        url: "http://vk.com",
      },
    ],
    start_city: { id: 2, title: "Санкт-Петербург" },
    start_date: new Date().toISOString(),
    transport_price: 5000,
  },
  {
    accommodation_price: 5000,
    end_city: { id: 1, title: "Москва" },
    end_date: addDays(new Date(), 1).toISOString(),
    id: 2,
    route_points: [],
    start_city: { id: 2, title: "Санкт-Петербург" },
    start_date: new Date().toISOString(),
    transport_price: 5000,
  },
  {
    accommodation_price: 5000,
    end_city: { id: 1, title: "Москва" },
    end_date: addDays(new Date(), 3).toISOString(),
    id: 3,
    route_points: [],
    start_city: { id: 2, title: "Санкт-Петербург" },
    start_date: new Date().toISOString(),
    transport_price: 5000,
  },
];

export const SavedRoutes = () => {
  const { setRoute } = useRoute();
  const navigation = useAppNavigation();

  return (
    <Section label={config.savedName} first last>
      {routes.map((route) => (
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
