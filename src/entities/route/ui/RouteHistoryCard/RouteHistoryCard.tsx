import { Flex } from "@ant-design/react-native";
import React from "react";
import { CustomText } from "shared/ui/atoms";
import { toDay } from "shared/utils/date";

import { Route } from "../../../../shared/types/api/Route";
import { styles } from "./styles";

interface Props {
  data: Route;
  onPress?: () => void;
}

export const RouteHistoryCard = ({ data, onPress }: Props) => {
  return (
    <Flex
      onPress={onPress}
      direction="column"
      align="start"
      style={styles.container}
    >
      <CustomText style={styles.dateText}>
        {toDay(new Date(data.content.start_date))}-
        {toDay(new Date(data.content.end_date))}
      </CustomText>
      <CustomText style={styles.cityText}>
        {data.content.start_city.name}-{data.content.end_city.name}
      </CustomText>
    </Flex>
  );
};
