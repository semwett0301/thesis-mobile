import { Coords } from "./Coords";
import { Id } from "./Id";
import { TDateISO } from "./IsoDateTime";

export interface RoutePoint {
  id: Id | null;
  name: string;
  description: string;
  coords: Coords;
  url: string;
  date: TDateISO;
  start_time: string;
  end_time: string;
}
