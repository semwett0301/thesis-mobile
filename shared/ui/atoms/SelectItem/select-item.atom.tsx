import { Flex } from "@ant-design/react-native";
import React, { PropsWithChildren } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Icon } from "react-native-elements";
import { theme } from "shared/theme";
import { CustomText } from "shared/ui/atoms/NavigationText";

const styles = StyleSheet.create({
  container: {
    height: 40,
  },
  content: {
    gap: 5,
  },
  label: {
    fontSize: theme.font_size_base,
  },
});

export const SelectItem = ({
  children,
  ...props
}: PropsWithChildren<TouchableOpacityProps>) => {
  return (
    <TouchableOpacity {...props}>
      <Flex style={styles.container} justify="center" align="center">
        <Flex style={styles.content}>
          <CustomText>{children}</CustomText>
          <Icon name="chevron-down" type="feather" size={9} />
        </Flex>
      </Flex>
    </TouchableOpacity>
  );
};
