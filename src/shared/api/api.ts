import axios from "axios";
import * as Application from "expo-application";

import { getAccessToken } from "../utils/auth";

export const api = async () => {
  const token = await getAccessToken();

  console.log(token);

  return axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Finger-Print":
        (await Application.getAndroidId()) ??
        (await Application.getIosIdForVendorAsync()),
    },
  });
};
