import { TDateISO } from "shared/types/api/IsoDateTime";

export interface TransportRequest {
  type: "airplane" | "railway";
  start_date: TDateISO;
  end_date: TDateISO;
  max_price: number;
  start_city_iata: string;
  end_city: string;
  end_city_iata: string;
}
