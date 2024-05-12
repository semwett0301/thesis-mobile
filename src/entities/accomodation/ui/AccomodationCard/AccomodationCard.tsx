import { Flex } from "@ant-design/react-native";
import { Icon } from "@rneui/base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { CustomText } from "shared/ui/atoms";
import { openLink } from "shared/utils/link";

import { Accomodation } from "../../../../shared/types/api/Accomodation";
import { styles } from "./styles";

interface Props {
  data: Accomodation;
}

export const AccomodationCard = ({ data }: Props) => {
  return (
    <TouchableOpacity
      onPress={async () => {
        await openLink(data.link);
      }}
    >
      <Flex direction="column" style={styles.container}>
        <Flex justify="between" align="center" style={styles.subContainer}>
          <CustomText style={styles.price}>{data.price}₽</CustomText>
          <CustomText style={styles.source}>По данным {data.source}</CustomText>
        </Flex>
        <Flex justify="between" align="center" style={styles.subContainer}>
          <Flex direction="column" style={styles.contentContainer}>
            <CustomText style={styles.name}>{data.name}</CustomText>
            <CustomText style={styles.distance}>
              {data.center_distance}км от центра
            </CustomText>
          </Flex>
          <Icon name="right" type="antdesign" />
        </Flex>
        <Flex align="center" style={styles.bottomContainer}>
          <Flex align="center" style={styles.ratingContainer}>
            <Icon name="starfilled" type="antdesign" />
            <CustomText style={styles.rating}>{data.rating}</CustomText>
          </Flex>
          <CustomText style={styles.reviews}>
            {data.reviews_amount} отзывов
          </CustomText>
        </Flex>
      </Flex>
    </TouchableOpacity>
  );
};
