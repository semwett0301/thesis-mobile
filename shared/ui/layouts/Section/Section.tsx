import { Flex } from "@ant-design/react-native";
import { FlexProps } from "@ant-design/react-native/es/flex/Flex";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "shared/theme";
import { CustomText } from "shared/ui/atoms";

interface Props {
  label?: string;
  last?: boolean;
  first?: boolean;
}

const containerStyles = (last: boolean) => ({
  borderBottomColor: theme.separator_color_base,
  borderBottomWidth: last ? StyleSheet.hairlineWidth : 0,
});

const contentContainerStyles = (first: boolean) => ({
  borderTopColor: theme.separator_color_base,
  borderTopWidth: first ? StyleSheet.hairlineWidth : 0,
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  contentContainer: {
    backgroundColor: theme.fill_base,
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

export const Section = ({
  children,
  first = false,
  label,
  last = false,
  onPress,
}: PropsWithChildren<FlexProps & Props>) => {
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
      <View
        style={{
          ...styles.contentContainer,
          ...contentContainerStyles(!first),
        }}
      >
        {children}
      </View>
    </Flex>
  );
};
