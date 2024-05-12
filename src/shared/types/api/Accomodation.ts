import { Id } from "./Id";

export interface Accomodation {
  id: Id;
  price: number;
  name: string;
  center_distance: number;
  link: string;
  source: string;
  rating: number;
  reviews_amount: number;
}
