import { Flex } from "@ant-design/react-native";
import React from "react";
import { RouteResponse } from "shared/types/api/response/RouteResponse";
import { CustomText } from "shared/ui/atoms";
import { toDay } from "shared/utils/date";

import { styles } from "./styles";

interface Props {
  route: RouteResponse;
}

export const RouteHistoryCard = ({ route }: Props) => {
  return (
    <Flex direction="column" align="start" style={styles.container}>
      <CustomText style={styles.dateText}>
        {toDay(route.start_date)}-{toDay(route.end_date)}
      </CustomText>
      <CustomText style={styles.cityText}>
        {route.start_city.title}-{route.end_city.title}
      </CustomText>
    </Flex>
  );
};
