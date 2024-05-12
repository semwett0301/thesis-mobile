import { City } from "./City";
import { Id } from "./Id";
import { TDateISO } from "./IsoDateTime";
import { RoutePoint } from "./RoutePoint";

export interface Route {
  id: Id;
  route_points: RoutePoint[];
  start_city: City;
  end_city: City;
  start_date: TDateISO;
  end_date: TDateISO;
  transport_price: number;
  accommodation_price: number;
  is_saved: boolean;
  additional_information?: string;
}
