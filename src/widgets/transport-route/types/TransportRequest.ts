import { City } from "shared/types/api/City";
import { TDateISO } from "shared/types/api/IsoDateTime";

export interface TransportRequest {
  start_date: TDateISO;
  end_date: TDateISO;
  max_price: number;
  city: City;
}
