import { Id } from "shared/types/api/common/Id";
import { RouteRequest } from "shared/types/api/request/RouteRequest";

import { RoutePointResponse } from "./RoutePointResponse";

export interface RouteResponse extends RouteRequest {
  id: Id;
  route_points: RoutePointResponse[];
}
