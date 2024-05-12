import { Flex } from "@ant-design/react-native";
import { Divider, Icon } from "@rneui/base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { theme } from "shared/theme";
import { RoutePoint } from "shared/types/api/RoutePoint";
import { CustomText } from "shared/ui/atoms";
import { openLink } from "shared/utils/link";

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
      <TouchableOpacity style={styles.linkContainer} onPress={openPointWebsite}>
        <CustomText style={styles.link}>
          Сайт места{" "}
          <Icon
            style={styles.iconLink}
            color={theme.field_color_base}
            name="right"
            type="antdesign"
            size={13}
          />
        </CustomText>
      </TouchableOpacity>
    </Flex>
  );
};
