import { Flex, InputItem } from "@ant-design/react-native";
import { InputItemProps } from "@ant-design/react-native/es/input-item";
import { Icon } from "@rneui/base";
import React from "react";
import { theme } from "shared/theme";

export const SearchInput = ({ styles, ...props }: InputItemProps) => {
  return (
    <Flex
      align="center"
      style={{
        backgroundColor: theme.search_bar_fill_input,
        borderRadius: 5,
        gap: 5,
        paddingLeft: 10,
        width: "100%",
      }}
    >
      <Icon
        size={16}
        color={theme.input_color_icon}
        type="feather"
        name="search"
      />
      <InputItem
        styles={{
          container: {
            flex: 1,
            marginLeft: 0,
          },
          input: {
            fontSize: theme.button_font_size,
          },
          ...styles,
        }}
        {...props}
      />
    </Flex>
  );
};
