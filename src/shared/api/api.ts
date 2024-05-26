import axios, { AxiosError } from "axios";
import * as Application from "expo-application";

import { PAGES } from "../router/types/pages";
import { navigateOutside } from "../router/utils";
import { getAccessToken } from "../utils/auth";

export const api = async () => {
  const token = await getAccessToken();

  console.log(token);

  const request = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Finger-Print":
        (await Application.getAndroidId()) ??
        (await Application.getIosIdForVendorAsync()),
    },
  });

  request.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      switch (error.response?.status) {
        case 401:
          navigateOutside<PAGES.REQUEST>(PAGES.REQUEST, undefined);
          break;
        default:
      }

      return Promise.reject(error);
    },
  );

  return request;
};
