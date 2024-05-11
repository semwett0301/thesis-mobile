import { Button } from "@ant-design/react-native";
import { ButtonProps } from "@ant-design/react-native/es/button";
import { Icon } from "@rneui/base";
import React from "react";
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
