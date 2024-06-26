import { TDateISO } from "shared/types/api/IsoDateTime";

export interface AccommodationRequest {
  start_date: TDateISO;
  end_date: TDateISO;
  max_price: number;
  city_iata: string;
}
