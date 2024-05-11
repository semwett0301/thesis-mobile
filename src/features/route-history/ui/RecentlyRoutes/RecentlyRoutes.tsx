import { addDays } from "date-fns";
import { RouteHistoryCard } from "entities/route";
import React from "react";
import { RouteResponse } from "shared/types/api/response/RouteResponse";
import { Section } from "shared/ui/layouts";

import { config } from "../../config";

const routes: RouteResponse[] = [
  {
    accommodation_price: 5000,
    end_city: { id: 1, title: "Москва" },
    end_date: addDays(new Date(), 1).toISOString(),
    id: 1,
    route_points: [],
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
    end_date: addDays(new Date(), 1).toISOString(),
    id: 3,
    route_points: [],
    start_city: { id: 2, title: "Санкт-Петербург" },
    start_date: new Date().toISOString(),
    transport_price: 5000,
  },
];

export const RecentlyRoutes = () => {
  return (
    <Section label={config.recentlyName} first last>
      {routes.map((route) => (
        <RouteHistoryCard key={route.id} data={route} />
      ))}
    </Section>
  );
};
