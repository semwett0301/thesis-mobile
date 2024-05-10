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
    end_date: addDays(new Date(), 1),
    id: 1,
    start_city: { id: 2, title: "Санкт-Петербург" },
    start_date: new Date(),
    transport_price: 5000,
  },
  {
    accommodation_price: 5000,
    end_city: { id: 1, title: "Москва" },
    end_date: addDays(new Date(), 1),
    id: 2,
    start_city: { id: 2, title: "Санкт-Петербург" },
    start_date: new Date(),
    transport_price: 5000,
  },
  {
    accommodation_price: 5000,
    end_city: { id: 1, title: "Москва" },
    end_date: addDays(new Date(), 3),
    id: 3,
    start_city: { id: 2, title: "Санкт-Петербург" },
    start_date: new Date(),
    transport_price: 5000,
  },
];

export const SavedRoutes = () => {
  return (
    <Section label={config.savedName} first last>
      {routes.map((route) => (
        <RouteHistoryCard key={route.id} data={route} />
      ))}
    </Section>
  );
};
