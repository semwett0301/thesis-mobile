import { AxiosResponse } from "axios";
import { api } from "shared/api/api";

import { Auth } from "../../../shared/types/api/Auth";
import { BASE_AUTH_URL } from "../config";
import { AuthRequest } from "../types";

export const getMe = async () => {
  const request = await api();
  return request.get<Auth>(`${BASE_AUTH_URL}/me`);
};

export const postLogin = async (auth: AuthRequest) => {
  const request = await api();

  return request.post<AuthRequest, AxiosResponse<Auth>>(
    `${BASE_AUTH_URL}/login`,
    {
      ...auth,
    },
  );
};

export const postRegister = async (auth: AuthRequest) => {
  const request = await api();

  return request.post<AuthRequest, AxiosResponse<Auth>>(
    `${BASE_AUTH_URL}/register`,
    {
      ...auth,
    },
  );
};

export const postRefresh = async (refresh: string | null) => {
  const request = await api();

  return request.post<{ refresh: string | null }, AxiosResponse<Auth>>(
    `${BASE_AUTH_URL}/refresh`,
    { refresh },
  );
};

export const postLogout = async () => {
  const request = await api();

  return request.post<AuthRequest, never>(`${BASE_AUTH_URL}/logout`);
};
