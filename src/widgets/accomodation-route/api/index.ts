import { AxiosResponse } from "axios";
import { api } from "shared/api/api";
import { Accomodation } from "shared/types/api/Accomodation";

import { BASE_ACCOMMODATION_URL } from "../config";
import { AccommodationRequest } from "../types";

export const getAccommodations = async (params: AccommodationRequest) => {
  const request = await api();
  return request.get<AccommodationRequest, AxiosResponse<Accomodation[]>>(
    `${BASE_ACCOMMODATION_URL}/`,
    {
      params,
    },
  );
};
