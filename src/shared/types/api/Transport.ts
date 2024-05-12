import { Id } from "./Id";

export interface Transport {
  id: Id;
  logo_url: string;
  price: number;
  source: string;
  start_city: string;
  end_city: string;
  start_time: string;
  end_time: string;
  start_point: string;
  end_point: string;
  link: string;
}
