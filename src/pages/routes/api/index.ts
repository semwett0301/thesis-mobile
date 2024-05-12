import { api } from "shared/api/api";

import { BASE_ROUTES_URL } from "../config";
import { RoutesResponse } from "../types/RoutesResponse";

export const getRoutes = async () => {
  const request = await api();
  return request.post<RoutesResponse>(`${BASE_ROUTES_URL}/saved`);
};
