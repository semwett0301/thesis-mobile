import { createContext } from "react";

import { RouteResponse } from "../../../shared/types/api/response/RouteResponse";

interface RouteContextState {
  route: RouteResponse | null;
  setRoute: (data: RouteResponse | null) => void;
}

export const RouteContext = createContext<RouteContextState>({
  route: null,
  setRoute: () => {},
});
