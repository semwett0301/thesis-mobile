import { City } from "shared/types/api/City";

export interface CitiesResponse {
  pageable: {
    pageSize: number;
    pageNumber: number;
  };
  totalPages: number;
  content: City[];
}
