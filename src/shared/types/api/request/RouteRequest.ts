import { TDateISO } from "../common/IsoDateTime";
import { CityResponse } from "../response/CityResponse";

export interface RouteRequest {
  start_city: CityResponse;
  end_city: CityResponse;
  start_date: TDateISO;
  end_date: TDateISO;
  transport_price: number;
  accommodation_price: number;
  additional_information?: string;
}
