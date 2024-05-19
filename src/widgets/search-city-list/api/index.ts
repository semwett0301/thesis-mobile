import { AxiosResponse } from "axios";
import { api } from "shared/api/api";

import { BASE_CITIES_URL } from "../config";
import { CitiesRequest, CitiesResponse } from "../types";

export const getCities = async (params: CitiesRequest) => {
  const request = await api();
  return request.get<CitiesRequest, AxiosResponse<CitiesResponse>>(
    `${BASE_CITIES_URL}`,
    {
      params,
    },
  );
};
