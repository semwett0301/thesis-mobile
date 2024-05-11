import { addDays } from "date-fns";
import React, { PropsWithChildren, useMemo, useState } from "react";

import { RouteResponse } from "../../../../shared/types/api/response/RouteResponse";
import { RouteContext } from "../../context";

export const RouteProvider = ({ children }: PropsWithChildren) => {
  const [route, setRoute] = useState<RouteResponse | null>({
    accommodation_price: 5000,
    end_city: { id: 1, title: "Москва" },
    end_date: addDays(new Date(), 1).toISOString(),
    id: 3,
    route_points: [],
    start_city: { id: 2, title: "Санкт-Петербург" },
    start_date: new Date().toISOString(),
    transport_price: 5000,
  });

  const value = useMemo(
    () => ({
      route,
      setRoute,
    }),
    [route],
  );

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};
