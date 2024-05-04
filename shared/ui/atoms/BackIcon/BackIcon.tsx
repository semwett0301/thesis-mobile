import { Button } from "@ant-design/react-native";
import React from "react";
import { Icon } from "react-native-elements";

import { theme } from "../../../theme/theme";

export const BackIcon = () => {
  return (
    <Button
      type="ghost"
      styles={{
        ghostRaw: {
          borderWidth: 0,
        },
      }}
    >
      <Icon
        size={24}
        name="left"
        type="antdesign"
        color={theme.color_text_base}
      />
    </Button>
  );
};
