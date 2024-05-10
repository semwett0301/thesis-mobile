import React, { PropsWithChildren, useMemo, useState } from "react";

import { AuthContext } from "../../context";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isAuthLoaded, setIsAuthLoaded] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      isAuth,
      isAuthLoaded,
      setIsAuth,
      setIsAuthLoaded,
    }),
    [isAuth, isAuthLoaded],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
