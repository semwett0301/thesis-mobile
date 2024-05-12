import { createContext } from "react";

import { Route } from "../../../shared/types/api/Route";

interface RouteContextState {
  route: Route | null;
  setRoute: (data: Route | null) => void;
}

export const RouteContext = createContext<RouteContextState>({
  route: null,
  setRoute: () => {},
});
