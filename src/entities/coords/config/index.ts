import { Coords } from "../../../shared/types/api/Coords";

export const INITIAL_COORDS: Coords = {
  latitude: 0,
  longitude: 0,
};

export const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY ?? "";
