import React from "react";
import { Icon, IconProps } from "react-native-elements";
import { theme } from "shared/theme";

export const AccountIcon = (props: Omit<IconProps, "name" | "type">) => {
  return (
    <Icon
      size={24}
      name="user"
      type="antdesign"
      color={theme.color_text_base_inverse}
      {...props}
    />
  );
};
