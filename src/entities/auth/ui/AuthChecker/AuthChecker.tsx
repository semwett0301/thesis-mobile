import { PropsWithChildren, useContext, useEffect } from "react";
import {
  clearTokens,
  setAccessToken,
  setRefreshToken,
} from "shared/utils/auth";

import { getMe, postRefresh } from "../../api";
import { AuthContext } from "../../context";

export const AuthChecker = ({ children }: PropsWithChildren) => {
  const { setIsAuth } = useContext(AuthContext);

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
          console.log("ds");

          setIsAuth(false);
        }
      }
    };

    checkAuth();
  }, []);

  return children;
};
