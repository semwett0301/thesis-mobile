import * as SecureStore from "expo-secure-store";

export const setAccessToken = async (token: string) => {
  await SecureStore.setItemAsync("accessToken", token);
};

export const setRefreshToken = async (token: string) => {
  await SecureStore.setItemAsync("refreshToken", token);
};
export const getRefreshToken = async () => {
  return await SecureStore.getItemAsync("refreshToken");
};
export const getAccessToken = async () => {
  return await SecureStore.getItemAsync("accessToken");
};

export const clearTokens = async () => {
  await SecureStore.deleteItemAsync("accessToken");
  await SecureStore.deleteItemAsync("refreshToken");
};
