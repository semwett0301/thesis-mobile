import { Flex } from "@ant-design/react-native";
import React, { PropsWithChildren } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import { theme } from "shared/theme";
import { CustomText } from "shared/ui/atoms/NavigationText";

interface Props {
  onPress?: (e: GestureResponderEvent) => void;
}

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

export const SelectItem = ({ children, onPress }: PropsWithChildren<Props>) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Flex style={styles.container} justify="center" align="center">
        <Flex style={styles.content}>
          <CustomText>{children}</CustomText>
          <Icon name="chevron-down" type="feather" size={9} />
        </Flex>
      </Flex>
    </TouchableOpacity>
  );
};
