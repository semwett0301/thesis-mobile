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
        {toDay(new Date(data.start_date))}-{toDay(new Date(data.end_date))}
      </CustomText>
      <CustomText style={styles.cityText}>
        {data.start_city.title}-{data.end_city.title}
      </CustomText>
    </Flex>
  );
};
