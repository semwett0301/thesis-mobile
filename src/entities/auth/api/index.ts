import { AxiosResponse } from "axios";
import { api } from "shared/api/api";
import { AuthRequest } from "shared/types/api/request/AuthRequest";
import { AuthResponse } from "shared/types/api/response/AuthResponse";

import { baseAuthUrl } from "../config";

export const getMe = async () => {
  const request = await api();
  return request.get<AuthResponse>(`${baseAuthUrl}/me`);
};

export const postLogin = async (auth: AuthRequest) => {
  const request = await api();

  return request.post<AuthRequest, AxiosResponse<AuthResponse>>(
    `${baseAuthUrl}/login`,
    {
      ...auth,
    },
  );
};

export const postRegister = async (auth: AuthRequest) => {
  const request = await api();

  return request.post<AuthRequest, AxiosResponse<AuthResponse>>(
    `${baseAuthUrl}/register`,
    {
      ...auth,
    },
  );
};

export const postRefresh = async () => {
  const request = await api();

  return request.post<AuthRequest, AxiosResponse<AuthResponse>>(
    `${baseAuthUrl}/refresh`,
  );
};

export const postLogout = async () => {
  const request = await api();

  return request.post<AuthRequest, never>(`${baseAuthUrl}/logout`);
};
