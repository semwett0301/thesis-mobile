import { Flex } from "@ant-design/react-native";
import { Icon } from "@rneui/base";
import React from "react";
import { Accomodation } from "shared/types/api/Accomodation";
import { CustomText } from "shared/ui/atoms";

import { theme } from "../../../../shared/theme";
import { styles } from "./styles";

interface Props {
  data: Accomodation;
}

export const AccomodationCard = ({ data }: Props) => {
  return (
    <Flex direction="column" style={styles.container}>
      <Flex justify="between" align="center" style={styles.subContainer}>
        <CustomText style={styles.price}>{data.price}₽</CustomText>
        <CustomText style={styles.source}>По данным {data.source}</CustomText>
      </Flex>
      <Flex justify="between" align="center" style={styles.subContainer}>
        <Flex direction="column" align="start" style={styles.contentContainer}>
          <CustomText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.name}
          >
            {data.name}
          </CustomText>
          <CustomText style={styles.distance}>
            {data.center_distance}км от центра
          </CustomText>
        </Flex>
        <Icon name="right" type="antdesign" color={theme.field_color_base} />
      </Flex>
      <Flex align="center" style={styles.bottomContainer}>
        <Flex align="center" style={styles.ratingContainer}>
          <Icon name="star" type="antdesign" size={8} />
          <CustomText style={styles.rating}>{data.rating}</CustomText>
        </Flex>
        <CustomText style={styles.reviews}>
          {data.reviews_amount} отзывов
        </CustomText>
      </Flex>
    </Flex>
  );
};
