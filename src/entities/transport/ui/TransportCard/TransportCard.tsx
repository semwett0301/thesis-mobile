import { Flex } from "@ant-design/react-native";
import { Icon, Image } from "@rneui/base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { theme } from "shared/theme";
import { Transport } from "shared/types/api/Transport";
import { CustomText } from "shared/ui/atoms";
import { openLink } from "shared/utils/link";

import { styles } from "./styles";

interface Props {
  data: Transport;
}

export const TransportCard = ({ data }: Props) => {
  return (
    <TouchableOpacity
      onPress={async () => {
        await openLink(data.link);
      }}
    >
      <Flex style={styles.container}>
        <Flex align="center" style={styles.logoContainer}>
          <Image
            source={{
              height: 24,
              uri: data.logo_url,
              width: 24,
            }}
            style={styles.logo}
          />
        </Flex>
        <Flex
          direction="column"
          justify="between"
          style={styles.contentContainer}
        >
          <Flex style={styles.content} justify="between">
            <CustomText style={styles.price}>{data.price}₽</CustomText>
            <CustomText style={styles.source}>
              По данным {data.source}
            </CustomText>
          </Flex>
          <Flex style={styles.content} justify="between">
            <Flex align="start" direction="column" style={styles.textContainer}>
              <CustomText style={styles.text}>
                {data.start_city} - {data.end_city}
              </CustomText>
              <CustomText style={styles.text}>
                {data.start_time} - {data.end_time}
              </CustomText>
            </Flex>
            <Icon
              color={theme.field_color_base}
              name="right"
              type="antdesign"
            />
          </Flex>
          <CustomText style={styles.point}>
            {data.start_point} - {data.end_point}
          </CustomText>
        </Flex>
      </Flex>
    </TouchableOpacity>
  );
};
