import { AxiosResponse } from "axios";
import { api } from "shared/api/api";
import { Transport } from "shared/types/api/Transport";

import { BASE_TRANSPORT_URL } from "../config";
import { TransportRequest } from "../types";

export const getTickets = async (params: TransportRequest) => {
  const request = await api();
  return request.get<TransportRequest, AxiosResponse<Transport[]>>(
    `${BASE_TRANSPORT_URL}`,
    { params },
  );
};
