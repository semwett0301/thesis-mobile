import { useIsFocused } from "@react-navigation/core";
import { useCallback, useContext, useEffect } from "react";
import {
  clearTokens,
  setAccessToken,
  setRefreshToken,
} from "shared/utils/auth";

import {
  getMe,
  postLogin,
  postLogout,
  postRefresh,
  postRegister,
} from "../api";
import { AuthContext } from "../context";
import { AuthRequest } from "../types/AuthRequest";

export const useAuth = () => {
  const { isAuth, isAuthLoaded, setIsAuth, setIsAuthLoaded } =
    useContext(AuthContext);
  const isFocused = useIsFocused();

  const login = useCallback(
    async (authLogin: AuthRequest) => {
      const {
        data: { access, refresh },
      } = await postLogin(authLogin);

      await setAccessToken(access);
      await setRefreshToken(refresh);

      setIsAuth(true);
    },
    [setIsAuth],
  );

  const register = useCallback(
    async (authRegister: AuthRequest) => {
      const {
        data: { access, refresh },
      } = await postRegister(authRegister);

      await setAccessToken(access);
      await setRefreshToken(refresh);

      setIsAuth(true);
    },
    [setIsAuth],
  );

  const logout = useCallback(async () => {
    setIsAuth(false);
    await clearTokens();
    await postLogout();
  }, [setIsAuth]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getMe();
        setIsAuth(true);
      } catch {
        try {
          const {
            data: { access, refresh },
          } = await postRefresh();
          await setAccessToken(access);
          await setRefreshToken(refresh);
          setIsAuth(true);
        } catch {
          await clearTokens();
          setIsAuth(false);
        }
      }

      setIsAuthLoaded(true);
    };

    if (isFocused && !isAuthLoaded) {
      checkAuth();
    }
    return () => {
      setIsAuthLoaded(false);
    };
  }, [isFocused]);

  return {
    isAuth,
    login,
    logout,
    register,
  };
};
