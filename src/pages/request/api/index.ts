import { AxiosResponse } from "axios";
import { api } from "shared/api/api";
import { Route } from "shared/types/api/Route";
import { RouteRequest } from "widgets/route-generation-form";

import { BASE_ROUTE_URL } from "../config";

export const createRoute = async (form: RouteRequest) => {
  const request = await api();
  return request.post<RouteRequest, AxiosResponse<Route>>(
    `${BASE_ROUTE_URL}/`,
    form,
  );
};
