import { City } from "shared/types/api/City";

export interface CitiesResponse {
  page: number;
  page_size: number;
  totalPages: number;
  items: City[];
}
