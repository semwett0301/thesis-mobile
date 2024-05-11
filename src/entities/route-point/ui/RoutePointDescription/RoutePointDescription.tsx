import { Flex, Toast } from "@ant-design/react-native";
import { Divider, Icon } from "@rneui/base";
import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { RoutePointResponse } from "shared/types/api/response/RoutePointResponse";
import { CustomText } from "shared/ui/atoms";

import { styles } from "./styles";

interface Props {
  data?: RoutePointResponse;
}

export const RoutePointDescription = ({ data }: Props) => {
  const openUrl = async () => {
    if (data?.url) {
      const supported = await Linking.canOpenURL(data.url);

      if (supported) {
        await Linking.openURL(data.url);
      } else {
        Toast.fail(`Don't know how to open this URL: ${data.url}`);
      }
    }
  };

  return (
    <Flex direction="column" style={styles.container}>
      <CustomText style={styles.title}>{data?.name ?? ""}</CustomText>
      <Divider style={styles.divider} />
      <CustomText style={styles.description}>
        {data?.description ?? ""}
      </CustomText>
      <TouchableOpacity onPress={openUrl}>
        <Flex align="center" style={styles.linkContainer}>
          <CustomText style={styles.link}>Сайт места</CustomText>
          <Icon name="right" type="antdesign" size={15} />
        </Flex>
      </TouchableOpacity>
    </Flex>
  );
};
