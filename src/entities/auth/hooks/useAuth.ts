import { useCallback, useContext } from "react";
import { AuthRequest } from "shared/types/api/request/AuthRequest";
import {
  clearTokens,
  setAccessToken,
  setRefreshToken,
} from "shared/utils/auth";

import { postLogin, postLogout, postRegister } from "../api";
import { AuthContext } from "../context";

export const useAuth = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

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

  return {
    isAuth,
    login,
    logout,
    register,
  };
};
