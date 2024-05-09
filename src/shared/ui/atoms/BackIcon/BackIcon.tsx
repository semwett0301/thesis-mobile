import { Button } from "@ant-design/react-native";
import { ButtonProps } from "@ant-design/react-native/es/button";
import React from "react";
import { Icon } from "react-native-elements";
import { theme } from "shared/theme";

export const BackIcon = (props: ButtonProps) => {
  return (
    <Button
      type="ghost"
      styles={{
        ghostRaw: {
          borderWidth: 0,
        },
      }}
      {...props}
    >
      <Icon
        size={24}
        name="left"
        type="antdesign"
        color={theme.color_text_base_inverse}
      />
    </Button>
  );
};
