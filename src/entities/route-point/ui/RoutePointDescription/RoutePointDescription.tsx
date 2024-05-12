import { Flex } from "@ant-design/react-native";
import { Divider, Icon } from "@rneui/base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { CustomText } from "shared/ui/atoms";
import { openLink } from "shared/utils/link";

import { RoutePoint } from "../../../../shared/types/api/RoutePoint";
import { styles } from "./styles";

interface Props {
  data?: RoutePoint;
}

export const RoutePointDescription = ({ data }: Props) => {
  const openPointWebsite = async () => {
    await openLink(data?.url);
  };

  return (
    <Flex direction="column" style={styles.container}>
      <CustomText style={styles.title}>{data?.name ?? ""}</CustomText>
      <Divider style={styles.divider} />
      <CustomText style={styles.description}>
        {data?.description ?? ""}
      </CustomText>
      <TouchableOpacity onPress={openPointWebsite}>
        <Flex align="center" style={styles.linkContainer}>
          <CustomText style={styles.link}>Сайт места</CustomText>
          <Icon name="right" type="antdesign" size={15} />
        </Flex>
      </TouchableOpacity>
    </Flex>
  );
};
