import { Id } from "shared/types/api/common/Id";
import { RouteRequest } from "shared/types/api/request/RouteRequest";

export interface RouteResponse extends RouteRequest {
  id: Id;
}
