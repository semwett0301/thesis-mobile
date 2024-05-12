import { Flex } from "@ant-design/react-native";
import { Divider, Icon } from "@rneui/base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { theme } from "shared/theme";
import { CustomText } from "shared/ui/atoms";
import { toDay } from "shared/utils/date";

import { RoutePoint } from "../../../../shared/types/api/RoutePoint";
import { styles } from "./styles";

interface Props {
  data: RoutePoint;
}

export const RoutePointCard = ({ data }: Props) => {
  const navigation = useAppNavigation();

  const toRoutePointInfo = () => {
    navigation.navigate(PAGES.ROUTE_POINT_INFO, {
      id: data.id,
    });
  };

  return (
    <Flex direction="column" justify="start" style={styles.container}>
      <Flex align="center" justify="between" style={styles.subContainer}>
        <CustomText style={styles.date}>
          {toDay(new Date(data.date))}
        </CustomText>
        <TouchableOpacity onPress={toRoutePointInfo}>
          <Flex align="center" style={styles.linkContainer}>
            <CustomText style={styles.link}>Полная информация</CustomText>
            <Icon
              color={theme.fill_primary}
              name="right"
              type="antdesign"
              size={15}
            />
          </Flex>
        </TouchableOpacity>
      </Flex>
      <Divider style={styles.divider} />
      <Flex align="center" justify="between" style={styles.subContainer}>
        <CustomText style={styles.content}>{data.name}</CustomText>
        <CustomText style={styles.content}>
          {data.start_time} - {data.end_time}
        </CustomText>
      </Flex>
      <CustomText style={styles.description}>{data.description}</CustomText>
    </Flex>
  );
};
