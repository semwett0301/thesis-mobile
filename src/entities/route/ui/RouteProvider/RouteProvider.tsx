import React, { PropsWithChildren, useMemo, useState } from "react";
import { Route } from "shared/types/api/Route";

import { RouteContext } from "../../context";

export const RouteProvider = ({ children }: PropsWithChildren) => {
  const [route, setRoute] = useState<Route | null>(null);

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
