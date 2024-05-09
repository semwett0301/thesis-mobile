import { AxiosResponse } from "axios";
import { api } from "shared/api/api";
import { AuthRequest } from "shared/types/api/request/AuthRequest";

import { AuthResponse } from "../../../shared/types/api/response/AuthResponse";
import { baseAuthUrl } from "../config";

export const getMe = async () => api.get<AuthResponse>(`${baseAuthUrl}/me`);

export const postLogin = async (auth: AuthRequest) =>
  api.post<AuthRequest, AxiosResponse<AuthResponse>>(`${baseAuthUrl}/login`, {
    ...auth,
  });

export const postRegister = async (auth: AuthRequest) =>
  api.post<AuthRequest, AxiosResponse<AuthResponse>>(
    `${baseAuthUrl}/register`,
    {
      ...auth,
    },
  );

export const postRefresh = async () =>
  api.post<AuthRequest, AxiosResponse<AuthResponse>>(`${baseAuthUrl}/refresh`);

export const postLogout = async () =>
  api.post<AuthRequest, never>(`${baseAuthUrl}/logout`);
