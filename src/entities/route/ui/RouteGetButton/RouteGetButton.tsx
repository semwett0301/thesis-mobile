import { Button, Flex, Toast } from "@ant-design/react-native";
import React from "react";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";

import { getRoute } from "../../api";
import { ROUTE_GET_PLACEHOLDER } from "../../config";
import { useRoute } from "../../hooks";
import { styles } from "./styles";

export const RouteGetButton = () => {
  const { route, setRoute } = useRoute();

  const navigation = useAppNavigation();

  const updateRoute = async () => {
    if (route) {
      const { data } = await getRoute(route?.id);
      setRoute(route);

      switch (data.status) {
        case "GENERATED":
          navigation.navigate(PAGES.ROUTE_INFO);
          break;
        case "FAILED":
          Toast.fail("При создании маршрута произошла ошибка");
          navigation.navigate(PAGES.REQUEST);
          break;
        default:
          break;
      }
    }
  };

  return (
    <Flex justify="center" align="center" style={styles.container}>
      <Button onPress={updateRoute} type="primary" style={styles.button}>
        {ROUTE_GET_PLACEHOLDER}
      </Button>
    </Flex>
  );
};
