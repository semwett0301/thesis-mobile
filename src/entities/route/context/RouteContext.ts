import { createContext } from "react";
import { RouteGenerationResponse } from "shared/types/api/response/RouteGenerationResponse";

interface RouteContextState {
  route: RouteGenerationResponse | null;
  setRoute: (data: RouteGenerationResponse | null) => void;
}

export const RouteContext = createContext<RouteContextState>({
  route: null,
  setRoute: () => {},
});
