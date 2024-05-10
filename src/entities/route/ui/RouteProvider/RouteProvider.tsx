import React, { PropsWithChildren, useMemo, useState } from "react";
import { RouteGenerationResponse } from "shared/types/api/response/RouteGenerationResponse";

import { RouteContext } from "../../context";

export const RouteProvider = ({ children }: PropsWithChildren) => {
  const [route, setRoute] = useState<RouteGenerationResponse | null>(null);

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
