import { City } from "shared/types/api/City";
import { TDateISO } from "shared/types/api/IsoDateTime";

export interface RouteRequest {
  start_city: City;
  end_city: City;
  start_date: TDateISO;
  end_date: TDateISO;
  transport_price: number;
  accommodation_price: number;
  additional_information?: string;
}
