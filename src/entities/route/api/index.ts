import { AxiosResponse } from "axios";
import { api } from "shared/api/api";
import { Id } from "shared/types/api/Id";
import { Route } from "shared/types/api/Route";

import { BASE_ROUTES_URL } from "../config";

export const saveRoute = async (id: Id) => {
  const request = await api();

  return request.post<never, AxiosResponse<Route>>(
    `${BASE_ROUTES_URL}/${id}/save`,
  );
};

export const getRoute = async (id: Id) => {
  const request = await api();

  return request.get<never, AxiosResponse<Route>>(`${BASE_ROUTES_URL}/${id}`);
};
