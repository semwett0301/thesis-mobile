import { RouteResponse } from "shared/types/api/response/RouteResponse";
import { TransportResponse } from "shared/types/api/response/TransportResponse";

export interface RouteGenerationResponse extends RouteResponse {
  airplane_tickets: TransportResponse[];
  railway_tickets: TransportResponse[];
}
