import { CityResponse } from "../response/CityResponse";

export interface RouteGenerationRequest {
  start_city: CityResponse;
  end_city: CityResponse;
  start_date: Date;
  end_date: Date;
  transport_price: number;
  accommodation_price: number;
  additional_information: string;
}
