import { Toast } from "@ant-design/react-native";
import { StackActions } from "@react-navigation/native";
import { PropsWithChildren } from "react";

import { useAppNavigation } from "../../../../shared/router/hooks/useAppNavigation";
import { PAGES } from "../../../../shared/router/types/pages";
import { Page } from "../../../../shared/ui/layouts";
import { useRoute } from "../../hooks";

export const RouteExistenceChecker = ({ children }: PropsWithChildren) => {
  const { route } = useRoute();
  const navigation = useAppNavigation();

  if (!route) {
    Toast.fail("Маршрут не получен");
    navigation.dispatch(StackActions.replace(PAGES.REQUEST));
    return <Page />;
  }

  return children;
};
