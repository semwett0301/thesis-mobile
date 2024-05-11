import React, { PropsWithChildren, useMemo, useState } from "react";

import { RouteResponse } from "../../../../shared/types/api/response/RouteResponse";
import { RouteContext } from "../../context";

export const RouteProvider = ({ children }: PropsWithChildren) => {
  const [route, setRoute] = useState<RouteResponse | null>(null);

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
