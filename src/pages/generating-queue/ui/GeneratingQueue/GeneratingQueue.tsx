import { Flex } from "@ant-design/react-native";
import {
  RouteExistenceChecker,
  RouteGetButton,
  useRoute,
} from "entities/route";
import React from "react";
import { CustomText } from "shared/ui/atoms";

export const GeneratingQueue = () => {
  const { route } = useRoute();

  const generationText = () => {
    if (route) {
      switch (route.status) {
        case "CREATED":
          return `Ваш маршрут был создан и помещен в очередь. Размер очереди: ${route.queue_length}`;
        case "PENDING":
          return "Ваш маршрут создается";
        default:
          return "";
      }
    }

    return "";
  };

  return (
    <RouteExistenceChecker>
      <Flex>
        <CustomText>{generationText()}</CustomText>
        <Flex>
          <CustomText>Нажмите на кнопку, чтобы обновить информацию</CustomText>
          <RouteGetButton />
        </Flex>
      </Flex>
    </RouteExistenceChecker>
  );
};
