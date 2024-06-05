import { Flex } from "@ant-design/react-native";
import {
  RouteExistenceChecker,
  RouteGetButton,
  useRoute,
} from "entities/route";
import React from "react";
import { ActivityIndicator } from "react-native";
import { theme } from "shared/theme";
import { CustomText } from "shared/ui/atoms";

import { styles } from "./styles";

export const GeneratingQueue = () => {
  const { route } = useRoute();

  const generationText = () => {
    if (route) {
      switch (route.status) {
        case "CREATED":
          return `Ваш маршрут был создан`;
        case "PENDING":
          return "Ваш маршрут создается...";
        default:
          return "";
      }
    }

    return "";
  };

  return (
    <RouteExistenceChecker>
      <Flex
        style={styles.container}
        direction="column"
        align="center"
        justify="between"
      >
        <Flex direction="column" align="center">
          <CustomText style={styles.info}>{generationText()}</CustomText>
          {route && route.status === "CREATED" && (
            <CustomText style={styles.count_info}>
              Номер в очереди: {route.queue_length}
            </CustomText>
          )}
        </Flex>
        <ActivityIndicator color={theme.brand_primary} size={64} />
        <Flex direction="column" style={styles.button_container}>
          <CustomText style={styles.button_info}>
            Нажмите на кнопку, чтобы обновить информацию
          </CustomText>
          <RouteGetButton />
        </Flex>
      </Flex>
    </RouteExistenceChecker>
  );
};
