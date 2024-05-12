import { Route } from "shared/types/api/Route";

export interface RoutesResponse {
  recently_routes: Route[];
  saved_routes: Route[];
}
