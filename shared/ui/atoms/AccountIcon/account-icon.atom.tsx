import React from "react";
import { Icon } from "react-native-elements";
import { theme } from "shared/theme";

export const AccountIcon = () => {
  return (
    <Icon
      size={24}
      name="user"
      type="antdesign"
      color={theme.color_text_base_inverse}
    />
  );
};
