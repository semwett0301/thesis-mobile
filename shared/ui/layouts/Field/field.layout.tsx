import { Flex } from "@ant-design/react-native";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "shared/theme";
import { CustomText } from "shared/ui/atoms";

interface Props {
  label?: string;
  last?: boolean;
  onPress?: () => void;
}

const containerStyles = (last: boolean) => ({
  borderBottomColor: theme.separator_color_base,
  borderBottomWidth: last ? StyleSheet.hairlineWidth : 0,
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  contentContainer: {
    backgroundColor: theme.fill_base,
    borderColor: theme.separator_color_base,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: "100%",
  },
  label: {
    color: theme.field_color_base,
    fontSize: theme.font_size_base,
    marginLeft: 12,
  },
  labelWrapper: {
    paddingBottom: 8,
    paddingTop: 8,
    width: "100%",
  },
});

const Field = ({
  children,
  label,
  last = false,
  onPress,
}: PropsWithChildren<Props>) => {
  return (
    <Flex
      style={{ ...styles.container, ...containerStyles(!last) }}
      direction="column"
      onPress={onPress}
    >
      {label && (
        <View style={styles.labelWrapper}>
          <CustomText style={styles.label}>{label}</CustomText>
        </View>
      )}
      <View style={styles.contentContainer}>{children}</View>
    </Flex>
  );
};

export default Field;
