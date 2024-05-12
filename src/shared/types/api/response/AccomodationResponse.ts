import { Id } from "../common/Id";

export interface AccomodationResponse {
  id: Id;
  price: number;
  name: string;
  center_distance: number;
  link: string;
  source: string;
  rating: number;
  reviews_amount: number;
}
