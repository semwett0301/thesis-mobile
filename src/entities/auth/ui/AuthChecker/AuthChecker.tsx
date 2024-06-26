import { Toast } from "@ant-design/react-native";
import { useIsFocused } from "@react-navigation/core";
import { StackActions } from "@react-navigation/native";
import { PropsWithChildren, useContext, useEffect } from "react";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";

import { AuthContext } from "../../context";

export type AuthCheckerMode = "all" | "not-auth" | "auth";

interface Props {
  mode?: AuthCheckerMode;
}

export const AuthChecker = ({
  children,
  mode = "all",
}: PropsWithChildren<Props>) => {
  const { isAuth, isAuthLoaded } = useContext(AuthContext);
  const navigation = useAppNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isAuthLoaded && isFocused) {
      if ((mode === "auth" && !isAuth) || (mode === "not-auth" && isAuth)) {
        Toast.fail("Некорректный экран");
        navigation.dispatch(StackActions.replace(PAGES.REQUEST));
      }
    }
  }, [isFocused, isAuthLoaded]);

  return children;
};
