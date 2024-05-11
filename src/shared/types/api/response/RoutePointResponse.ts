import { Coords } from "../common/Coords";
import { Id } from "../common/Id";
import { TDateISO } from "../common/IsoDateTime";

export interface RoutePointResponse {
  id: Id;
  name: string;
  description: string;
  coords: Coords;
  url: string;
  date: TDateISO;
  start_time: string;
  end_time: string;
}
